import { ebible_verse_browser } from "./ebible_verse_browser.mjs";
import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
import { ebible_references_parse_lines_generic } from "./ebible_references_parse_lines_generic.mjs";
export async function ebible_references_parse_lines_browser(
  bible_folders,
  lines,
) {
  let books_get = ebible_version_books_browser;
  let waited = await ebible_references_parse_lines_generic(
    books_get,
    bible_folders,
    lines,
    ebible_verse_browser,
  );
  return waited;
}
