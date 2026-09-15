import { arguments_assert } from "./arguments_assert.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { bible_glyph_chapters_unlisted } from "./bible_glyph_chapters_unlisted.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { bible_glyph_chapters_chapter_add } from "./bible_glyph_chapters_chapter_add.mjs";
import { list_add } from "./list_add.mjs";
export async function bible_glyph_chapters_unlisted_add() {
  arguments_assert(arguments, 0);
  ("Names in the list of chapters every picture Bible chapter that was written and never named there, one commit per chapter.");
  ("IT FINDS ITS OWN SET, so it cannot be handed a stale one. The single-chapter command beside it is right for a chapter just authored; ninety five at once was a loop of that command, and a loop leaves nothing behind that can be run again.");
  ("IT STOPS AT THE LIST AND DOES NOT LAND THE CHAPTERS, and that is forced rather than chosen. The steps that follow - the stated count, the references, the chains - each read the list of chapters, and a module is read once per process, so run in this same process they would all see the list as it stood before this rewrote it and report success over nothing. Run the landing wrapper and the missing bands repair afterwards, each from a fresh process.");
  await ai_git_noted();
  let unlisted = await bible_glyph_chapters_unlisted();
  let added = [];
  for (let chapter_code of unlisted) {
    await function_call_commit(bible_glyph_chapters_chapter_add, [
      chapter_code,
    ]);
    list_add(added, chapter_code);
  }
  let r = {
    added,
  };
  return r;
}
