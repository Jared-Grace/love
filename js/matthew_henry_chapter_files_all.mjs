import { matthew_henry_article_url } from "./matthew_henry_article_url.mjs";
import { http_text_or_null } from "./http_text_or_null.mjs";
import { equal } from "./equal.mjs";
import { sleep } from "./sleep.mjs";
export async function matthew_henry_chapter_files_all() {
  "Every chapter page of Matthew Henry's Complete Commentary on biblestudytools.com, as files: each a book's folder and a page in it, like genesis/1.html, gathered from the chapter links on every index the commentary's front page lists; and the indexes that did not answer.";
  "THE SITE'S OWN INDEXES ARE READ, NOT A PATTERN, because the site names pages unevenly: Genesis 1 is genesis/1.html but Song of Solomon 1 is song-of-solomon/song-of-solomon-1.html.";
  "A LINK IS KEPT BY WHERE IT POINTS, NOT BY WHICH INDEX HELD IT, because Psalms is listed on two indexes, psalms-1-75/ and psalms-76-150/, whose links all point into psalms/ - and psalms/ itself has no index page.";
  "AN INDEX THAT DOES NOT ANSWER TWICE IS NAMED IN unanswered rather than stopping the list, because psalms/ never answers and its chapters arrive anyway; whether any chapter went missing is for the caller to check against the bible's own chapters. The front page not answering stops everything, since then there is no list at all.";
  "ONE PAGE A SECOND, because this is somebody else's server and nothing here is in a hurry.";
  async function page(folder) {
    let url = matthew_henry_article_url(folder);
    let text = await http_text_or_null(url);
    if (equal(text, null)) {
      await sleep(10000);
      text = await http_text_or_null(url);
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
  if (equal(index, null)) {
    throw new Error(
      "biblestudytools.com did not answer for its Matthew Henry front page",
    );
  }
  let books = linked(index, /matthew-henry-complete\/([a-z0-9-]+)\//g);
  let files = [];
  let unanswered = [];
  for (let book of books) {
    let text = await page(book + "/");
    if (equal(text, null)) {
      unanswered.push(book);
      continue;
    }
    for (let file of linked(
      text,
      /matthew-henry-complete\/([a-z0-9-]+\/[a-z0-9-]+\.html)/g,
    )) {
      let left2 = files.includes(file);
      if (equal(left2, false)) {
        files.push(file);
      }
    }
  }
  let r = {
    files,
    unanswered,
  };
  return r;
}
