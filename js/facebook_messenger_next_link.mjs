import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
export function facebook_messenger_next_link(messages) {
  "$plain messages";
  "The link on to the next passage in the last message you sent that holds one, or null. The next-passage page puts that link last in what it copies, so the message carrying it is the passage sent most recently.";
  let r = null;
  for (let m of messages) {
    if (equal(m.from, "You")) {
      let found = m.text.match(/https:\/\/\S+\/next#\S+/);
      if (not_equal(found, null)) {
        r = found[0];
      }
    }
  }
  return r;
}
