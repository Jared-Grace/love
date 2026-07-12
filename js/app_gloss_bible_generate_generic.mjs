import { app_gloss_bible_generate_generic_prompt_user_middle } from "./app_gloss_bible_generate_generic_prompt_user_middle.mjs";
import { app_gloss_bible_generate_generic_prompt_system } from "./app_gloss_bible_generate_generic_prompt_system.mjs";
import { app_gloss_bible_generate_generic_word } from "./app_gloss_bible_generate_generic_word.mjs";
import { g_sermon_generate_book_generic } from "./g_sermon_generate_book_generic.mjs";
export async function app_gloss_bible_generate_generic(
  language,
  last,
  bible_folders,
  book_code,
  fn,
  chapter_code_specified,
) {
  let word = app_gloss_bible_generate_generic_word();
  let prompt_system = app_gloss_bible_generate_generic_prompt_system(
    language,
    word,
    last,
  );
  let prompt_user_middle =
    app_gloss_bible_generate_generic_prompt_user_middle(language);
  await g_sermon_generate_book_generic(
    bible_folders,
    book_code,
    fn,
    prompt_user_middle,
    prompt_system,
    chapter_code_specified,
  );
}
