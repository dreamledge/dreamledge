import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/appStore';
import { userService } from '../services/userService';
import { User, Mail, Calendar, Edit2, Camera, Save, X, Check, AlertCircle } from 'lucide-react';
import './Profile.css';

function Profile() {
  const navigate = useNavigate();
  const { user, userProfile, setUserProfile } = useAuthStore();
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    username: '',
    bio: '',
    avatarUrl: '',
  });

  useEffect(() => {
    if (!user) {
      navigate('/');
      return;
    }
    
    setFormData({
      username: userProfile?.displayName || user?.displayName || '',
      bio: userProfile?.bio || '',
      avatarUrl: userProfile?.photoURL || user?.photoURL || '',
    });
  }, [user, userProfile, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file || !user) return;

    if (!file.type.startsWith('image/')) {
      setError('Please select an image file');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError('Image must be less than 5MB');
      return;
    }

    setIsUploading(true);
    setError('');

    try {
      const downloadURL = await userService.uploadProfilePicture(user.uid, file);
      setFormData(prev => ({ ...prev, avatarUrl: downloadURL }));
    } catch (err) {
      console.error('Upload error:', err);
      setError('Failed to upload image');
    } finally {
      setIsUploading(false);
    }
  };

  const handleSave = async () => {
    if (!formData.username.trim()) {
      setError('Username is required');
      return;
    }

    if (formData.username.length < 3) {
      setError('Username must be at least 3 characters');
      return;
    }

    if (!user) return;

    setIsSaving(true);
    setError('');

    try {
      await userService.updateUserProfile(user.uid, {
        displayName: formData.username,
        bio: formData.bio,
        photoURL: formData.avatarUrl,
      });

      const updatedProfile = {
        ...userProfile,
        displayName: formData.username,
        bio: formData.bio,
        photoURL: formData.avatarUrl,
      };
      
      setUserProfile(updatedProfile);
      setIsEditing(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (err) {
      console.error('Save error:', err);
      setError('Failed to save profile');
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      username: userProfile?.displayName || user?.displayName || '',
      bio: userProfile?.bio || '',
      avatarUrl: userProfile?.photoURL || user?.photoURL || '',
    });
    setIsEditing(false);
    setError('');
  };

  const getAvatarStyle = () => {
    if (formData.avatarUrl && formData.avatarUrl.startsWith('http')) {
      return { backgroundImage: `url(${formData.avatarUrl})`, backgroundSize: 'cover' };
    }
    return { background: formData.avatarUrl || 'var(--accent-red)' };
  };

  return (
    <div className="profile">
      <div className="profile-container">
        {showSuccess && (
          <div className="success-toast">
            <Check size={18} />
            Profile updated successfully!
          </div>
        )}

        <header className="profile-header">
          <div className="profile-avatar-section">
            <div 
              className="profile-avatar"
              style={getAvatarStyle()}
            >
              {!formData.avatarUrl?.startsWith('http') && formData.username ? formData.username.charAt(0).toUpperCase() : ''}
            </div>
            {isEditing && (
              <button 
                className="avatar-edit-btn" 
                onClick={handleAvatarClick}
                disabled={isUploading}
              >
                {isUploading ? (
                  <div className="loading-spinner small" />
                ) : (
                  <Camera size={18} />
                )}
              </button>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
          </div>

          <div className="profile-info">
            {isEditing ? (
              <div className="edit-form">
                <div className="input-group">
                  <label className="input-label">Username</label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="input"
                    placeholder="Enter username"
                    maxLength={20}
                  />
                </div>
                <div className="input-group">
                  <label className="input-label">Bio</label>
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    className="input bio-input"
                    placeholder="Tell us about yourself..."
                    maxLength={150}
                    rows={3}
                  />
                  <span className="char-count">{formData.bio.length}/150</span>
                </div>
                
                {error && (
                  <div className="error-message">
                    <AlertCircle size={16} />
                    {error}
                  </div>
                )}

                <div className="edit-actions">
                  <button className="btn btn-secondary" onClick={handleCancel} disabled={isSaving}>
                    <X size={18} />
                    Cancel
                  </button>
                  <button className="btn btn-primary" onClick={handleSave} disabled={isSaving}>
                    {isSaving ? (
                      <span className="saving">Saving...</span>
                    ) : (
                      <>
                        <Save size={18} />
                        Save
                      </>
                    )}
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="profile-name-row">
                  <h1 className="profile-name">{formData.username || 'Anonymous'}</h1>
                  <button className="edit-btn" onClick={() => setIsEditing(true)}>
                    <Edit2 size={16} />
                    Edit
                  </button>
                </div>
                <p className="profile-bio">{formData.bio || 'No bio yet'}</p>
                <div className="profile-meta">
                  <span className="meta-item">
                    <Mail size={14} />
                    {user?.email || 'No email'}
                  </span>
                </div>
              </>
            )}
          </div>
        </header>

        <section className="profile-stats">
          <div className="stat-card">
            <span className="stat-value">0</span>
            <span className="stat-label">Battles Won</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">0</span>
            <span className="stat-label">Battles Lost</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">0</span>
            <span className="stat-label">Total Votes</span>
          </div>
        </section>

        <section className="profile-section">
          <h2 className="section-title">Account Info</h2>
          <div className="info-list">
            <div className="info-item">
              <span className="info-label">User ID</span>
              <span className="info-value mono">{user?.uid?.slice(0, 12) || 'N/A'}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Account Type</span>
              <span className="info-value">Free</span>
            </div>
            <div className="info-item">
              <span className="info-label">Member Since</span>
              <span className="info-value">
                {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </span>
            </div>
          </div>
        </section>

        <div className="profile-note">
          <p>Changes to your username and profile picture update instantly across the app.</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
