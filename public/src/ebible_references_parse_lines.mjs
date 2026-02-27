import { ebible_references_parse_lines_generic } from "../../../love/public/src/ebible_references_parse_lines_generic.mjs";
import { ebible_verse } from "../../../love/public/src/ebible_verse.mjs";
import { ebible_version_books } from "../../../love/public/src/ebible_version_books.mjs";
export async function ebible_references_parse_lines(bible_folders, lines) {
  let books_get = ebible_version_books;
  let verse_get = ebible_verse;
  let waited = await ebible_references_parse_lines_generic(
    bible_folders,
    books_get,
    lines,
    verse_get,
  );
  return waited;
}
