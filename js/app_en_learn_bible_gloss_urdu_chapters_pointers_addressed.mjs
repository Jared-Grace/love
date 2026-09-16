import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { app_en_learn_bible_gloss_urdu_chapter_pointers_addressed } from "./app_en_learn_bible_gloss_urdu_chapter_pointers_addressed.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_flat } from "./list_flat.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_size } from "./list_size.mjs";
export async function app_en_learn_bible_gloss_urdu_chapters_pointers_addressed() {
  "Writes addresses beside the pointing explanations of every chapter the Urdu gloss store holds, and answers with how many chapters were read, how many addresses were written, and how many different words got one.";
  "It takes no list, because the store already knows which chapters it holds and a list handed in could only be a stale copy of that. Running it again writes nothing more: an explanation that already carries an address is not looked at again, and one the chapter could not settle will not have become settled by asking a second time.";
  arguments_assert(arguments, 0);
  let chapter_codes = await gloss_chapters_stored(
    app_en_learn_bible_gloss_urdu_generate,
  );
  async function chapter_address(chapter_code) {
    let changes =
      await app_en_learn_bible_gloss_urdu_chapter_pointers_addressed(
        chapter_code,
      );
    return changes;
  }
  let nested = await list_map_async(chapter_codes, chapter_address);
  let written = list_flat(nested);
  let list = list_unique(written);
  let r = {
    chapters: list_size(chapter_codes),
    addressed: list_size(written),
    words: list_size(list),
  };
  return r;
}
