import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_new_line } from "./text_split_new_line.mjs";
import { text_trim } from "./text_trim.mjs";
import { not_equal } from "./not_equal.mjs";
export function lyric_video_passage_lines_text(text) {
  arguments_assert(arguments, 1);
  ("$plain text");
  ("The lines of a passage already laid out as writing, as a lyric video shows them: one line of the translation at a time, with the blank rows between stanzas dropped.");
  ("THE WORDS OF THE PASSAGE DECIDE WHERE THE LINES BREAK, and nothing here chooses. A psalm is already written in lines in the file it is kept in, and those are the lines a singer sings, so they are also the lines to show. Deciding the breaks here would be rewriting the poem to suit a screen.");
  ("A blank row means a stanza ended, which is a thing to know while reading a page and nothing at all to show on a card. It is dropped rather than kept as an empty card, because an empty card is a screen going blank for no reason a watcher can see.");
  ("★ IT IS HANDED THE WRITING RATHER THAN FETCHING IT, SO THAT A WHOLE CHAPTER AND A PART OF ONE ARE SHOWN BY THE SAME RULE. Which verses to read is a different question from how to show them, and the two were about to be answered in two places; two copies of the blank-row rule would drift, and the drift would show up as one kind of song getting an empty card and the other not, which only a person watching would ever notice.");
  let split = text_split_new_line(text);
  function line_trimmed(line) {
    let bare = text_trim(line);
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
