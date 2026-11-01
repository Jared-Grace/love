import { gotquestions_word_articles_fetched } from "./gotquestions_word_articles_fetched.mjs";
import { gotquestions_article_url } from "./gotquestions_article_url.mjs";
export function bible_word_article_sites() {
  "The sites a tapped bible word can be opened on, each with the name a button calls it by, its table of names and articles, and the whole address of one of its articles given the file its table names.";
  "ANOTHER SITE IS ONE MORE ENTRY HERE: a table of rows of a name, what an article is about and the article's file, loaded only when a word is tapped, and the function that turns that file into the site's whole address.";
  "The table is handed over as the function that loads it, not as the table, so a reader who never taps a word never downloads any site's table.";
  let r = [
    {
      name: "GotQuestions.org",
      table: gotquestions_word_articles_fetched,
      url: gotquestions_article_url,
    },
  ];
  return r;
}
