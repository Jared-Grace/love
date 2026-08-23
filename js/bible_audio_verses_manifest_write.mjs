import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { file_write_json } from "./file_write_json.mjs";
import { bible_audio_chunk_texts } from "./bible_audio_chunk_texts.mjs";
import { bible_audio_verses_manifest_path } from "./bible_audio_verses_manifest_path.mjs";
export async function bible_audio_verses_manifest_write(
  bible_folder,
  chapter_code,
  verses,
) {
  "$plain bible_folder";
  "$plain chapter_code";
  "Writes the note beside a fresh recording saying which piece of sound holds which verse, and says whether it could be trusted to.";
  "★ THIS IS THE ONE REAL DEFECT IN AN OTHERWISE WORKING AUDIO PIPELINE, AND IT IS SMALL. Everything else exists - an engine, a chapter function, a book function, thousands of finished files. What has never existed is any record of where a verse begins inside them, which is the single thing that stops a player being sent to a verse, stops a human reading being swapped in later, and stops a reading being cast.";
  "★ THE NOTE IS CHECKED AGAINST THE DISK RATHER THAN ASSUMED FROM THE CUTTING RULE, AND THAT DISTINCTION IS THE WHOLE VALUE OF IT. The engine does its own cutting, so a note built from what the cutting was MEANT to do would be a guess wearing the clothes of a record. Here the pieces are counted as they actually lie on the disk and compared to the verses handed over, and the note says whether they lined up.";
  "★ A NOTE THAT DID NOT LINE UP IS STILL WRITTEN, SAYING SO. A missing note reads as a recording nobody got round to, which is the wrong diagnosis and sends the next reader looking in the wrong place. A note saying the pieces and the verses disagreed, with both counts in it, points straight at the engine's cutting.";
  arguments_assert(arguments, 3);
  let chunks = await bible_audio_chunk_texts(bible_folder, chapter_code);
  let aligned = equal(chunks.length, verses.length);
  let rows = [];
  function chunk_each(chunk, index) {
    let verse = verses[index];
    let verse_number = null;
    if (not(equal(verse, undefined))) {
      verse_number = verse.verse_number;
    }
    let row = {
      chunk: chunk.chunk,
      verse_number,
      text: chunk.text,
    };
    list_add(rows, row);
  }
  each(chunks, chunk_each);
  let manifest = {
    bible_folder,
    chapter_code,
    aligned,
    chunks: chunks.length,
    verses: verses.length,
    rows,
  };
  let p = bible_audio_verses_manifest_path(bible_folder, chapter_code);
  await file_write_json(p, manifest);
  return manifest;
}
