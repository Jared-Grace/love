import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_psalms_songs_path } from "./giveaway_psalms_songs_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { giveaway_psalms_songs_rows_items } from "./giveaway_psalms_songs_rows_items.mjs";
export async function giveaway_psalms_songs_items_report() {
  arguments_assert(arguments, 0);
  ("What the archive.org shelf of sung psalms would be, box by box: the name of each box, how many files it holds, and every file it holds with the name it would hold it under. Nothing is uploaded, nothing is written and nothing on the disk is touched.");
  ("★ THIS IS THE STEP BETWEEN A CLEAN RECORD AND AN UPLOAD, AND IT EXISTS SO THE SHELF CAN BE READ BEFORE ANY OF IT IS PERMANENT. Every name in the answer becomes an address that can never be changed - the host refuses a rename, every derivative it builds is named after the original, and a repeated name is not refused but silently replaces the file that was there. So the one cheap moment to find a wrong name is before the first upload, by reading the whole shelf at once; after it, the only remedy is a second box.");
  ("It takes no argument, so that it can be asked at any time by anybody without a decision to make first. The record is where it is, and the recordings themselves are not consulted - which is also why this answers the same on a machine that has never held them.");
  ("A line to a box is printed and the whole shelf is returned, because a hundred lines is readable and five hundred is not. The seam writes the returned answer out in full next to its printed form, so the file listing is one look away and is not in the way.");
  let path = giveaway_psalms_songs_path();
  let rows = await file_read_json(path);
  let items = giveaway_psalms_songs_rows_items(rows);
  for (let item of items) {
    console.log(item.identifier + "  " + item.files_count);
  }
  console.log("boxes: " + items.length + "  files: " + rows.length);
  let r = {
    items_count: items.length,
    files_count: rows.length,
    items,
  };
  return r;
}
