import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_psalms_record_path } from "./giveaway_psalms_record_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { list_filter } from "./list_filter.mjs";
import { giveaway_record_row_picture_is } from "./giveaway_record_row_picture_is.mjs";
import { file_exists } from "./file_exists.mjs";
import { list_add } from "./list_add.mjs";
import { giveaway_psalms_pictures_repo_defects } from "./giveaway_psalms_pictures_repo_defects.mjs";
export async function giveaway_psalms_pictures_repo_report() {
  arguments_assert(arguments, 0);
  ("Whether the frozen giveaway record's cropped paintings are all still in this repo: rows naming a file that has gone, and rows that never said where their file was. It reads and prints and writes nothing.");
  ("★ ASK THIS IMMEDIATELY BEFORE AN UPLOAD, BESIDE THE SAME QUESTION ABOUT THE RECORDINGS, AND TREAT ANY ANSWER BUT NOUGHT AS A REASON TO REFRESH THE RECORD FIRST. Once a file is up its name is its address forever, so a row pointing at a crop that is no longer there is a published name with nothing behind it - and whatever does the uploading finds a file it cannot open rather than a fault it was told about. The window in which that is free to fix closes at the first upload and never opens again.");
  ("★ IT TAKES NO ARGUMENT, UNLIKE THE RECORDINGS' REPORT, AND THE DIFFERENCE IS REAL RATHER THAN AN INCONSISTENCY. A recording lives in a download folder that is nobody's business but the owner's, so that report takes the folder and the record's writer takes it too, and the two must be asked about the same place. A crop lives in this repo at the path its own row carries, so there is nothing to choose and nothing a caller could get wrong.");
  ("The path is opened exactly as the row spells it, which is how the check beside it on the documents' side opens the same files. Working the path out again from the picture's name would be a second spelling of one thing, and the way two spellings disagree is a file reported absent while it sits on the disk.");
  ("The judging is next door and is handed the paths that are there, so both faults can be shown to fire without a file having to be deleted to show them. This half only reads, prints and throws nothing.");
  let path = giveaway_psalms_record_path();
  let rows = await file_read_json(path);
  let picture_rows = list_filter(rows, giveaway_record_row_picture_is);
  let paths_present = [];
  for (let row of picture_rows) {
    let there = await file_exists(row.path_in_repo);
    if (there) {
      list_add(paths_present, row.path_in_repo);
    }
  }
  let defects = giveaway_psalms_pictures_repo_defects(rows, paths_present);
  for (let one of defects) {
    console.log(
      one.fault + "  " + one.name_published + "  " + one.path_in_repo,
    );
  }
  console.log(
    "picture defects: " +
      defects.length +
      "  picture rows: " +
      picture_rows.length +
      "  files found: " +
      paths_present.length,
  );
  let r = {
    defects_count: defects.length,
    picture_rows_count: picture_rows.length,
    present_count: paths_present.length,
    defects,
  };
  return r;
}
