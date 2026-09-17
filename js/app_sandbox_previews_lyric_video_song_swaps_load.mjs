import { arguments_assert } from "./arguments_assert.mjs";
export async function app_sandbox_previews_lyric_video_song_swaps_load() {
  arguments_assert(arguments, 0);
  let m = await import("./lyric_video_song_swaps_preview.mjs");
  let r = m.lyric_video_song_swaps_preview;
  return r;
}
