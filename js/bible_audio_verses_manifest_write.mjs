import { arguments_assert } from "./arguments_assert.mjs";
import { bible_audio_chunk_texts } from "./bible_audio_chunk_texts.mjs";
import { add } from "./add.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { text_trim } from "./text_trim.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
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
  "Writes the note beside a recording saying which piece of sound holds which verses, whether it is cut the way the current rule cuts, and which of its pieces no longer say what the chapter says.";
  "★ THE NOTE IS CHECKED AGAINST THE DISK RATHER THAN ASSUMED FROM THE CUTTING RULE, AND THAT DISTINCTION IS THE WHOLE VALUE OF IT. The engine writes the words of each piece beside the sound of it, so the claim that a piece holds a verse can be read off what was actually said instead of worked out from what the cutting was supposed to do.";
  "★ THE SHAPE AND THE WORDS ARE TWO ANSWERS AND MUST NOT BE FOLDED INTO ONE. A recording can fail to line up because it was cut by a rule nobody uses any more, or because the translation has since changed the words of a verse it read correctly. The first says re-cut the whole chapter; the second says re-record three verses. Folding them together gives one boolean that cannot tell a stale edition from an old cutting rule, and every reader of it then has to guess which it meant.";
  "★ SO ALIGNED IS THE SHAPE ALONE AND UNMATCHED CARRIES THE WORDS. Aligned says the recording holds one piece per reading unit, which is what anything wanting to jump to a verse needs to know. Unmatched names the pieces whose spoken words differ from the words of the unit they stand for, which in an aligned recording is exactly the list of verses a new edition has moved.";
  "★ A NOTE THAT DID NOT LINE UP IS STILL WRITTEN, SAYING SO. A missing note and a note saying the recording is wrong look the same to a reader who only checks whether the file is there, so the failure is recorded rather than left as an absence.";
  "★ A ROW WITH NO UNIT BEHIND IT NAMES NO VERSES AT ALL. Where the engine cut more pieces than there are units, the extra pieces hold an empty list, which is the honest answer: nothing on the disk says which verse they belong to.";
  "★ THE NOTE IS OVERWRITTEN RATHER THAN WRITTEN ONCE, BECAUSE IT IS A READING OF THE DISK AND NOT A RECORD OF AN EVENT. Writing it fresh threw where one already stood, which meant the same recording could never be asked the question twice - and asking a folder of old recordings whether they still line up is the whole purpose of the command-line twin. Nothing is lost by replacing it: everything in it is derived from the sound files and the chapter, so the new reading is the same reading unless one of those changed.";
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
  let aligned = equal(chunks.length, units.length);
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
