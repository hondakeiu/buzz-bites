import { smoothScrollTo } from "./utils/smoothScrollTo";

export const anchorLink = () => {
  const href = location.pathname.replaceAll("/buzz-bites", "");

  if (location.hash) {
    smoothScrollTo(location.hash);
  }

  const samePageLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>("a")).filter((el) => {
    try {
      const url = new URL(el.href);
      return url.pathname.replaceAll("/buzz-bites", "") === href;
    } catch (e) {
      return false;
    }
  });

  samePageLinks.forEach((anchorEl) => {
    const handleClick = (e: MouseEvent) => {
      e.preventDefault();
      const url = new URL(anchorEl.href);
      const scrollTarget = url.hash === "" ? 0 : url.hash;

      smoothScrollTo(scrollTarget);
    };
    anchorEl.addEventListener("click", handleClick);
  });
};
