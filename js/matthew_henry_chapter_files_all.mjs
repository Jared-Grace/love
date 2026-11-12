import { matthew_henry_article_url } from "./matthew_henry_article_url.mjs";
import { http_text_or_null } from "./http_text_or_null.mjs";
import { equal } from "./equal.mjs";
import { sleep } from "./sleep.mjs";
export async function matthew_henry_chapter_files_all() {
  "Every chapter page of Matthew Henry's Complete Commentary on biblestudytools.com, by book: each book's folder on the site, with the chapter pages its own index links to, in the order it lists them.";
  "THE SITE'S OWN INDEXES ARE READ, NOT A PATTERN, because the site names pages unevenly: Genesis 1 is genesis/1.html but Song of Solomon 1 is song-of-solomon/song-of-solomon-1.html.";
  "A PAGE THAT DOES NOT ANSWER TWICE STOPS THE WHOLE LIST, because a list missing a book looks exactly like a whole one.";
  "ONE PAGE A SECOND, because this is somebody else's server and nothing here is in a hurry.";
  async function page(folder) {
    let url = matthew_henry_article_url(folder);
    let text = await http_text_or_null(url);
    if (equal(text, null)) {
      await sleep(10000);
      text = await http_text_or_null(url);
    }
    if (equal(text, null)) {
      throw new Error("biblestudytools.com did not answer for " + url);
    }
    await sleep(1000);
    return text;
  }
  function linked(text, pattern) {
    let found = [];
    for (let match of text.matchAll(pattern)) {
      let item = match[1];
      let left = found.includes(item);
      if (equal(left, false)) {
        found.push(item);
      }
    }
    return found;
  }
  let index = await page("");
  let books = linked(index, /matthew-henry-complete\/([a-z0-9-]+)\//g);
  let r = [];
  for (let book of books) {
    let text = await page(book + "/");
    let pattern = new RegExp(
      "matthew-henry-complete/" + book + "/([a-z0-9-]+\\.html)",
      "g",
    );
    let files = linked(text, pattern);
    r.push({
      book,
      files,
    });
  }
  return r;
}
