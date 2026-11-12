import { text_combine } from "./text_combine.mjs";
export function matthew_henry_article_url(file) {
  "The whole address of a page of Matthew Henry's Complete Commentary on biblestudytools.com, given the page's own file on that site.";
  let url = text_combine(
    "https://www.biblestudytools.com/commentaries/matthew-henry-complete/",
    file,
  );
  return url;
}
