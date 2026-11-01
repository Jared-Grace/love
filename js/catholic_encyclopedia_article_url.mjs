import { text_combine } from "./text_combine.mjs";
export function catholic_encyclopedia_article_url(file) {
  "The whole address of an article of the Catholic Encyclopedia on NewAdvent.org, given the article's own file on that site.";
  let url = text_combine("https://www.newadvent.org/cathen/", file);
  return url;
}
