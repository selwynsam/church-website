// app/components/SocialLink.js
import Icon from "./Icon";

const SocialLink = ({ platform, href = "#" }) => (
  <a
    href={href}
    className="bg-primary/10 text-primary hover:bg-primary/20 flex h-10 w-10 items-center justify-center rounded-full transition-colors"
  >
    <Icon
      name={`${platform}-${platform === "twitter" ? "x-" : ""}${
        platform === "facebook" ? "fill" : "line"
      }`}
      className="ri-lg"
    />
  </a>
);

export default SocialLink;
