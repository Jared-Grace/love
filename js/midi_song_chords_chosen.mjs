import { midi_notes_parts } from "./midi_notes_parts.mjs";
import { midi_notes_key } from "./midi_notes_key.mjs";
import { midi_notes_chord_segments } from "./midi_notes_chord_segments.mjs";
import { harmony_key_chords } from "./harmony_key_chords.mjs";
import { midi_segments_chords } from "./midi_segments_chords.mjs";
export function midi_song_chords_chosen(song, style) {
  "takes a song that has already been read all the way to a chord chosen under every bass note and hands back what was worked out along the way";
  "it starts from a song rather than from bytes so that lines exported into separate files can be united first and still travel the one path through here";
  let parts = midi_notes_parts(song);
  let notes = parts.melody.concat(parts.bass, parts.inner);
  let key = midi_notes_key(notes);
  let segments = midi_notes_chord_segments(parts, song);
  let chords = harmony_key_chords(key, style);
  let chosen = midi_segments_chords(segments, chords);
  let r = {
    song,
    parts,
    key,
    chosen,
  };
  return r;
}
