import { text_combine } from "./text_combine.mjs";
export function isbe_article_url(file) {
  "The whole address of an article of the International Standard Bible Encyclopedia on biblestudytools.com, given the article's own file on that site.";
  let url = text_combine(
    "https://www.biblestudytools.com/encyclopedias/isbe/",
    file,
  );
  return url;
}
