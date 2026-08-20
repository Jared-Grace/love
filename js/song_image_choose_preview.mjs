import { html_body_div_page_dark } from "./html_body_div_page_dark.mjs";
import { equal } from "./equal.mjs";
import { html_clear } from "./html_clear.mjs";
import { storage_local_specify_get } from "./storage_local_specify_get.mjs";
import { storage_local_specify_set } from "./storage_local_specify_set.mjs";
import { song_image_choose_render } from "./song_image_choose_render.mjs";
import { song_image_state_repair } from "./song_image_state_repair.mjs";
export async function song_image_choose_preview() {
  "choose an image for each couplet of the hymn video, on the sandbox app at the hash song_image_choose; every candidate is shown as it will actually appear - darkened, at video aspect ratio, with the real lyric text over it - because a bright thumbnail says nothing about how a picture reads at low opacity behind words on a phone";
  "The hash is written as plain words rather than as a spelled function name, because that is what it is - a key in the previews registry, which nothing answers to as a function. Spelled as a name it read as a reference to code that had never existed.";
  let root = html_body_div_page_dark();
  let key = "song_image_choose_state";
  let saved = storage_local_specify_get(key);
  let stored = equal(saved, null)
    ? {
        couplet: 1,
        vertical: true,
      }
    : saved;
  let state = song_image_state_repair(stored);
  async function on_change() {
    storage_local_specify_set(key, state);
    html_clear(root);
    await song_image_choose_render(root, state, on_change);
  }
  await song_image_choose_render(root, state, on_change);
}
