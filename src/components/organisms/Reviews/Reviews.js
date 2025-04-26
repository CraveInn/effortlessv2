import React from 'react';
import './Reviews.css';

const reviews = [
  {
    name: 'Matt Johnson',
    role: 'Head of Support | Relume',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'What I love about this is it allows anyone to add a touch of delight to any project - regardless of budget and without a lot of effort – so easy!'
  },
  {
    name: 'Josh Loh',
    role: 'Webflow Livestream Host, Senior Community Advocate',
    avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
    text: 'Get your micro delights here 👇 Also – beautiful one page design 👌'
  },
  {
    name: 'Waldo',
    role: 'CEO & Co-Founder @webprintsapp',
    avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
    text: 'I immediately purchased the lifetime access earlier, brilliant work. Congratulations on the launch!! ✨🚀'
  },
  {
    name: 'Vimalan',
    role: 'Founder @videsigns.uk — Webflow Agency',
    avatar: 'https://randomuser.me/api/portraits/men/35.jpg',
    text: 'Super proud of you Hafiz!! Great product, great site 🔥 Grabbed a lifetime plan for myself. 💪🎉'
  },
  {
    name: 'Josiah Dueñes',
    role: 'Webflow Expert',
    avatar: 'https://randomuser.me/api/portraits/men/36.jpg',
    text: 'This is an awesome tool I have been using and already the addition of the button collections is a big value add. Really clean animations that can help you get your development speed up in @webflow. Great job!'
  },
  {
    name: 'Ailín Tobin',
    role: "Ireland's 1st Webflow Expert",
    avatar: 'https://randomuser.me/api/portraits/men/37.jpg',
    text: "Well done! I'm adding this to my @webflow arsenal 👌"
  },
  {
    name: 'Félix Meens',
    role: 'Founder of Webflix Studio',
    avatar: 'https://randomuser.me/api/portraits/men/38.jpg',
    text: 'Adding microinteractions by @itshkmanzoor to my webflow libraries was a game changer.'
  },
  {
    name: 'Attila Vaszka',
    role: 'Webflow Developer & Designer',
    avatar: 'https://randomuser.me/api/portraits/men/39.jpg',
    text: 'Great product, great support, and a fantastic community!'
  },
  {
    name: 'Samuel Uebersax',
    role: 'Professional Webflow Expert',
    avatar: 'https://randomuser.me/api/portraits/men/40.jpg',
    text: 'Adding microinteractions by @itshkmanzoor to my webflow libraries was a game changer.'
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