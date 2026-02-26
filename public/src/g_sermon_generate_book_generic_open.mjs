import { openai_responses } from "../../../love/public/src/openai_responses.mjs";
import { invoke_cache_file_key_get } from "../../../love/public/src/invoke_cache_file_key_get.mjs";
import { openai_responses_cache_args } from "../../../love/public/src/openai_responses_cache_args.mjs";
import { list_get_end } from "../../../love/public/src/list_get_end.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { app_gloss_bible_generate_generic_word } from "../../../love/public/src/app_gloss_bible_generate_generic_word.mjs";
import { app_ceb_bible_gloss_generate_chapter_language } from "../../../love/public/src/app_ceb_bible_gloss_generate_chapter_language.mjs";
import { app_ceb_bible_gloss_generate_chapter_bible_folders } from "../../../love/public/src/app_ceb_bible_gloss_generate_chapter_bible_folders.mjs";
import { app_ceb_bible_gloss_generate } from "../../../love/public/src/app_ceb_bible_gloss_generate.mjs";
import { g_sermon_generate_book_generic_prompts } from "../../../love/public/src/g_sermon_generate_book_generic_prompts.mjs";
import { app_gloss_bible_generate_generic_prompt_user_middle } from "../../../love/public/src/app_gloss_bible_generate_generic_prompt_user_middle.mjs";
import { app_gloss_bible_generate_generic_prompt_system } from "../../../love/public/src/app_gloss_bible_generate_generic_prompt_system.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { file_read_json } from "../../../love/public/src/file_read_json.mjs";
import { file_open } from "../../../love/public/src/file_open.mjs";
import { function_import } from "../../../love/public/src/function_import.mjs";
import { local_function_path_json } from "../../../love/public/src/local_function_path_json.mjs";
export async function g_sermon_generate_book_generic_open() {
  let chapter_code = "PRO22";
  let language = app_ceb_bible_gloss_generate_chapter_language();
  let last = "original language and English are";
  let word = app_gloss_bible_generate_generic_word();
  const prompt_system = app_gloss_bible_generate_generic_prompt_system(
    language,
    word,
    last,
  );
  const prompt_user_middle =
    app_gloss_bible_generate_generic_prompt_user_middle(language);
  const bible_folders = app_ceb_bible_gloss_generate_chapter_bible_folders();
  let chapters = await g_sermon_generate_book_generic_prompts(
    bible_folders,
    null,
    chapter_code,
    app_ceb_bible_gloss_generate,
    prompt_user_middle,
    prompt_system,
  );
  let only = list_single(chapters);
  let passages = property_get(only, "passages");
  let e2 = list_get_end(passages, 3);
  let prompt_user = property_get(e2, "prompt_user");
  let prompt_system2 = property_get(e2, "prompt_system");
  let args = openai_responses_cache_args(prompt_system2, prompt_user);
  let key_get = invoke_cache_file_key_get(openai_responses, args);
  let k = key_get();
  return e2;
  let imported_fn = await function_import(f_name);
  let path = local_function_path_json(chapter_code, imported_fn);
  let data = await file_read_json(path);
  log({
    data,
  });
  await file_open(path);
}
