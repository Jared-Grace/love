import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { property_get } from "./property_get.mjs";
import { html_div_text_bold } from "./html_div_text_bold.mjs";
import { app_shared_text_quiet } from "./app_shared_text_quiet.mjs";
import { each } from "./each.mjs";
import { ebible_licence_words } from "./ebible_licence_words.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { ebible_bible_folder_changes } from "./ebible_bible_folder_changes.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { html_div } from "./html_div.mjs";
import { html_a_href_text } from "./html_a_href_text.mjs";
export function app_shared_bible_licence_card(parent, credit) {
  "One translation credited the way the people who gave it away asked to be credited - what it is called, what it is, who it belongs to, on what terms, where it came from, and whether this app has altered it.";
  "The middle lines are the copyright holder's own words, carried across whole rather than retold, because that block is the thing the licence asks to travel with the text. Retelling it would be a summary of a legal notice, which is not the notice.";
  "A bible this app repairs says so on its own card, under the name of the publisher whose text it is. That is where the notice belongs and nowhere else: the publisher's registered name is printed here, and a reader looking at that name is entitled to know the words underneath it are no longer only that publisher's. The licence asks for exactly this, in two parts - the changes listed where people can see them, and the change indicated so that the original licensor is not read as endorsing it.";
  "Which bible was altered is asked rather than carried in the credit. The answer comes from the same ruling table the repair itself runs from, so the notice cannot come to describe changes that are no longer made, or stay silent about changes that now are.";
  "Every other card is unchanged, because a change notice under a text nobody touched would say something false about somebody else's scripture.";
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
  let bible_folder = property_get(credit, "bible_folder");
  let changes = ebible_bible_folder_changes(bible_folder);
  let altered = null_not_is(changes);
  if (altered) {
    let changed_lines = property_get(changes, "lines");
    function changed_lambda(changed_line) {
      html_div_text(card, changed_line);
    }
    each(changed_lines, changed_lambda);
    let changes_url = property_get(changes, "url");
    let changes_row = html_div(card);
    html_a_href_text(changes_row, changes_url, changes_url);
  }
  let url = property_get(credit, "url");
  let row = html_div(card);
  html_a_href_text(row, url, url);
}
