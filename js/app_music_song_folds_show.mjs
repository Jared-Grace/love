import { arguments_assert } from "./arguments_assert.mjs";
import { app_music_lines_instruction_text } from "./app_music_lines_instruction_text.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { app_shared_folds } from "./app_shared_folds.mjs";
import { app_shared_folds_set } from "./app_shared_folds_set.mjs";
import { app_shared_buttons_expand_collapse } from "./app_shared_buttons_expand_collapse.mjs";
import { false_get } from "./false_get.mjs";
import { app_shared_button_gap_above } from "./app_shared_button_gap_above.mjs";
import { html_br } from "./html_br.mjs";
export function app_music_song_folds_show(parent) {
  "Put the top of a song's page in place - the sentence saying that a line opens onto its passages, and the open-everything and shut-everything buttons - and hand back the group of cards those buttons act on.";
  "EVERY SONG'S PAGE OPENS THE SAME WAY, and the two that exist wrote it out twice, down to the same sentence and the same pair of buttons. A third song would have written it a third time, and the first thing to drift would have been the wording of the instruction - which is the one part of the page a reader is being asked to trust.";
  "IT HANDS BACK THE GROUP RATHER THAN KEEPING IT, because the buttons are only half of what the group is for: every line the page then draws joins it, and the page cannot draw a line without it.";
  "BOTH BUTTONS ACT ON THE ONE GROUP, because a song has a single level of cards - unlike the results of a search, where the books sit inside sections and only the books are shut.";
  "THEY SAY THE PASSAGES UNDER THE LYRICS AND NOT MERELY EVERYTHING, because this page hides two kinds of thing behind carets: the passages a sung line rests on, and the passages a picture was drawn from. A bare open everything names both and moves one, and a reader who pressed it and watched the pictures' carets stay shut has been told the button is broken.";
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
    "lyric Bible passages",
  );
  ("EVERY BUTTON DOWN THIS COLUMN KEEPS THE SAME GAP. These two carried only the hair's width a wide button keeps by default, while the way-home button above them keeps the gap this app spaces stacked buttons by - so one column of identically dressed buttons was drawn at two rhythms, the top one standing clear and the bottom two touching. Read down the page that says the pair is one thing and the button above it is another, which is the opposite of what they are.");
  app_shared_button_gap_above(pair.expand);
  app_shared_button_gap_above(pair.collapse);
  ("ONE BREAK UNDER THE BUTTONS AND NOT TWO. The song opens with the name of its first part, and that name is drawn with no room above it because there is no part before it to stand clear of - so whatever is left here is the whole distance between the last button and the first word of the song. Two breaks made that gap larger than any other on the page and pushed the song down out of the first screen.");
  html_br(parent);
  return folds;
}
