import { ebible_offline_books_name } from "./ebible_offline_books_name.mjs";
import { ebible_offline_download_chapters } from "./ebible_offline_download_chapters.mjs";
import { ebible_offline_download_whole } from "./ebible_offline_download_whole.mjs";
import { ebible_offline_folder_downloaded_add } from "./ebible_offline_folder_downloaded_add.mjs";
import { ebible_offline_put_list } from "./ebible_offline_put_list.mjs";
import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
import { not } from "./not.mjs";
export async function ebible_offline_download(bible_folder, on_progress) {
  "keep one whole bible on this device: the book names first, then every chapter, and only then is it named as ready to read without internet";
  let books = await ebible_version_books_browser(bible_folder);
  let name = ebible_offline_books_name();
  await ebible_offline_put_list(bible_folder, [
    {
      name,
      value: books,
    },
  ]);
  let whole = await ebible_offline_download_whole(bible_folder, on_progress);
  if (not(whole)) {
    await ebible_offline_download_chapters(bible_folder, on_progress);
  }
  ebible_offline_folder_downloaded_add(bible_folder);
}
