import { equal } from "./equal.mjs";
import { messenger_amen_only_is } from "./messenger_amen_only_is.mjs";
export function messenger_replies_amen_or_none_is(messages) {
  "$plain messages";
  "Whether everything sent after your last message is Amen or praying hands only - nothing at all counts too. Any reply with words of its own is somebody a person should answer rather than a timer.";
  let last = -1;
  function lambda(m, i) {
    if (equal(m.from, "You")) {
      last = i;
    }
  }
  messages.forEach(lambda);
  function lambda2(m) {
    let r2 = messenger_amen_only_is(m.text);
    return r2;
  }
  let r = messages.slice(last + 1).every(lambda2);
  return r;
}
