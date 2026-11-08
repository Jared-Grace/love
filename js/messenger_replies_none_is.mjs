import { equal } from "./equal.mjs";
import { messenger_replies_after } from "./messenger_replies_after.mjs";
export function messenger_replies_none_is(messages) {
  "$plain messages";
  "Whether nothing at all has been sent after your last message - the other person has not answered yet.";
  let r = equal(messenger_replies_after(messages).length, 0);
  return r;
}
