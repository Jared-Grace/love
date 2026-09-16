import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { lyric_video_document_words_timed } from "./lyric_video_document_words_timed.mjs";
import { list_size } from "./list_size.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { add } from "./add.mjs";
import { list_slice } from "./list_slice.mjs";
import { list_map } from "./list_map.mjs";
import { equal } from "./equal.mjs";
import { error } from "./error.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function lyric_video_document_words_write(
  path_audio,
  path_document,
) {
  "$plain path_audio";
  "$plain path_document";
  "Writes into a song's timing document, under each line, every word of that line with the second it begins and the second it ends in the recording, so the video can mark the word being sung.";
  "★ THE ALIGNER'S WORDS ARE HANDED BACK TO LINES BY COUNTING, BECAUSE IT WAS GIVEN THE LINES JOINED AND ANSWERS IN THE SAME ORDER. A line of seven words takes the next seven. That is only right while both sides split the text the same way, so the two totals are compared first and a disagreement throws rather than sliding every later word onto the wrong line.";
  "The line times are left as they are. They came from the same aligner, and a person may since have moved them; the words only say where inside a line each word falls.";
  arguments_assert(arguments, 2);
  let document = await file_read_json(path_document);
  let aligned = await lyric_video_document_words_timed(
    path_audio,
    path_document,
  );
  let words = aligned.words;
  let taken = 0;
  function word_kept(word) {
    let kept = {
      text: word.word,
      start: word.start,
      end: word.end,
    };
    return kept;
  }
  function line_words_add(line) {
    let list = text_split_space(line.text);
    let count = list_size(list);
    let through = add(taken, count);
    let mine = list_slice(words, taken, through);
    taken = through;
    line.words = list_map(mine, word_kept);
  }
  document.lines.forEach(line_words_add);
  let right = list_size(words);
  let b = equal(taken, right);
  if (not(b)) {
    error(
      "the lines hold " +
        taken +
        " words and the aligner placed " +
        list_size(words),
    );
  }
  await file_overwrite_json(path_document, document);
  let r = {
    path_document,
    words: taken,
    confidence: aligned.confidence,
  };
  return r;
}
