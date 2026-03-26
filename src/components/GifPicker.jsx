import { useState, useEffect } from 'react';
import { Search, X, TrendingUp, Loader2 } from 'lucide-react';
import './GifPicker.css';

const GIPHY_API_KEY = 'qYl52xlnZyVb0oLhm9Tz8KlUn3wOlUsn';

function GifPicker({ onSelect, onClose }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchFocused, setSearchFocused] = useState(false);

  useEffect(() => {
    fetchGifs('trending');
  }, []);

  const fetchGifs = async (type, query = '') => {
    setLoading(true);
    try {
      let endpoint = type === 'trending' ? 'trending' : 'search';
      let url = `https://api.giphy.com/v1/gifs/${endpoint}?api_key=${GIPHY_API_KEY}&limit=20&rating=pg-13`;
      
      if (query) {
        url += `&q=${encodeURIComponent(query)}`;
      }
      
      const response = await fetch(url);
      const data = await response.json();
      
      if (data.data && Array.isArray(data.data)) {
        const formattedGifs = data.data.map(gif => ({
          id: gif.id,
          url: gif.images?.fixed_width?.url || gif.images?.original?.url,
          preview: gif.images?.fixed_width?.url || gif.images?.original?.url
        })).filter(g => g.url);
        setGifs(formattedGifs);
      }
    } catch (error) {
      console.error('Error fetching GIFs:', error);
      setGifs([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.length > 1) {
      fetchGifs('search', query);
    } else if (query.length === 0) {
      fetchGifs('trending');
    }
  };

  const handleSelect = (gifUrl) => {
    onSelect(gifUrl);
    onClose();
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
          inputMode={searchFocused ? 'search' : 'text'}
          placeholder={searchFocused ? "Search GIFs..." : "Tap to search"}
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setSearchFocused(false)}
          className="gif-search-input"
        />
      </div>

      <div className="gif-section">
        <div className="gif-section-title">
          <TrendingUp size={14} />
          {searchQuery ? 'Results' : 'Trending'}
        </div>
        
        {loading ? (
          <div className="gif-loading">
            <Loader2 size={32} className="spinner" />
            <span>Loading...</span>
          </div>
        ) : (
          <div className="gif-grid">
            {gifs.map((gif) => (
              <button
                key={gif.id}
                className="gif-item"
                onClick={() => handleSelect(gif.url)}
              >
                <img src={gif.preview} alt="GIF" loading="lazy" />
              </button>
            ))}
          </div>
        )}
      </div>
      
      <div className="gif-picker-footer">
        <span>GIPHY</span>
      </div>
    </div>
  );
}

export default GifPicker;
