import { arguments_assert } from "./arguments_assert.mjs";
export async function app_sandbox_previews_bible_pronunciation_choices_load() {
  arguments_assert(arguments, 0);
  let m = await import("./bible_pronunciation_choices_preview.mjs");
  let r = m.bible_pronunciation_choices_preview;
  return r;
}
