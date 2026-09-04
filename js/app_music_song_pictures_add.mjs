import { arguments_assert } from "./arguments_assert.mjs";
import { list_add } from "./list_add.mjs";
import { html_display_none_or_flex } from "./html_display_none_or_flex.mjs";
export function app_music_song_pictures_add(pictures, row) {
  "Put a drawing and the passages it was drawn from under the page's show and hide buttons, and start them off the way the reader last asked for.";
  "IT IS HANDED THE ROW RATHER THAN THE DRAWING, because the passages beside a drawing are the drawing's own and go with it. What is left behind otherwise is a caret captioned the first picture with no picture next to it.";
  "SHOWING IT FIRST AND HIDING IT AFTERWARDS WOULD BE VISIBLE. A row that appears and then goes flickers, and thirty-six of them flicker thirty-six times, so the answer is applied as it joins rather than by a later sweep over the list.";
  arguments_assert(arguments, 2);
  list_add(pictures.rows, row);
  html_display_none_or_flex(pictures.hidden, row);
}
