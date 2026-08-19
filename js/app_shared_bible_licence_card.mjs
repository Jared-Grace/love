import { app_shared_text_quiet } from "./app_shared_text_quiet.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { each } from "./each.mjs";
import { ebible_licence_words } from "./ebible_licence_words.mjs";
import { html_a_href_text } from "./html_a_href_text.mjs";
import { html_div } from "./html_div.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_div_text_bold } from "./html_div_text_bold.mjs";
import { property_get } from "./property_get.mjs";
export function app_shared_bible_licence_card(parent, credit) {
  "One translation credited the way the people who gave it away asked to be credited - what it is called, what it is, who it belongs to, on what terms, and where it came from.";
  "The middle lines are the copyright holder's own words, carried across whole rather than retold, because that block is the thing the licence asks to travel with the text. Retelling it would be a summary of a legal notice, which is not the notice.";
  let card = app_shared_container_blue(parent);
  let name = property_get(credit, "name");
  html_div_text_bold(card, name);
  let description = property_get(credit, "description");
  app_shared_text_quiet(card, description);
  let lines = property_get(credit, "credit");
  function lambda(line) {
    app_shared_text_quiet(card, line);
  }
  each(lines, lambda);
  let licence = property_get(credit, "licence");
  let words = ebible_licence_words(licence);
  html_div_text(card, words);
  let url = property_get(credit, "url");
  let row = html_div(card);
  html_a_href_text(row, url, url);
}
