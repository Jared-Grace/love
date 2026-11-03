import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine } from "./text_combine.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
export function reply_response_nothing_to_give() {
  arguments_assert(arguments, 0);
  ("What is said to somebody who asks for something, said to them and to nobody else. What is asked of God on their behalf goes in the prayer that closes the reply.");
  let left = emoji_pray();
  let t = text_combine(
    left,
    " Sorry, I have nothing that I can give you at this time.",
  );
  return t;
}
