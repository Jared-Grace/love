import { arguments_assert } from "./arguments_assert.mjs";
export async function app_sandbox_previews_song_image_brighter_load() {
  arguments_assert(arguments, 0);
  let m = await import("./song_image_brighter_preview.mjs");
  let r = m.song_image_brighter_preview;
  return r;
}
