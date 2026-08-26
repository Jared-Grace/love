import { app_shared_spaced_large_gap } from "./app_shared_spaced_large_gap.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { app_shared_spaced_tiny_gap } from "./app_shared_spaced_tiny_gap.mjs";
import { html_style_margin_bottom } from "./html_style_margin_bottom.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { song_god_our_savior_sections } from "./song_god_our_savior_sections.mjs";
import { app_music_song_folds_show } from "./app_music_song_folds_show.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
import { html_p_text_centered } from "./html_p_text_centered.mjs";
import { song_god_our_savior_line_references } from "./song_god_our_savior_line_references.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { html_div_text_bold } from "./html_div_text_bold.mjs";
import { app_music_song_line_show } from "./app_music_song_line_show.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { app_music_references_fill } from "./app_music_references_fill.mjs";
export async function app_music_song_god_our_savior_show(parent) {
  "This song's own page: every line it sings in the order it is sung, gathered under the name of the part it belongs to, each line opening to the passages of scripture it rests on.";
  "THE PASSAGES ARE FOLDED BEHIND THE LINES, so what a reader meets is the song rather than a wall of scripture, and the verses behind whichever line raised the question are one tap under it.";
  "A LINE THE SONG ONLY REPEATS IS LEFT OUT, wherever the repeat falls. The tag sings the last line of the fourth verse over again, and drawn a second time it would open onto the passages the first one already showed - so the reader is offered the same scripture twice and learns nothing from the second offer. The singing repeats it; the page does not need to.";
  "A PART WHOSE LINES HAVE ALL BEEN SUNG ALREADY IS NOT ANNOUNCED. The heading is drawn when the first line under it is drawn rather than when the part is reached, which is what stops the tag leaving a name over nothing.";
  "A PART IS NAMED CLOSE OVER ITS OWN LINES AND WELL CLEAR OF THE PART BEFORE IT. A heading starts out wearing the same generous band above it as below, which reads as a name floating between two blocks rather than belonging to either, and the reader has to work out by counting which side it goes with. It belongs to what is under it, so the room under it is cut to almost nothing and the room over it is opened up: the same total distance, spent so that the name and its first line touch. The first part named is the exception and gets no room above it at all - the room above a name is there to stand it off from the part before it, and the first one has no part before it. What it does have above it is the page top matter, which closes with a break of its own, so the opened-up band landed on top of that break and the song started further down the screen than anything else on the page.";
  "A line resting on nothing is drawn plainly rather than as a card that opens on emptiness.";
  "Open-everything and shut-everything sit at the top, because a reader who wants to read the whole song through, or to search it with their browser's own find, cannot do either while the passages are folded away.";
  "The whole song is drawn before any passage is fetched, so a reader who came for the words has them at once and the passages fill in underneath.";
  arguments_assert(arguments, 1);
  let sections = song_god_our_savior_sections();
  let folds = app_music_song_folds_show(parent);
  let sung = [];
  let asked_all = [];
  let headed = false;
  for (let section of sections) {
    let name = property_get(section, "name");
    let lines = property_get(section, "lines");
    let named = false;
    for (let line of lines) {
      let repeated = list_includes(sung, line);
      if (repeated) {
        continue;
      }
      list_add(sung, line);
      let unnamed = not(named);
      if (unnamed) {
        let heading = html_p_text_centered(parent, name);
        let first = not(headed);
        let large = app_shared_spaced_large_gap();
        let above = first ? 0 : large;
        html_style_margin_top(heading, above);
        let below = app_shared_spaced_tiny_gap();
        html_style_margin_bottom(heading, below);
        headed = true;
        named = true;
      }
      let references = song_god_our_savior_line_references(line);
      let unreferenced = list_empty_is(references);
      if (unreferenced) {
        html_div_text_bold(parent, line);
        continue;
      }
      let shown = app_music_song_line_show(folds, parent, line, references);
      list_add_multiple(asked_all, shown.asked_list);
    }
  }
  await app_music_references_fill(asked_all);
}
