import { greater_than } from "./greater_than.mjs";
import { midi_events_track_bytes } from "./midi_events_track_bytes.mjs";
import { midi_song_meta_events } from "./midi_song_meta_events.mjs";
import { midi_notes_events } from "./midi_notes_events.mjs";
import { midi_chords_events } from "./midi_chords_events.mjs";
import { midi_tracks_file_bytes } from "./midi_tracks_file_bytes.mjs";
export function midi_song_chords_bytes(song, parts, chosen) {
  "writes a whole midi file carrying the melody and the bass exactly as they were read plus a third track of the chords that were chosen";
  "the lines that were read are written back untouched so the file can be opened in place of the one it came from rather than beside it";
  let events = midi_song_meta_events(song);
  let r = midi_events_track_bytes(events, "tempo and time");
  let events2 = midi_notes_events(parts.melody, 0);
  let r22 = midi_events_track_bytes(events2, "melody");
  let events3 = midi_notes_events(parts.bass, 1);
  let r23 = midi_events_track_bytes(events3, "bass");
  let events4 = midi_chords_events(chosen, 2, 48);
  let r24 = midi_events_track_bytes(events4, "chords");
  let tracks_bytes = [r, r22, r23, r24];
  if (greater_than(parts.inner.length, 0)) {
    let events5 = midi_notes_events(parts.inner, 3);
    let r25 = midi_events_track_bytes(events5, "inner voices");
    tracks_bytes.push(r25);
  }
  let result = midi_tracks_file_bytes(song.division, tracks_bytes);
  return result;
}
