import { text_combine } from "./text_combine.mjs";
export function catena_aurea_article_url(file) {
  "The whole address of a chapter of Aquinas's Catena Aurea on ecatholic2000.com, given the chapter's own file on that site.";
  let url = text_combine("https://www.ecatholic2000.com/catena/", file);
  return url;
}
