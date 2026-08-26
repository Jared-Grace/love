import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters_collision_marks_report } from "./bible_glyph_chapters_collision_marks_report.mjs";
import { bible_glyph_collision_marks_split_text } from "./bible_glyph_collision_marks_split_text.mjs";
import { add } from "./add.mjs";
import { text_column } from "./text_column.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { list_join_colon } from "./list_join_colon.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export async function bible_glyph_chapters_collision_marks_lines() {
  "The split cost of every shared picture as one line each, ready to be read down in one sitting: the picture, how many marks stand on it, how the interlinear divides them between the two roots, how the rest pair off with the words by position, and how many are left for a person.";
  "A LINE IS THE POINT WHERE THIS BECOMES A DECISION. The reading underneath is honest and unreadable - hundreds of rows, most of them the same answer - and a person choosing what to split next needs the pictures ranked beside each other, which is a thing only one line each can show.";
  "The two numbers to read are the last two. A picture with nothing ambiguous and nothing unseated is one whose already-drawn marks all decide themselves, so splitting it costs a table edit and no reading at all.";
  "THE THIRD AND FOURTH COLUMNS ARE NOT THE SAME KIND OF CERTAIN and are shown apart for that reason. The third is what one word being in the verse and the other not being in it settles, which is not open to argument. The fourth is what the marks and the words pairing off one for one settles, which rests on the chapter having been drawn in the original's order. Anybody spending the fourth column should know they are spending that.";
  arguments_assert(arguments, 0);
  let report = await bible_glyph_chapters_collision_marks_report();
  let lines = [];
  for (let picture of report.pictures) {
    let divided = bible_glyph_collision_marks_split_text(picture.decided);
    let paired = bible_glyph_collision_marks_split_text(picture.paired);
    let ambiguous_marks = 0;
    for (let entry of picture.ambiguous) {
      ambiguous_marks = add(ambiguous_marks, entry.drew);
    }
    let unseated_marks = 0;
    for (let entry of picture.unseated) {
      unseated_marks = add(unseated_marks, entry.drew);
    }
    let padded = text_column(picture.name, 34);
    let marks = list_join_empty([picture.marks]);
    let padded2 = text_column(marks, 6);
    let padded3 = text_column(divided, 26);
    let padded4 = text_column(paired, 26);
    let joined = list_join_colon(["ambiguous", ambiguous_marks]);
    let joined2 = list_join_colon(["unseated", unseated_marks]);
    let line = list_join_space([
      padded,
      padded2,
      padded3,
      padded4,
      joined,
      joined2,
    ]);
    list_add(lines, line);
  }
  let text = list_join_newline(lines);
  return text;
}
