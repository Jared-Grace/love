import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { bible_word_article_sites } from "./bible_word_article_sites.mjs";
import { bible_word_articles_matching } from "./bible_word_articles_matching.mjs";
import { app_shared_overlay_card_closable } from "./app_shared_overlay_card_closable.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_div } from "./html_div.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { app_shared_biblehub_word_button } from "./app_shared_biblehub_word_button.mjs";
import { window_open } from "./window_open.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { text_combine } from "./text_combine.mjs";
import { window_open_google_define } from "./window_open_google_define.mjs";
import { app_shared_bible_word_search_google_text_get } from "./app_shared_bible_word_search_google_text_get.mjs";
import { app_shared_bible_word_ask_ai_text_get } from "./app_shared_bible_word_ask_ai_text_get.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { app_shared_bible_word_question_text_get } from "./app_shared_bible_word_question_text_get.mjs";
import { llms_query_url_prefixes } from "./llms_query_url_prefixes.mjs";
import { window_open_url_prefix_query } from "./window_open_url_prefix_query.mjs";
import { app_shared_bible_word_ask_llm_text_get } from "./app_shared_bible_word_ask_llm_text_get.mjs";
export async function app_shared_bible_word_overlay_articles_open(
  word,
  strong_url,
  words,
  index,
) {
  arguments_assert(arguments, 4);
  ("$plain words");
  ("$plain index");
  ("the words are the bare words of the tapped word's verse in order, and the index says which of them was tapped; they are looked up and nothing in them runs.");
  ("A WORD INSIDE A NAME OF SEVERAL WORDS OFFERS THAT NAME, by ",
    fn_name("bible_word_articles_matching"),
    " - a tap on of in Valley of Succoth offers the article on Valley of Succoth, and each button names what it opens.");
  ("EVERY SITE IN ",
    fn_name("bible_word_article_sites"),
    " IS ASKED, so another site's articles appear here once it is added there.");
  ("$plain strong_url");
  ("the address is BibleHub's page for the tapped word's Strong's number, or null when the word has none that could be found. It is opened and nothing here runs it.");
  ("A HEBREW OR GREEK WORD WITH A NUMBER IS OFFERED ON BIBLEHUB FIRST, asked for by the human, by ",
    fn_name("app_shared_biblehub_word_button"),
    " - the same button the picture Bible's card draws. It comes first because it is the one choice about this word in this verse rather than about any word spelled the same.");
  ("$plain word");
  ("the word is one tapped word of a verse with its punctuation already taken off; it is shown and looked up, and nothing in it runs.");
  ("One tapped word of the bible reader shown large over the page, with the ways to find out what it means: an article about it when one is known, a Google search, or a question to one of the AI chat sites, each named.");
  ("THE WORD IS SHOWN FIRST, so the reader sees which word was tapped before choosing - a finger on a phone can land on the word beside the one it meant.");
  ("The card stays open after a choice, by ",
    fn_name("app_shared_overlay_card_closable"),
    ": each choice opens in a new tab, so a reader can open GotQuestions, then Easton's, then another, one after another. It closes by its X, its Close button, or a tap outside it. A tap anywhere used to close it, a choice included; changed at the human's asking 2026-11-01.");
  ("THE ARTICLES ARE FETCHED BEFORE THE CARD IS DRAWN. The table of articles is loaded only when a word is tapped, so a reader who never taps one never downloads it; waiting for it first means the buttons below never jump down when it arrives.");
  ("A name can mean more than one person - John is the Baptist and the apostle - so every article it names is offered, each saying who it is about.");
  ("The Google search asks for the word as scripture uses it, the same search a tapped word made before this choice existed. The AI sites are asked the same thing as a plain question, because a chat answers a sentence better than a search phrase.");
  let sites = bible_word_article_sites();
  let offers = [];
  for (let site of sites) {
    let table = await site.table();
    let articles = bible_word_articles_matching(table, words, index);
    for (let article of articles) {
      offers.push({
        site,
        article,
      });
    }
  }
  let card = app_shared_overlay_card_closable();
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
  let b = null_is(strong_url);
  if (not(b)) {
    app_shared_biblehub_word_button(choices, strong_url);
  }
  for (let offer of offers) {
    let site = offer.site;
    let about = offer.article[1];
    let file = offer.article[2];
    function read() {
      let url = site.url(file);
      window_open(url);
    }
    let label = text_combine_multiple(["Open ", about, " on ", site.name]);
    app_shared_button(choices, label, read);
  }
  function google() {
    let search_term = text_combine(word, " (Bible)");
    window_open_google_define(search_term);
  }
  let text = app_shared_bible_word_search_google_text_get();
  app_shared_button(choices, text, google);
  let text2 = app_shared_bible_word_ask_ai_text_get();
  let ask_label = html_div_text(choices, text2);
  app_shared_text_deemphasized(ask_label);
  let question = app_shared_bible_word_question_text_get(word);
  let llms = llms_query_url_prefixes();
  for (let llm of llms) {
    function ask() {
      window_open_url_prefix_query(llm.prefix, question);
    }
    let label = app_shared_bible_word_ask_llm_text_get(llm.name);
    app_shared_button(choices, label, ask);
  }
}
