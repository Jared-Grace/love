import { ebible_version_books_browser } from "../../../love/public/src/ebible_version_books_browser.mjs";
import { ebible_references_parse_lines_generic } from "../../../love/public/src/ebible_references_parse_lines_generic.mjs";
export async function ebible_references_parse_lines_browser(
  bible_folders,
  lines,
) {
  let books_get = ebible_version_books_browser;
  let verse_get = ebible_verse_browser;
  let waited = await ebible_references_parse_lines_generic(
    books_get,
    verse_get,
    bible_folders,
    lines,
  );
  return waited;
}
