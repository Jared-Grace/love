import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { reply_approved_all } from "./reply_approved_all.mjs";
export async function reply_approved_messages() {
  "The message of every reply sample a reviewer has approved - real English, each one already read by a rule and passed.";
  "Only verdicts on samples are read; a verdict on a change to a rule's code is stored on the same bench and holds no message. A sample is written as message: then the message, then a line starting reply: - so the message is whatever stands between the two.";
  let by_name = await reply_approved_all();
  let messages = [];
  let start = "message: ";
  let end = "\nreply: ";
  for (let text of Object.values(by_name)) {
    let b = text.startsWith(start);
    if (not(b)) {
      continue;
    }
    let after = text.slice(start.length);
    let index = after.indexOf(end);
    let message = equal(index, -1) ? after : after.slice(0, index);
    messages.push(message);
  }
  return messages;
}
