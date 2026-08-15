import { arguments_assert } from "./arguments_assert.mjs";
export function app_shared_animation_duration() {
  arguments_assert(arguments, 0);
  ("how long a thing on any of the screens takes to move from where it was to where it is going, in thousandths of a second");
  ("Long enough that the eye follows the thing rather than finding it again somewhere else, short enough that a learner pressing twice in a row is not made to wait on the first press.");
  ("One time for all the screens, so that two screens moving at different speeds is a decision somebody has to have made on purpose rather than the leftover of two people picking a number.");
  let duration = 555;
  return duration;
}
