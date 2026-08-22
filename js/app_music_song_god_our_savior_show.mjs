import { arguments_assert } from "./arguments_assert.mjs";
import { song_god_our_savior_sections } from "./song_god_our_savior_sections.mjs";
import { app_music_lines_instruction_text } from "./app_music_lines_instruction_text.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { app_shared_folds } from "./app_shared_folds.mjs";
import { app_shared_folds_set } from "./app_shared_folds_set.mjs";
import { app_shared_buttons_expand_collapse } from "./app_shared_buttons_expand_collapse.mjs";
import { html_br_2 } from "./html_br_2.mjs";
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
  "A line resting on nothing is drawn plainly rather than as a card that opens on emptiness.";
  "Open-everything and shut-everything sit at the top, because a reader who wants to read the whole song through, or to search it with their browser's own find, cannot do either while the passages are folded away.";
  "The whole song is drawn before any passage is fetched, so a reader who came for the words has them at once and the passages fill in underneath.";
  arguments_assert(arguments, 1);
  let sections = song_god_our_savior_sections();
  let said = app_music_lines_instruction_text();
  html_p_text(parent, said);
  let folds = app_shared_folds();
  function expand_all() {
    app_shared_folds_set(folds, false);
  }
  function collapse_all() {
    app_shared_folds_set(folds, true);
  }
  ("both buttons act on the one group of cards, because a song has a single level of them - unlike the results of a search, where the books sit inside sections and only the books are shut");
  let groups = [folds];
  app_shared_buttons_expand_collapse(
    parent,
    expand_all,
    collapse_all,
    groups,
    groups,
  );
  html_br_2(parent);
  let sung = [];
  let asked_all = [];
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
        html_p_text_centered(parent, name);
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
