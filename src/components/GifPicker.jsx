import { useState } from 'react';
import { Search, X, TrendingUp, Smile, Heart, Flame, Music, Trophy, PartyPopper } from 'lucide-react';
import './GifPicker.css';

const POPULAR_REACTIONS = [
  { id: 1, emoji: '🔥', label: 'fire' },
  { id: 2, emoji: '😂', label: 'laugh' },
  { id: 3, emoji: '❤️', label: 'love' },
  { id: 4, emoji: '🤣', label: 'rofl' },
  { id: 5, emoji: '😤', label: 'mad' },
  { id: 6, emoji: '💯', label: '100' },
  { id: 7, emoji: '🎤', label: 'mic' },
  { id: 8, emoji: '⚡', label: 'lit' },
  { id: 9, emoji: '🏆', label: 'win' },
  { id: 10, emoji: '💀', label: 'dead' },
  { id: 11, emoji: '👏', label: 'clap' },
  { id: 12, emoji: '🙌', label: 'hands' },
  { id: 13, emoji: '😎', label: 'cool' },
  { id: 14, emoji: '🤔', label: 'hmm' },
  { id: 15, emoji: '👀', label: 'eyes' },
  { id: 16, emoji: '💪', label: 'strong' },
  { id: 17, emoji: '😱', label: 'shocked' },
  { id: 18, emoji: '🥳', label: 'party' },
];

function GifPicker({ onSelect, onClose }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);

  const filteredReactions = searchQuery.length > 1 
    ? POPULAR_REACTIONS.filter(r => r.label.includes(searchQuery.toLowerCase().slice(0, 3)))
    : POPULAR_REACTIONS;

  const handleSelect = (emoji) => {
    const svgDataUri = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">${emoji}</text></svg>`;
    onSelect(svgDataUri);
  };

  return (
    <div className="gif-picker">
      <div className="gif-picker-header">
        <h3>Reactions</h3>
        <button className="gif-close" onClick={onClose}>
          <X size={18} />
        </button>
      </div>
      
      <div className="gif-search">
        <Search size={18} className="search-icon" />
        <input
          type="text"
          inputMode={searchFocused ? 'text' : 'none'}
          placeholder={searchFocused ? "Search..." : "Tap to search"}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setSearchFocused(false)}
          className="gif-search-input"
        />
      </div>

      <div className="gif-section">
        <div className="gif-section-title">
          <TrendingUp size={14} />
          {searchQuery ? 'Results' : 'Popular'}
        </div>
        <div className="emoji-grid">
          {filteredReactions.map((reaction) => (
            <button
              key={reaction.id}
              className="emoji-item"
              onClick={() => handleSelect(reaction.emoji)}
            >
              <span className="emoji-large">{reaction.emoji}</span>
            </button>
          ))}
        </div>
      </div>
      
      <div className="gif-picker-footer">
        <span>Emoji Reactions</span>
      </div>
    </div>
  );
}

export default GifPicker;
