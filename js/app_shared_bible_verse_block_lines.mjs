import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_parts_chapter_code_to_reference } from "./ebible_parts_chapter_code_to_reference.mjs";
import { list_copy } from "./list_copy.mjs";
import { list_add_first } from "./list_add_first.mjs";
export function app_shared_bible_verse_block_lines(
  chapter_code,
  books,
  verse_number,
  texts,
) {
  "$plain chapter_code";
  "$plain verse_number";
  arguments_assert(arguments, 4);
  ("One verse written out the way somebody hands it to somebody else: the reference they would say out loud, and then the verse itself once for each bible they asked for.");
  ("Every surface that gives a verse away writes it this way - the page a shared link opens, and the copy button in the reader - so what lands on a clipboard is the same shape wherever it was copied from. Two spellings of one act is a difference a reader cannot account for: they copied the same verses and got two different things back, and nothing on either page said why.");
  ("Each verse carries its own reference rather than a run of them carrying one between them. A run may walk out of its chapter, which a single reference at the top has no way to say; and where several bibles are read side by side, these references are the only thing marking where one verse ends and the next begins.");
  let reference = ebible_parts_chapter_code_to_reference(chapter_code, books, [
    verse_number,
  ]);
  let lines = list_copy(texts);
  list_add_first(lines, reference);
  return lines;
}
