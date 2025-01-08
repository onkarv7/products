import React from 'react'
import "./footer.css"

const Footer = () => {
  return (

       <footer className="footer">
  <div className="footer-top">
    <div className="newsletter">
      <h3>BE THE FIRST TO KNOW</h3>
      <p>Sign up for updates from mettà muse.</p> 
      <div className="newsletter-input">
        <input type="email" placeholder="Enter your e-mail..." />
        <button>SUBSCRIBE</button>
      </div>
    </div>
    <div className="contact-info">
      <h3>CONTACT US</h3>
      <p>+44 221 133 5360</p>
      <p>customercare@mettamuse.com</p>
      <h3>CURRENCY</h3>
      <p>
        <span className="flag">🇺🇸</span> USD
        <br />
        <small>
          Transactions will be completed in Euros and a currency reference is
          available on hover.
        </small>
      </p>
    </div>
  </div>
  <hr />
  <div className="footer-links">
    <div className="footer-column">
      <h3>mettā muse</h3>
      <ul>
        <li>About Us</li>
        <li>Stories</li>
        <li>Artisans</li>
        <li>Boutiques</li>
        <li>Contact Us</li>
        <li>EU Compliances Docs</li>
      </ul>
    </div>
    <div className="footer-column">
      <h3>QUICK LINKS</h3>
      <ul>
        <li>Orders & Shipping</li>
        <li>Join/Login as a Seller</li>
        <li>Payment & Pricing</li>
        <li>Return & Refunds</li>
        <li>FAQs</li>
        <li>Privacy Policy</li>
        <li>Terms & Conditions</li>
      </ul>
    </div>
    <div className="footer-column">
      <h3>FOLLOW US</h3>
      <div className="social-icons">
        <span>🌐</span>
        <span>🌐</span>
      </div>
      <h3>mettā muse ACCEPTS</h3>
      <div className="payment-icons">
        <span>GooglePay</span>
        <span>Visa</span>
        <span>Amex</span>
        <span>ApplePay</span>
      </div>
    </div>
  </div>
  <div className="footer-bottom">
    <p>Copyright © 2023 mettamuse. All rights reserved.</p>
  </div>
</footer>

  
  )
}

export default Footer