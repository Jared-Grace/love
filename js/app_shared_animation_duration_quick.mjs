import { app_shared_animation_duration } from "./app_shared_animation_duration.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { divide } from "./divide.mjs";
export function app_shared_animation_duration_quick() {
  arguments_assert(arguments, 0);
  ("how long a movement takes that is only tidying up after a change the learner has already watched happen, in thousandths of a second");
  ("Shorter than the while a change itself is given, because the eye is only asked to follow something it has not seen before. Room closing up behind a thing that has already finished is not news, and given the full while it reads as a second thing happening rather than as the first one ending.");
  ("Worked out from that one while rather than written down next to it, so the two cannot drift into a pair of numbers picked separately.");
  let duration = app_shared_animation_duration();
  let quick = divide(duration, 3);
  return quick;
}
