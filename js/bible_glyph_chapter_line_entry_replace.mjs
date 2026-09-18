import { arguments_assert } from "./arguments_assert.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_combine } from "./text_combine.mjs";
import { equal } from "./equal.mjs";
import { or } from "./or.mjs";
import { text_replace_once } from "./text_replace_once.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_includes } from "./text_includes.mjs";
import { not } from "./not.mjs";
import { text_split } from "./text_split.mjs";
import { subtract } from "./subtract.mjs";
import { list_join } from "./list_join.mjs";
export function bible_glyph_chapter_line_entry_replace(line, bare, entry_bare) {
  "Rewrites ONE line of a written picture Bible chapter, putting a new entry wherever that line carries a given entry whole, and says how many it changed.";
  "$plain line";
  "the line is one line of a chapter's source exactly as the file carries it, indent and all. It is read as text and nothing about it runs.";
  "$plain bare";
  "the entry to find, already spelled as the file spells it - quotation marks round it and any escaping done. It names text to find and nothing that runs.";
  "$plain entry_bare";
  "the entry to write in its place, spelled the same way. It names text to write and nothing that runs.";
  "IT IS ONE LINE BECAUSE THE TWO WRITERS ABOVE IT DISAGREED ABOUT WHAT A LINE IS, and a disagreement about that is a word silently not drawn. One of them walked a whole chapter and one walked a single verse, and each carried its own copy of the matching - so when the short-verse shape and the quoted word were found and mended in the chapter writer, the verse writer still could not see either. The matching now has one home, and mending it mends both.";
  "A CHAPTER SPELLS ITS ENTRIES TWO WAYS AND BOTH ARE HANDLED HERE. The formatter gives a verse one entry per line while the list is too long to fit on one, and puts the whole list on a single line when it fits - a hundred and twenty one verses of these chapters are written the second way. So a line is a hit when it is exactly the entry, and also when it opens a verse's list and carries the entry inside it.";
  "THE PROSE ABOVE THE VERSES IS OUT OF REACH BY CONSTRUCTION, which is what makes the second branch safe. Every chapter argues in prose about the very words it draws, and a plain text replacement would rewrite the argument along with the scripture. Prose is one long string, so it never spells a quoted word inside itself, and the second branch only ever looks at a line opening a list of words.";
  arguments_assert(arguments, 3);
  let trimmed = text_trim(line);
  let with_comma = text_combine(bare, ",");
  let is_comma = equal(trimmed, with_comma);
  let is_bare = equal(trimmed, bare);
  let hit = or(is_comma, is_bare);
  if (hit) {
    let indent = text_replace_once(line, trimmed, "");
    let mark = entry_bare;
    if (is_comma) {
      mark = text_combine(entry_bare, ",");
    }
    let one = {
      line: text_combine(indent, mark),
      replaced: 1,
    };
    return one;
  }
  let short_verse = text_starts_with(trimmed, "words: [");
  let inside = text_includes(line, bare);
  let none = {
    line,
    replaced: 0,
  };
  if (not(short_verse)) {
    return none;
  }
  if (not(inside)) {
    return none;
  }
  let parts = text_split(line, bare);
  let count = subtract(parts.length, 1);
  let r = {
    line: list_join(parts, entry_bare),
    replaced: count,
  };
  return r;
}
