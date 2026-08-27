import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
export function midi_song_bar_ticks(song) {
  "works out how many ticks one beat lasts and how many ticks one bar lasts in the song that was read";
  "division counts ticks per quarter note so a beat that is not a quarter note is scaled by what the time signature says the beat unit is";
  let top = multiply(song.division, 4);
  let ticks_per_beat = divide(top, song.beat_unit);
  let ticks_per_bar = multiply(ticks_per_beat, song.beats_per_bar);
  let r = {
    ticks_per_beat,
    ticks_per_bar,
  };
  return r;
}
