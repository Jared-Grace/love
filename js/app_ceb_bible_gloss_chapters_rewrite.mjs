import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { app_ceb_bible_gloss_generate_chapter } from "./app_ceb_bible_gloss_generate_chapter.mjs";
import { each_async } from "./each_async.mjs";
import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { list_size } from "./list_size.mjs";
import { log_keep } from "./log_keep.mjs";
export async function app_ceb_bible_gloss_chapters_rewrite() {
  "Every Cebuano chapter the gloss store already holds, written again against whatever the instructions now say.";
  "It finds its own set rather than being handed one, because the set is the store's contents and a list typed out beside it could only ever be that list going stale. Nothing chooses which chapters to leave out - a chapter that is already right will be written again and come out the same, which costs nothing and removes the question of whether the choosing was right.";
  "It costs nothing twice because the answers are kept by the exact words that were asked. A run stopped halfway and started again pays only for the chapters it had not reached, and a chapter whose instructions did not change is not asked about at all. So this is safe to re-run and is the way to resume, rather than something to be resumed around.";
  "The chapters are asked for one after another rather than all at once. The service is one shared thing being paid for by the word, and a whole store put to it at once is the shape that spends everything before anybody can look at the first answer.";
  let chapter_codes = await gloss_chapters_stored(app_ceb_bible_gloss_generate);
  async function chapter_write(chapter_code) {
    await app_ceb_bible_gloss_generate_chapter(chapter_code);
    log_keep(app_ceb_bible_gloss_chapters_rewrite.name, chapter_code);
  }
  await each_async(chapter_codes, chapter_write);
  let count = list_size(chapter_codes);
  let r = {
    count,
    chapter_codes,
  };
  return r;
}
