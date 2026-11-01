import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { bible_word_article_sites } from "./bible_word_article_sites.mjs";
import { bible_word_articles_matching } from "./bible_word_articles_matching.mjs";
import { bible_word_articles_placed } from "./bible_word_articles_placed.mjs";
import { app_shared_overlay_card_closable } from "./app_shared_overlay_card_closable.mjs";
import { property_get } from "./property_get.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_div } from "./html_div.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { app_shared_biblehub_word_button } from "./app_shared_biblehub_word_button.mjs";
import { bible_word_article_site_chosen } from "./bible_word_article_site_chosen.mjs";
import { window_open } from "./window_open.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { greater_than } from "./greater_than.mjs";
import { app_shared_bible_word_sites_recent_text_get } from "./app_shared_bible_word_sites_recent_text_get.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { app_shared_bible_word_sites_others_text_get } from "./app_shared_bible_word_sites_others_text_get.mjs";
import { bible_word_article_sites_recent } from "./bible_word_article_sites_recent.mjs";
import { bible_word_article_offers_recent_split } from "./bible_word_article_offers_recent_split.mjs";
import { text_combine } from "./text_combine.mjs";
import { window_open_google_define } from "./window_open_google_define.mjs";
import { app_shared_bible_word_search_google_text_get } from "./app_shared_bible_word_search_google_text_get.mjs";
import { app_shared_bible_word_ask_ai_text_get } from "./app_shared_bible_word_ask_ai_text_get.mjs";
import { app_shared_bible_word_question_text_get } from "./app_shared_bible_word_question_text_get.mjs";
import { window_open_url_prefix_query } from "./window_open_url_prefix_query.mjs";
import { app_shared_bible_word_ask_llm_text_get } from "./app_shared_bible_word_ask_llm_text_get.mjs";
import { llms_query_url_prefixes } from "./llms_query_url_prefixes.mjs";
import { list_recent_split_by_names } from "./list_recent_split_by_names.mjs";
export async function app_shared_bible_word_overlay_articles_open(
  word,
  strong_url,
  words,
  index,
  chapter_code,
  verse_number,
) {
  arguments_assert(arguments, 6);
  ("$plain chapter_code");
  ("$plain verse_number");
  ("the code is a chapter's name, like JHN04, and the number counts the tapped verse within it; they say where the verse stands, and nothing in them runs.");
  ("A NAME SEVERAL PEOPLE SHARE OFFERS THE ONE THE PASSAGE IS ABOUT, by ",
    fn_name("bible_word_articles_placed"),
    " - Mary in Luke 10 opens Mary of Bethany, not Jesus' mother.");
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
    let matched = bible_word_articles_matching(table, words, index);
    let articles = bible_word_articles_placed(
      matched,
      chapter_code,
      verse_number,
    );
    for (let article of articles) {
      offers.push({
        site,
        article,
      });
    }
  }
  let overlay = app_shared_overlay_card_closable();
  let card = property_get(overlay, "body");
  let big = property_get(overlay, "title");
  html_text_set(big, word);
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
  function offer_draw(offer) {
    let site = offer.site;
    let about = offer.article[1];
    let file = offer.article[2];
    function read() {
      bible_word_article_site_chosen(site.name);
      let url = site.url(file);
      window_open(url);
    }
    ("the article's name is quoted, asked for by the human 2026-11-01, so a name of several words - Valley of Succoth - reads as one thing rather than running into the words around it");
    let label = text_combine_multiple(["Open “", about, "” on ", site.name]);
    app_shared_button(choices, label, read);
  }
  ("A SITE THE READER HAS CHOSEN BEFORE COMES FIRST, under Recent, the one chosen last at the top; the rest follow under Others - asked for by the human 2026-11-01, so a Catholic reader who opens the Catholic Encyclopedia sees it first every time after. Before any choice there is nothing recent, so the articles show in the sites' usual order with no labels at all.");
  function split_draw(offers_split, draw) {
    let recent_items = offers_split.recent;
    let other_items = offers_split.others;
    let labelled = greater_than(recent_items.length, 0);
    if (labelled) {
      let text3 = app_shared_bible_word_sites_recent_text_get();
      let recent_label = html_div_text(choices, text3);
      app_shared_text_deemphasized(recent_label);
      for (let item of recent_items) {
        draw(item);
      }
      if (greater_than(other_items.length, 0)) {
        let text4 = app_shared_bible_word_sites_others_text_get();
        let others_label = html_div_text(choices, text4);
        app_shared_text_deemphasized(others_label);
      }
    }
    for (let item of other_items) {
      draw(item);
    }
  }
  let recent_names = bible_word_article_sites_recent();
  let split = bible_word_article_offers_recent_split(offers, recent_names);
  split_draw(split, offer_draw);
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
  split_draw(llm_split, llm_draw);
}
