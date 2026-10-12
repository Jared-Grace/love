export function bible_glyph_marks_group_misread_accepted() {
  "Every join across a word gap that has been read in its verse and judged harmless, with the reason. The misread gate passes these and refuses any other.";
  "A JOIN IS HARMLESS WHEN ITS GROUP IS BUILT FROM ITS PARTS. Enter is drawn as coming and in, so came in the crowd misread as entered the crowd says nothing the two pictures did not already say. That is true of most groups in this Bible, which is why the gate found joins at all - and false of a name, whose join says somebody nobody wrote: his father Solomon read as Absalom. A name is reseated instead and never listed here.";
  "IT IS KEYED BY VERSE AND GROUP, NEVER BY GROUP ALONE. A group harmless in one verse can be wrong in the next, so each verse is read before it is listed, and a new verse with the same join goes red until somebody reads it.";
  "THE REASON SAYS SAME OR NEAR. Same is a join meaning exactly what the verse means; near is a join whose parts carry the verse's meaning while the group shifts it a little - came from God read as departed God. Near is listed rather than fixed because the fix would be to stop drawing these groups from their parts, which is the whole alphabet.";
  let same =
    "same: the group is drawn from its parts and the join means what the verse means";
  let near =
    "near: the group is drawn from its parts, so the join says what the two pictures already say, shifted a little";
  let r = [
    ["2JN01", 7, "footprints+tray_in", same],
    ["JUD01", 14, "footprints+tray_in", same],
    ["MRK05", 27, "footprints+tray_in", same],
    ["LUK02", 27, "footprints+tray_in", same],
    ["MRK11", 9, "footprints+tray_in", near],
    ["MRK08", 38, "footprints+tray_in", same],
    ["JHN03", 31, "footprints+tray_out", same],
    ["JHN04", 54, "footprints+tray_out", same],
    ["EZK01", 4, "footprints+tray_out", same],
    ["GEN30", 16, "footprints+tray_out", same],
    ["GEN30", 4, "pointing_down+footprints", near],
    ["GEN37", 14, "speech+turn_back", near],
    ["EXO10", 19, "sea+wind", near],
    ["NUM36", 3, "lots+inheritance", same],
    ["GEN39", 5, "person+house", near],
    ["ISA43", 4, "hands_giving+person", near],
    ["JHN03", 2, "footprints+away", near],
    ["2JN01", 6, "walking+pointing_down", near],
    ["LUK02", 41, "walking+pointing_down", near],
    ["ZEP03", 5, "lightbulb+no_entry", near],
  ];
  return r;
}
