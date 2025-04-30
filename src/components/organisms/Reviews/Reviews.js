import React from 'react';
import './Reviews.css';

const reviews = [
  {
    name: 'Rohit Mehra',
    role: 'Founder | DigitGrow Solutions',
    avatar: 'https://i.pinimg.com/736x/a9/ec/1e/a9ec1e2e621a704be5c05b0cb8602579.jpg',
    text: 'The basic website setup was smooth and super professional. Got my site live within a week, and it looks just amazing for the price!'
  },
  {
    name: 'Sneha Verma',
    role: 'Marketing Manager | ShopNow India',
    avatar: 'https://i.pinimg.com/736x/a9/ec/1e/a9ec1e2e621a704be5c05b0cb8602579.jpg',
    text: 'Their e-commerce sheet integration helped us showcase over 100 products without any hassle. Simple and effective!'
  },
  {
    name: 'Amitabh Rao',
    role: 'Director | TechHive Pvt Ltd',
    avatar: 'https://i.pinimg.com/736x/a9/ec/1e/a9ec1e2e621a704be5c05b0cb8602579.jpg',
    text: 'Loved the custom branding! Our new logo and color palette gave our startup a professional touch. Worth every rupee.'
  },
  {
    name: 'Priya Nair',
    role: 'Social Media Lead | Witty Threads',
    avatar: 'https://i.pinimg.com/736x/a9/ec/1e/a9ec1e2e621a704be5c05b0cb8602579.jpg',
    text: 'Their 15 posts per month social media plan is a blessing. Fresh content every week without me worrying about it.'
  },
  {
    name: 'Nikhil Shah',
    role: 'Co-founder | EasyFundz',
    avatar: 'https://i.pinimg.com/736x/a9/ec/1e/a9ec1e2e621a704be5c05b0cb8602579.jpg',
    text: 'From payment integration to SEO – everything was handled with precision. My traffic shot up within the first month!'
  },
  {
    name: 'Ritika Chawla',
    role: 'Design Head | CraftsyKart',
    avatar: 'https://i.pinimg.com/736x/a9/ec/1e/a9ec1e2e621a704be5c05b0cb8602579.jpg',
    text: 'They made a custom-designed site that matched exactly what we had in mind. Their UI/UX work is spot on.'
  },
  {
    name: 'Harshil Patel',
    role: 'Growth Manager | UrbanBloom',
    avatar: 'https://i.pinimg.com/736x/a9/ec/1e/a9ec1e2e621a704be5c05b0cb8602579.jpg',
    text: 'Targeted ads for specific client groups really helped our conversions. Clear ROI improvement within days!'
  },
  {
    name: 'Ananya Desai',
    role: 'Owner | Ananya’s Kitchen',
    avatar: 'https://i.pinimg.com/736x/a9/ec/1e/a9ec1e2e621a704be5c05b0cb8602579.jpg',
    text: 'Monthly maintenance is a lifesaver! My site stays updated and secure without me lifting a finger.'
  },
  {
    name: 'Arjun Sethi',
    role: 'Digital Strategist | Sethi Media Works',
    avatar: 'https://i.pinimg.com/736x/a9/ec/1e/a9ec1e2e621a704be5c05b0cb8602579.jpg',
    text: 'Their bundle pricing made it super affordable to get everything – site, SEO, forms, and social. Full paisa vasool!'
  }
];


const Reviews = () => (
  <section className="reviews-section" id="reviews">
    <h2 className="reviews-title">Our Wall of Love <span role="img" aria-label="love">💛</span></h2>
    <p className="reviews-subtitle">Read what our community members are saying about Effortless ✨.</p>
    <div className="reviews-grid">
      {reviews.map((review, idx) => (
        <div className="review-card" key={idx}>
          <div className="review-header">
            <img src={review.avatar} alt={review.name} className="review-avatar" />
            <div>
              <div className="review-name">{review.name}</div>
              <div className="review-role">{review.role}</div>
            </div>
          </div>
          <div className="review-text">"{review.text}"</div>
        </div>
      ))}
    </div>
  </section>
);

export default Reviews; 