import { ebible_version_downloaded_page_stems } from "./ebible_version_downloaded_page_stems.mjs";
import { list_filter_size } from "./list_filter_size.mjs";
import { ebible_book_codes } from "./ebible_book_codes.mjs";
import { list_includes } from "./list_includes.mjs";
export async function ebible_version_downloaded_books_count(bible_folder) {
  "$plain bible_folder";
  "How many books of the bible a downloaded translation actually holds - sixty six where it holds all of them, a handful where it holds a few letters.";
  "Counted from the names of the files rather than from anything inside them, so that asking costs one look at a folder. Four hundred translations are asked this at once and reading them would take an hour where listing them takes a moment.";
  "A page counts when it is named by one of the sixty six codes and nothing else. Its chapters sit beside it named by the same code with a number after, so they are left out by the name having to match a code exactly.";
  "The codes are asked for rather than guessed at by their shape, because a translation also files its front matter and its glossary under three shouted letters, and guessing by shape counted those as books of the bible.";
  let book_codes = ebible_book_codes();
  let stems = await ebible_version_downloaded_page_stems(bible_folder);
  function book_is(stem) {
    let named = list_includes(book_codes, stem);
    return named;
  }
  let count = list_filter_size(stems, book_is);
  return count;
}
