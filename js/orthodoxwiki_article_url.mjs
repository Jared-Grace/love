import { text_combine } from "./text_combine.mjs";
export function orthodoxwiki_article_url(file) {
  "The whole address of an article on OrthodoxWiki.org, given the article's own address on that site: its title with each space written as an underscore.";
  let url = text_combine("https://orthodoxwiki.org/", file);
  return url;
}
