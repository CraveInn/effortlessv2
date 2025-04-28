import React, { useState } from 'react';
import './ProStocks.css';

const categories = ['Art', 'Nature', 'Abstract'];
const tabs = ['Latest', 'Popular', 'Premium'];
const cards = [
  {
    title: 'Hypocritical Face',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    badge: 'Art',
  },
  {
    title: 'Monster Gravity',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    badge: 'Premium',
  },
  {
    title: 'Hypocritical Face',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    badge: 'Abstract',
  },
    {
    title: 'Hypocritical Face',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    badge: 'Art',
  },
  {
    title: 'Monster Gravity',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    badge: 'Premium',
  },
  {
    title: 'Hypocritical Face',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    badge: 'Abstract',
  },
    {
    title: 'Hypocritical Face',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    badge: 'Art',
  },
  {
    title: 'Monster Gravity',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    badge: 'Premium',
  },
  {
    title: 'Hypocritical Face',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    badge: 'Abstract',
  },
];

const ProStocks = () => {
  const [selectedTab, setSelectedTab] = useState('Latest');
  const [selectedCategory, setSelectedCategory] = useState('Art');
  const [search, setSearch] = useState('');

  return (
    <div className="prostocks-outer-container">
    <section className="prostocks-section" id="prostocks">
      <div className="prostocks-container">
        <h2 className="prostocks-title">POPULAR PRO STOCKS</h2>
        <p className="prostocks-subtitle">Choose a design according to your preferred category then order as soon as possible.</p>
        <div className="prostocks-controls">
          <select className="prostocks-select" value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
          <input className="prostocks-search" type="text" placeholder="Search design" value={search} onChange={e => setSearch(e.target.value)} />
          <button className="prostocks-search-btn" aria-label="Search">🔍</button>
        </div>
        <div className="prostocks-tabs">
          {tabs.map(tab => (
            <button
              key={tab}
              className={`prostocks-tab${selectedTab === tab ? ' active' : ''}`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="prostocks-cards">
          {cards.map((card, idx) => (
            <div className="prostocks-card" key={idx}>
              <div className="prostocks-card-img-wrap">
                <img src={card.img} alt={card.title} className="prostocks-card-img" />
                <span className="prostocks-badge">{card.badge}</span>
                <span className="prostocks-visa">VISA</span>
              </div>
              <div className="prostocks-card-title">{card.title}</div>
              <button className="prostocks-order-btn">Order Now</button>
            </div>
          ))}
        </div>
        <button className="prostocks-next-btn">Next Page →</button>
      </div>
    </section>
    </div>
  );
};

export default ProStocks; 