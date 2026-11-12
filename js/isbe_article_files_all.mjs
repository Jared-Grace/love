import { isbe_article_url } from "./isbe_article_url.mjs";
import { http_text_or_null } from "./http_text_or_null.mjs";
import { equal } from "./equal.mjs";
import { sleep } from "./sleep.mjs";
export async function isbe_article_files_all() {
  "Every article of the International Standard Bible Encyclopedia on biblestudytools.com, each as its own file on that site, like aaron.html, read off the site's index page for each letter.";
  "ONE PAGE PER LETTER LISTS THE WHOLE LETTER: checked 2026-11-12, the page for b lists 743 articles from baal-1.html to byword.html, with no further pages.";
  "A LETTER THAT DOES NOT ANSWER TWICE STOPS THE WHOLE LIST, because a list missing a letter looks exactly like a whole one.";
  "ONE PAGE A SECOND, because this is somebody else's server and nothing here is in a hurry.";
  let r = [];
  for (let letter of "abcdefghijklmnopqrstuvwxyz") {
    let url = isbe_article_url("?letter=" + letter);
    let text = await http_text_or_null(url);
    if (equal(text, null)) {
      await sleep(10000);
      text = await http_text_or_null(url);
    }
    if (equal(text, null)) {
      throw new Error("biblestudytools.com did not answer for " + url);
    }
    for (let match of text.matchAll(
      /encyclopedias\/isbe\/([a-z0-9-]+\.html)/g,
    )) {
      let file = match[1];
      let left = r.includes(file);
      if (equal(left, false)) {
        r.push(file);
      }
    }
    await sleep(1000);
  }
  return r;
}
