import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

type Option = {
  scrollTarget?: gsap.TweenTarget;
  offset?: string | null;
  duration?: number;
};

export const getOffsetHeight = (target: string) => {
  return document.querySelector(target)?.getBoundingClientRect().height ?? 0;
};

export async function smoothScrollTo(scrollTo: string | number | Element, { scrollTarget = window, offset = ".pageheader", duration = 0.5 }: Option = {}) {
  return gsap.to(scrollTarget, {
    scrollTo: {
      y: scrollTo,
      offsetY: offset ? getOffsetHeight(offset) : 0,
    },
    ease: "power2.out",
    duration,
  });
}
