import { useState, useRef, useEffect } from 'react';
import { sendChatMessage, getUserMessages } from '../services/userService';
import './AIPanel.css';

function AIPanel({ isOpen, onClose, currentUser }) {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [loadingHistory, setLoadingHistory] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  // Load conversation history when user changes or panel opens
  useEffect(() => {
    if (isOpen && currentUser) {
      loadHistory();
    }
  }, [isOpen, currentUser?.user_id]);

  const loadHistory = async () => {
    if (!currentUser) return;
    
    try {
      setLoadingHistory(true);
      const history = await getUserMessages(currentUser.user_id);
      
      if (history.length === 0) {
        // Show initial greeting for new conversations
        setMessages([{
          role: 'assistant',
          text: "Please tell me what's going on. I really want to hear how you're doing.",
        }]);
      } else {
        setMessages(history);
      }
    } catch (e) {
      console.error('Failed to load history:', e);
      setMessages([{
        role: 'assistant',
        text: "Please tell me what's going on. I really want to hear how you're doing.",
      }]);
    } finally {
      setLoadingHistory(false);
    }
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file');
      return;
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      alert('Image must be less than 10MB');
      return;
    }

    setSelectedImage(file);

    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const clearImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSend = async () => {
    const text = inputValue.trim();
    if ((!text && !selectedImage) || isThinking || !currentUser) return;

    // Build display message
    const userMessage = {
      role: 'user',
      text: text || '(image)',
      image: imagePreview,
    };

    // Add user message optimistically
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    const imageToSend = imagePreview;
    clearImage();
    setIsThinking(true);

    try {
      const response = await sendChatMessage(currentUser.user_id, text, imageToSend);
      setMessages((prev) => [...prev, { role: 'assistant', text: response }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', text: 'AI temporarily unavailable. Try again.' },
      ]);
    } finally {
      setIsThinking(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={`ai-panel ${isOpen ? 'ai-panel--open' : ''}`}>
      <div className="ai-panel__header">
        <div className="ai-panel__header-left">
          <span className="ai-panel__title">AI Panel</span>
          {currentUser && (
            <span className="ai-panel__user">{currentUser.name}</span>
          )}
        </div>
        <button className="ai-panel__close" onClick={onClose} aria-label="Close AI Panel">
          ✕
        </button>
      </div>

      <div className="ai-panel__body">
        {loadingHistory ? (
          <div className="ai-panel__message ai-panel__message--thinking">
            Loading conversation...
          </div>
        ) : (
          messages.map((msg, idx) => (
            <div
              key={idx}
              className={`ai-panel__message ai-panel__message--${msg.role}`}
            >
              {msg.image && (
                <img 
                  src={msg.image} 
                  alt="Uploaded" 
                  className="ai-panel__message-image"
                />
              )}
              {msg.text}
            </div>
          ))
        )}
        {isThinking && (
          <div className="ai-panel__message ai-panel__message--thinking">
            Thinking...
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Image preview */}
      {imagePreview && (
        <div className="ai-panel__image-preview">
          <img src={imagePreview} alt="Preview" />
          <button className="ai-panel__image-remove" onClick={clearImage}>✕</button>
        </div>
      )}

      <div className="ai-panel__input-area">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileSelect}
          accept="image/*"
          style={{ display: 'none' }}
        />
        <button
          className="ai-panel__upload"
          onClick={() => fileInputRef.current?.click()}
          disabled={isThinking || !currentUser}
          title="Upload image"
        >
          📷
        </button>
        <input
          type="text"
          className="ai-panel__input"
          placeholder="Tell me what's going on…"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isThinking || !currentUser}
        />
        <button
          className="ai-panel__send"
          onClick={handleSend}
          disabled={isThinking || (!inputValue.trim() && !selectedImage) || !currentUser}
        >
          Send
        </button>
      </div>

      <div className="ai-panel__disclaimer">
        Prototype AI — not yet personalized
      </div>
    </div>
  );
}

export default AIPanel;
