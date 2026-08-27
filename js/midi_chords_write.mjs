import { file_read_buffer } from "./file_read_buffer.mjs";
import { midi_bytes_notes } from "./midi_bytes_notes.mjs";
import { midi_notes_parts } from "./midi_notes_parts.mjs";
import { midi_notes_key } from "./midi_notes_key.mjs";
import { harmony_key_chords } from "./harmony_key_chords.mjs";
import { midi_notes_chord_segments } from "./midi_notes_chord_segments.mjs";
import { midi_segments_chords } from "./midi_segments_chords.mjs";
import { file_write_buffer } from "./file_write_buffer.mjs";
import { midi_song_chords_bytes } from "./midi_song_chords_bytes.mjs";
import { midi_chords_chart_lines } from "./midi_chords_chart_lines.mjs";
import { file_write } from "./file_write.mjs";
export async function midi_chords_write(file_path_in, file_path_out) {
  "reads a midi file holding a melody and a bass line chooses a chord under every bass note and writes both a new midi file and a chart of what it chose";
  "the new midi file carries the lines it read untouched plus one more track sounding the chords so it can be opened and listened to straight away";
  let bytes = await file_read_buffer(file_path_in);
  let song = midi_bytes_notes(bytes);
  let parts = midi_notes_parts(song);
  let key = midi_notes_key(parts.melody.concat(parts.bass, parts.inner));
  let chords = harmony_key_chords(key);
  let segments = midi_notes_chord_segments(parts, song);
  let chosen = midi_segments_chords(segments, chords);
  await file_write_buffer(
    file_path_out,
    midi_song_chords_bytes(song, parts, chosen),
  );
  let lines = midi_chords_chart_lines(chosen, key, parts);
  let file_path_chart = file_path_out + ".txt";
  await file_write(file_path_chart, lines.join("\n"));
  let unsure = 0;
  for (let one of chosen) {
    if (one.settled === false) {
      unsure = unsure + 1;
    }
  }
  return {
    key: key.name,
    split: parts.split,
    chords: chosen.length,
    unsure,
    file_path_out,
    file_path_chart,
    lines,
  };
}
