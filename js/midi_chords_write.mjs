import { equal } from "./equal.mjs";
import { file_read_buffer } from "./file_read_buffer.mjs";
import { midi_bytes_chords_chosen } from "./midi_bytes_chords_chosen.mjs";
import { file_write_buffer } from "./file_write_buffer.mjs";
import { midi_song_chords_bytes } from "./midi_song_chords_bytes.mjs";
import { midi_chords_chart_lines } from "./midi_chords_chart_lines.mjs";
import { file_write } from "./file_write.mjs";
export async function midi_chords_write(file_path_in, file_path_out) {
  "reads a midi file holding a melody and a bass line chooses a chord under every bass note and writes both a new midi file and a chart of what it chose";
  "the new midi file carries the lines it read untouched plus one more track sounding the chords so it can be opened and listened to straight away";
  "the chart is written beside it as plain text and lists only the chords the chooser was unsure of which is what turns writing the harmony into reviewing it";
  let read = await file_read_buffer(file_path_in);
  let chosen = midi_bytes_chords_chosen(read);
  let contents = midi_song_chords_bytes(
    chosen.song,
    chosen.parts,
    chosen.chosen,
  );
  await file_write_buffer(file_path_out, contents);
  let lines = midi_chords_chart_lines(chosen.chosen, chosen.key, chosen.parts);
  let file_path_chart = file_path_out + ".txt";
  let contents2 = lines.join("\n");
  await file_write(file_path_chart, contents2);
  let unsure = 0;
  for (let one of chosen.chosen) {
    if (equal(one.settled, false)) {
      unsure = unsure + 1;
    }
  }
  let r = {
    key: chosen.key.name,
    split: chosen.parts.split,
    chords: chosen.chosen.length,
    unsure,
    file_path_out,
    file_path_chart,
    lines,
  };
  return r;
}
