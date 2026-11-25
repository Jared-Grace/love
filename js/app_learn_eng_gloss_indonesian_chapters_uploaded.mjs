import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_upload_namespace_en_learn_bible_indonesian } from "./gloss_upload_namespace_en_learn_bible_indonesian.mjs";
import { app_shared_gloss_chapters_uploaded_generic } from "./app_shared_gloss_chapters_uploaded_generic.mjs";
export async function app_learn_eng_gloss_indonesian_chapters_uploaded() {
  "Every chapter of English words explained in Indonesian that has been published, which is every chapter this app can explain a word of to a reader of Indonesian.";
  "Read from the store rather than written down here, so publishing a chapter is the whole of putting it in front of a reader.";
  arguments_assert(arguments, 0);
  let cache_fn = app_learn_eng_gloss_indonesian_chapters_uploaded;
  let namespace_fn = gloss_upload_namespace_en_learn_bible_indonesian;
  let value = await app_shared_gloss_chapters_uploaded_generic(
    cache_fn,
    namespace_fn,
  );
  return value;
}
