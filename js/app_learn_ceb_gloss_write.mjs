import { app_learn_ceb_gloss_generate } from "./app_learn_ceb_gloss_generate.mjs";
import { app_learn_ceb_gloss_passages } from "./app_learn_ceb_gloss_passages.mjs";
import { gloss_write_generic } from "./gloss_write_generic.mjs";
export async function app_learn_ceb_gloss_write(
  chapter_code,
  verse_key,
  entries,
) {
  "Save one passage's authored word explanations into the Cebuano gloss store, under the passage the given verses name.";
  let passages_read = app_learn_ceb_gloss_passages;
  let fn = app_learn_ceb_gloss_generate;
  let path = await gloss_write_generic(
    chapter_code,
    verse_key,
    entries,
    passages_read,
    fn,
  );
  return path;
}
