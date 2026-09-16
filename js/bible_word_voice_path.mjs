import { bible_word_form } from "./bible_word_form.mjs";
import { bible_word_voice_folder_name } from "./bible_word_voice_folder_name.mjs";
import { text_utf8_hex } from "./text_utf8_hex.mjs";
import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
export function bible_word_voice_path(voice_name, text) {
  "$plain voice_name";
  "$plain text";
  "Where the clip of one Bible word said by one voice sits under the assets folder.";
  "THE WORD ITSELF NAMES THE FILE, written out as plain letters and digits, so the same word met in another chapter is the same file and is said once for the whole Bible rather than once for every place it appears.";
  "IT CUTS THE WORD BACK ITSELF rather than trusting the caller to have done it, so a page handing over the word exactly as it is printed on screen, chant marks and all, names the very same file the recorder wrote.";
  "A verse number would have made the same word a new file every time it is met, which over the whole Bible is around six times the recordings and six times the cost.";
  let form = bible_word_form(text);
  let folder_name = bible_word_voice_folder_name();
  let file_name = text_utf8_hex(form) + ".mp3";
  let combined = list_join_slash_forward([folder_name, voice_name, file_name]);
  return combined;
}
