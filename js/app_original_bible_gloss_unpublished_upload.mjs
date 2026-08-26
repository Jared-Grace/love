import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_chapters_unpublished_upload_generic } from "./gloss_chapters_unpublished_upload_generic.mjs";
import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
import { app_original_bible_gloss_passages } from "./app_original_bible_gloss_passages.mjs";
import { app_original_bible_gloss_generate_upload_namespace } from "./app_original_bible_gloss_generate_upload_namespace.mjs";
import { app_original_bible_gloss_chapter_upload_stored } from "./app_original_bible_gloss_chapter_upload_stored.mjs";
export async function app_original_bible_gloss_unpublished_upload() {
  "Publish every original-language gloss chapter that is finished and has not been carried up yet, and hand back what went and what is left.";
  "This is the one command the gate over the same store names when it complains, so what a reader of the failure is told to type is a single thing that finds its own set rather than a chapter's name they would have to copy out of a list.";
  arguments_assert(arguments, 0);
  let r = await gloss_chapters_unpublished_upload_generic(
    app_original_bible_gloss_generate,
    app_original_bible_gloss_passages,
    app_original_bible_gloss_generate_upload_namespace,
    app_original_bible_gloss_chapter_upload_stored,
  );
  return r;
}
