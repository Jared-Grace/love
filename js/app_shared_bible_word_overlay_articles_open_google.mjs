import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_word_overlay_articles_open_offer_draw } from "./app_shared_bible_word_overlay_articles_open_offer_draw.mjs";
import { property_get } from "./property_get.mjs";
import { bible_word_article_sites_recent } from "./bible_word_article_sites_recent.mjs";
import { bible_word_article_offers_recent_split } from "./bible_word_article_offers_recent_split.mjs";
import { app_shared_bible_word_offers_split_draw } from "./app_shared_bible_word_offers_split_draw.mjs";
import { not } from "./not.mjs";
import { text_combine } from "./text_combine.mjs";
import { window_open_google_define } from "./window_open_google_define.mjs";
import { app_shared_bible_word_google_question_text_get } from "./app_shared_bible_word_google_question_text_get.mjs";
import { window_open_url_prefix_query } from "./window_open_url_prefix_query.mjs";
export function app_shared_bible_word_overlay_articles_open_google(
  word,
  language_code,
  strong_url,
  offers,
  known,
  reference,
  verse_text,
) {
  arguments_assert(arguments, 7);
  let r = app_shared_bible_word_overlay_articles_open_offer_draw(
    word,
    language_code,
    strong_url,
  );
  let offer_draw = property_get(r, "offer_draw");
  let choices = property_get(r, "choices");
  ("A SITE THE READER HAS CHOSEN BEFORE COMES FIRST, under Recent, the one chosen last at the top; the rest follow under Others - asked for by the human 2026-11-01, so a Catholic reader who opens the Catholic Encyclopedia sees it first every time after. Before any choice there is nothing recent, so the articles show in the sites' usual order with no labels at all.");
  let recent_names = bible_word_article_sites_recent();
  let split = bible_word_article_offers_recent_split(offers, recent_names);
  app_shared_bible_word_offers_split_draw(split, offer_draw, choices);
  function google() {
    if (not(known)) {
      let search_term = text_combine(word, " (Bible)");
      window_open_google_define(search_term);
      return;
    }
    let question = app_shared_bible_word_google_question_text_get(
      word,
      reference,
      verse_text,
    );
    window_open_url_prefix_query("https://www.google.com/search?q=", question);
  }
  let r2 = {
    choices,
    recent_names,
    google,
  };
  return r2;
}
