import { app_bible_mode_chapter } from "./app_bible_mode_chapter.mjs";
import { equal } from "./equal.mjs";
export function app_bible_mode_label(mode) {
  let chapter = equal(mode, app_bible_mode_chapter());
  if (chapter) {
    return "📖 Chapter view";
  }
  return "📖 Verse view";
}
