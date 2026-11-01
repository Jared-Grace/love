import { html_clear } from "./html_clear.mjs";
import { app_shared_money_sections } from "./app_shared_money_sections.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { property_get } from "./property_get.mjs";
import { html_div_text_bold } from "./html_div_text_bold.mjs";
import { app_shared_color_blue_dark } from "./app_shared_color_blue_dark.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { app_shared_bible_reference_quote } from "./app_shared_bible_reference_quote.mjs";
import { each } from "./each.mjs";
import { html_div } from "./html_div.mjs";
import { html_text_links } from "./html_text_links.mjs";
export function app_shared_money_body(container) {
  "what this app does with money, without any framing, so a screen and an in-place panel can each host it and supply its own way back";
  html_clear(container);
  let sections = app_shared_money_sections();
  function lambda(section) {
    let card = app_shared_container_blue(container);
    let title = property_get(section, "title");
    ("a part's question stands out from what answers it - larger, and in the blue the cards are made of - so a reader scanning for their own question finds it before reading any answer");
    let heading = html_div_text_bold(card, title);
    let heading_color = app_shared_color_blue_dark();
    html_font_color_set(heading, heading_color);
    html_style_font_size(heading, "1.25em");
    ("the scriptures a part rests on come before what it says, so the reader meets the footing first and reads the promise standing on it");
    let verses = property_get(section, "verses");
    function lambda_verse(reference) {
      app_shared_bible_reference_quote(card, reference);
    }
    each(verses, lambda_verse);
    let lines = property_get(section, "lines");
    ("a line may hold a web address, and it is made a link rather than left for the reader to copy");
    function lambda_line(line) {
      let row = html_div(card);
      html_text_links(row, line);
    }
    each(lines, lambda_line);
  }
  each(sections, lambda);
}
