import { equal } from "./equal.mjs";
export function messenger_replies_after(messages) {
  "$plain messages";
  "The messages sent after your last message, in order - all of them when you have sent none.";
  let last = -1;
  function lambda(m, i) {
    if (equal(m.from, "You")) {
      last = i;
    }
  }
  messages.forEach(lambda);
  let r = messages.slice(last + 1);
  return r;
}
