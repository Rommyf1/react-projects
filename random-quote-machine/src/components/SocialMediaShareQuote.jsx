import SocialMediaIcon from "../icons/SocialMediaIcon";

export default function SocialMediaShareQuote({
  primaryColor,
  socialMediaAction,
  socialMediaURL,
  socialMedia,
}) {
  return (
    <div id="social-media-wrapper" className="social-media-wrapper">
      <a
        style={{
          backgroundColor: primaryColor,
          transition: "all 1.5s",
        }}
        id={`${socialMediaAction}-quote`}
        className="social-media-button"
        href={socialMediaURL}
      >
        <SocialMediaIcon primaryColor="#fff" socialMedia={socialMedia} />
      </a>
    </div>
  );
}
