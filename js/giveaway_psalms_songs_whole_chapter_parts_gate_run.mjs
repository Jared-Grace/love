import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_psalms_songs_path } from "./giveaway_psalms_songs_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { giveaway_psalms_songs_whole_chapter_parts } from "./giveaway_psalms_songs_whole_chapter_parts.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export async function giveaway_psalms_songs_whole_chapter_parts_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: no recording in the giveaway record names a verse range that covers the whole of its chapter, so no psalm goes up at two addresses. Throws so the dispatcher seam exits nonzero.");
  ("★ IT IS ASKED BEFORE THE UPLOAD BECAUSE AFTERWARDS THERE IS NO ASKING. A name on archive.org is permanent: it is the address, it is the name of every derivative made from it, and it is the only words a music player shows a listener. One psalm arriving under two passage codes is therefore not a tidying job afterwards but a split that stays split for everybody who ever downloads it, and the whole of the cheapness of fixing it is in the word before.");
  ("★ THIS IS THE FIRST CHECK ON THIS RECORD THAT REACHES OUTSIDE IT, SO IT IS THE FIRST ONE THAT CAN BE SLOW OR CAN FAIL FOR A REASON THAT IS NOBODY'S FAULT. Every other check here compares the record against itself. This one needs to know how many verses a psalm has, and only the text of the psalm says that, so it waits on a machine somewhere else. The reading keeps what it fetches on this disk, so the waiting is paid once and a later run is quick; a run on a machine that has never fetched them pays the whole wait, and a run with nothing to reach fails rather than passing quietly.");
  ("The record is read here and judged next door, the same way the other gate on this record is built, so that the judging can be handed rows on purpose and shown to fire.");
  ("Each offending row is printed whole before the count, because the repair is a rename on somebody's disk and the person doing it needs the name that is there now as well as the chapter number the range turned out to cover.");
  let path = giveaway_psalms_songs_path();
  let rows = await file_read_json(path);
  let found = await giveaway_psalms_songs_whole_chapter_parts(rows);
  for (let one of found) {
    console.log(
      one.file_name +
        "  " +
        one.name_published +
        "  sings all " +
        one.chapter_verse_last +
        " verses of psalm " +
        one.chapter,
    );
  }
  console.log(
    "giveaway whole chapter parts: " +
      found.length +
      "  of rows: " +
      rows.length,
  );
  if (list_empty_not_is(found)) {
    throw new Error(
      "giveaway psalms songs whole chapter parts gate: " +
        found.length +
        " recordings name a verse range covering their whole chapter, so one psalm would go up at two permanent addresses - the repair is to rename the file without the range",
    );
  }
  let r = {
    whole_chapter_parts: 0,
    rows: rows.length,
  };
  return r;
}
