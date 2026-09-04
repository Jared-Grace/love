import { arguments_assert } from "./arguments_assert.mjs";
import { list_add } from "./list_add.mjs";
import { html_display_none_or_block } from "./html_display_none_or_block.mjs";
export function app_music_song_pictures_add(pictures, picture) {
  "Put a drawing under the page's show and hide buttons, and start it off the way the reader last asked for.";
  "SHOWING IT FIRST AND HIDING IT AFTERWARDS WOULD BE VISIBLE. A drawing that appears and then goes flickers, and thirty-six of them flicker thirty-six times, so the answer is applied as it joins rather than by a later sweep over the list.";
  arguments_assert(arguments, 2);
  list_add(pictures.items, picture);
  html_display_none_or_block(pictures.hidden, picture);
}
