import { equal } from "./equal.mjs";
export function messenger_replies_none_is(messages) {
  "$plain messages";
  "Whether nothing at all has been sent after your last message - the other person has not answered yet.";
  let last = -1;
  function lambda(m, i) {
    if (equal(m.from, "You")) {
      last = i;
    }
  }
  messages.forEach(lambda);
  let r = equal(messages.slice(last + 1).length, 0);
  return r;
}
