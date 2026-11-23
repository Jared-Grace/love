import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters_marks_sibling_misplaced_walked } from "./bible_glyph_chapters_marks_sibling_misplaced_walked.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
export async function bible_glyph_chapters_marks_sibling_misplaced_gate_run() {
  "QA gate: no picture Bible verse draws the eye where its draft says see, the seeing eyes where it says eye, or the plain ear where it says hear - or the other way round.";
  "IT HOLDS AT NOUGHT BECAUSE NOUGHT WAS REACHED BY HAND. Eighty nine verses were wrong when this was written and all were repaired first, so a record of known faults would be an empty file. A new one is a chapter written or rewritten with the two marks the wrong way round, which is cheap to fix the day it lands and was invisible for months before.";
  arguments_assert(arguments, 0);
  let told = await bible_glyph_chapters_marks_sibling_misplaced_walked();
  list_empty_is_assert_json(told.offenders, {
    hint: text_combine_multiple([
      "these verses draw a mark where the draft asks for its sibling - the pair of eyes is to see and the single eye is the eye itself, the ear with the loudspeaker is to hear and the plain ear is the ear itself. Record each verse as was and now in data/bible_glyph_marks_judged.json and run ",
      fn_name("bible_glyph_chapters_marks_judged_redraw"),
    ]),
    offenders: told.offenders,
  });
  let r = {
    walked: told.walked,
  };
  return r;
}
