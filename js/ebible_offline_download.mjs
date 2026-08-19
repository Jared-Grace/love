import { ebible_index_flat_try } from "./ebible_index_flat_try.mjs";
import { ebible_offline_index_flat_name } from "./ebible_offline_index_flat_name.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_add } from "./list_add.mjs";
import { ebible_offline_books_name } from "./ebible_offline_books_name.mjs";
import { ebible_offline_chapter_codes_name } from "./ebible_offline_chapter_codes_name.mjs";
import { ebible_chapter_codes_canonical_browser } from "./ebible_chapter_codes_canonical_browser.mjs";
import { ebible_offline_download_chapters } from "./ebible_offline_download_chapters.mjs";
import { ebible_offline_download_whole } from "./ebible_offline_download_whole.mjs";
import { ebible_offline_folder_downloaded_add } from "./ebible_offline_folder_downloaded_add.mjs";
import { ebible_offline_put_list } from "./ebible_offline_put_list.mjs";
import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
import { not } from "./not.mjs";
export async function ebible_offline_download(bible_folder, on_progress) {
  "keep one whole bible on this device: the book names first, then every chapter, and only then is it named as ready to read without internet";
  let books = await ebible_version_books_browser(bible_folder);
  let chapter_codes = await ebible_chapter_codes_canonical_browser();
  ("which verses this bible has is kept along with the verses, because a reader with no internet is asked that question before they are shown a word - and a copy that cannot answer it is a copy that still waits on the network to be read.");
  let index_flat = await ebible_index_flat_try(bible_folder);
  let books_name = ebible_offline_books_name();
  let codes_name = ebible_offline_chapter_codes_name();
  let index_flat_name = ebible_offline_index_flat_name();
  let entries = [
    {
      name: books_name,
      value: books,
    },
    {
      name: codes_name,
      value: chapter_codes,
    },
  ];
  ("a bible with none uploaded yet is kept without one, exactly as reading it online goes: it is shown at the verse numbers the bibles beside it name.");
  let index_found = null_not_is(index_flat);
  if (index_found) {
    list_add(entries, {
      name: index_flat_name,
      value: index_flat,
    });
  }
  await ebible_offline_put_list(bible_folder, entries);
  let whole = await ebible_offline_download_whole(bible_folder, on_progress);
  if (not(whole)) {
    await ebible_offline_download_chapters(
      bible_folder,
      chapter_codes,
      on_progress,
    );
  }
  ebible_offline_folder_downloaded_add(bible_folder);
}
