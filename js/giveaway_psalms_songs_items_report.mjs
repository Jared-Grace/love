import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_psalms_songs_path } from "./giveaway_psalms_songs_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { giveaway_psalms_songs_rows_items } from "./giveaway_psalms_songs_rows_items.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_sum } from "./list_sum.mjs";
export async function giveaway_psalms_songs_items_report() {
  arguments_assert(arguments, 0);
  ("What the archive.org shelf of sung psalms would be, box by box: the name of each box, how many files it holds, and every file it holds with the name it would hold it under. Nothing is uploaded, nothing is written and nothing on the disk is touched.");
  ("★ THIS IS THE STEP BETWEEN A CLEAN RECORD AND AN UPLOAD, AND IT EXISTS SO THE SHELF CAN BE READ BEFORE ANY OF IT IS PERMANENT. Every name in the answer becomes an address that can never be changed - the host refuses a rename, every derivative it builds is named after the original, and a repeated name is not refused but silently replaces the file that was there. So the one cheap moment to find a wrong name is before the first upload, by reading the whole shelf at once; after it, the only remedy is a second box.");
  ("It takes no argument, so that it can be asked at any time by anybody without a decision to make first. The record is where it is, and the recordings themselves are not consulted - which is also why this answers the same on a machine that has never held them.");
  ("A line to a box is printed and the whole shelf is returned, because a hundred lines is readable and five hundred is not. The seam writes the returned answer out in full next to its printed form, so the file listing is one look away and is not in the way.");
  ("★ THE FILE COUNT IS ADDED UP OUT OF THE BOXES AND IS NO LONGER THE NUMBER OF ROWS IN THE RECORD, BECAUSE A BOX HOLDS MORE THAN THE RECORD WRITES DOWN. Every box also carries the words of its psalm, three files named from the psalm's number with nothing written down about them, so the record's row count came out five hundred and two against a shelf of seven hundred and forty-eight. A total that disagrees with the lines printed just above it is worse than no total: it reads as the shelf being wrong rather than the adding.");
  let path = giveaway_psalms_songs_path();
  let rows = await file_read_json(path);
  let items = giveaway_psalms_songs_rows_items(rows);
  let counts = list_map_property(items, "files_count");
  let files_count = list_sum(counts);
  for (let item of items) {
    console.log(item.identifier + "  " + item.files_count);
  }
  console.log(
    "boxes: " +
      items.length +
      "  files: " +
      files_count +
      "  recorded: " +
      rows.length,
  );
  let r = {
    items_count: items.length,
    files_count,
    rows_count: rows.length,
    items,
  };
  return r;
}
