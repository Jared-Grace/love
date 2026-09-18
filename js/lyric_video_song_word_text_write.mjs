import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_songs_folder } from "./lyric_video_songs_folder.mjs";
import { text_combine } from "./text_combine.mjs";
import { path_join } from "./path_join.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { text_punctuation_apostrophe_kept_removed } from "./text_punctuation_apostrophe_kept_removed.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function lyric_video_song_word_text_write(
  name,
  line_index,
  word_index,
  text,
) {
  "$plain name";
  "$plain line_index";
  "$plain word_index";
  "$plain text";
  "Writes new text onto one word of a song, writes the song's timing document back, and answers the word as it now stands together with whether its letters changed.";
  "★ IT EXISTS FOR PUNCTUATION, WHICH IS WHY IT SAYS WHETHER THE LETTERS MOVED. A comma or a semicolon added to a word changes what is drawn and nothing else: the word is sung at the same moment for the same length, so no timing has to be looked at again. A word whose letters changed is a different word, and the times on it were measured against the old one - so that case is reported rather than refused, because a misspelling is worth fixing and the person fixing it is the one who knows whether the sound changed too.";
  "The letters are compared with the punctuation taken off both sides and the case ignored, because that is exactly the difference this is for. An apostrophe inside a word is a letter for this purpose - it belongs to how the word is sung.";
  arguments_assert(arguments, 4);
  let folder = lyric_video_songs_folder();
  let file_name = text_combine(name, ".json");
  let path_document = path_join([folder, file_name]);
  let document = await file_read_json(path_document);
  let line = document.lines[line_index];
  let word = line.words[word_index];
  let text_before = word.text;
  let trimmed = text_punctuation_apostrophe_kept_removed(text_before);
  let letters_before = text_lower_to(trimmed);
  let trimmed2 = text_punctuation_apostrophe_kept_removed(text);
  let letters_after = text_lower_to(trimmed2);
  let letters_same = equal(letters_before, letters_after);
  let letters_changed = not(letters_same);
  word.text = text;
  await file_overwrite_json(path_document, document);
  let r = {
    text_before: text_before,
    text: word.text,
    start: word.start,
    end: word.end,
    letters_changed: letters_changed,
  };
  return r;
}
