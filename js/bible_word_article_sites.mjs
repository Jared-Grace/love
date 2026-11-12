import { gotquestions_word_articles_fetched } from "./gotquestions_word_articles_fetched.mjs";
import { gotquestions_article_url } from "./gotquestions_article_url.mjs";
import { easton_word_articles_fetched } from "./easton_word_articles_fetched.mjs";
import { easton_article_url } from "./easton_article_url.mjs";
import { smith_word_articles_fetched } from "./smith_word_articles_fetched.mjs";
import { smith_article_url } from "./smith_article_url.mjs";
import { catholic_encyclopedia_word_articles_fetched } from "./catholic_encyclopedia_word_articles_fetched.mjs";
import { catholic_encyclopedia_article_url } from "./catholic_encyclopedia_article_url.mjs";
import { church_fathers_word_articles_fetched } from "./church_fathers_word_articles_fetched.mjs";
import { church_fathers_article_url } from "./church_fathers_article_url.mjs";
import { catena_aurea_word_articles_fetched } from "./catena_aurea_word_articles_fetched.mjs";
import { catena_aurea_article_url } from "./catena_aurea_article_url.mjs";
import { catena_aurea_chapter_file } from "./catena_aurea_chapter_file.mjs";
import { matthew_henry_word_articles_fetched } from "./matthew_henry_word_articles_fetched.mjs";
import { matthew_henry_article_url } from "./matthew_henry_article_url.mjs";
import { matthew_henry_chapter_file } from "./matthew_henry_chapter_file.mjs";
import { orthodoxwiki_word_articles_fetched } from "./orthodoxwiki_word_articles_fetched.mjs";
import { orthodoxwiki_article_url } from "./orthodoxwiki_article_url.mjs";
export function bible_word_article_sites() {
  "The sites a tapped bible word can be opened on, each with the name a button calls it by, its table of names and articles, and the whole address of one of its articles given the file its table names.";
  "ANOTHER SITE IS ONE MORE ENTRY HERE: a table of rows of a name, what an article is about and the article's file, loaded only when a word is tapped, and the function that turns that file into the site's whole address.";
  "A SITE WHOSE PAGES EACH COMMENT ON A WHOLE CHAPTER also carries chapter, naming the page for a chapter code or null; its pages are offered for any word of that chapter.";
  "The table is handed over as the function that loads it, not as the table, so a reader who never taps a word never downloads any site's table.";
  let r = [
    {
      name: "GotQuestions.org",
      table: gotquestions_word_articles_fetched,
      url: gotquestions_article_url,
    },
    {
      name: "Easton's Bible Dictionary",
      table: easton_word_articles_fetched,
      url: easton_article_url,
    },
    {
      name: "Smith's Bible Dictionary",
      table: smith_word_articles_fetched,
      url: smith_article_url,
    },
    {
      name: "the Catholic Encyclopedia",
      table: catholic_encyclopedia_word_articles_fetched,
      url: catholic_encyclopedia_article_url,
    },
    {
      name: "the Church Fathers",
      table: church_fathers_word_articles_fetched,
      url: church_fathers_article_url,
    },
    {
      name: "the Catena Aurea",
      table: catena_aurea_word_articles_fetched,
      url: catena_aurea_article_url,
      chapter: catena_aurea_chapter_file,
    },
    {
      name: "Matthew Henry's Commentary",
      table: matthew_henry_word_articles_fetched,
      url: matthew_henry_article_url,
      chapter: matthew_henry_chapter_file,
    },
    {
      name: "OrthodoxWiki",
      table: orthodoxwiki_word_articles_fetched,
      url: orthodoxwiki_article_url,
    },
  ];
  return r;
}
