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
        <img
          alt={`icono de ${socialMedia}`}
          className="social-media-icon"
          src={`./${socialMedia}Icon.svg`}
        />
      </a>
    </div>
  );
}
