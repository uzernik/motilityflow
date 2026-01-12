import { useState, useEffect } from 'react';
import { listUsers, createUser } from '../services/userService';
import './UserSelectModal.css';

function UserSelectModal({ onUserSelected }) {
  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setLoading(true);
      const userList = await listUsers();
      setUsers(userList);
      setError(null);
    } catch (e) {
      setError('Failed to load users');
    } finally {
      setLoading(false);
    }
  };

  const handleSelectUser = (user) => {
    onUserSelected(user);
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    const name = newName.trim();
    if (!name) return;

    try {
      setCreating(true);
      setError(null);
      const user = await createUser(name);
      onUserSelected(user);
    } catch (e) {
      setError(e.message);
      setCreating(false);
    }
  };

  return (
    <div className="user-modal-overlay">
      <div className="user-modal">
        <h2>Who are you?</h2>
        
        {loading && <p className="user-modal__loading">Loading...</p>}
        
        {error && <p className="user-modal__error">{error}</p>}
        
        {!loading && users.length > 0 && (
          <div className="user-modal__list">
            <p className="user-modal__label">Select your name:</p>
            {users.map((user) => (
              <button
                key={user.user_id}
                className="user-modal__user-btn"
                onClick={() => handleSelectUser(user)}
              >
                {user.name}
              </button>
            ))}
          </div>
        )}
        
        <div className="user-modal__divider">
          <span>or</span>
        </div>
        
        <form className="user-modal__form" onSubmit={handleCreateUser}>
          <p className="user-modal__label">Enter a new name:</p>
          <input
            type="text"
            className="user-modal__input"
            placeholder="Your name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            disabled={creating}
            autoFocus={users.length === 0}
          />
          <button
            type="submit"
            className="user-modal__submit"
            disabled={creating || !newName.trim()}
          >
            {creating ? 'Creating...' : 'Start'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserSelectModal;

