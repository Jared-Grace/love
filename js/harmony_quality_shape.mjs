import { equal } from "./equal.mjs";
import { error } from "./error.mjs";
export function harmony_quality_shape(quality) {
  "answers the steps above the root that a named chord quality is built from and the letters written after the root when it is named";
  "a triad is three steps and a seventh chord is four so the caller reads the length rather than asking a second question";
  "the two suspended shapes have no third at all, which is the whole of what they are: the note that would say major or minor is replaced by the one above or the one below it";
  "a quality nobody here builds is refused rather than quietly handed back as a major chord, because a misspelt quality would then be scored as a plain triad and chosen without anything going wrong out loud";
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
  if (equal(quality, "suspended_fourth")) {
    let r5 = {
      steps_above: [0, 5, 7],
      suffix: "sus4",
    };
    return r5;
  }
  if (equal(quality, "suspended_second")) {
    let r6 = {
      steps_above: [0, 2, 7],
      suffix: "sus2",
    };
    return r6;
  }
  error("no chord quality is built here under the name " + quality);
}
