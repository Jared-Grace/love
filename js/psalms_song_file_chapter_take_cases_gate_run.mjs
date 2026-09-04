import { psalms_song_file_chapter_take_cases } from "./psalms_song_file_chapter_take_cases.mjs";
import { property_get } from "./property_get.mjs";
import { psalms_song_file_chapter_take } from "./psalms_song_file_chapter_take.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function psalms_song_file_chapter_take_cases_gate_run() {
  "QA gate: every song file name written down in the corpus is read as the chapter and take the corpus says, and the ones that name no whole chapter are refused.";
  "★ THE FOLDER IT READS IS SOMEBODY ELSE'S AND CHANGES WITHOUT WARNING. The songs arrive by download, named by whatever made them, and a new batch written some other way would be swept up silently by a shape that is too loose or passed over silently by one that is too tight. Neither shows anywhere: a drafting run that finds no new songs and a drafting run that finds a wrong one both finish saying they are done.";
  "Throws so the dispatcher seam exits nonzero";
  let cases = psalms_song_file_chapter_take_cases();
  function answer(c) {
    let file_name = property_get(c, "file_name");
    let read = psalms_song_file_chapter_take(file_name);
    return read;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "read",
    "name",
    "psalms song file chapter take",
  );
  return r;
}
