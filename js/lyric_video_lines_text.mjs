import { arguments_assert } from "./arguments_assert.mjs";
import { bible_usfm_version_chapter_text } from "./bible_usfm_version_chapter_text.mjs";
import { text_split_new_line } from "./text_split_new_line.mjs";
import { not_equal } from "./not_equal.mjs";
export async function lyric_video_lines_text(
  version,
  book_code,
  chapter_number,
) {
  arguments_assert(arguments, 3);
  ("$plain version");
  ("$plain book_code");
  ("$plain chapter_number");
  ("The lines of a passage as a lyric video shows them: one line of the translation at a time, with the blank rows between stanzas dropped.");
  ("THE WORDS OF THE PASSAGE DECIDE WHERE THE LINES BREAK, and nothing here chooses. A psalm is already written in lines in the file it is kept in, and those are the lines a singer sings, so they are also the lines to show. Deciding the breaks here would be rewriting the poem to suit a screen.");
  ("A blank row means a stanza ended, which is a thing to know while reading a page and nothing at all to show on a card. It is dropped rather than kept as an empty card, because an empty card is a screen going blank for no reason a watcher can see.");
  let text = await bible_usfm_version_chapter_text(
    version,
    book_code,
    chapter_number,
  );
  let split = text_split_new_line(text);
  function line_trimmed(line) {
    let bare = line.trim();
    return bare;
  }
  let trimmed = split.map(line_trimmed);
  function line_said(line) {
    let said = not_equal(line, "");
    return said;
  }
  let texts = trimmed.filter(line_said);
  return texts;
}
