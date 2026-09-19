import { not_equal } from "./not_equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_songs_folder } from "./lyric_video_songs_folder.mjs";
import { text_combine } from "./text_combine.mjs";
import { path_join } from "./path_join.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { file_read_lines } from "./file_read_lines.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_punctuation_apostrophe_kept_removed } from "./text_punctuation_apostrophe_kept_removed.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function lyric_video_song_words_text_write(name, path_text) {
  "$plain name";
  "$plain path_text";
  "Rewrites every word of a song's lyric from a plain text file, one line of the file for one line of the song.";
  "★ THE WORDS COME OFF THE DISK because a whole lyric cannot go on a command line, and writing it word by word would be seventy commands recording one change.";
  "★ IT WRITES NOTHING AT ALL unless every line count and every word count already matches, because a miscount slides every later word onto the wrong note and the film still renders.";
  "★ IT REPORTS THE WORDS WHOSE LETTERS MOVED, ignoring case and punctuation, so a capitalisation pass can be proved to have swapped no actual word.";
  arguments_assert(arguments, 2);
  let folder = lyric_video_songs_folder();
  let file_name = text_combine(name, ".json");
  let path_document = path_join([folder, file_name]);
  let document = await file_read_json(path_document);
  let lines = document.lines;
  let lines_text_all = await file_read_lines(path_text);
  function lambda5(line_text) {
    let g = greater_than(line_text.length, 0);
    return g;
  }
  let lines_text = lines_text_all.filter(lambda5);
  function lambda(line_text) {
    let r = line_text.split(" ");
    return r;
  }
  let words_text = lines_text.map(lambda);
  let count_lines = lines.length;
  let count_lines_text = words_text.length;
  let counts_differ = not_equal(count_lines, count_lines_text);
  if (counts_differ) {
    let r2 = {
      ok: false,
      reason: "line count",
      count_lines,
      count_lines_text,
    };
    return r2;
  }
  let mismatched = [];
  function lambda2(line, line_index) {
    let count_words = line.words.length;
    let count_words_text = words_text[line_index].length;
    let words_differ = not_equal(count_words, count_words_text);
    if (words_differ) {
      mismatched.push({
        line_index,
        count_words,
        count_words_text,
      });
    }
  }
  lines.forEach(lambda2);
  let mismatched_any = greater_than(mismatched.length, 0);
  if (mismatched_any) {
    let r3 = {
      ok: false,
      reason: "word count",
      mismatched,
    };
    return r3;
  }
  let letters_moved = [];
  function lambda4(line, line_index) {
    function lambda3(word, word_index) {
      let text_after = words_text[line_index][word_index];
      let text_before = word.text;
      let s = text_punctuation_apostrophe_kept_removed(text_before);
      let letters_before = text_lower_to(s);
      let s2 = text_punctuation_apostrophe_kept_removed(text_after);
      let letters_after = text_lower_to(s2);
      let letters_differ = not_equal(letters_before, letters_after);
      if (letters_differ) {
        letters_moved.push({
          line_index,
          word_index,
          text_before,
          text: text_after,
        });
      }
      word.text = text_after;
    }
    line.words.forEach(lambda3);
  }
  lines.forEach(lambda4);
  await file_overwrite_json(path_document, document);
  let r4 = {
    ok: true,
    lines: count_lines,
    letters_moved,
  };
  return r4;
}
