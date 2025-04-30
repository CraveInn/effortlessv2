import React, { useState } from 'react';
import './ProStocks.css';
import ProjectModal from '../../molecules/ProjectModal/ProjectModal';
const cards = [
  {
    title: 'Basic Website Setup (5-7 sections)',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    badge: 'Core',
  },
  {
    title: 'Custom Logo and Brand Palatte',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    badge: 'Core',
  },
  {
    title: 'Custom Design (Tailored UI/UX)',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    badge: 'Core',
  },
  {
    title: 'Sheet Integration for Website Content',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    badge: 'Core',
  },
  {
    title: 'E-commerce Product Showcase (from Sheet)',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    badge: 'Core',
  },
  {
    title: 'Payment Integration (via Stripe/PayU)',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    badge: 'Core',
  },
  {
    title: 'Multiple Sheets Support (for big sites)',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    badge: 'Core',
  },
  {
    title: 'SEO Optimization (metadata, OG tags)',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    badge: 'Core',
  },
  {
    title: 'Website Traffic Analysis',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    badge: 'Core',
  },
  {
    title: 'Custom Domain',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    badge: 'Core',
  },
  {
    title: 'Social Media : 15 post/month',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    badge: 'Core',
  },
  {
    title: 'Meta Ads / month',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    badge: 'Core',
  },
  {
    title: 'Targeted Ads/ client',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    badge: 'Core',
  },
  {
    title: 'Additional Page',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    badge: 'Add-On',
  },
  {
    title: 'Form',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    badge: 'Add-On',
  },
  {
    title: 'Form integration with sheet',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    badge: 'Add-On',
  },
  {
    title: 'Monthly Maintenance (optional)',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    badge: 'Recurring',
  },
  {
    title: 'Priority Support',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    badge: 'Recurring',
  }
]
;

const ProStocks = () => {
  const [selectedTab, setSelectedTab] = useState('Latest');
  const [selectedCategory, setSelectedCategory] = useState('Art');
  const [search, setSearch] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [filteredCards, setFilteredCards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleSearch = () => {
    if (!search.trim()) 
      {
        setFilteredCards(cards);
        setHasSearched(true); 
        return;
      };
    
    const searchResults = cards.filter(card => 
      card.title.toLowerCase().includes(search.toLowerCase()) ||
      card.badge.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredCards(searchResults);
    setHasSearched(true);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="prostocks-outer-container">
      <section className="prostocks-section" id="prostocks">
        <div className="prostocks-container">
          <h2 className="prostocks-title">Have a specific requirement?</h2>
          <p className="prostocks-subtitle">Search for specific requirements and get the best results.</p>
          <div className="prostocks-controls">
            <input 
              className="prostocks-search" 
              type="text" 
              placeholder="Search design" 
              value={search} 
              onChange={e => setSearch(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button 
              className="prostocks-search-btn" 
              aria-label="Search"
              onClick={handleSearch}
            >
              🔍
            </button>
          </div>
          {hasSearched && (
            <div className="prostocks-cards">
              {filteredCards.length > 0 ? (
                filteredCards.map((card, idx) => (
                  <div className="prostocks-card" key={idx}>
                    <div className="prostocks-card-img-wrap">
                      <img src={card.img} alt={card.title} className="prostocks-card-img" />
                      <span className="prostocks-badge">{card.badge}</span>
                      {/* <span className="prostocks-visa">VISA</span> */}
                    </div>
                    <div className="prostocks-card-title">{card.title}</div>
                    <button className="prostocks-order-btn" onClick={() => setIsModalOpen(true)}>Enquire Now</button>
                  </div>
                ))
              ) : (
                <div className="no-results">
                  <p>No results found for "{search}"</p>
                  <p className="callback-text">Can't find what you're looking for? Let us help you!</p>
                  <button className="callback-btn" onClick={() => setIsModalOpen(true)}>Request a Callback</button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default ProStocks; 