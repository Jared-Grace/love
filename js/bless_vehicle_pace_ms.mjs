import { arguments_assert } from "./arguments_assert.mjs";
import { multiply } from "./multiply.mjs";
import { add } from "./add.mjs";
export function bless_vehicle_pace_ms(fraction) {
  arguments_assert(arguments, 1);
  ("How long a car takes to cross one square, given a number between nought and one.");
  ("Handed the number rather than drawing it, so that the same reading can be taken twice and");
  ("so that whoever asks decides whether the cars on one street are alike or all different.");
  ("The same shape as a person pace and deliberately a different range. A person takes");
  ("between half a second and two and a half seconds a square; a car takes between a fifth of");
  ("a second and half a second. That gap is the entire point of putting cars on the street -");
  ("at anything near walking speed a car reads as a large slow person, and the street stops");
  ("saying which parts of it are dangerous and which are not.");
  ("Not faster than that either. A square is a fifth of the screen on a phone, so a car at a");
  ("tenth of a second a square crosses the whole view in under a second, which reads as a");
  ("flicker rather than as traffic - and it would slide further in one step than the eye can");
  ("follow, so the sliding would stop being motion and become teleporting.");
  ("SPREAD evenly rather than cubed. A person pace is cubed so that most people are quick and");
  ("a few dawdle, because a crowd wants a long tail. Cars on one road all going at about the");
  ("same speed is what a road looks like, so the spread is even and narrow.");
  let span = multiply(fraction, 300);
  let ms = add(200, span);
  return ms;
}
