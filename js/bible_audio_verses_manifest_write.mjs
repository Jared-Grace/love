import { arguments_assert } from "./arguments_assert.mjs";
import { bible_audio_chunk_texts } from "./bible_audio_chunk_texts.mjs";
import { add } from "./add.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { text_trim } from "./text_trim.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { bible_audio_verses_manifest_path } from "./bible_audio_verses_manifest_path.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function bible_audio_verses_manifest_write(
  bible_folder,
  chapter_code,
  units,
) {
  "$plain bible_folder";
  "$plain chapter_code";
  "$plain units";
  "Writes the note beside a fresh recording saying which piece of sound holds which verses, and says of each piece on its own whether the words that were spoken are the words it was meant to speak.";
  "★ THE NOTE IS CHECKED AGAINST THE DISK RATHER THAN ASSUMED FROM THE CUTTING RULE, AND THAT DISTINCTION IS THE WHOLE VALUE OF IT. The engine writes the words of each piece beside the sound of it, so the claim that a piece holds a verse can be read off what was actually said instead of worked out from what the cutting was supposed to do.";
  "★ EACH ROW ANSWERS FOR ITSELF, BECAUSE A COUNT THAT MATCHES IS NOT THE SAME AS A RECORDING THAT IS RIGHT. The note used to compare two numbers and call the whole chapter aligned when they agreed, which passes a chapter whose pieces are all present and all shifted, and passes a chapter where one piece is missing and one extra. Comparing the spoken words of a piece to the words of the unit it stands for catches both, and names the piece rather than the chapter.";
  "★ A NOTE THAT DID NOT LINE UP IS STILL WRITTEN, SAYING SO. A missing note and a note saying the recording is wrong look the same to a reader who only checks whether the file is there, so the failure is recorded rather than left as an absence.";
  "★ A ROW WITH NO UNIT BEHIND IT NAMES NO VERSES AT ALL. Where the engine cut more pieces than there are units, the extra pieces hold an empty list, which is the honest answer: nothing on the disk says which verse they belong to.";
  arguments_assert(arguments, 3);
  let chunks = await bible_audio_chunk_texts(bible_folder, chapter_code);
  let rows = [];
  let unmatched = [];
  let index = 0;
  function chunk_each(chunk) {
    let unit = units[index];
    index = add(index, 1);
    let number = property_get(chunk, "chunk");
    let spoken = property_get(chunk, "text");
    let verse_numbers = [];
    let matched = false;
    let missing = equal(unit, undefined);
    if (not(missing)) {
      verse_numbers = property_get(unit, "verse_numbers");
      let written = property_get(unit, "text");
      let left = text_trim(spoken);
      let right = text_trim(written);
      matched = equal(left, right);
    }
    if (not(matched)) {
      list_add(unmatched, number);
    }
    let row = {
      chunk: number,
      verse_numbers,
      matched,
      text: spoken,
    };
    list_add(rows, row);
  }
  each(chunks, chunk_each);
  let counted = equal(chunks.length, units.length);
  let clean = list_empty_is(unmatched);
  let aligned = false;
  if (counted) {
    aligned = clean;
  }
  let manifest = {
    bible_folder,
    chapter_code,
    aligned,
    chunks: chunks.length,
    units: units.length,
    unmatched,
    rows,
  };
  let p = bible_audio_verses_manifest_path(bible_folder, chapter_code);
  await file_overwrite_json(p, manifest);
  return manifest;
}
