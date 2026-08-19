import { song_image_prompt } from "./song_image_prompt.mjs";
import { equal } from "./equal.mjs";
import { html_div } from "./html_div.mjs";
import { html_button } from "./html_button.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { song_image_couplets } from "./song_image_couplets.mjs";
import { song_image_couplet_get } from "./song_image_couplet_get.mjs";
import { song_image_couplet_mark } from "./song_image_couplet_mark.mjs";
export function song_image_nav_column(parent, state, on_change) {
  "the left column: one numbered button per couplet, grouped by verse, with the couplet now open shown in the video's own words underneath; a couplet already decided is marked, so what is left to do is readable at a glance";
  let column = html_div(parent);
  html_style_set(column, "width", "250px");
  let grid = html_div(column);
  html_style_set(grid, "display", "grid");
  html_style_set(grid, "grid-template-columns", "repeat(9, 1fr)");
  html_style_set(grid, "gap", "3px");
  for (let couplet of song_image_couplets()) {
    let label = String(couplet.n) + song_image_couplet_mark(state, couplet.n);
    function lambda() {
      state.couplet = couplet.n;
      on_change();
    }
    let button = html_button(grid, label, lambda);
    html_style_set(button, "padding", "4px 0");
    html_style_set(button, "font-size", "11px");
    html_style_set(button, "cursor", "pointer");
    html_style_set(button, "border-radius", "4px");
    html_style_set(button, "border", "1px solid #333333");
    let open = equal(couplet.n, state.couplet);
    html_style_set(button, "background", open ? "#ffe994" : "#1a1a1a");
    html_style_set(button, "color", open ? "#000000" : "#bebebe");
  }
  let current = song_image_couplet_get(state.couplet);
  let words = html_div(column);
  html_style_set(words, "margin-top", "18px");
  html_style_set(words, "font-size", "22px");
  html_style_set(words, "line-height", "1.35");
  html_style_set(words, "color", "#ffe994");
  html_text_set(words, current.first + "<br>" + current.second);
  let symbol = html_div(column);
  html_style_set(symbol, "margin-top", "14px");
  html_style_set(symbol, "font-size", "14px");
  html_style_set(symbol, "color", "#bebebe");
  html_text_set(symbol, current.symbol);
  let reference = html_div(column);
  html_style_set(reference, "margin-top", "6px");
  html_style_set(reference, "font-size", "13px");
  html_style_set(reference, "color", "#676767");
  html_text_set(reference, current.ref);
  let prompt = html_div(column);
  html_style_set(prompt, "margin-top", "16px");
  html_style_set(prompt, "padding", "8px");
  html_style_set(prompt, "font-size", "11px");
  html_style_set(prompt, "line-height", "1.45");
  html_style_set(prompt, "color", "#7ec97e");
  html_style_set(prompt, "border", "1px solid #222222");
  html_style_set(prompt, "border-radius", "6px");
  html_style_set(prompt, "user-select", "all");
  let text = song_image_prompt(current);
  html_text_set(prompt, text);
}
