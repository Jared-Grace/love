import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_upload_namespace_en_learn_bible_spanish } from "./gloss_upload_namespace_en_learn_bible_spanish.mjs";
import { app_shared_gloss_chapters_uploaded_generic } from "./app_shared_gloss_chapters_uploaded_generic.mjs";
export async function app_learn_en_gloss_spanish_chapters_uploaded() {
  "Every chapter of English words explained in Spanish that has been published, which is every chapter this app can explain a word of to a reader of Spanish.";
  "Read from the store rather than written down here, so publishing a chapter is the whole of putting it in front of a reader.";
  arguments_assert(arguments, 0);
  let cache_fn = app_learn_en_gloss_spanish_chapters_uploaded;
  let namespace_fn = gloss_upload_namespace_en_learn_bible_spanish;
  let value = await app_shared_gloss_chapters_uploaded_generic(
    cache_fn,
    namespace_fn,
  );
  return value;
}
