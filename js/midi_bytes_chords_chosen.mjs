import { midi_bytes_notes } from "./midi_bytes_notes.mjs";
import { midi_song_chords_chosen } from "./midi_song_chords_chosen.mjs";
export function midi_bytes_chords_chosen(bytes, style) {
  "takes the bytes of a midi file all the way to a chord chosen under every bass note and hands back what was read along the way";
  "the song and the parts and the key come back too because everything written afterwards needs them and reading them twice would let the two readings differ";
  let song = midi_bytes_notes(bytes);
  let r = midi_song_chords_chosen(song, style);
  return r;
}
