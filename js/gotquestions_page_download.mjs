import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { gotquestions_article_url } from "./gotquestions_article_url.mjs";
import { http_text_or_null } from "./http_text_or_null.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
import { path_join } from "./path_join.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function gotquestions_page_download(page) {
  arguments_assert(arguments, 1);
  ("$plain page");
  ("Fetches one page of GotQuestions.org onto this machine, under the local records folder, and answers where it was put and how long it is.");
  ("THE SITE IS FIXED HERE AND ONLY THE PAGE IS ASKED FOR, which is what lets this run without anyone approving it. An agent fetching these pages with curl was asked about every time, because curl can reach and send to any address at all; this can reach one site only, and the page it is handed has to be a single plain file name, so it can neither leave the site nor write anywhere outside its own folder.");
  let plain = /^[A-Za-z0-9_-]+\.html$/.test(page);
  if (not(plain)) {
    throw new Error(
      "the page must be one plain file name ending in .html, such as content_places_Israel.html - got " +
        page,
    );
  }
  let url = gotquestions_article_url(page);
  let text = await http_text_or_null(url);
  if (equal(text, null)) {
    throw new Error("GotQuestions.org did not answer for " + url);
  }
  let folder = folder_gitignore_join("gotquestions");
  let path = path_join([folder, page]);
  await file_overwrite(path, text);
  let r = {
    url,
    path,
    length: text.length,
  };
  return r;
}
