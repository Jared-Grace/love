import { arguments_assert } from "./arguments_assert.mjs";
export function playwright_happy_poll_ms() {
  "how long a walk leaves between two looks at a screen it is waiting on";
  "Short enough that the whole of a wait is spent waiting rather than sleeping past the end of it, and long enough that a screen mid-animation is not asked sixty times about it. What it must stay well under is the shortest thing worth catching, which is the half second a right answer is shown green for.";
  arguments_assert(arguments, 0);
  let r = 60;
  return r;
}
