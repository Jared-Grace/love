import { html_div } from "./html_div.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_style_set } from "./html_style_set.mjs";
("The red 'what it refuses' line shared by every rejection card (single-file and multi-");
("file): the expected refusal, stated in the tool's own terms.");
export function example_refusal_dom(parent, text) {
  let expect = html_div(parent);
  html_text_set(expect, text);
  html_style_set(expect, "color", "#d33");
  html_style_set(expect, "font-weight", "600");
  html_style_set(expect, "margin-top", "0.5rem");
  return expect;
}
