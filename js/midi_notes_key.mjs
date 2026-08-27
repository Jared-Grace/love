import { less_than } from "./less_than.mjs";
import { modulo } from "./modulo.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { equal } from "./equal.mjs";
import { harmony_profiles } from "./harmony_profiles.mjs";
import { numbers_correlation } from "./numbers_correlation.mjs";
import { harmony_pitch_names } from "./harmony_pitch_names.mjs";
export function midi_notes_key(notes) {
  "weighs every pitch class by how long it sounds and answers the key whose listening profile that weighing matches best";
  "all twenty four keys are tried rather than guessed at so a hymn that never states its key still gets one";
  let weights = [];
  for (let step = 0; less_than(step, 12); step++) {
    weights.push(0);
  }
  for (let note_one of notes) {
    let step = modulo(note_one.pitch, 12);
    weights[step] = weights[step] + subtract(note_one.end, note_one.start);
  }
  let profiles = harmony_profiles();
  let best = {
    tonic: 0,
    mode: "major",
    fit: -2,
  };
  for (let tonic = 0; less_than(tonic, 12); tonic++) {
    let turned = [];
    for (let step = 0; less_than(step, 12); step++) {
      turned.push(weights[modulo(tonic + step, 12)]);
    }
    let fit_major = numbers_correlation(turned, profiles.major);
    let fit_minor = numbers_correlation(turned, profiles.minor);
    if (greater_than(fit_major, best.fit)) {
      best = {
        tonic,
        mode: "major",
        fit: fit_major,
      };
    }
    if (greater_than(fit_minor, best.fit)) {
      best = {
        tonic,
        mode: "minor",
        fit: fit_minor,
      };
    }
  }
  let flat_tonics = [1, 3, 5, 8, 10];
  let spelling = flat_tonics.includes(best.tonic) ? "flat" : "sharp";
  let names = harmony_pitch_names()[spelling];
  let name =
    names[best.tonic] + (equal(best.mode, "major") ? " major" : " minor");
  let r = {
    tonic: best.tonic,
    mode: best.mode,
    fit: best.fit,
    spelling,
    name,
  };
  return r;
}
