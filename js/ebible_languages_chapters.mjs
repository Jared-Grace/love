import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { error_json } from "./error_json.mjs";
import { catch_error_text_collect_async } from "./catch_error_text_collect_async.mjs";
import { ebible_languages_english_each } from "./ebible_languages_english_each.mjs";
import { bible_interlinear_verses_cache } from "./bible_interlinear_verses_cache.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { ebible_version_chapters_cache } from "./ebible_version_chapters_cache.mjs";
export async function ebible_languages_chapters() {
  "What chapters every offered language holds, one entry per translation, with the original-language text alongside them.";
  "ONE ODD TRANSLATION NO LONGER COSTS THE WHOLE READING. Three hundred translations are read here and each one takes a while, so a stop at the first strange page threw away hours and named exactly one translation - and the way to learn what else was wrong was to settle that one and pay the hours again. Whether the queue was one page or forty could not be found out at all.";
  "So each translation is allowed to fail on its own and the whole list is raised at the end, which turns however many runs into one. The upload next door was killed three times before it was written this way; this is the same shape, said in the same words next door.";
  "IT STILL THROWS RATHER THAN QUIETLY LEAVING THOSE TRANSLATIONS OUT. What this answers is remembered on disk, and a remembered answer is only written when the working-out finished - so a half-list can never be saved and then read for months as if it were the whole. A language offered whose chapters are missing is the silent wrong answer this refuses to make.";
  let failed = [];
  let all = await list_adder_async(lambda);
  let any = list_empty_not_is(failed);
  if (any) {
    error_json({
      failed,
    });
  }
  return all;
  async function lambda(la) {
    await ebible_languages_english_each(chapters_get_add);
    async function chapters_get_add(bible_folder) {
      await catch_error_text_collect_async(
        failed,
        {
          bible_folder,
        },
        chapters_add,
      );
      async function chapters_add() {
        let chapters = await ebible_version_chapters_cache(bible_folder);
        la({
          bible_folder,
          chapters,
        });
      }
    }
    let i = await bible_interlinear_verses_cache();
    la(i);
  }
}
