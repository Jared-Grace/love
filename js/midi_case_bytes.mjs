import { midi_events_track_bytes } from "./midi_events_track_bytes.mjs";
import { midi_song_meta_events } from "./midi_song_meta_events.mjs";
import { midi_notes_events } from "./midi_notes_events.mjs";
import { midi_line_notes } from "./midi_line_notes.mjs";
import { midi_tracks_file_bytes } from "./midi_tracks_file_bytes.mjs";
export function midi_case_bytes(one) {
  "writes one of the written out cases as the bytes of a real midi file with the melody on its own track and the bass on another";
  "the bytes are made rather than stored so the reader and the writer are proved against each other every time a case is used";
  let division = 480;
  let song = {
    beats_per_minute: 90,
    beats_per_bar: 4,
    beat_unit: 4,
  };
  let events = midi_song_meta_events(song);
  let result2 = midi_events_track_bytes(events, "tempo and time");
  let notes = midi_line_notes(one.melody, 0, division);
  let events2 = midi_notes_events(notes, 0);
  let result3 = midi_events_track_bytes(events2, "melody");
  let notes2 = midi_line_notes(one.bass, 1, division);
  let events3 = midi_notes_events(notes2, 1);
  let result4 = midi_events_track_bytes(events3, "bass");
  let tracks_bytes = [result2, result3, result4];
  let result = midi_tracks_file_bytes(division, tracks_bytes);
  return result;
}
