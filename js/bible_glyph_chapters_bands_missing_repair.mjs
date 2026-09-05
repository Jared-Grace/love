import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { bible_glyph_chapters_rosetta_lines } from "./bible_glyph_chapters_rosetta_lines.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { bible_glyph_chapter_rosetta_lines_name } from "./bible_glyph_chapter_rosetta_lines_name.mjs";
import { function_unalias_exists_not } from "./function_unalias_exists_not.mjs";
import { bible_glyph_chapter_rosetta_lines_write } from "./bible_glyph_chapter_rosetta_lines_write.mjs";
import { function_list_call_add } from "./function_list_call_add.mjs";
import { bible_glyph_chapters_tagalog_write } from "./bible_glyph_chapters_tagalog_write.mjs";
import { bible_glyph_chapters_urdu_write } from "./bible_glyph_chapters_urdu_write.mjs";
export async function bible_glyph_chapters_bands_missing_repair() {
  "Finds every picture Bible chapter whose Rosetta bands are not named beside it, writes and registers the ones that are short, then rebuilds both reveal languages once.";
  ("IT FINDS ITS OWN SET BECAUSE THE SET IS THE THING THAT KEEPS CHANGING. Picture chapters are authored in bursts - nine landed between one gate run and the next - and each one reds ",
    fn_name("bible_glyph_chapters_rosetta_lines_gate_run"),
    " and ",
    fn_name("bible_glyph_chapters_language_gate_run"),
    " until its bands are written. Repairing that by hand means calling the single-chapter writer once per code, which leaves nothing behind and cannot be replayed; asking the two lists what disagrees costs nothing and cannot drift from what is actually broken.");
  ("IT KEYS ON REGISTRATION AND NOT ON THE FILE EXISTING, WHICH IS THE FAULT THE SINGLE-CHAPTER WRITER STILL HAS. The gate asks whether a chapter code appears in the bands list. A chapter can have its lines file written and never be added to that list - a run that died between the two steps leaves exactly that - and a check that asks only whether the file exists then skips the registration too, so the gate stays red with the repair reporting nothing to do. So the two steps are asked separately here: write the file only if it is missing, register it always, because being in the bandless set is itself the proof that it is not registered.");
  ("IT REBUILDS THE TWO REVEAL LANGUAGES ONCE, AT THE END. Both writers take no argument and rewrite their whole file from the picture chapter list, so running them per chapter would do the same whole-file work N times over and land the same answer. They run after the loop rather than inside it because the last run is the only one whose output survives.");
  ("IT DOES NOT ASK AGAIN TO PROVE IT WORKED, AND THAT IS DELIBERATE RATHER THAN A GAP. The bands list is read through an import, so the copy this process holds was fixed when the process started; re-asking it here would re-read that same stale copy and report success no matter what happened on disk. A proof that cannot fail is worse than no proof. Run the gate in a fresh process to check.");
  let drawn = bible_glyph_chapters();
  let banded = bible_glyph_chapters_rosetta_lines();
  let banded_codes = [];
  for (let banded_chapter of banded) {
    let banded_code = property_get(banded_chapter, "chapter_code");
    list_add(banded_codes, banded_code);
  }
  let bands_list = fn_name("bible_glyph_chapters_rosetta_lines");
  let written = [];
  let registered = [];
  for (let drawn_chapter of drawn) {
    let drawn_code = property_get(drawn_chapter, "chapter_code");
    if (list_includes_not(banded_codes, drawn_code)) {
      let lines_name = bible_glyph_chapter_rosetta_lines_name(drawn_code);
      let lines_missing = await function_unalias_exists_not(lines_name);
      if (lines_missing) {
        await bible_glyph_chapter_rosetta_lines_write(drawn_code);
        list_add(written, drawn_code);
      }
      await function_list_call_add(bands_list, lines_name);
      list_add(registered, drawn_code);
      list_add(banded_codes, drawn_code);
    }
  }
  let tagalog = await bible_glyph_chapters_tagalog_write();
  let urdu = await bible_glyph_chapters_urdu_write();
  let report = {
    written,
    registered,
    bands_list,
    tagalog,
    urdu,
  };
  return report;
}
