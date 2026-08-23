import { add } from "./add.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { path_join } from "./path_join.mjs";
import { file_read } from "./file_read.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_sort_number } from "./list_sort_number.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { bible_audio_folder } from "./bible_audio_folder.mjs";
export async function bible_audio_chunk_texts(bible_folder, chapter_code) {
  "$plain bible_folder";
  "$plain chapter_code";
  "The words of each piece of sound a recording of one chapter was cut into, in the order the pieces play.";
  "★ THE PIECES ARE NUMBERED AND SO THEY ARE SORTED AS NUMBERS AND NOT AS WORDS, WHICH IS THE WHOLE REASON THIS IS NOT ONE LINE. A chapter cut into more than nine pieces sorted as words puts the tenth piece second, and a note built from that order says the wrong verse for every piece after it - silently, because every piece is a real piece and every verse is a real verse.";
  "The engine writes the words of each piece beside the sound of it. That is what makes the note checkable rather than assumed: the pieces can be compared to the verses that were handed over, so a claim about which verse a piece holds is read off the disk rather than worked out from what the cutting was supposed to do.";
  arguments_assert(arguments, 2);
  let folder = bible_audio_folder(bible_folder, chapter_code);
  let files = await folder_read_files(folder);
  function text_is(name) {
    let is = text_ends_with(name, ".txt");
    return is;
  }
  let texts = list_filter(files, text_is);
  function number_of(name) {
    let n = parseInt(name, 10);
    return n;
  }
  let numbers = [];
  function name_each(name) {
    let n = number_of(name);
    list_add(numbers, n);
  }
  each(texts, name_each);
  list_sort_number(numbers);
  async function number_each(n) {
    let left = add("", n);
    let name = add(left, ".txt");
    let p = path_join([folder, name]);
    let text = await file_read(p);
    let chunk = {
      chunk: n,
      text,
    };
    return chunk;
  }
  let chunks = await list_map_async(numbers, number_each);
  return chunks;
}
