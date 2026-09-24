import { picture_swaps_undecided_each } from "./picture_swaps_undecided_each.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { song_image_page_shell } from "./song_image_page_shell.mjs";
import { song_image_brighter_swaps_name } from "./song_image_brighter_swaps_name.mjs";
import { api_read } from "./api_read.mjs";
import { fn_name } from "./fn_name.mjs";
import { null_is } from "./null_is.mjs";
import { song_image_text_quiet_line } from "./song_image_text_quiet_line.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { property_get } from "./property_get.mjs";
import { song_image_brighter_card } from "./song_image_brighter_card.mjs";
export async function song_image_brighter_preview() {
  "The hymn's pictures that were asked to be brighter, each set beside its brighter copy, on the sandbox app at the hash song_image_brighter - a press accepts a picture and a box under each says what is still wrong.";
  "BEFORE AND AFTER SIT SIDE BY SIDE, because brighter is only ever brighter than something; seen alone, the copy is judged against a memory of the original.";
  "WHICH COUPLETS ARE HERE IS WHATEVER THE LIST NAMES, and the list is written by the command that draws the copies, so a fresh round is one command and this file never changes.";
  "WITH NO LIST WRITTEN IT SAYS SO rather than coming up blank, because a blank page reads as one that failed to load.";
  "AN APPROVED PICTURE IS LEFT OFF, because the page is a list of what still needs a decision; it is left off only when the page opens and never the moment it is approved, so a press made by mistake can still be taken back, and a line says how many were left off so an empty page is not read as a broken one.";
  arguments_assert(arguments, 0);
  let said =
    "each picture as published, beside a brighter copy - press Approve under one to accept it " +
    "(it is saved at once; press again to take it back, and once approved it is left off this page the next time it opens), " +
    "and use the box under it to say what is still wrong";
  let root = song_image_page_shell(said);
  let name = song_image_brighter_swaps_name();
  let swaps = await api_read(fn_name("lyric_video_song_swaps_read"), [name]);
  if (null_is(swaps)) {
    let empty = song_image_text_quiet_line(root);
    html_text_set(empty, "no brighter copies have been drawn yet");
    return root;
  }
  let listed = property_get(swaps, "swaps");
  function card(swap) {
    song_image_brighter_card(root, swap, name);
  }
  let hidden = picture_swaps_undecided_each(listed, card);
  let count = song_image_text_quiet_line(root);
  html_text_set(count, hidden + " already approved, not shown");
  return root;
}
