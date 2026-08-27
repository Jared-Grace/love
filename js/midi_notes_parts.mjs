import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
import { divide } from "./divide.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { error } from "./error.mjs";
import { midi_notes_parts_by_pitch } from "./midi_notes_parts_by_pitch.mjs";
export function midi_notes_parts(song) {
  ("separates the melody from the bass in what ",
    fn_name("midi_bytes_notes"),
    " read so the chord work knows which line is which");
  ("every track and every channel that carries notes counts as one voice and the lowest sounding voice is the bass while the highest is the melody");
  let voices = [];
  for (let track of song.tracks) {
    let by_channel = new Map();
    for (let note_one of track.notes) {
      let left = by_channel.has(note_one.channel);
      if (equal(left, false)) {
        by_channel.set(note_one.channel, []);
      }
      by_channel.get(note_one.channel).push(note_one);
    }
    for (let [channel, notes] of by_channel) {
      let total = 0;
      for (let note_one of notes) {
        total = total + note_one.pitch;
      }
      let label = track.name + " channel " + channel;
      voices.push({
        label,
        notes,
        middle: divide(total, notes.length),
      });
    }
  }
  if (equal(voices.length, 0)) {
    error(
      "this midi file carries no notes so there is nothing to write chords under",
    );
  }
  if (equal(voices.length, 1)) {
    let r = midi_notes_parts_by_pitch(voices[0].notes);
    return r;
  }
  function voices_lowest_first(one, two) {
    let difference = subtract(one.middle, two.middle);
    return difference;
  }
  voices.sort(voices_lowest_first);
  let bass = voices[0];
  let melody = voices[subtract(voices.length, 1)];
  let inner = [];
  for (let index = 1; less_than(index, subtract(voices.length, 1)); index++) {
    inner = inner.concat(voices[index].notes);
  }
  let r2 = {
    melody: melody.notes,
    bass: bass.notes,
    inner,
    split: "by voice",
    melody_label: melody.label,
    bass_label: bass.label,
  };
  return r2;
}
