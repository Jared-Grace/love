import { equal } from "./equal.mjs";
import { giveaway_psalms_songs_path } from "./giveaway_psalms_songs_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { giveaway_passage_file_name } from "./giveaway_passage_file_name.mjs";
import { list_map_filter_null_not_is } from "./list_map_filter_null_not_is.mjs";
import { list_duplicates_by_property } from "./list_duplicates_by_property.mjs";
import { list_map } from "./list_map.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
export async function giveaway_psalms_songs_defects() {
  "Every row of the written-down giveaway record that the naming functions do not stand behind, one fault to a row.";
  "★ NOTHING MAY BE UPLOADED UNDER A NAME NO FUNCTION SPELLED, BECAUSE A NAME IS THE ONE THING ARCHIVE.ORG NEVER LETS YOU CHANGE. A name on an item is its address, the name of every derivative made from it, and - since the tag written into a derived mp3 carries no title and no artist, checked on two items of two - the only words a music player will ever show a listener. So a name that went up wrong stays wrong for everybody who ever downloads it, and the only place the mistake is cheap is before the upload. Up to now the only thing standing between a wrong name and the public was that somebody happened to read the record: the half-verse padding fault was caught that way and the clashing take number was caught by an assert that only runs when the record is rewritten. This asks the question on every run of the gate instead.";
  "★ THE NAME IS CHECKED BY SPELLING IT AGAIN FROM THE PIECES STORED BESIDE IT, NOT BY READING IT APART. Reading a name apart was the first plan and it does not work: a name is cut at the underscores, and two of the fifteen hundred and twenty-eight translation folders on this disk have an underscore inside them - fra_fob and knv-fly_river - so a reader counting words cannot say which word is the translation and which is the kind. Spelling it again needs no reading and proves more: it says the stored name is still what the naming rule produces, so changing that rule turns into a failure somebody reads rather than a silent rename of files that are already published.";
  "Three faults are gathered into one list rather than returned apart, because each of them has the same consequence - a file would go up under a name nobody can justify - and a caller that had to ask three questions could be written to ask two.";
  "A repeated name is still asked about here even though the writer refuses to write one. The writer's refusal only fires when the record is written again, and the record is a file that outlives the run that made it; anything that edits it by hand, or any merge of two peers' writings, gets past that refusal and never meets it again.";
  "A repeated disk name is asked about as well as a repeated given-away name. Two rows naming one file on disk means one recording would be uploaded twice under two names, which wastes nothing but tells a listener there are two songs where there is one.";
  "The expected name is only filled in for the fault that has one. A repeat has no single right answer - which of the two rows is the wrong one is a judgment about the songs - so it is left empty rather than guessed at.";
  let path = giveaway_psalms_songs_path();
  let rows = await file_read_json(path);
  function rebuilt_defect_or_null(row) {
    let rebuilt = giveaway_passage_file_name(
      row.passage_code,
      row.bible_folder,
      row.kind,
      row.mark,
      row.ending,
    );
    let spelled_same = equal(rebuilt, row.name_published);
    if (spelled_same) {
      return null;
    }
    let defect = {
      fault: "name_rebuilt_differs",
      file_name: row.file_name,
      name_published: row.name_published,
      expected: rebuilt,
    };
    return defect;
  }
  function name_repeat_defect(row) {
    let defect = {
      fault: "name_repeated",
      file_name: row.file_name,
      name_published: row.name_published,
      expected: "",
    };
    return defect;
  }
  function file_repeat_defect(row) {
    let defect = {
      fault: "file_repeated",
      file_name: row.file_name,
      name_published: row.name_published,
      expected: "",
    };
    return defect;
  }
  let rebuilt_defects = list_map_filter_null_not_is(
    rows,
    rebuilt_defect_or_null,
  );
  let name_repeats = list_duplicates_by_property(rows, "name_published");
  let file_repeats = list_duplicates_by_property(rows, "file_name");
  let name_repeat_defects = list_map(name_repeats, name_repeat_defect);
  let file_repeat_defects = list_map(file_repeats, file_repeat_defect);
  let defects = list_concat_multiple([
    rebuilt_defects,
    name_repeat_defects,
    file_repeat_defects,
  ]);
  return defects;
}
