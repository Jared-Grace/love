import { each } from "./each.mjs";
import { round } from "./round.mjs";
import { greater_than } from "./greater_than.mjs";
import { less_than } from "./less_than.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { list_is_assert } from "./list_is_assert.mjs";
export function midi_songs_united(songs, labels) {
  "joins several songs that were each read from their own midi file into one song, so a melody and a bass line exported into separate files can be read as one piece";
  "each file becomes exactly one voice and every note in it is put on one channel, because a file exported per part is the person saying which notes are which part, and a stray channel left in the file by the recorder would otherwise stand up as a voice of its own and be taken for the bass";
  "ticks are rescaled onto the finest division of the lot, since a file carries its own division in its header and two files need not agree";
  "the tempo and the time signature are taken from the first file, because an exporter writes the one session tempo into every file it splits out, so any of them would answer the same and disagreement here would mean the files did not come from one session at all";
  each([songs, labels], list_is_assert);
  let division = 0;
  for (let song of songs) {
    if (greater_than(song.division, division)) {
      division = song.division;
    }
  }
  let tracks = [];
  for (let index = 0; less_than(index, songs.length); index++) {
    let song = songs[index];
    let scale = divide(division, song.division);
    let notes = [];
    for (let track of song.tracks) {
      for (let note_one of track.notes) {
        let n = multiply(note_one.start, scale);
        let n2 = multiply(note_one.end, scale);
        notes.push({
          channel: index,
          pitch: note_one.pitch,
          velocity: note_one.velocity,
          start: round(n),
          end: round(n2),
        });
      }
    }
    tracks.push({
      name: labels[index],
      notes,
    });
  }
  let r = {
    division,
    beats_per_minute: songs[0].beats_per_minute,
    beats_per_bar: songs[0].beats_per_bar,
    beat_unit: songs[0].beat_unit,
    tracks,
  };
  return r;
}
