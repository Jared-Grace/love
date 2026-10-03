import { data_given_accepted_folder } from "./data_given_accepted_folder.mjs";
import { path_join } from "./path_join.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { json_extension } from "./json_extension.mjs";
import { file_read_json } from "./file_read_json.mjs";
export async function bible_glyph_collision_marks_settled() {
  "The marks on a shared picture that a person has read the verse for and ruled on by hand, each one naming which root every mark on that page was drawn for, in the order the page draws them, and saying why the interlinear could not say it.";
  "THE INTERLINEAR IS NOT ALWAYS THE AUTHORITY THE WALK TAKES IT FOR. The walk decides a mark by asking which of two roots stands in the verse, and that question is answered out of a table somebody else tagged. Where that table disagrees with the translation the chapter is written over, the walk reports an undecidable mark and both repairs it offers damage a page that was already right. Measured 2026-10-03 on three marks: an English phrase covering two Hebrew words so the second cell is blank, a Ketiv and Qere where the consonants negate and the reading does not, and a number tagged toward where the reading is the negative.";
  "IT NAMES A ROOT PER MARK AND NOT MERELY AN EXEMPTION, which is the whole reason it can be trusted. Letting a mark through as accepted would clear the gate and leave the picture unsplittable, because splitting it needs to know which word every mark on every page was drawn for - that is the debt the gate exists to count. A ruling that carries the roots pays the debt instead of waiving it, and it goes in beside the marks the interlinear decided on its own rather than into a pile of its own.";
  "IT IS ACCEPTED AND NOT DERIVED, which is why it lives where a person's agreement is kept. Nothing here can work out that a translation is following a Qere - that is a reading of the original somebody made, and the honest record of it is a sentence a person wrote and signed.";
  "THE KEY IS THE SAME LINE THE RATCHET RECORDS, so the two files can be read against each other line for line and a ruling can be seen to answer an entry. A ruling written any other way would have to be joined up by hand every time somebody asked whether a red name had been dealt with.";
  "THE REASON IS CARRIED RATHER THAN DROPPED. A bare list of overrides is indistinguishable from a list of mistakes a year later, and the next reader's first question is always why - so the answer is stored next to the ruling instead of in a commit nobody reads.";
  let folder = data_given_accepted_folder();
  let ext_j = json_extension();
  let combined = text_combine_multiple([
    fn_name("bible_glyph_collision_marks_settled"),
    ext_j,
  ]);
  let path = path_join([folder, combined]);
  let settled = await file_read_json(path);
  return settled;
}
