import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
import { html_body_div } from "./html_body_div.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { storage_local_specify_get } from "./storage_local_specify_get.mjs";
import { storage_local_specify_set } from "./storage_local_specify_set.mjs";
import { song_image_choose_render } from "./song_image_choose_render.mjs";
import { song_image_state_repair } from "./song_image_state_repair.mjs";
export function song_image_choose_preview() {
  ("choose an image for each couplet of the hymn video, on the sandbox app at #",
    fn_name("song_image_choose"),
    "; every candidate is shown as it will actually appear - darkened, at video aspect ratio, with the real lyric text over it - because a bright thumbnail says nothing about how a picture reads at low opacity behind words on a phone");
  let root = html_body_div();
  html_style_set(root, "background", "#0b0b0b");
  html_style_set(root, "color", "#ffffff");
  html_style_set(root, "font-family", "system-ui, sans-serif");
  html_style_set(root, "min-height", "100vh");
  html_style_set(root, "padding", "16px");
  let key = "song_image_choose_state";
  let saved = storage_local_specify_get(key);
  let stored = equal(saved, null) ? { couplet: 1, vertical: true } : saved;
  let state = song_image_state_repair(stored);
  function on_change() {
    storage_local_specify_set(key, state);
    html_clear(root);
    song_image_choose_render(root, state, on_change);
  }
  song_image_choose_render(root, state, on_change);
}
