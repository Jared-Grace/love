import { arguments_assert } from "./arguments_assert.mjs";
import { bible_interlinear_chapters_words_cache } from "./bible_interlinear_chapters_words_cache.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_chunk } from "./list_chunk.mjs";
import { bible_glyph_chapter_literal_destination } from "./bible_glyph_chapter_literal_destination.mjs";
import { firebase_storage_exists } from "./firebase_storage_exists.mjs";
import { bible_glyph_chapter_literal_source } from "./bible_glyph_chapter_literal_source.mjs";
import { firebase_upload_object_compressed } from "./firebase_upload_object_compressed.mjs";
import { retry_standard } from "./retry_standard.mjs";
import { each_unordered_async } from "./each_unordered_async.mjs";
import { each_async } from "./each_async.mjs";
export async function bible_glyph_chapters_literal_upload(existing_skip_is) {
  arguments_assert(arguments, 1);
  ("$plain existing_skip_is");
  ("Uploads every chapter's interlinear words for the word-for-word drawing, twenty at a time, skipping chapters already there when asked to.");
  let chapters = await bible_interlinear_chapters_words_cache();
  let codes = properties_get(chapters);
  let chunks = list_chunk(codes, 20);
  async function lambda_chunk(chunk) {
    async function upload_one(chapter_code) {
      let destination = bible_glyph_chapter_literal_destination(chapter_code);
      if (existing_skip_is) {
        let exists = await firebase_storage_exists(destination);
        if (exists) {
          return;
        }
      }
      let source = await bible_glyph_chapter_literal_source(chapter_code);
      async function attempt() {
        await firebase_upload_object_compressed(destination, source);
      }
      await retry_standard(attempt);
    }
    await each_unordered_async(chunk, upload_one);
  }
  await each_async(chunks, lambda_chunk);
  return codes;
}
