import { html_font_color_set } from "./html_font_color_set.mjs";
export function html_font_color_set_red(component) {
  ("Red, as a plain colour and nothing more.");
  ("The apps' warning colour is the same red today, and the report of repeated");
  ("spellings names the two together. They stay apart on purpose: this layer knows");
  ("about colours and the layer above knows what a warning should look like, so");
  ("reaching up from here for the app's token would invert which of them is");
  ("allowed to depend on the other - and would make red follow a decision about");
  ("warnings that has nothing to do with red.");
  html_font_color_set(component, "rgb(197, 0, 0)");
}
