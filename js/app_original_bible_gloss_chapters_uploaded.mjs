import { arguments_assert } from "./arguments_assert.mjs";
import { app_original_bible_gloss_generate_upload_namespace } from "./app_original_bible_gloss_generate_upload_namespace.mjs";
import { app_shared_gloss_chapters_uploaded_generic } from "./app_shared_gloss_chapters_uploaded_generic.mjs";
export async function app_original_bible_gloss_chapters_uploaded() {
  "Every chapter of the original-language gloss that has been published, which is every chapter this app can offer a reader.";
  arguments_assert(arguments, 0);
  let cache_fn = app_original_bible_gloss_chapters_uploaded;
  let namespace_fn = app_original_bible_gloss_generate_upload_namespace;
  let value = await app_shared_gloss_chapters_uploaded_generic(
    cache_fn,
    namespace_fn,
  );
  return value;
}
