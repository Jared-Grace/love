import { text_combine } from "./text_combine.mjs";
export function gotquestions_article_url(file) {
  "The whole address of a GotQuestions.org article, given its own file on that site.";
  let url = text_combine("https://www.gotquestions.org/", file);
  return url;
}
