import { divide } from "./divide.mjs";
import { modulo } from "./modulo.mjs";
import { round } from "./round.mjs";
import { floor } from "./floor.mjs";
export function midi_song_meta_events(song) {
  "writes the tempo and the time signature of a song that was read as the events a first midi track carries";
  "a tempo is stored as how many millionths of a second one quarter note lasts which is why it is divided into sixty million rather than into sixty";
  let n = divide(60000000, song.beats_per_minute);
  let per_quarter = round(n);
  let p = divide(per_quarter, 65536);
  let one = floor(p);
  let p2 = divide(per_quarter, 256);
  let left = floor(p2);
  let two = modulo(left, 256);
  let three = modulo(per_quarter, 256);
  let n2 = Math.log2(song.beat_unit);
  let unit = round(n2);
  let r = [
    {
      tick: 0,
      order: 0,
      bytes: [255, 81, 3, one, two, three],
    },
    {
      tick: 0,
      order: 1,
      bytes: [255, 88, 4, song.beats_per_bar, unit, 24, 8],
    },
  ];
  return r;
}
