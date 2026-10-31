import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { html_overlay_card_fixed } from "./html_overlay_card_fixed.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_div } from "./html_div.mjs";
import { text_combine } from "./text_combine.mjs";
import { window_open_google_define } from "./window_open_google_define.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { llms_query_url_prefixes } from "./llms_query_url_prefixes.mjs";
import { window_open_url_prefix_query } from "./window_open_url_prefix_query.mjs";
export function app_shared_bible_word_overlay_open(word) {
  arguments_assert(arguments, 1);
  ("$plain word");
  ("the word is one tapped word of a verse with its punctuation already taken off; it is shown and looked up, and nothing in it runs.");
  ("One tapped word of the bible reader shown large over the page, with the ways to find out what it means: a Google search, or a question to one of the AI chat sites, each named.");
  ("THE WORD IS SHOWN FIRST, so the reader sees which word was tapped before choosing - a finger on a phone can land on the word beside the one it meant.");
  ("The card and the dimmed screen behind it are ",
    fn_name("html_overlay_card_fixed"),
    ", the same one the picture Bible opens over a tapped word. A tap anywhere closes it, a choice included, because the choice opens in a new tab and the reader comes back to the verse.");
  ("The Google search asks for the word as scripture uses it, the same search a tapped word made before this choice existed. The AI sites are asked the same thing as a plain question, because a chat answers a sentence better than a search phrase.");
  let card = html_overlay_card_fixed();
  let big = html_div_text(card, word);
  html_attribute_set(big, "dir", "auto");
  html_style_assign(big, {
    "font-size": "2em",
    "font-weight": "bold",
    "margin-bottom": "0.5em",
  });
  let choices = html_div(card);
  html_style_assign(choices, {
    display: "flex",
    "flex-direction": "column",
    gap: "0.5em",
  });
  function google() {
    let search_term = text_combine(word, " (Bible)");
    window_open_google_define(search_term);
  }
  app_shared_button(choices, "Search Google", google);
  let ask_label = html_div_text(choices, "Ask an AI:");
  app_shared_text_deemphasized(ask_label);
  let question = text_combine_multiple([
    'What does the word "',
    word,
    '" mean in the Bible?',
  ]);
  let llms = llms_query_url_prefixes();
  for (let llm of llms) {
    function ask() {
      window_open_url_prefix_query(llm.prefix, question);
    }
    let label = text_combine("Ask ", llm.name);
    app_shared_button(choices, label, ask);
  }
}
