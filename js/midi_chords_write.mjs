import { equal } from "./equal.mjs";
import { fn_name } from "./fn_name.mjs";
import { midi_files_song_united } from "./midi_files_song_united.mjs";
import { midi_song_chords_chosen } from "./midi_song_chords_chosen.mjs";
import { midi_chords_held } from "./midi_chords_held.mjs";
import { midi_song_chords_bytes } from "./midi_song_chords_bytes.mjs";
import { file_overwrite_buffer } from "./file_overwrite_buffer.mjs";
import { midi_chords_chart_lines } from "./midi_chords_chart_lines.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function midi_chords_write(file_paths_in, file_path_out, style) {
  "reads the midi files holding a melody and a bass line, chooses a chord under every bass note, and writes both a new midi file and a chart of what it chose";
  "several files may be named, joined by commas, because an editor that exports one file per track leaves the parts split across files and each one is then a whole midi file that cannot simply be pasted onto the next";
  "the new midi file carries the lines it read untouched plus one more track sounding the chords, so it can be opened and listened to straight away";
  "the chart is written beside it as plain text and lists only the chords the chooser was unsure of, which is what turns writing the harmony into reviewing it";
  ("style says which chord vocabulary is offered and ",
    fn_name("harmony_key_degrees"),
    " holds the ones there are");
  ("a chord repeated under a walking bass is joined into one held chord by ",
    fn_name("midi_chords_held"),
    " before anything is written, which is done here rather than in the choosing so that what the gate holds the chooser to stays one chord per bass move");
  let file_paths = file_paths_in.split(",");
  let song = await midi_files_song_united(file_paths);
  let chosen = midi_song_chords_chosen(song, style);
  let held = midi_chords_held(chosen.chosen);
  let contents = midi_song_chords_bytes(chosen.song, chosen.parts, held);
  await file_overwrite_buffer(file_path_out, contents);
  let lines = midi_chords_chart_lines(held, chosen.key, chosen.parts);
  let file_path_chart = file_path_out + ".txt";
  let contents2 = lines.join("\n");
  await file_overwrite(file_path_chart, contents2);
  let unsure = 0;
  for (let one of held) {
    if (equal(one.settled, false)) {
      unsure = unsure + 1;
    }
  }
  let r = {
    key: chosen.key.name,
    split: chosen.parts.split,
    bass_moves: chosen.chosen.length,
    chords: held.length,
    unsure,
    file_path_out,
    file_path_chart,
  };
  return r;
}
