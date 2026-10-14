import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_is } from "./text_is.mjs";
import { not } from "./not.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { giveaway_record_row_picture_is } from "./giveaway_record_row_picture_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
export function giveaway_psalms_pictures_repo_defects(rows, paths_present) {
  arguments_assert(arguments, 2);
  ("$plain rows");
  ("$plain paths_present");
  ("Every picture row of the frozen giveaway record whose file this repo no longer holds, and every one that never said where its file was.");
  ("★ THIS IS THE PICTURES' HALF OF THE ONE QUESTION THAT DECIDES WHETHER AN UPLOAD IS SAFE, AND UNTIL NOW ONLY THE RECORDINGS HAD IT ASKED. A row pairs a file on this machine with a name it will be published under forever, and the pairing can rot from the file's side without a single row changing. The recordings have had that asked of them since the record was written; one thousand eight hundred and thirteen of the two thousand three hundred and twenty-four rows are crops, and nothing asked it of them at all.");
  ("★ ASKING IT FROM THE RECORD IS NOT THE SAME QUESTION AS ASKING IT FROM THE TIMING DOCUMENTS, WHICH IS WHY BOTH ARE NEEDED. ",
    fn_name("giveaway_psalms_paintings_files_missing"),
    " walks the documents and so finds a crop that was never drawn - a thing no row can report, because a row only exists once a document named the file. This walks the record and so finds a crop whose document has since been retired: the row is frozen in the record and the walk that would have noticed it no longer passes that way. Retiring a superseded document is a repair somebody is expected to make, so that case is not hypothetical.");
  ("★ A PICTURE ROW WITH NO PATH AT ALL IS REPORTED RATHER THAN PASSED OVER, BECAUSE AN ABSENT FIELD IS THE SHAPE A FAILED LOOKUP TAKES. A crop's name says which painting it is and never which of nearly four hundred folders it sits in, so the path is the only way anything can find the file - a row without one is a file that quietly cannot be found, in a box that would be uploaded anyway. Reported as a fault, it is a sentence; passed over, it would make this check pass by having nothing to look up.");
  ("★ NO PATH MEANS BOTH A MISSING FIELD AND AN EMPTY ONE, AND THE FIRST WRITING OF THIS ASKED ONLY WHETHER THE FIELD WAS TEXT - WHICH AN EMPTY WORD IS. A row carrying an empty path then came back as a file that had gone, which is the wrong fault and sends somebody looking in a folder for a file nobody ever said was there. The written case caught it on the first run. Both shapes arrive the same way, by a hand edit or a merge of two peers' records, so neither is more worth catching than the other.");
  ("The paths that are there are handed in rather than looked up here, so that both faults can be shown to fire without a file having to be deleted to show them. The reaching for the disk belongs to the report above, which is the part that knows the record is read relative to this repo.");
  ("Only the picture rows are asked about. A recording is not in this repo and never was, and the words of a psalm are written at the moment a box is built and have no file on this disk at any time - so either one asked this question would be reported absent for being exactly what it is.");
  function path_written_is(row) {
    let spelled = text_is(row.path_in_repo);
    if (not(spelled)) {
      return false;
    }
    let filled = text_empty_not_is(row.path_in_repo);
    return filled;
  }
  let picture_rows = list_filter(rows, giveaway_record_row_picture_is);
  let defects = [];
  for (let row of picture_rows) {
    let written = path_written_is(row);
    if (not(written)) {
      let pathless = {
        fault: "picture_path_unwritten",
        file_name: row.file_name,
        name_published: row.name_published,
        path_in_repo: "",
      };
      list_add(defects, pathless);
      continue;
    }
    let present = list_includes(paths_present, row.path_in_repo);
    if (not(present)) {
      let gone = {
        fault: "picture_file_absent",
        file_name: row.file_name,
        name_published: row.name_published,
        path_in_repo: row.path_in_repo,
      };
      list_add(defects, gone);
    }
  }
  return defects;
}
