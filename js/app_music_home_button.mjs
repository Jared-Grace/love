import { app_shared_button_gap_above } from "./app_shared_button_gap_above.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_button_home_text } from "./app_shared_button_home_text.mjs";
import { html_hash_name_reload } from "./html_hash_name_reload.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
export function app_music_home_button(parent) {
  "The way back from a song to the list of songs.";
  "It is the page's own home and not the way out to the other apps, which stands at the foot of every page here already. A song runs long enough that a reader who wants a different one should not have to scroll to find that out.";
  "It keeps the same gap above it that the foot of the page keeps above itself, so the copy of it standing at the bottom of a song sits evenly between the song and the foot. Without that room it touched the last line of the song and stood a clear gap from the foot below, which read as the last thing in the song rather than as a way out of it.";
  arguments_assert(arguments, 1);
  let text = app_shared_button_home_text();
  function lambda$home() {
    let none = "";
    html_hash_name_reload(none);
  }
  let button = app_shared_button_wide(parent, text, lambda$home);
  app_shared_button_gap_above(button);
  return button;
}
