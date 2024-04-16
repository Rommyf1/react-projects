import QuoteText from "./QuoteText";
import Author from "./Author";
import SocialMediaShareQuote from "./SocialMediaShareQuote";
import NewQuoteButton from "./NewQuoteButton";
import { socialMediaURLs } from "../constants/constants";

export default function QuoteBox({ quote, primaryColor, author, newQuote }) {
  return (
    <div id="quote-box" className="quote-box">
      <div id="quote-data" className="quote-data">
        <QuoteText quote={quote} primaryColor={primaryColor} />
        <Author author={author} primaryColor={primaryColor} />
      </div>
      <div id="quote-footer" className="quote-footer">
        <div id="social-media-section" className="social-media-section">
          <SocialMediaShareQuote
            primaryColor={primaryColor}
            socialMediaAction="tweet"
            socialMedia="twitter"
            socialMediaURL={`${socialMediaURLs.twitter}"${quote}" ${author}`}
            quote={quote}
            author={author}
          />
          <SocialMediaShareQuote
            primaryColor={primaryColor}
            socialMedia="tumblr"
            socialMediaURL={`${socialMediaURLs.tumblr}${author}&content=${quote}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}
          />
        </div>
        <NewQuoteButton newQuote={newQuote} primaryColor={primaryColor} />
      </div>
    </div>
  );
}
