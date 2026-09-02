import { arguments_assert } from "./arguments_assert.mjs";
import { property_path_get_2 } from "./property_path_get_2.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { app_shared_gloss_bible_word_row_line } from "./app_shared_gloss_bible_word_row_line.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export function app_shared_gloss_bible_copy_lines_write(
  v,
  texts,
  explains,
  word_property,
) {
  arguments_assert(arguments, 4);
  ("A reader who presses copy on one of these screens gets what the screen shows, not the english alone. The verse in the language being learned goes on the clipboard under the english, and under that a line for every word of it explained - which is the whole of why anybody opened this reader rather than a plain bible. Handing over only the english gave them back the one part of the page they did not come for.");
  ("The lines are written into the list the screen was given rather than handed to the button, because the button was made before this passage had finished arriving. The button reads the list at the moment it is pressed, so lines put here at any time before that press are copied.");
  let lines_copy_extra = property_path_get_2(v, "r", "lines_copy_extra");
  list_add_multiple(lines_copy_extra, texts);
  function lambda(e) {
    let line = app_shared_gloss_bible_word_row_line(e, word_property);
    list_add(lines_copy_extra, line);
  }
  each(explains, lambda);
}
