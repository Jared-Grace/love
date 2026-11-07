import { equal } from "./equal.mjs";
export function messenger_since_mine(messages) {
  "$plain messages";
  "The messages sent after your last one, oldest first - all of them when you never wrote. These are what a reply has to answer.";
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
