import { arguments_assert } from "./arguments_assert.mjs";
import { local_function_chapter_codes } from "./local_function_chapter_codes.mjs";
import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
import { app_original_bible_gloss_chapter_upload_stored } from "./app_original_bible_gloss_chapter_upload_stored.mjs";
import { list_size } from "./list_size.mjs";
export async function app_original_bible_gloss_stored_upload_all() {
  "Publish every chapter of the original-language gloss store exactly as it already stands, generating nothing, and answer with how many went.";
  "★ IT IS FOR A CHANGE THAT TOUCHED CHAPTERS ALREADY PUBLISHED, which is the one case publishing only the unpublished ones cannot serve: those chapters have all been up for months, so that command finds nothing to do and says so, while every reader keeps being served the old words.";
  "★ IT GENERATES NOTHING, so it can never put a machine's answer on a reader's screen in place of what somebody wrote. It carries up what is on this disk and nothing else.";
  "It finds its own set by asking the store which chapters are there, so a chapter written since the last run goes up without anyone remembering to name it.";
  "The chapters go one after another rather than all at once, because this is a write to a shared store and a burst of them is the one thing the store answers slowly to.";
  arguments_assert(arguments, 0);
  let codes = await local_function_chapter_codes(
    app_original_bible_gloss_generate,
  );
  for (let code of codes) {
    await app_original_bible_gloss_chapter_upload_stored(code);
  }
  let r = {
    uploaded: list_size(codes),
  };
  return r;
}
