import { midi_events_track_bytes } from "./midi_events_track_bytes.mjs";
import { midi_song_meta_events } from "./midi_song_meta_events.mjs";
import { midi_notes_events } from "./midi_notes_events.mjs";
import { midi_chords_events } from "./midi_chords_events.mjs";
import { midi_tracks_file_bytes } from "./midi_tracks_file_bytes.mjs";
export function midi_song_chords_bytes(song, parts, chosen) {
  "writes a whole midi file carrying the melody and the bass exactly as they were read plus a third track of the chords that were chosen";
  "the lines that were read are written back untouched so the file can be opened in place of the one it came from rather than beside it";
  let tracks_bytes = [
    midi_events_track_bytes(midi_song_meta_events(song), "tempo and time"),
    midi_events_track_bytes(midi_notes_events(parts.melody, 0), "melody"),
    midi_events_track_bytes(midi_notes_events(parts.bass, 1), "bass"),
    midi_events_track_bytes(midi_chords_events(chosen, 2, 48), "chords"),
  ];
  if (parts.inner.length > 0) {
    tracks_bytes.push(
      midi_events_track_bytes(
        midi_notes_events(parts.inner, 3),
        "inner voices",
      ),
    );
  }
  return midi_tracks_file_bytes(song.division, tracks_bytes);
}
