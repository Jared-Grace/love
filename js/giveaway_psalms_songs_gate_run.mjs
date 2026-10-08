import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_psalms_songs_path } from "./giveaway_psalms_songs_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { giveaway_psalms_songs_rows_defects } from "./giveaway_psalms_songs_rows_defects.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export async function giveaway_psalms_songs_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: every row of the frozen giveaway record is a name the naming functions still spell, and no name and no recording is claimed twice. Throws so the dispatcher seam exits nonzero.");
  ("★ THIS IS THE LAST CHECK BEFORE A NAME BECOMES PERMANENT. The name a file is uploaded under is its address for good: archive.org never lets it be changed, every derivative it makes is named after it, and the tag written into a derived mp3 carries no title and no artist at all - checked on two items of two - so that name is the only words a music player will ever show a listener. A wrong name is therefore not a tidying job but a thing that stays wrong for everybody who ever downloads it. Before this gate the only thing standing in the way was that somebody happened to read the record: that is how the half-verse padding fault was found, and it is not a method.");
  ("The record is read here and judged next door, so that the judging can be handed rows on purpose and every fault it can name can be shown to fire. A gate that did both could only ever be run against a record that is clean, which is to say it could only ever be run against the one case that proves nothing.");
  ("Nothing here looks at the folder the songs were read from. The gate has to give the same answer on a machine that has never held the recordings, and a gate that reached for the disk would be red for every peer and green only here.");
  let path = giveaway_psalms_songs_path();
  let rows = await file_read_json(path);
  let defects = giveaway_psalms_songs_rows_defects(rows);
  for (let one of defects) {
    let fault = property_get(one, "fault");
    let file_name = property_get(one, "file_name");
    let name_published = property_get(one, "name_published");
    let expected = property_get(one, "expected");
    console.log(
      fault + "  " + file_name + "  " + name_published + "  " + expected,
    );
  }
  console.log(
    "giveaway name defects: " + defects.length + "  of rows: " + rows.length,
  );
  if (list_empty_not_is(defects)) {
    throw new Error(
      "giveaway psalms songs gate: " +
        defects.length +
        " rows of the frozen record are names no function spells, or are claimed twice - was the record edited by hand, or a naming rule changed after it was frozen?",
    );
  }
  let r = {
    defects: 0,
    rows: rows.length,
  };
  return r;
}
