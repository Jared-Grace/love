import { messenger_replies_after } from "./messenger_replies_after.mjs";
import { messenger_amen_only_is } from "./messenger_amen_only_is.mjs";
import { greater_than } from "./greater_than.mjs";
export function messenger_replies_amen_only_is(messages) {
  "$plain messages";
  "Whether everything sent after your last message is Amen or praying hands only, and there is at least one. No reply yet, or any reply with words of its own, is somebody a person should answer rather than a timer.";
  let after = messenger_replies_after(messages);
  function lambda2(m) {
    let r2 = messenger_amen_only_is(m.text);
    return r2;
  }
  let r = greater_than(after.length, 0) && after.every(lambda2);
  return r;
}
