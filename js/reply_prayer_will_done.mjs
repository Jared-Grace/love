import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_may_the_lord } from "./text_may_the_lord.mjs";
import { reply_choices_will_done_fragment } from "./reply_choices_will_done_fragment.mjs";
export function reply_prayer_will_done() {
  arguments_assert(arguments, 0);
  ("The line of the closing prayer that asks for God's will to be done.");
  let left = text_may_the_lord();
  let right = reply_choices_will_done_fragment();
  let line = text_combine(left, right);
  return line;
}
