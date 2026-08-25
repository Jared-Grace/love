import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_roots_wordings_split } from "./bible_glyph_roots_wordings_split.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { list_take } from "./list_take.mjs";
import { list_map_join_separator } from "./list_map_join_separator.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_column } from "./text_column.mjs";
import { list_add } from "./list_add.mjs";
export async function bible_glyph_roots_wordings_split_lines(
  testament_name,
  count,
) {
  arguments_assert(arguments, 2);
  ("The weakest seats in one testament's seed table, one line each, in columns that line up under one another.");
  ("$plain testament_name");
  ("the name is a testament's own, spelled as the book divisions spell it. It names which table to read and nothing that runs.");
  ("$plain count");
  ("the count is how many lines to hand back, weakest first. It is a number written as a word, and it names a length and nothing that runs.");
  ("THE READING IS THE POINT OF THE MEASURING AND WAS THE PART NOBODY COULD DO. The rows the measure hands back carry every tally under every seat, which is the right thing to hand a program and the wrong thing to hand a person: a hundred and thirty of them printed as they stand is a page of braces nobody reads to the end. This is the same rows with the braces taken off.");
  ("THE SEAT IS SHOWN AS A FRACTION AND DELIBERATELY NOT AS A PERCENTAGE. Nine out of thirty two says both how thin the commonest meaning is and how little was measured; twenty eight per cent says only the first, and says it in a way that reads as precise about a word seen thirty two times. The one number that would need rounding is the one number worth not having.");
  ("SIX WORDINGS ARE SHOWN AND THE REST ARE DROPPED, because the question a reader brings here is whether the top word has a rival, and a rival is never in seventh place. The whole tally is on the row this was made from for anyone the six do not settle.");
  function bible_glyph_roots_wordings_split_lines_word(counted) {
    let said = text_combine_multiple([counted.value, " ", counted.count]);
    return said;
  }
  let rows = await bible_glyph_roots_wordings_split(testament_name);
  let wanted = number_from_text(count);
  let weakest = list_take(rows, wanted);
  let lines = [];
  for (let row of weakest) {
    let shown = list_take(row.words, 6);
    let tally = list_map_join_separator(
      shown,
      bible_glyph_roots_wordings_split_lines_word,
      ", ",
    );
    let seat = text_combine_multiple([row.top_count, "/", row.total]);
    let strong_text = text_combine_multiple([row.strong]);
    let padded = text_column(seat, 9);
    let padded2 = text_column(row.glyph, 20);
    let padded3 = text_column(row.root, 14);
    let padded4 = text_column(strong_text, 7);
    let line = text_combine_multiple([
      padded,
      padded2,
      padded3,
      padded4,
      tally,
    ]);
    list_add(lines, line);
  }
  return lines;
}
