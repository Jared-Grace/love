import { local_function_path_json } from "../../../love/public/src/local_function_path_json.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { g_sermon_generate_book_generic_prompts } from "../../../love/public/src/g_sermon_generate_book_generic_prompts.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { openai_responses_cache } from "../../../love/public/src/openai_responses_cache.mjs";
import { g_sermon_generate_book_generic_property } from "../../../love/public/src/g_sermon_generate_book_generic_property.mjs";
import { file_overwrite_json } from "../../../love/public/src/file_overwrite_json.mjs";
import { log_keep } from "../../../love/public/src/log_keep.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export async function g_sermon_generate_book_generic(
  bible_folders,
  book_code,
  fn,
  prompt_user_middle,
  prompt_system,
  chapter_code_specified,
) {
  let chapters = await g_sermon_generate_book_generic_prompts(
    bible_folders,
    book_code,
    chapter_code_specified,
    fn,
    prompt_user_middle,
    prompt_system,
  );
  async function lambda2(c) {
    let chapter_code = property_get(c, "chapter_code");
    let passages_with_prompts = property_get(c, "passages");
    async function lambda3(p) {
      let passage = property_get(p, "passage");
      let prompt_user = property_get(p, "prompt_user");
      let prompt_system = property_get(p, "prompt_system");
      let output = await openai_responses_cache(prompt_system, prompt_user);
      let passage_extension = {
        [g_sermon_generate_book_generic_property()]: output,
      };
      object_merge(passage, passage_extension);
      log_keep(output);
    }
    await each_async(passages_with_prompts, lambda3);
    let passages = list_map_property(passages_with_prompts, "passage");
    let path = local_function_path_json(chapter_code, fn);
    await file_overwrite_json(path, {
      chapter_code,
      passages,
    });
    log_keep({
      file_overwrite_json,
      path,
    });
  }
  await each_async(chapters, lambda2);
}
