import { html_style_white_space } from "./html_style_white_space.mjs";
import { app_shared_bible_hash_to_verses_count } from "./app_shared_bible_hash_to_verses_count.mjs";
import { ebible_index_flat_verses_run } from "./ebible_index_flat_verses_run.mjs";
import { app_next_verse_lines } from "./app_next_verse_lines.mjs";
import { lists_combine } from "./lists_combine.mjs";
import { list_last } from "./list_last.mjs";
import { list_next } from "./list_next.mjs";
import { list_join_newline_2 } from "./list_join_newline_2.mjs";
import { clipboard_copy_try } from "./clipboard_copy_try.mjs";
import { app_shared_bible_chapter_hash_get_or_default } from "./app_shared_bible_chapter_hash_get_or_default.mjs";
import { app_shared_bible_verse_number_default } from "./app_shared_bible_verse_number_default.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { app_shared_bible_chapter_hash_key } from "./app_shared_bible_chapter_hash_key.mjs";
import { app_shared_bible_verse_hash_key } from "./app_shared_bible_verse_hash_key.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
import { app_shared_bible_hash_to_languages_chosen } from "./app_shared_bible_hash_to_languages_chosen.mjs";
import { hash_to_url } from "./hash_to_url.mjs";
import { ebible_index_flat } from "./ebible_index_flat.mjs";
import { html_url_without_hash } from "./html_url_without_hash.mjs";
import { property_set } from "./property_set.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { list_add } from "./list_add.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { property_get } from "./property_get.mjs";
export async function app_next(context) {
  "This page is reached by a link somebody was sent, so the verse it should show is written in the link. Opening it with no link at all is somebody arriving with no request, and it used to insist on a chapter being named and stop when none was. Nothing said so: the stopping happened inside the opening, before a single line was drawn, so the page kept the words it paints while it starts and sat on One moment, please for ever. A hang says less than an error does, and this one said nothing at all.";
  "So it starts where every other bible surface starts from nothing, and somebody who opens it bare gets a verse to read and a way onward rather than a page that never arrives.";
  let hash = html_hash_object_get();
  let chapter_code = app_shared_bible_chapter_hash_get_or_default(hash);
  let property_name2 = app_shared_bible_verse_hash_key();
  let fallback = app_shared_bible_verse_number_default();
  let verse_number = property_get_or(hash, property_name2, fallback);
  let languages_chosen = app_shared_bible_hash_to_languages_chosen(hash);
  ("One verse at a time was the only thing a link could ask for, and reading is not done one verse at a time - somebody copying a passage out had to open this page once per verse and paste the pieces together. So the link may now say how many verses it wants, and saying nothing means one, which is what every link written before this did mean.");
  ("Several verses are shown as the one-verse block repeated rather than as a run of text under a single reference. That way each verse still says which verse it is, and a run that crosses into the next chapter needs nothing said about it - the reference on each block already says so.");
  let count = app_shared_bible_hash_to_verses_count(hash);
  let version_english = ebible_folder_english();
  let books = await ebible_version_books_browser(version_english);
  let list = await ebible_index_flat(version_english);
  let run = ebible_index_flat_verses_run(
    list,
    chapter_code,
    verse_number,
    count,
  );
  async function lambda(verse) {
    let chapter_code3 = property_get(verse, "chapter_code");
    let property_name5 = verse_number_key();
    let verse_number3 = property_get(verse, property_name5);
    let lines = await app_next_verse_lines(
      chapter_code3,
      verse_number3,
      languages_chosen,
      books,
    );
    return lines;
  }
  let lines_each = await list_map_unordered_async(run, lambda);
  let mapped = lists_combine(lines_each);
  let last = list_last(run);
  let next = list_next(list, last);
  let chapter_code2 = property_get(next, "chapter_code");
  let property_name = verse_number_key();
  let verse_number2 = property_get(next, property_name);
  let property_name3 = app_shared_bible_verse_hash_key();
  property_set(hash, property_name3, verse_number2);
  let property_name4 = app_shared_bible_chapter_hash_key();
  property_set(hash, property_name4, chapter_code2);
  let h = hash_to_url(hash);
  let url = html_url_without_hash();
  url += h;
  list_add(mapped, url);
  ("the verse is put on the screen before it is put on the clipboard, and the copying is allowed to fail. both halves of that are the same bug seen twice: this page copies while it is opening rather than under a thumb, which is the one case a browser refuses, and the refusal used to throw out of the opening before a single line was drawn. so the page kept the words it paints while it starts and sat on One moment, please - the same silent hang the paragraph above describes, arriving a second time by a different door.");
  ("painting first is what makes the copy optional rather than load-bearing. somebody who was sent this link came to read a verse; having it on the clipboard as well is a kindness on top, so it goes after the reading is safely on the screen and takes nothing with it when the browser says no.");
  ("The blank line between the blocks is written into the text rather than into the page, so the page has to be told to keep it. Left untold, a browser folds every run of space into one and the whole reading arrives as a single paragraph - which was survivable while there was one verse to show and is not now, because nothing then says where one verse ends and the next begins.");
  let joined = list_join_newline_2(mapped);
  let root = property_get(context, "root");
  html_style_white_space(root, "pre-wrap");
  html_text_set(root, joined);
  await clipboard_copy_try(joined);
}
