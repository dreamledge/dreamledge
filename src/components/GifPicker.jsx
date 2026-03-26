import { useState } from 'react';
import { Search, X, TrendingUp } from 'lucide-react';
import './GifPicker.css';

const DEMO_GIFS = [
  'https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif',
  'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif',
  'https://media.giphy.com/media/l3q2XhfQ8oCkm1Ts4/giphy.gif',
  'https://media.giphy.com/media/3o7TKMt1VVNkHV2PaE/giphy.gif',
  'https://media.giphy.com/media/l0HlvtIPzPdt2usKs/giphy.gif',
  'https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif',
  'https://media.giphy.com/media/l0Iy69RBwtdmpepitw/giphy.gif',
  'https://media.giphy.com/media/xT9DPIBYf0pAviBLzO/giphy.gif',
];

const SEARCH_GIFS = [
  'https://media.giphy.com/media/l4FGuhL4U2WyjdkaY/giphy.gif',
  'https://media.giphy.com/media/3o7TKSjRrfIPjeiVyM/giphy.gif',
  'https://media.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif',
  'https://media.giphy.com/media/3oz8xIsloV7zOmt81G/giphy.gif',
  'https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif',
  'https://media.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif',
];

function GifPicker({ onSelect, onClose }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [gifs, setGifs] = useState(DEMO_GIFS);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.length > 2) {
      setGifs(SEARCH_GIFS);
    } else {
      setGifs(DEMO_GIFS);
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
          {searchQuery ? 'Search Results' : 'Trending'}
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
        <span>GIPHY</span>
      </div>
    </div>
  );
}

export default GifPicker;
