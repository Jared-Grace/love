import { church_fathers_article_url } from "./church_fathers_article_url.mjs";
import { http_text_or_null } from "./http_text_or_null.mjs";
import { equal } from "./equal.mjs";
import { sleep } from "./sleep.mjs";
export async function church_fathers_article_files_all() {
  "Every page of the Church Fathers on NewAdvent.org, each as its own file on that site: the parts of every work listed on the Fathers index, or the work itself where it has no parts.";
  "A WORK'S PAGE IS ITS CONTENTS when the work comes in parts: Homilies on Matthew is 2001.htm, and its homilies are 200101.htm, 200102.htm and on. A part is what a reader is sent to, because a part is what cites a verse; the contents page cites nothing. A work in one piece is its own page.";
  "A PAGE THAT DOES NOT ANSWER TWICE STOPS THE WHOLE LIST, because a list missing a work looks exactly like a whole one. It is asked a second time after ten seconds first, because the list asks about a thousand pages and one stumble should not cost the rest.";
  "A LINK TO A PART OF A PAGE IS A LINK TO THE PAGE: what follows a # names a place inside the same file.";
  "ONE PAGE A SECOND, because this is somebody else's server and nothing here is in a hurry.";
  async function page(file) {
    let url = church_fathers_article_url(file);
    let text = await http_text_or_null(url);
    if (equal(text, null)) {
      await sleep(10000);
      text = await http_text_or_null(url);
    }
    if (equal(text, null)) {
      throw new Error("NewAdvent.org did not answer for " + url);
    }
    await sleep(1000);
    return text;
  }
  function files_linked(text, digits) {
    let found = [];
    let pattern = new RegExp(
      'href="(?:\\.\\./fathers/|/fathers/)?(\\d{' +
        digits +
        '}\\.htm)(?:#[^"]*)?"',
      "g",
    );
    for (let match of text.matchAll(pattern)) {
      let file = match[1];
      let left = found.includes(file);
      if (equal(left, false)) {
        found.push(file);
      }
    }
    return found;
  }
  let index = await page("");
  let works = files_linked(index, "4");
  let r = [];
  for (let work of works) {
    let text = await page(work);
    let parts = files_linked(text, "6,");
    if (equal(parts.length, 0)) {
      parts = [work];
    }
    for (let part of parts) {
      let left2 = r.includes(part);
      if (equal(left2, false)) {
        r.push(part);
      }
    }
  }
  return r;
}
