import { arguments_assert } from "./arguments_assert.mjs";
export function list_or_text_skip(held, skip_count) {
  arguments_assert(arguments, 2);
  ('what JavaScript\'s one-number .slice gives, on either kind of thing that has it: everything from that index on - [5, 8, 3].slice(1) gives [8, 3], and "love, joy".slice(6) gives "joy"');
  ("2026-11-22: the code lessons step through s.slice(i + search.length) on a string, and the list-only skip refused it");
  let end = held.length;
  let skipped = held.slice(skip_count, end);
  return skipped;
}
