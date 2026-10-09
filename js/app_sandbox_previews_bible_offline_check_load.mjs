import { arguments_assert } from "./arguments_assert.mjs";
export async function app_sandbox_previews_bible_offline_check_load() {
  arguments_assert(arguments, 0);
  let m = await import("./bible_offline_check_preview.mjs");
  let r = m.bible_offline_check_preview;
  return r;
}
