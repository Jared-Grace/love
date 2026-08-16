import { list_filter_size } from "./list_filter_size.mjs";
import { ebible_book_codes } from "./ebible_book_codes.mjs";
import { ebible_version_download_path } from "./ebible_version_download_path.mjs";
import { folder_read } from "./folder_read.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { path_name } from "./path_name.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
export async function ebible_version_downloaded_books_count(bible_folder) {
  "$plain bible_folder";
  "How many books of the bible a downloaded translation actually holds - sixty six where it holds all of them, a handful where it holds a few letters.";
  "Counted from the names of the files rather than from anything inside them, so that asking costs one look at a folder. Four hundred translations are asked this at once and reading them would take an hour where listing them takes a moment.";
  "A file counts when it is named by one of the sixty six codes and nothing else. Its chapters sit beside it named by the same code with a number after, so they are left out by the name having to match a code exactly.";
  "The codes are asked for rather than guessed at by their shape, because a translation also files its front matter and its glossary under three shouted letters, and guessing by shape counted those as books of the bible.";
  let download_path = ebible_version_download_path(bible_folder);
  let file_names = await folder_read(download_path);
  let book_codes = ebible_book_codes();
  function book_is(file_name) {
    let page_is = text_ends_with(file_name, ".htm");
    if (not(page_is)) {
      return false;
    }
    let stem = path_name(file_name);
    let named = list_includes(book_codes, stem);
    return named;
  }
  let count = list_filter_size(file_names, book_is);
  return count;
}
