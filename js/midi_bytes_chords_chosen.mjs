import { midi_bytes_notes } from "./midi_bytes_notes.mjs";
import { midi_notes_parts } from "./midi_notes_parts.mjs";
import { midi_notes_key } from "./midi_notes_key.mjs";
import { midi_notes_chord_segments } from "./midi_notes_chord_segments.mjs";
import { midi_segments_chords } from "./midi_segments_chords.mjs";
import { harmony_key_chords } from "./harmony_key_chords.mjs";
export function midi_bytes_chords_chosen(bytes) {
  "takes the bytes of a midi file all the way to a chord chosen under every bass note and hands back what was read along the way";
  "the song and the parts and the key come back too because everything written afterwards needs them and reading them twice would let the two readings differ";
  let song = midi_bytes_notes(bytes);
  let parts = midi_notes_parts(song);
  let notes = parts.melody.concat(parts.bass, parts.inner);
  let key = midi_notes_key(notes);
  let segments = midi_notes_chord_segments(parts, song);
  let chords = harmony_key_chords(key);
  let chosen = midi_segments_chords(segments, chords);
  let r = {
    song,
    parts,
    key,
    chosen,
  };
  return r;
}
