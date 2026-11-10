import { text_combine } from "./text_combine.mjs";
export function church_fathers_article_url(file) {
  "The whole address of a page of the Church Fathers on NewAdvent.org, given the page's own file on that site.";
  let url = text_combine("https://www.newadvent.org/fathers/", file);
  return url;
}
