import { arguments_assert } from "./arguments_assert.mjs";
export async function app_sandbox_previews_glyph_built_load() {
  arguments_assert(arguments, 0);
  let m = await import("./bible_glyph_chapter_built_preview.mjs");
  let r = m.bible_glyph_chapter_built_preview;
  return r;
}
