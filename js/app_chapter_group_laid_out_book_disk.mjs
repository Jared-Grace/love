import { arguments_assert } from "./arguments_assert.mjs";
import { global_function_property_exists } from "./global_function_property_exists.mjs";
import { global_function_property_get } from "./global_function_property_get.mjs";
import { web_assets_folder_absolute } from "./web_assets_folder_absolute.mjs";
import { web_assets_bible_laid_out_path } from "./web_assets_bible_laid_out_path.mjs";
import { path_join } from "./path_join.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { global_function_property_set } from "./global_function_property_set.mjs";
export async function app_chapter_group_laid_out_book_disk(book_code) {
  "$plain book_code";
  arguments_assert(arguments, 1);
  ("One book of the English bible cut into verses with its layout, read off this machine's own copy of the assets folder, or nothing when that copy has no such file.");
  ("★ THE MACHINE'S FETCH SLEEPS FIVE TO EIGHT SECONDS BEFORE IT ASKS, so reading a book over the network cost every reply-rule trial most of its time: measured 2026-11-11, one change's cases took eleven seconds and about eight of them were that sleep. The file it would fetch is uploaded from this very folder, so the copy here is the same book without the wait.");
  ("★ ASKED FOR BY NAME BY ITS CALLER, NEVER IMPORTED, because the caller ships to browsers and a browser has no disk; a plain import would carry the file reader into every page that shows a chapter.");
  ("★ A BOOK IS READ ONCE AND THE SAME ONE HANDED BACK EVERY TIME AFTER, because callers find a verse by being the very same record they were handed before: reading the file afresh each time made a new copy of every verse, a verse from one chapter's reading was then not found in the next, and every Philippians 4:6-7 reply threw. Measured 2026-11-11. Kept only when it was found, like the fetch it stands in for.");
  let cached = global_function_property_exists(
    app_chapter_group_laid_out_book_disk,
    book_code,
  );
  if (cached) {
    let already = global_function_property_get(
      app_chapter_group_laid_out_book_disk,
      book_code,
    );
    return already;
  }
  let folder = web_assets_folder_absolute();
  let path = web_assets_bible_laid_out_path("bsb", book_code);
  let file_path = path_join([folder, path]);
  let exists = await file_exists(file_path);
  if (not(exists)) {
    return null;
  }
  let chapters = await file_read_json(file_path);
  global_function_property_set(
    app_chapter_group_laid_out_book_disk,
    book_code,
    chapters,
  );
  return chapters;
}
