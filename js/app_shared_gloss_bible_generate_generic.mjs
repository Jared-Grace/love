import { ebible_bible_folders_derivatives_allowed_assert } from "./ebible_bible_folders_derivatives_allowed_assert.mjs";
import { app_shared_gloss_bible_generate_generic_prompt_user_middle } from "./app_shared_gloss_bible_generate_generic_prompt_user_middle.mjs";
import { app_shared_gloss_bible_generate_generic_prompt_system } from "./app_shared_gloss_bible_generate_generic_prompt_system.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { g_sermon_generate_book_generic } from "./g_sermon_generate_book_generic.mjs";
export async function app_shared_gloss_bible_generate_generic(
  language,
  last,
  bible_folders,
  book_code,
  fn,
  chapter_code_specified,
  passage_reference,
  language_reader,
) {
  ("Every gloss written anywhere in this repo passes through here, so this is the one place that can owe the text its terms. A translation whose words may not be altered is refused a gloss at all, because a gloss is written from the verse and shown against it.");
  await ebible_bible_folders_derivatives_allowed_assert(bible_folders);
  let word = app_shared_gloss_bible_generate_generic_word();
  let prompt_system = app_shared_gloss_bible_generate_generic_prompt_system(
    language,
    word,
    last,
    language_reader,
  );
  let prompt_user_middle =
    app_shared_gloss_bible_generate_generic_prompt_user_middle(
      language,
      language_reader,
    );
  await g_sermon_generate_book_generic(
    bible_folders,
    book_code,
    fn,
    prompt_user_middle,
    prompt_system,
    chapter_code_specified,
    passage_reference,
  );
}
