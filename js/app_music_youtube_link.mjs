import { emoji_television } from "./emoji_television.mjs";
import { emoji_music_notes } from "./emoji_music_notes.mjs";
import { app_shared_button_wide_text_combine } from "./app_shared_button_wide_text_combine.mjs";
import { app_shared_button_gap_above } from "./app_shared_button_gap_above.mjs";
import { window_open } from "./window_open.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_video_address } from "./youtube_video_address.mjs";
export function app_music_youtube_link(parent, video_id, text) {
  "$plain video_id";
  "$plain text";
  "A wide button on a song's page that opens one of its YouTube films in a new tab, so leaving to watch does not lose the place on the page.";
  "A BUTTON RATHER THAN A LINK, because the human asked for one: every other thing to press on these pages is a wide button led by a small picture, and a bare link read as something else.";
  arguments_assert(arguments, 3);
  let address = youtube_video_address(video_id);
  let left = emoji_television() + emoji_music_notes() + " ";
  let button = app_shared_button_wide_text_combine(
    parent,
    left,
    text,
    on_click,
  );
  app_shared_button_gap_above(button);
  function on_click() {
    window_open(address);
  }
  return button;
}
