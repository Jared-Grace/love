import { not_equal } from "./not_equal.mjs";
export function facebook_messenger_messages(text) {
  "$plain text";
  "The messages in the words a messenger conversation shows, oldest first, each as who sent it and what it says. Every message carries a line for screen readers - 'Enter, Message sent <when> by <who>: <words>' - and that line is read rather than the bubbles, because it names the sender of each message, the second of two sent together included. Your own are sent by 'You'.";
  let lines = text.split("\n");
  let r = [];
  for (let line of lines) {
    let m = line.match(/^Enter, Message sent .*? by (.+?): (.*)$/);
    if (not_equal(m, null)) {
      r.push({
        from: m[1],
        text: m[2],
      });
    }
  }
  return r;
}
