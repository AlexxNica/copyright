import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';

var Footer = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  render: function() {
    var shareLink = "/" + this.context.intl.locale + "/share";
    if (/^(en)(\b|$)/.test(this.context.intl.locale)) {
      shareLink = "http://share.mozilla.org/352/179362";
    }
    return (
      <footer>
        <div className="footer-contents">
          <div className="footer-links">
            <a href="https://www.mozilla.org/contact/" className="footer-link contact">
              {this.context.intl.formatMessage({id: 'contact_us'})}
            </a>
            <a href={shareLink} className="footer-link share">
              {this.context.intl.formatMessage({id: 'share_this_page'})}
            </a>
            <a href="https://twitter.com/Mozilla" className="footer-link follow">
              {this.context.intl.formatMessage({id: 'follow'})}
            </a>
            <a href="https://www.mozilla.org/about/legal/terms/mozilla/" className="footer-link legal">
              {this.context.intl.formatMessage({id: 'legal'})}
            </a>
            <a href="https://www.mozilla.org/privacy/websites/" className="footer-link privacy">
              {this.context.intl.formatMessage({id: 'privacy'})}
            </a>
            <a href="https://donate.mozilla.org/" className="footer-link donate">
              {this.context.intl.formatMessage({id: 'donate'})}
            </a>
          </div>
          <div className="org-info">
            <div className="logo-container">
              <a className="logo" href="https://mozilla.org"></a>
            </div>
            <span className="org-info-container">
              <FormattedHTMLMessage
                id='footer_description'
              />
            </span>
          </div>
        </div>
      </footer>
    );
  }
});

module.exports = Footer;
