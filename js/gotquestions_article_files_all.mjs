import { equal } from "./equal.mjs";
import { http_text_or_null } from "./http_text_or_null.mjs";
export async function gotquestions_article_files_all() {
  "Every English article of GotQuestions.org, each as its own file on that site, read off the site's own sitemap.";
  "ONLY A FILE AT THE TOP OF THE SITE IS AN ENGLISH ARTICLE: the other languages each live in a folder of their own, and each has a sitemap of its own that this does not read.";
  let text = await http_text_or_null(
    "https://www.gotquestions.org/sitemap.xml",
  );
  if (equal(text, null)) {
    throw new Error("GotQuestions.org did not answer for its sitemap");
  }
  let r = [];
  for (let match of text.matchAll(
    /<loc>https:\/\/www\.gotquestions\.org\/([^\/<]+\.html)<\/loc>/g,
  )) {
    let file = match[1];
    let left = r.includes(file);
    if (equal(left, false)) {
      r.push(file);
    }
  }
  return r;
}
