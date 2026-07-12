import { invoke_cache_file_get } from "./invoke_cache_file_get.mjs";
import { openai_responses } from "./openai_responses.mjs";
import { invoke_cache_file_key_get } from "./invoke_cache_file_key_get.mjs";
import { openai_responses_cache_args } from "./openai_responses_cache_args.mjs";
import { list_get_end } from "./list_get_end.mjs";
import { property_get } from "./property_get.mjs";
import { list_single } from "./list_single.mjs";
import { app_gloss_bible_generate_generic_word } from "./app_gloss_bible_generate_generic_word.mjs";
import { app_ceb_bible_gloss_generate_chapter_language } from "./app_ceb_bible_gloss_generate_chapter_language.mjs";
import { app_ceb_bible_gloss_generate_chapter_bible_folders } from "./app_ceb_bible_gloss_generate_chapter_bible_folders.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { g_sermon_generate_book_generic_prompts } from "./g_sermon_generate_book_generic_prompts.mjs";
import { app_gloss_bible_generate_generic_prompt_user_middle } from "./app_gloss_bible_generate_generic_prompt_user_middle.mjs";
import { app_gloss_bible_generate_generic_prompt_system } from "./app_gloss_bible_generate_generic_prompt_system.mjs";
import { log } from "./log.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { file_open } from "./file_open.mjs";
import { function_import } from "./function_import.mjs";
import { local_function_path_json } from "./local_function_path_json.mjs";
export async function g_sermon_generate_book_generic_open() {
  let chapter_code = "PRO22";
  let language = app_ceb_bible_gloss_generate_chapter_language();
  let last = "original language and English are";
  let word = app_gloss_bible_generate_generic_word();
  let prompt_system = app_gloss_bible_generate_generic_prompt_system(
    language,
    word,
    last,
  );
  let prompt_user_middle =
    app_gloss_bible_generate_generic_prompt_user_middle(language);
  let bible_folders = app_ceb_bible_gloss_generate_chapter_bible_folders();
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
  let e = list_get_end(passages, 4);
  let prompt_user = property_get(e, "prompt_user");
  let prompt_system2 = property_get(e, "prompt_system");
  let args = openai_responses_cache_args(prompt_system2, prompt_user);
  let key_get = invoke_cache_file_key_get(openai_responses, args);
  let k = await key_get();
  await file_open(k);
  returnp;
  let cached_get = invoke_cache_file_get();
  let r = await cached_get(k);
  return r;
  let imported_fn = await function_import(f_name);
  let path = local_function_path_json(chapter_code, imported_fn);
  let data = await file_read_json(path);
  log(g_sermon_generate_book_generic_open.name, {
    data,
  });
}
