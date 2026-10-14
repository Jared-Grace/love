import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { giveaway_record_row_picture_is } from "./giveaway_record_row_picture_is.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
export function giveaway_psalms_record_documents_defects(
  rows,
  rows_documented,
) {
  arguments_assert(arguments, 2);
  ("$plain rows");
  ("$plain rows_documented");
  ("Hold the written record of the pictures to be given away against the pictures the timing documents actually name, and report every place the two disagree.");
  ("★ THIS IS THE THIRD OF THREE QUESTIONS AND IT WAS THE ONE NOTHING ASKED, WHICH IS WHY FOUR ROWS OF THE RECORD WENT STALE WITHOUT A LIGHT COMING ON. Two checks already stood: one holds the record against the disk, and one holds the documents against the disk. Both were green about the parts of the record nobody had looked at, because a row and a document can each be perfectly answerable about a file on the disk while naming different files from each other. Measured on 2026-10-14: the record named gitignore/lyric_video_pictures/bsb_PSA_103_1-11/pd_bol_mozes.png, no document named it any more because the crop for that line had been recut from a Ribera instead, and the Ribera crop the documents did name was in no row of the record at all. So one line of one psalm had a picture nobody would have been given and a picture that could not be found, and both of those were invisible to a check about the disk.");
  ("★ IT IS ASKED BOTH WAYS ROUND, BECAUSE THE TWO DIRECTIONS FAIL DIFFERENTLY AND ONLY ONE OF THEM IS LOUD. A row in the record that no document names is a file that will be offered and may not be there - that one eventually shows up as a missing file on the disk, late and blamed on the wrong thing. A picture the documents name that no row holds is the silent one: nothing is broken, nothing is missing, the giveaway is simply short of a crop that exists and was chosen, and no amount of checking what the record points at could ever notice something the record never mentioned. Asking only the first direction would have found the Bol and never the Ribera.");
  ("★ THE THIRD FAULT IS THE DANGEROUS ONE EVEN THOUGH THERE IS NONE OF IT TODAY. A published name is an address somebody bookmarked and the only words a music player will show, so the one thing that must never happen quietly is that name coming to point at a different file. Both lists carry the name and the path side by side, so the question can be put: of the rows the two agree exist, does any one of them give the same published name to two different files? None do, of eighteen hundred and eleven. A check that has nothing to report today is still worth its lines when what it would report cannot be taken back.");
  ("The matching is a walk rather than a lookup built once and asked many times. A lookup keyed by the published name would be faster and would also quietly assume that no two rows share a name - which is the neighbouring check's whole job, and a thing this one must not take for granted while it is the one looking for disagreements. Eighteen hundred against eighteen hundred is a few million comparisons and takes no time worth naming.");
  function named(list, name_published) {
    function name_matches(row) {
      let same = equal(row.name_published, name_published);
      return same;
    }
    let matches = list_filter(list, name_matches);
    return matches;
  }
  let rows_recorded = list_filter(rows, giveaway_record_row_picture_is);
  let defects = [];
  for (let row of rows_recorded) {
    let documented = named(rows_documented, row.name_published);
    if (list_empty_is(documented)) {
      let undocumented = {
        fault: "picture_row_undocumented",
        name_published: row.name_published,
        path_in_repo: row.path_in_repo,
      };
      list_add(defects, undocumented);
      continue;
    }
    let paths = list_map_property(documented, "path_in_repo");
    let agreed = list_includes(paths, row.path_in_repo);
    if (not(agreed)) {
      let moved = {
        fault: "picture_row_path_differs",
        name_published: row.name_published,
        path_in_repo: row.path_in_repo,
      };
      list_add(defects, moved);
    }
  }
  for (let row of rows_documented) {
    let recorded = named(rows_recorded, row.name_published);
    if (list_empty_is(recorded)) {
      let unrecorded = {
        fault: "picture_row_unrecorded",
        name_published: row.name_published,
        path_in_repo: row.path_in_repo,
      };
      list_add(defects, unrecorded);
    }
  }
  return defects;
}
