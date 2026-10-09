import { arguments_assert } from "./arguments_assert.mjs";
import { list_all_is } from "./list_all_is.mjs";
import { text_is } from "./text_is.mjs";
import { not } from "./not.mjs";
import { giveaway_passage_file_name } from "./giveaway_passage_file_name.mjs";
import { equal } from "./equal.mjs";
import { list_map_filter_null_not_is } from "./list_map_filter_null_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { giveaway_psalms_songs_row_passage_defect_or_null } from "./giveaway_psalms_songs_row_passage_defect_or_null.mjs";
import { list_duplicates_by_property } from "./list_duplicates_by_property.mjs";
import { list_map } from "./list_map.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
export function giveaway_psalms_songs_rows_defects(rows) {
  arguments_assert(arguments, 1);
  ("$plain rows");
  ("Every row of a giveaway record that the naming functions do not stand behind, one fault to a row.");
  ("★ NOTHING MAY BE UPLOADED UNDER A NAME NO FUNCTION SPELLED, BECAUSE A NAME IS THE ONE THING ARCHIVE.ORG NEVER LETS YOU CHANGE. A name on an item is its address, the name of every derivative made from it, and - since the tag written into a derived mp3 carries no title and no artist, checked on two items of two - the only words a music player will ever show a listener. So a name that went up wrong stays wrong for everybody who ever downloads it, and the only place the mistake is cheap is before the upload. Up to now the only thing standing between a wrong name and the public was that somebody happened to read the record: the half-verse padding fault was caught that way and the clashing take number was caught by an assert that only runs when the record is rewritten. This asks the question on every run of the gate instead.");
  ("★ THE NAME IS CHECKED BY SPELLING IT AGAIN FROM THE PIECES STORED BESIDE IT, NOT BY READING IT APART. Reading a name apart was the first plan and it does not work: a name is cut at the underscores, and two of the fifteen hundred and twenty-eight translation folders on this disk have an underscore inside them - fra_fob and knv-fly_river - so a reader counting words cannot say which word is the translation and which is the kind. Spelling it again needs no reading and proves more: it says the stored name is still what the naming rule produces, so changing that rule turns into a failure somebody reads rather than a silent rename of files that are already published.");
  ("The faults are gathered into one list rather than returned apart, because each of them has the same consequence - a file would go up under a name nobody can justify - and a caller that had to ask four questions could be written to ask three.");
  ("★ ONE OF THE FOUR IS ASKED OF SOMETHING OTHER THAN THE RECORD, AND IT IS THE ONLY ONE THAT CAN FIND A PASSAGE WRONG. Spelling the name again from the pieces beside it proves the name and the pieces agree; it says nothing at all about whether the pieces are right, because a name spelled from the wrong passage matches that wrong passage exactly. The name the recording carries on this disk is the one witness here that this record did not write, so the passage is put to it. That question lives in its own function because it reads a file name by a rule two other functions already hold, and because what it can and cannot catch needs a paragraph of its own.");
  ("The passage is only put to the rows whose pieces are all spelled. A row with no passage code at all is already being reported as missing its pieces, and asking a second time what its passage should have been would name one row twice for one fault.");
  ("A repeated name is still asked about here even though the writer refuses to write one. The writer's refusal only fires when the record is written again, and the record is a file that outlives the run that made it; anything that edits it by hand, or any merge of two peers' writings, gets past that refusal and never meets it again.");
  ("A repeated disk name is asked about as well as a repeated given-away name. Two rows naming one file on disk means one recording would be uploaded twice under two names, which wastes nothing but tells a listener there are two songs where there is one.");
  ("★ A ROW MISSING ONE OF THE PIECES IS A FAULT THIS REPORTS, NOT A CRASH IT DIES OF. The first version went straight to spelling the name again, and run against the record as it then stood - which held only the two names - it threw out of an assert four functions down, naming a check rather than a row. That is the wrong answer even though it is a loud one: a gate exists to say which rows are wrong, and a record written before the pieces were kept, or merged from a peer who had an older one, is exactly the case somebody needs told plainly. The pieces are tested for being spelled at all before anything is built out of them.");
  ("The expected name is only filled in for the fault that has one. A repeat has no single right answer - which of the two rows is the wrong one is a judgment about the songs - so it is left empty rather than guessed at.");
  ("★ THE ROWS ARE HANDED IN RATHER THAN READ OFF THE DISK HERE, SO THAT EVERY FAULT THIS NAMES CAN BE SHOWN TO FIRE. A version that opened the record itself could only ever be run against whatever the record happened to say, and the record is clean - so the branch that catches a missing piece, and the two that catch a repeat, would have sat there unexercised and would read as working whether they worked or not. Taking the rows makes each fault a thing somebody can hand in on purpose. The reading belongs to the gate above, which is the part that knows where the record is kept.");
  function row_pieces(row) {
    let pieces = [
      row.passage_code,
      row.bible_folder,
      row.kind,
      row.mark,
      row.ending,
    ];
    return pieces;
  }
  function row_pieces_spelled_is(row) {
    let pieces = row_pieces(row);
    let all_spelled = list_all_is(pieces, text_is);
    return all_spelled;
  }
  function rebuilt_defect_or_null(row) {
    let all_spelled = row_pieces_spelled_is(row);
    if (not(all_spelled)) {
      let missing = {
        fault: "pieces_missing",
        file_name: row.file_name,
        name_published: row.name_published,
        expected: "",
      };
      return missing;
    }
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
  let spelled_rows = list_filter(rows, row_pieces_spelled_is);
  let passage_defects = list_map_filter_null_not_is(
    spelled_rows,
    giveaway_psalms_songs_row_passage_defect_or_null,
  );
  let name_repeats = list_duplicates_by_property(rows, "name_published");
  let file_repeats = list_duplicates_by_property(rows, "file_name");
  let name_repeat_defects = list_map(name_repeats, name_repeat_defect);
  let file_repeat_defects = list_map(file_repeats, file_repeat_defect);
  let defects = list_concat_multiple([
    rebuilt_defects,
    passage_defects,
    name_repeat_defects,
    file_repeat_defects,
  ]);
  return defects;
}
