import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_psalms_songs_path } from "./giveaway_psalms_songs_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { psalms_songs_folder_passages } from "./psalms_songs_folder_passages.mjs";
import { path_basename } from "./path_basename.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { giveaway_psalms_songs_disk_defects } from "./giveaway_psalms_songs_disk_defects.mjs";
export async function giveaway_psalms_songs_disk_report(folder_audio) {
  arguments_assert(arguments, 1);
  ("$plain folder_audio");
  ("Whether the frozen giveaway record still matches the recordings in a folder: rows naming files that have gone, and recordings no row names. It reads and prints and writes nothing.");
  ("★ ASK THIS IMMEDIATELY BEFORE AN UPLOAD, AND TREAT ANY ANSWER BUT NOUGHT AS A REASON TO REFRESH THE RECORD BEFORE GOING ON. Once a file is up, its name is its address forever, so a row pointing at a recording that no longer exists is a published name with nothing behind it or - worse - with a different singing behind it after the next refresh renumbers the takes. The window in which that is free to fix closes at the first upload and never opens again.");
  ("It takes the folder rather than knowing one, because the writer of the record takes the folder too and the two must be asked about the same place. A command that knew a folder of its own could answer about one folder while the record was built from another, and agree with itself the whole time.");
  ("The walk is the record writer's own walk, so the set of recordings being compared is the same set the record was built from. Listing the folder separately here would be a second rule for what counts as a sung psalm, and the day the two rules disagreed this would report faults that are only the disagreement.");
  let path = giveaway_psalms_songs_path();
  let rows = await file_read_json(path);
  let founds = await psalms_songs_folder_passages(folder_audio);
  async function found_file_name(found) {
    let file_name = await path_basename(found.path_audio);
    return file_name;
  }
  let file_names_disk = await list_map_async(founds, found_file_name);
  let defects = giveaway_psalms_songs_disk_defects(rows, file_names_disk);
  for (let one of defects) {
    console.log(one.fault + "  " + one.file_name + "  " + one.name_published);
  }
  console.log(
    "disk defects: " +
      defects.length +
      "  rows: " +
      rows.length +
      "  on disk: " +
      file_names_disk.length,
  );
  let r = {
    defects_count: defects.length,
    rows_count: rows.length,
    disk_count: file_names_disk.length,
    defects,
  };
  return r;
}
