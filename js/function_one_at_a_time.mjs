import { arguments_assert } from "./arguments_assert.mjs";
export function function_one_at_a_time(lambda) {
  arguments_assert(arguments, 1);
  ('Answers lambda wrapped so a second call while the first is still running is ignored, not run beside it. For a button that clears an area and draws it again after waiting: tapped twice, two runs each draw their own copy after the wait (human, 2026-11-28: "just saw two host sign out (or maybe sign in) - not sure how").');
  let running = false;
  async function once(...args) {
    if (running) {
      return;
    }
    running = true;
    try {
      await lambda(...args);
    } finally {
      running = false;
    }
  }
  return once;
}
