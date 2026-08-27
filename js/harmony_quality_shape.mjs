import { equal } from "./equal.mjs";
export function harmony_quality_shape(quality) {
  "answers the steps above the root that a named chord quality is built from and the letters written after the root when it is named";
  "a triad is three steps and a seventh chord is four so the caller reads the length rather than asking a second question";
  if (equal(quality, "major")) {
    let r = {
      steps_above: [0, 4, 7],
      suffix: "",
    };
    return r;
  }
  if (equal(quality, "minor")) {
    let r2 = {
      steps_above: [0, 3, 7],
      suffix: "m",
    };
    return r2;
  }
  if (equal(quality, "diminished")) {
    let r3 = {
      steps_above: [0, 3, 6],
      suffix: "dim",
    };
    return r3;
  }
  if (equal(quality, "seventh")) {
    let r4 = {
      steps_above: [0, 4, 7, 10],
      suffix: "7",
    };
    return r4;
  }
  let r5 = {
    steps_above: [0, 4, 7],
    suffix: "",
  };
  return r5;
}
