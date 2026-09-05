import { arguments_assert } from "./arguments_assert.mjs";
import { psalms_song_file_part_or_null_cases } from "./psalms_song_file_part_or_null_cases.mjs";
import { property_get } from "./property_get.mjs";
import { psalms_song_file_part_or_null } from "./psalms_song_file_part_or_null.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function psalms_song_file_part_or_null_cases_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: every song file name written down in the corpus is read as the chapter, verses and take the corpus says, and the ones that name no part of a chapter are refused.");
  ("★ A READING THAT GOES WRONG HERE IS NOT SEEN BY ANYBODY, WHICH IS THE WHOLE REASON TO PIN IT. Too tight a shape passes a song over and the drafting run finishes saying it is done; too loose a shape sends a song to an address that means other verses, and the words shown under it are simply the wrong ones. Neither shows up as a fault anywhere - one looks like a folder with nothing new in it, and the other looks like a video.");
  ("The stanza names are pinned here too, by the verses they come back as. Which eight verses a letter covers is arithmetic from where the letter sits in the list, so a letter quietly inserted or dropped would move every stanza after it by eight verses without changing anything about the shape that reads the name.");
  ("Throws so the dispatcher seam exits nonzero");
  let cases = psalms_song_file_part_or_null_cases();
  function answer(c) {
    let file_name = property_get(c, "file_name");
    let read = psalms_song_file_part_or_null(file_name);
    return read;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "read",
    "name",
    "psalms song file part",
  );
  return r;
}
