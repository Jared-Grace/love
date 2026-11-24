import { app_shared_bible_word_overlay_articles_open_google } from "./app_shared_bible_word_overlay_articles_open_google.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { bible_word_article_offers_at_with_cited } from "./bible_word_article_offers_at_with_cited.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { app_shared_bible_verse_reference_reading } from "./app_shared_bible_verse_reference_reading.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_shared_bible_word_search_google_text_get } from "./app_shared_bible_word_search_google_text_get.mjs";
import { app_shared_bible_word_ask_llms_draw } from "./app_shared_bible_word_ask_llms_draw.mjs";
export async function app_shared_bible_word_overlay_articles_open({
  word,
  strong_url_loading,
  words,
  index,
  chapter_code,
  verse_number,
  language_code,
  verse_text,
}) {
  arguments_assert(arguments, 1);
  ("$plain language_code");
  ("★ AN ENGLISH WORD COMES FIRST WITH A WAY TO HEAR IT, said and said slowly, by ",
    fn_name("app_shared_bible_word_sound_buttons"),
    ". It is offered only when the verse is known to be English, because the recordings are of English words, and a Spanish or Cebuano word spelled like an English one would be said wrongly rather than not at all.");
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
  ("$plain strong_url_loading");
  ("the pending answer to BibleHub's page for the tapped word's Strong's number, which settles to the address or to null when the word has none that could be found. It is awaited beside the articles so neither download waits for the other; the address is opened and nothing here runs it.");
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
  ("The Google search asks what the word means in its own verse, handed the verse's words and reference; where the verse is not known it asks for the word as scripture uses it, the search a tapped word always made before. The AI sites are asked the same thing as a plain question, because a chat answers a sentence better than a search phrase.");
  let offers = await bible_word_article_offers_at_with_cited(
    words,
    index,
    chapter_code,
    verse_number,
  );
  let strong_url = await strong_url_loading;
  ("THE REFERENCE IS WRITTEN BEFORE THE CARD OPENS, not inside the Google button: a browser lets a tap open a new tab only while the tap is fresh, and a wait inside the button could spend that.");
  let known = null_not_is(chapter_code);
  let reference = null;
  if (known) {
    reference = await app_shared_bible_verse_reference_reading(
      chapter_code,
      verse_number,
    );
  }
  let { choices, recent_names, google } =
    app_shared_bible_word_overlay_articles_open_google(
      word,
      language_code,
      strong_url,
      offers,
      known,
      reference,
      verse_text,
    );
  let text = app_shared_bible_word_search_google_text_get();
  app_shared_button(choices, text, google);
  app_shared_bible_word_ask_llms_draw(choices, word, recent_names);
}
