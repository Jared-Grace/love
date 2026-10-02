import { arguments_assert } from "./arguments_assert.mjs";
import { psalms_song_letter_part_cases } from "./psalms_song_letter_part_cases.mjs";
import { property_get } from "./property_get.mjs";
import { lyric_video_part_lines_text } from "./lyric_video_part_lines_text.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { json_equal_not } from "./json_equal_not.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_size } from "./list_size.mjs";
export async function psalms_song_letter_part_gate_run() {
  arguments_assert(arguments, 0);
  ("Fails the build if any passage a singing addresses by letter stops handing back the lines that singing actually sings.");
  ("★ IT IS A CHECK ON A READING OF SOMEBODY'S WORK AND NOT ON A RULE OF USFM, SO IT CAN GO RED WITH NOTHING IN ITS OWN FILES CHANGED. What a letter means is decided by where pieces of a verse end, and that is asked three functions down - so a change to the sentence marks, to the semicolon, or to which lines count as said moves every answer here at once. That is what makes this the check on the piece rule rather than a check on the corpus.");
  ("A passage that cannot be read at all is the loudest failure of the set and is reported as one defect rather than thrown, because it is exactly what happened before the semicolon was added: seven singings of Psalm 104 had no document because their address answered nothing. Thrown, the first such passage would hide every passage after it.");
  ("Both ends are compared, because the two readings fail at opposite ends. A rule that ends a piece too early leaves a half-passage whose last line is wrong, and a rule that ends one too late leaves a passage whose first line was already sung in the one before.");
  let cases = psalms_song_letter_part_cases();
  let defects = [];
  for (let one of cases) {
    let version = property_get(one, "version");
    let book_code = property_get(one, "book_code");
    let chapter_number = property_get(one, "chapter_number");
    let verse_first = property_get(one, "verse_first");
    let verse_last = property_get(one, "verse_last");
    let lines = await lyric_video_part_lines_text(
      version,
      book_code,
      chapter_number,
      verse_first,
      verse_last,
    );
    let unread = equal(lines, null);
    if (unread) {
      list_add(defects, {
        name: property_get(one, "name"),
        went_wrong: "the printing answers nothing for this address",
      });
      continue;
    }
    let got = {
      line_first: list_first(lines),
      line_last: list_last(lines),
    };
    let want = {
      line_first: property_get(one, "line_first"),
      line_last: property_get(one, "line_last"),
    };
    let wrong = json_equal_not(got, want);
    if (wrong) {
      list_add(defects, {
        name: property_get(one, "name"),
        got: got,
        want: want,
      });
    }
  }
  list_empty_is_assert_json(defects, {
    defects: defects,
    hint: text_combine_multiple([
      "a letter on a singing's file name no longer names the lines that singing sings - read got beside want, then mend ",
      fn_name("bible_usfm_line_piece_end_is"),
      " or the corpus, whichever is wrong",
    ]),
  });
  let answer = {
    passages: list_size(cases),
    defects: 0,
  };
  return answer;
}
