import React from 'react';

import './styles.css';

const STARTER = 'starter';
const PREMIUM = 'premium';
const ENTERPRISE = 'enterprise';

const Checkmark = () => (
  <svg className="pricing__checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"/>
  </svg>
);

const Question = () => (
  <svg className="pricing__help" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM10.59 8.59a1 1 0 1 1-1.42-1.42 4 4 0 1 1 5.66 5.66l-2.12 2.12a1 1 0 1 1-1.42-1.42l2.12-2.12A2 2 0 0 0 10.6 8.6zM12 18a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
  </svg>
);

const Pricing = props => {
  const onSelect = props.onSelect || function () {};
  return (
    <div className="pricing">
      <div className="pricing__grid">
        <div className="pricing__grid-item">
          <h2 className="pricing__title">Plans</h2>
          <div className="pricing__plan-sections">
            <div className="pricing__plan-section">
              <span className="pricing__plan-section-name">Website</span>
              <div className="pricing__plan-section-item">Domain management</div>
              <div className="pricing__plan-section-item">Hosting</div>
              <div className="pricing__plan-section-item">SEO</div>
              <div className="pricing__plan-section-item">Custom design</div>
              <div className="pricing__plan-section-item">Custom application</div>
            </div>
            <div className="pricing__plan-section">
              <span className="pricing__plan-section-name">Social Media</span>
              <div className="pricing__plan-section-item">Account management</div>
              <div className="pricing__plan-section-item">Content creation</div>
              <div className="pricing__plan-section-item">Media &amp; marketing</div>
            </div>
            <div className="pricing__plan-section">
              <span className="pricing__plan-section-name">Support</span>
              <div className="pricing__plan-section-item">Security updates</div>
              <div className="pricing__plan-section-item">Bug fixes</div>
              <div className="pricing__plan-section-item">Agile development</div>
            </div>
          </div>
        </div>
        <div className="pricing__grid-item">
          <div className="pricing__plan pricing--dblue">
            <div className="pricing__overview">
              <div title="Basic plan is best for small businesses and independent contractors" className="pricing__help-link">
                <Question />
              </div>
              <h3 className="pricing__plan-title">Basic</h3>
              <button
                onClick={() => onSelect(STARTER)}
                className="pricing__button">
                  Schedule a meeting
              </button>
            </div>
            <div>
              <div className="pricing__plan-contents-section">
                <div className="pricing__plan-contents-section-name">Website</div>
                <div className="pricing__plan-contents-item"><span>Domain management</span><Checkmark /></div>
                <div className="pricing__plan-contents-item"><span>Hosting</span><Checkmark /></div>
                <div className="pricing__plan-contents-item"><span>SEO</span><Checkmark /></div>
                <div className="pricing__plan-contents-item"></div>
                <div className="pricing__plan-contents-item"></div>
              </div>
              <div className="pricing__plan-contents-section">
                <div className="pricing__plan-contents-section-name">Social media</div>
                <div className="pricing__plan-contents-item"><span>Account management</span><Checkmark /></div>
                <div className="pricing__plan-contents-item"></div>
                <div className="pricing__plan-contents-item"></div>
              </div>
              <div className="pricing__plan-contents-section">
                <div className="pricing__plan-contents-section-name">Support</div>
                <div className="pricing__plan-contents-item"><span>Security updates</span><Checkmark /></div>
                <div className="pricing__plan-contents-item"></div>
                <div className="pricing__plan-contents-item"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="pricing__grid-item">
          <div className="pricing__plan pricing--purple">
            <div className="pricing__overview">
              <div title="Premium plan is best for small and medium sized businesses" className="pricing__help-link">
                <Question />
              </div>
              <h3 className="pricing__plan-title">Premium</h3>
              <button
                onClick={() => onSelect(PREMIUM)}
                className="pricing__button">
                  Schedule a meeting
              </button>
            </div>
            <div>
              <div className="pricing__plan-contents-section">
                <div className="pricing__plan-contents-section-name">Website</div>
                <div className="pricing__plan-contents-item"><span>Domain management</span><Checkmark /></div>
                <div className="pricing__plan-contents-item"><span>Hosting</span><Checkmark /></div>
                <div className="pricing__plan-contents-item"><span>SEO</span><Checkmark /></div>
                <div className="pricing__plan-contents-item"><span>Custom design</span><Checkmark /></div>
                <div className="pricing__plan-contents-item"></div>
              </div>
              <div className="pricing__plan-contents-section">
                <div className="pricing__plan-contents-section-name">Social media</div>
                <div className="pricing__plan-contents-item"><span>Account management</span><Checkmark /></div>
                <div className="pricing__plan-contents-item"></div>
                <div className="pricing__plan-contents-item"></div>
              </div>
              <div className="pricing__plan-contents-section">
                <div className="pricing__plan-contents-section-name">Support</div>
                <div className="pricing__plan-contents-item"><span>Security updates</span><Checkmark /></div>
                <div className="pricing__plan-contents-item"><span>Bug fixes</span><Checkmark /></div>
                <div className="pricing__plan-contents-item"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="pricing__grid-item">
          <div className="pricing__plan pricing--blue">
            <div className="pricing__overview">
              <div title="Enterprise plan is best for large businesses" className="pricing__help-link">
                <Question />
              </div>
              <h3 className="pricing__plan-title">Enterprise</h3>
              <button
                onClick={() => onSelect(ENTERPRISE)}
                className="pricing__button">
                  Schedule a meeting
              </button>
            </div>
            <div>
              <div className="pricing__plan-contents-section">
                <div className="pricing__plan-contents-section-name">Website</div>
                <div className="pricing__plan-contents-item"><span>Domain management</span><Checkmark /></div>
                <div className="pricing__plan-contents-item"><span>Hosting</span><Checkmark /></div>
                <div className="pricing__plan-contents-item"><span>SEO</span><Checkmark /></div>
                <div className="pricing__plan-contents-item"><span>Custom design</span><Checkmark /></div>
                <div className="pricing__plan-contents-item"><span>Custom application</span><Checkmark /></div>
              </div>
              <div className="pricing__plan-contents-section">
                <div className="pricing__plan-contents-section-name">Social media</div>
                <div className="pricing__plan-contents-item"><span>Account management</span><Checkmark /></div>
                <div className="pricing__plan-contents-item"><span>Content creation</span><Checkmark /></div>
                <div className="pricing__plan-contents-item"><span>Media &amp; marketing</span><Checkmark /></div>
              </div>
              <div className="pricing__plan-contents-section">
                <div className="pricing__plan-contents-section-name">Support</div>
                <div className="pricing__plan-contents-item"><span>Security updates</span><Checkmark /></div>
                <div className="pricing__plan-contents-item"><span>Bug fixes</span><Checkmark /></div>
                <div className="pricing__plan-contents-item"><span>Agile development</span><Checkmark /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
