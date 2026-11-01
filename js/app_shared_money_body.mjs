import { html_clear } from "./html_clear.mjs";
import { app_shared_money_sections } from "./app_shared_money_sections.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { property_get } from "./property_get.mjs";
import { html_div_text_bold } from "./html_div_text_bold.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { each } from "./each.mjs";
import { app_shared_bible_reference_quote } from "./app_shared_bible_reference_quote.mjs";
export function app_shared_money_body(container) {
  "what this app does with money, without any framing, so a screen and an in-place panel can each host it and supply its own way back";
  html_clear(container);
  let sections = app_shared_money_sections();
  function lambda(section) {
    let card = app_shared_container_blue(container);
    let title = property_get(section, "title");
    html_div_text_bold(card, title);
    let lines = property_get(section, "lines");
    function lambda_line(line) {
      html_div_text(card, line);
    }
    each(lines, lambda_line);
    let verses = property_get(section, "verses");
    function lambda_verse(reference) {
      app_shared_bible_reference_quote(card, reference);
    }
    each(verses, lambda_verse);
  }
  each(sections, lambda);
}
