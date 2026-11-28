import { app_shared_bible_word_ask_ai_text_get } from "./app_shared_bible_word_ask_ai_text_get.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { bible_word_article_site_chosen } from "./bible_word_article_site_chosen.mjs";
import { window_open_url_prefix_query } from "./window_open_url_prefix_query.mjs";
import { app_shared_bible_word_ask_llm_text_get } from "./app_shared_bible_word_ask_llm_text_get.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { llms_query_url_prefixes } from "./llms_query_url_prefixes.mjs";
import { list_recent_split_by_names } from "./list_recent_split_by_names.mjs";
import { app_shared_bible_word_offers_split_draw } from "./app_shared_bible_word_offers_split_draw.mjs";
export function app_shared_bible_word_ask_llms_draw(
  choices,
  question,
  recent_names,
) {
  "$plain question";
  "the question is the sentence each AI is asked, already written in the reader's language by the card; it is only sent.";
  "EVERY AI IS ASKED THE SAME QUESTION AS GOOGLE - the word, its verse's reference and the verse's words, where the verse is known - asked for by the human 2026-11-28, because a word can mean different things in different verses.";
  let text = app_shared_bible_word_ask_ai_text_get();
  let ask_label = html_div_text(choices, text);
  app_shared_text_deemphasized(ask_label);
  function llm_draw(llm) {
    function ask() {
      bible_word_article_site_chosen(llm.name);
      window_open_url_prefix_query(llm.prefix, question);
    }
    let label = app_shared_bible_word_ask_llm_text_get(llm.name);
    app_shared_button(choices, label, ask);
  }
  ("AN AI THE READER HAS ASKED BEFORE COMES FIRST TOO, under its own Recent and Others below Ask an AI - asked for by the human 2026-11-01. The AIs are kept in the same list of names as the article sites, because no AI is named like a site.");
  let llms = llms_query_url_prefixes();
  function llm_name(llm) {
    let name = llm.name;
    return name;
  }
  let llm_names = llms.map(llm_name);
  let llm_split = list_recent_split_by_names(llms, llm_names, recent_names);
  app_shared_bible_word_offers_split_draw(llm_split, llm_draw, choices);
}
