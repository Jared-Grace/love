import { equal } from "./equal.mjs";
import { catholic_encyclopedia_article_url } from "./catholic_encyclopedia_article_url.mjs";
import { http_text_or_null } from "./http_text_or_null.mjs";
import { sleep } from "./sleep.mjs";
export async function catholic_encyclopedia_article_files_all() {
  "Every article of the Catholic Encyclopedia on NewAdvent.org, each as its own file on that site, read off the site's own index, one page per letter.";
  "A LETTER WHOSE PAGE DOES NOT ANSWER STOPS THE WHOLE LIST, because a list missing a letter looks exactly like a whole one.";
  let r = [];
  for (let letter of "abcdefghijklmnopqrstuvwxyz") {
    let url = catholic_encyclopedia_article_url(letter + ".htm");
    let text = await http_text_or_null(url);
    if (equal(text, null)) {
      throw new Error("NewAdvent.org did not answer for " + url);
    }
    for (let match of text.matchAll(
      /href="(?:\.\.\/cathen\/|\/cathen\/)?(\d{5}[a-z]?\.htm)"/g,
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
