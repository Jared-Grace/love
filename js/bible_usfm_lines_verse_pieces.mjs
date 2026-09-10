import { arguments_assert } from "./arguments_assert.mjs";
import { text_split } from "./text_split.mjs";
import { list_size_greater_than } from "./list_size_greater_than.mjs";
import { list_skip_1 } from "./list_skip_1.mjs";
import { list_first } from "./list_first.mjs";
import { usfm_number_rest } from "./usfm_number_rest.mjs";
import { property_get } from "./property_get.mjs";
import { bible_usfm_marker_rest } from "./bible_usfm_marker_rest.mjs";
import { bible_usfm_marker_layout } from "./bible_usfm_marker_layout.mjs";
import { equal } from "./equal.mjs";
import { or } from "./or.mjs";
import { not } from "./not.mjs";
import { add } from "./add.mjs";
import { bible_usfm_line_sentence_end_is } from "./bible_usfm_line_sentence_end_is.mjs";
import { list_add } from "./list_add.mjs";
export function bible_usfm_lines_verse_pieces(usfm_lines) {
  arguments_assert(arguments, 1);
  ("$plain usfm_lines");
  ("Which verse each line of a chapter of usfm belongs to, and which piece of that verse it belongs to - one answer for every line handed in, in the same order.");
  ("★ A PIECE IS A SENTENCE, WHICH IS WHAT THE PERSON NAMING THE SINGINGS MEANS BY THE LETTER. A verse is piece a up to the end of the first sentence that finishes inside it, piece b through the second, and so on. That was said plainly and it settles the question: the letter on a file name is an address a human wrote, so the only reading of it that can be right is theirs.");
  ("It counts the sentences a printing writes rather than the couplets it steps, and those are two different counts. Counting the poetry steps agreed on Psalm 145 verse 13 and disagreed four verses earlier, where one couplet holds two whole sentences and one sentence runs across two couplets - and it could answer nothing at all for a verse printed as prose, which has no steps to count.");
  ("The cut can only fall where a line ends, because a line is the smallest thing a lyric video shows. Where a printing puts two sentences on one line they stay together in one piece, which is the same answer as showing half a line on a screen by itself and a better one.");
  ("Only the lines a person said are counted. A section title the translators wrote, a break between stanzas, an acrostic letter standing over a stanza of Psalm 119: none of those is the psalm, and a full stop in one of them would move the cut. The psalm's own ascription is counted, because it is scripture and a hundred and seventeen psalms number it as a verse.");
  ("A line that is not said keeps the piece of the last line that was, rather than a piece of its own. Such a line stands between two verses as often as inside one, and giving it a piece past the end of the verse would say that verse has one more piece than the printing wrote - so a letter naming that piece would be answered with the apparatus instead of refused.");
  ("A verse spanning two numbers is written as a number, a dash and another number, which is not a number. Such a line is answered as belonging to no verse anybody can name, so a caller asking for a passage that ends there is told no rather than handed a passage that quietly ran on.");
  ("The lines before the first verse mark belong to verse naught, which is no verse. A psalm's title is written there and is not part of any verse of it.");
  let marks = [];
  let verse = 0;
  let piece = 0;
  let ending = false;
  for (let usfm_line of usfm_lines) {
    let split_verse = text_split(usfm_line, "\\v ");
    let opened = list_size_greater_than(split_verse, 1);
    if (opened) {
      let after = list_skip_1(split_verse);
      let numbered = list_first(after);
      let read = usfm_number_rest(numbered);
      let written = property_get(read, "number");
      verse = Number(written);
      piece = 0;
      ending = false;
    }
    let split = bible_usfm_marker_rest(usfm_line);
    let marker_text = property_get(split, "marker");
    let layout = bible_usfm_marker_layout(marker_text);
    let kind = property_get(layout, "kind");
    let dropped = equal(kind, "drop");
    let broken = equal(kind, "break");
    let apart = or(dropped, broken);
    let said = not(apart);
    if (said) {
      if (ending) {
        piece = add(piece, 1);
      }
      let opening = equal(piece, 0);
      if (opening) {
        piece = 1;
      }
      ending = bible_usfm_line_sentence_end_is(usfm_line);
    }
    let mark = {
      verse: verse,
      piece: piece,
    };
    list_add(marks, mark);
  }
  return marks;
}
