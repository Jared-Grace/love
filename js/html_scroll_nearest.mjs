import { html_scroll_generic } from "./html_scroll_generic.mjs";
export async function html_scroll_nearest(component) {
  "glide the page only as far as it takes for the component to be in view, and not at all when it already is";
  "Nearest rather than centred: a learner told to look somewhere is reading the sentence that told them, so a component already on screen is left exactly where their eye can find it, and one off screen is brought just inside the edge it was beyond.";
  let behavior = "smooth";
  let block = "nearest";
  await html_scroll_generic(component, behavior, block);
}
