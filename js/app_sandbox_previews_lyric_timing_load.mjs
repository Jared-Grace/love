import { arguments_assert } from "./arguments_assert.mjs";
export async function app_sandbox_previews_lyric_timing_load() {
  arguments_assert(arguments, 0);
  let m = await import("./lyric_timing_preview.mjs");
  let r = m.lyric_timing_preview;
  return r;
}
