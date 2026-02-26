import { g_sermon_generate_book_generic_prompts } from "../../../love/public/src/g_sermon_generate_book_generic_prompts.mjs";
import { app_gloss_bible_generate_generic_prompt_user_middle } from "../../../love/public/src/app_gloss_bible_generate_generic_prompt_user_middle.mjs";
import { app_gloss_bible_generate_generic_prompt_system } from "../../../love/public/src/app_gloss_bible_generate_generic_prompt_system.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { file_read_json } from "../../../love/public/src/file_read_json.mjs";
import { file_open } from "../../../love/public/src/file_open.mjs";
import { function_import } from "../../../love/public/src/function_import.mjs";
import { local_function_path_json } from "../../../love/public/src/local_function_path_json.mjs";
export async function g_sermon_generate_book_generic_open(
  f_name,
  chapter_code,
) {
  let chapters = await g_sermon_generate_book_generic_prompts(
    bible_folders,
    book_code,
    chapter_code_specified,
    fn,
    prompt_user_middle2,
    prompt_system2,
  );
  const prompt_system = app_gloss_bible_generate_generic_prompt_system(
    language,
    word,
    last,
  );
  const prompt_user_middle =
    app_gloss_bible_generate_generic_prompt_user_middle(language);
  let imported_fn = await function_import(f_name);
  let path = local_function_path_json(chapter_code, imported_fn);
  let data = await file_read_json(path);
  log({
    data,
  });
  await file_open(path);
}
