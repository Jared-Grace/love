import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_psalms_chapters_uploaded } from "./giveaway_psalms_chapters_uploaded.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { giveaway_psalms_record_path } from "./giveaway_psalms_record_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { giveaway_psalms_rows_uploaded_defects } from "./giveaway_psalms_rows_uploaded_defects.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { giveaway_passage_code_chapter_code } from "./giveaway_passage_code_chapter_code.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
export async function giveaway_psalms_rows_uploaded_unmoved_assert(rows) {
  arguments_assert(arguments, 1);
  ("$plain rows");
  ("Refuses to let a rewriting of the giveaway record be saved if it would move, or drop, a name inside a box that has already been given away.");
  ("★ THIS IS THE WHOLE OF WHAT MAKES GIVING THE PSALMS AWAY ONE CHAPTER AT A TIME SAFE RATHER THAN MERELY POSSIBLE. A box is the only boundary archive.org has, so handing over one psalm at a time was always the design; what was missing was that the writer of the record works the take numbers out afresh from where each file stands in a walk of the downloads folder, and nothing knew which boxes were already out. So the first upload would have made every later refresh dangerous: one new recording landing ahead of an old one renames every take after it, and a renamed public address is a download somebody has bookmarked now pointing at different singing, forever. The check is put on this side of the save, where the answer is a refusal somebody reads instead of a file nobody can find.");
  ("★ WITH NOTHING UPLOADED IT ANSWERS AT ONCE AND READS NOTHING, WHICH IS WHAT KEEPS IT OUT OF THE WAY OF THE ORDINARY WORK AND ALSO SETTLES THE FIRST-EVER RUN. An empty list means no name is an address yet and the rewriting may do as it likes - and it also means there is nothing to compare against, so the kept record is not wanted and a machine that has none is not stopped. The moment one chapter is on the list the kept record becomes the witness, and a missing one then stops the save rather than being read as a clean sheet: ignorance about what went out must never be the permissive answer.");
  ("The kept record is the witness rather than archive.org itself, and the reasoning for that is written where the comparing is done. Here it is enough to say that this reads two files and no network, so it runs on a machine with no connection and cannot fail open for want of an answer.");
  ("It is called by the writer just before the save and nowhere else. A gate could not do this job: a gate runs after a commit, by which time the record on disk is the rewritten one and the old names are only in git. The one moment at which the two versions are both in hand is the moment before the writing, so that is where this stands.");
  let chapters_uploaded = await giveaway_psalms_chapters_uploaded();
  let nothing_out = list_empty_is(chapters_uploaded);
  if (nothing_out) {
    let free = {
      chapters_uploaded,
      names_frozen: 0,
      defects: [],
    };
    return free;
  }
  let path = giveaway_psalms_record_path();
  let rows_before = await file_read_json(path);
  let defects = giveaway_psalms_rows_uploaded_defects(
    rows_before,
    rows,
    chapters_uploaded,
  );
  list_empty_is_assert_json(defects, {
    chapters_uploaded,
    hint: "this rewriting would move or drop a name inside a box that is already public, which archive.org can never undo",
  });
  function row_frozen_is(row) {
    let chapter_code = giveaway_passage_code_chapter_code(row.passage_code);
    let frozen = list_includes(chapters_uploaded, chapter_code);
    return frozen;
  }
  let rows_frozen = list_filter(rows_before, row_frozen_is);
  let names_frozen = list_size(rows_frozen);
  let held = {
    chapters_uploaded,
    names_frozen,
    defects,
  };
  return held;
}
