import { useState } from 'react';
import { Search, X, TrendingUp, Smile } from 'lucide-react';
import './GifPicker.css';

const DEMO_GIFS = [
  'https://media.tenor.com/1a2b3c4d5e6f-AAABAAAAAAMAAAADAAAAAAEAAQAAAA==/tenor.gif',
  'https://media.tenor.com/images/tenor.gif',
];

const FALLBACK_GIFS = [
  'https://media1.tenor.com/m/anime-cute-happy-stars.gif',
  'https://media1.tenor.com/m/anime-cute-kawaii-wave.gif', 
  'https://media1.tenor.com/m/anime-girl-wink.gif',
  'https://media1.tenor.com/m/anime-excited.gif',
  'https://media1.tenor.com/m/anime-happy-laugh.gif',
  'https://media1.tenor.com/m/anime-blush.gif',
  'https://media1.tenor.com/m/anime-dance.gif',
  'https://media1.tenor.com/m/anime-smile.gif',
  'https://media1.tenor.com/m/anime-wave.gif',
  'https://media1.tenor.com/m/anime-thumbs-up.gif',
  'https://media1.tenor.com/m/anime-cool.gif',
  'https://media1.tenor.com/m/anime-heart-eyes.gif',
];

const EMOJI_GIFS = [
  'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🔥</text></svg>',
  'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">😂</text></svg>',
  'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">❤️</text></svg>',
  'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🔥</text></svg>',
  'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">😤</text></svg>',
  'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">💯</text></svg>',
  'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🎤</text></svg>',
  'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">⚡</text></svg>',
  'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🏆</text></svg>',
  'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">💀</text></svg>',
  'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">👏</text></svg>',
  'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🙌</text></svg>',
];

function GifPicker({ onSelect, onClose }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [gifs, setGifs] = useState(FALLBACK_GIFS);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.length > 2) {
      setGifs([...EMOJI_GIFS]);
    } else {
      setGifs(FALLBACK_GIFS);
    }
  };

  const handleSelect = (gifUrl) => {
    onSelect(gifUrl);
  };

  return (
    <div className="gif-picker">
      <div className="gif-picker-header">
        <h3>Choose a GIF</h3>
        <button className="gif-close" onClick={onClose}>
          <X size={18} />
        </button>
      </div>
      
      <div className="gif-search">
        <Search size={18} className="search-icon" />
        <input
          type="text"
          placeholder="Search GIFs..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="gif-search-input"
          autoFocus
        />
      </div>

      <div className="gif-section">
        <div className="gif-section-title">
          <TrendingUp size={14} />
          {searchQuery ? 'Emoji Reactions' : 'Trending'}
        </div>
        <div className="gif-grid">
          {gifs.map((gif, index) => (
            <button
              key={index}
              className="gif-item"
              onClick={() => handleSelect(gif)}
            >
              <img src={gif} alt={`GIF ${index + 1}`} />
            </button>
          ))}
        </div>
      </div>
      
      <div className="gif-picker-footer">
        <span>GIFs & Reactions</span>
      </div>
    </div>
  );
}

export default GifPicker;
