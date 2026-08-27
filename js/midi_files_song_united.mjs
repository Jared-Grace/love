import { list_is_assert } from "./list_is_assert.mjs";
import { file_read_buffer } from "./file_read_buffer.mjs";
import { midi_bytes_notes } from "./midi_bytes_notes.mjs";
import { file_path_name_last } from "./file_path_name_last.mjs";
import { midi_songs_united } from "./midi_songs_united.mjs";
export async function midi_files_song_united(file_paths) {
  "reads several midi files and answers one song carrying a voice per file, which is how a melody and a bass line that an editor exported into separate files are put back together";
  "the voice is labelled with the file it came from so the chart written later can say which file was taken for the bass, which is the one reading a person has to check before trusting anything below it";
  list_is_assert(file_paths);
  let songs = [];
  let labels = [];
  for (let file_path of file_paths) {
    let bytes = await file_read_buffer(file_path);
    let song = midi_bytes_notes(bytes);
    songs.push(song);
    let last = file_path_name_last(file_path);
    labels.push(last);
  }
  let r = midi_songs_united(songs, labels);
  return r;
}
