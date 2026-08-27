import { modulo } from "./modulo.mjs";
import { harmony_quality_shape } from "./harmony_quality_shape.mjs";
import { harmony_pitch_names } from "./harmony_pitch_names.mjs";
export function harmony_chord(root, quality, spelling, distance) {
  "builds one chord as its root and its quality and the pitch classes it sounds and the name a person reads";
  "distance is how far outside the plain key this chord sits and it is carried here so the scorer does not have to know where the chord came from";
  let shape = harmony_quality_shape(quality);
  let steps = [];
  for (let step_above of shape.steps_above) {
    let remainder = modulo(root + step_above, 12);
    steps.push(remainder);
  }
  let names = harmony_pitch_names()[spelling];
  let name = names[root] + shape.suffix;
  let r = {
    root,
    quality,
    steps,
    name,
    distance,
  };
  return r;
}
