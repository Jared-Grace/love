import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { app_en_learn_bible_gloss_urdu_chapter_place_claim_revert } from "./app_en_learn_bible_gloss_urdu_chapter_place_claim_revert.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_flat } from "./list_flat.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_size } from "./list_size.mjs";
export async function app_en_learn_bible_gloss_urdu_chapters_place_claim_revert(
  backup_folder,
) {
  "Runs the place-claim revert over every chapter the Urdu gloss store holds, and answers with how many chapters were read, how many explanations went back, and which words they were on.";
  "$plain backup_folder";
  "the folder is the copy of the store taken before the copying sweep. It is read and never written.";
  "It takes no list of chapters, because the store already knows which ones it holds and a list handed in could only be a stale copy of that. Running it again does nothing: an explanation that has gone back matches the backup, and matching the backup is what tells the walk to leave an entry alone.";
  arguments_assert(arguments, 1);
  let chapter_codes = await gloss_chapters_stored(
    app_en_learn_bible_gloss_urdu_generate,
  );
  async function chapter_revert(chapter_code) {
    let changes =
      await app_en_learn_bible_gloss_urdu_chapter_place_claim_revert(
        chapter_code,
        backup_folder,
      );
    return changes;
  }
  let nested = await list_map_async(chapter_codes, chapter_revert);
  let moved = list_flat(nested);
  let list = list_unique(moved);
  let r = {
    chapters: list_size(chapter_codes),
    reverted: list_size(moved),
    words: list_size(list),
  };
  return r;
}
