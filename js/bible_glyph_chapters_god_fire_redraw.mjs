import { arguments_assert } from "./arguments_assert.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { bible_glyph_chapter_god_fire_redraw } from "./bible_glyph_chapter_god_fire_redraw.mjs";
import { list_add } from "./list_add.mjs";
export async function bible_glyph_chapters_god_fire_redraw() {
  arguments_assert(arguments, 0);
  ("Redraws God as the burning heart in every written picture Bible chapter where the bare fire can only be standing for God, and hands back every verse it held because the count could not decide.");
  ("EACH CHAPTER IS ITS OWN COMMIT, because each is an independent change a peer may be writing beside, and a chapter committed as it lands cannot be swept up under another name.");
  ("A chapter with nothing to redraw writes nothing, and its commit then finds nothing to take.");
  await ai_git_noted();
  let redrawn = 0;
  let held = [];
  for (let chapter of bible_glyph_chapters()) {
    let one = await function_call_commit(bible_glyph_chapter_god_fire_redraw, [
      chapter.chapter_code,
    ]);
    redrawn = redrawn + one.redrawn.length;
    for (let h of one.held) {
      list_add(held, {
        chapter_code: chapter.chapter_code,
        ...h,
      });
    }
  }
  let r = {
    redrawn,
    held_count: held.length,
    held,
  };
  return r;
}
