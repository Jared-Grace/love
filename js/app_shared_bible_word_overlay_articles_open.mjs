import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { bible_word_article_offers_at } from "./bible_word_article_offers_at.mjs";
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
import { bible_word_article_sites_recent } from "./bible_word_article_sites_recent.mjs";
import { bible_word_article_offers_recent_split } from "./bible_word_article_offers_recent_split.mjs";
import { app_shared_bible_word_offers_split_draw } from "./app_shared_bible_word_offers_split_draw.mjs";
import { text_combine } from "./text_combine.mjs";
import { window_open_google_define } from "./window_open_google_define.mjs";
import { app_shared_bible_word_search_google_text_get } from "./app_shared_bible_word_search_google_text_get.mjs";
import { app_shared_bible_word_ask_llms_draw } from "./app_shared_bible_word_ask_llms_draw.mjs";
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
  let offers = await bible_word_article_offers_at(
    words,
    index,
    chapter_code,
    verse_number,
  );
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
  let recent_names = bible_word_article_sites_recent();
  let split = bible_word_article_offers_recent_split(offers, recent_names);
  app_shared_bible_word_offers_split_draw(split, offer_draw, choices);
  function google() {
    let search_term = text_combine(word, " (Bible)");
    window_open_google_define(search_term);
  }
  let text = app_shared_bible_word_search_google_text_get();
  app_shared_button(choices, text, google);
  app_shared_bible_word_ask_llms_draw(choices, word, recent_names);
}
