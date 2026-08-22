import { html_p_text_centered } from "./html_p_text_centered.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { song_image_couplets } from "./song_image_couplets.mjs";
import { app_music_lines_instruction_text } from "./app_music_lines_instruction_text.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { app_shared_collapse_setters_set } from "./app_shared_collapse_setters_set.mjs";
import { app_shared_buttons_expand_collapse } from "./app_shared_buttons_expand_collapse.mjs";
import { html_br_2 } from "./html_br_2.mjs";
import { text_combine } from "./text_combine.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { song_image_couplet_references } from "./song_image_couplet_references.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { html_div_text_bold } from "./html_div_text_bold.mjs";
import { app_music_song_line_show } from "./app_music_song_line_show.mjs";
import { list_add } from "./list_add.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { app_music_references_fill } from "./app_music_references_fill.mjs";
import { not_equal } from "./not_equal.mjs";
export async function app_music_song_image_couplets_show(parent) {
  "The hymn's own page: every line it sings in the order it is sung, each one opening to the passages of scripture it rests on.";
  "THE PASSAGES ARE FOLDED BEHIND THE LINES. Written out flat this song runs to some twenty thousand letters, and a reader looking for the words of one line would be scrolling past ninety passages to find them. Folded, the page is the song - and the scripture is one tap under whichever line raised the question.";
  "A LINE THE SONG ONLY REPEATS IS LEFT OUT. Written down, the same words twice in a row read as a mistake rather than as a refrain, and the second card would open onto the passages the first one already showed - so the reader is offered the same scripture twice and learns nothing from the second offer. The singing repeats it; the page does not need to.";
  "A line resting on nothing is drawn plainly rather than as a card that opens on emptiness.";
  "Open-everything and shut-everything sit at the top, because a reader who wants to read the whole song through, or to search it with their browser's own find, cannot do either while ninety passages are folded away.";
  "The whole song is drawn before any passage is fetched, so a reader who came for the words has them at once and the passages fill in underneath.";
  arguments_assert(arguments, 1);
  let couplets = song_image_couplets();
  let said = app_music_lines_instruction_text();
  html_p_text(parent, said);
  let setters = [];
  function expand_all() {
    app_shared_collapse_setters_set(setters, false);
  }
  function collapse_all() {
    app_shared_collapse_setters_set(setters, true);
  }
  app_shared_buttons_expand_collapse(parent, expand_all, collapse_all);
  html_br_2(parent);
  let verse_shown = 0;
  let asked_all = [];
  for (let couplet of couplets) {
    let repeated = not_equal(couplet.same_as, 0);
    if (repeated) {
      continue;
    }
    let verse_new = not_equal(couplet.verse, verse_shown);
    if (verse_new) {
      verse_shown = couplet.verse;
      let heading = text_combine("verse ", verse_shown);
      html_p_text_centered(parent, heading);
    }
    let halves = [couplet.first, couplet.second];
    let words = list_join_space(halves);
    let references = song_image_couplet_references(couplet.n);
    let unreferenced = list_empty_is(references);
    if (unreferenced) {
      html_div_text_bold(parent, words);
      continue;
    }
    let shown = app_music_song_line_show(parent, words, references);
    list_add(setters, shown.collapsed_set);
    list_add_multiple(asked_all, shown.asked_list);
  }
  await app_music_references_fill(asked_all);
}
