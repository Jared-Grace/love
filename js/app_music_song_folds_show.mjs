import { app_shared_button_gap_above } from "./app_shared_button_gap_above.mjs";
import { false_get } from "./false_get.mjs";
import { app_music_lines_instruction_text } from "./app_music_lines_instruction_text.mjs";
import { app_shared_buttons_expand_collapse } from "./app_shared_buttons_expand_collapse.mjs";
import { app_shared_folds } from "./app_shared_folds.mjs";
import { app_shared_folds_set } from "./app_shared_folds_set.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_br_2 } from "./html_br_2.mjs";
import { html_p_text } from "./html_p_text.mjs";
export function app_music_song_folds_show(parent) {
  "Put the top of a song's page in place - the sentence saying that a line opens onto its passages, and the open-everything and shut-everything buttons - and hand back the group of cards those buttons act on.";
  "EVERY SONG'S PAGE OPENS THE SAME WAY, and the two that exist wrote it out twice, down to the same sentence and the same pair of buttons. A third song would have written it a third time, and the first thing to drift would have been the wording of the instruction - which is the one part of the page a reader is being asked to trust.";
  "IT HANDS BACK THE GROUP RATHER THAN KEEPING IT, because the buttons are only half of what the group is for: every line the page then draws joins it, and the page cannot draw a line without it.";
  "BOTH BUTTONS ACT ON THE ONE GROUP, because a song has a single level of cards - unlike the results of a search, where the books sit inside sections and only the books are shut.";
  arguments_assert(arguments, 1);
  let said = app_music_lines_instruction_text();
  html_p_text(parent, said);
  let folds = app_shared_folds();
  function expand_all() {
    app_shared_folds_set(folds, false);
  }
  function collapse_all() {
    app_shared_folds_set(folds, true);
  }
  let groups = [folds];
  ("opening a song is only folding - the passages are already on the page behind the cards - so once every card is open there is nothing further this page could open, and it says so with a flat no");
  let pair = app_shared_buttons_expand_collapse(
    parent,
    expand_all,
    collapse_all,
    groups,
    groups,
    false_get,
  );
  ("EVERY BUTTON DOWN THIS COLUMN KEEPS THE SAME GAP. These two carried only the hair's width a wide button keeps by default, while the way-home button above them keeps the gap this app spaces stacked buttons by - so one column of identically dressed buttons was drawn at two rhythms, the top one standing clear and the bottom two touching. Read down the page that says the pair is one thing and the button above it is another, which is the opposite of what they are.");
  app_shared_button_gap_above(pair.expand);
  app_shared_button_gap_above(pair.collapse);
  html_br_2(parent);
  return folds;
}
