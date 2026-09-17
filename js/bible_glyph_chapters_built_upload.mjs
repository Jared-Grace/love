import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { bible_interlinear_chapters_words_cache } from "./bible_interlinear_chapters_words_cache.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_chunk } from "./list_chunk.mjs";
import { bible_glyph_chapter_built_destination } from "./bible_glyph_chapter_built_destination.mjs";
import { firebase_storage_exists } from "./firebase_storage_exists.mjs";
import { bible_glyph_chapter_built } from "./bible_glyph_chapter_built.mjs";
import { firebase_upload_object_compressed } from "./firebase_upload_object_compressed.mjs";
import { retry_standard } from "./retry_standard.mjs";
import { each_unordered_async } from "./each_unordered_async.mjs";
import { each_async } from "./each_async.mjs";
export async function bible_glyph_chapters_built_upload(existing_skip_is) {
  arguments_assert(arguments, 1);
  ("Build every chapter of the picture Bible and publish each one to storage, in the same compressed shape and the same kind of folder every translation's chapters use, so a phone sends for exactly the one chapter it shows.");
  ("$plain existing_skip_is");
  ("it is a yes-or-no answer and nothing else: yes leaves a chapter already in storage as it is, no builds and writes over it. Yes resumes a run a dropped connection cut short. No is the ordinary run after the building itself changed - a newly split word, a newly kept line - when every chapter up there is stale and skipping them would report success over all of it.");
  ("THE CHAPTERS ARE KEPT IN STORAGE AND NOT IN THE REPOSITORY. Every chapter of the Bible built this way is some tens of megabytes of generated text, and it is generated: ",
    fn_name("bible_glyph_chapter_built"),
    " makes it again from the interlinear whenever it is asked, so the repository keeps the recipe and storage keeps the dish.");
  ("The set of chapters is read off the interlinear itself rather than off a list, because a chapter is buildable exactly when the interlinear holds it.");
  let chapters = await bible_interlinear_chapters_words_cache();
  let codes = properties_get(chapters);
  let chunks = list_chunk(codes, 20);
  async function lambda_chunk(chunk) {
    async function upload_one(chapter_code) {
      let destination = bible_glyph_chapter_built_destination(chapter_code);
      if (existing_skip_is) {
        let exists = await firebase_storage_exists(destination);
        if (exists) {
          return;
        }
      }
      let built = await bible_glyph_chapter_built(chapter_code);
      async function attempt() {
        await firebase_upload_object_compressed(destination, built);
      }
      await retry_standard(attempt);
    }
    await each_unordered_async(chunk, upload_one);
  }
  await each_async(chunks, lambda_chunk);
  return codes;
}
