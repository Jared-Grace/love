import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { app_en_learn_bible_gloss_urdu_chapter_pointing_repair } from "./app_en_learn_bible_gloss_urdu_chapter_pointing_repair.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_flat } from "./list_flat.mjs";
import { list_size } from "./list_size.mjs";
import { list_unique } from "./list_unique.mjs";
export async function app_en_learn_bible_gloss_urdu_chapters_pointing_repair() {
  "Runs the pointing repair over every chapter the Urdu gloss store holds, and answers with how many chapters were read, how many explanations moved, and which words they were on.";
  "It takes no list, because the store already knows which chapters it holds and a list handed in could only be a stale copy of that. Running it again after the first run does nothing, since a repaired explanation no longer points anywhere and the reading that finds them will not find it.";
  arguments_assert(arguments, 0);
  let chapter_codes = await gloss_chapters_stored(
    app_en_learn_bible_gloss_urdu_generate,
  );
  async function chapter_repair(chapter_code) {
    let changes =
      await app_en_learn_bible_gloss_urdu_chapter_pointing_repair(chapter_code);
    return changes;
  }
  let nested = await list_map_async(chapter_codes, chapter_repair);
  let moved = list_flat(nested);
  let list = list_unique(moved);
  let r = {
    chapters: list_size(chapter_codes),
    rewritten: list_size(moved),
    words: list_size(list),
  };
  return r;
}
