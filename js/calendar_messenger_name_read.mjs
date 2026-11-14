import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
export function calendar_messenger_name_read(typed) {
  arguments_assert(arguments, 1);
  ("A host's Messenger name as they typed or pasted it, read back to the part that goes after m.me/: empty text when left blank (Messenger is then not offered), null when it cannot be a name.");
  ("A whole link is accepted as well as the bare name - m.me/x, facebook.com/x, messenger.com/t/x, or a profile.php?id= link, whose number is the name - since a host is more likely to paste their link than to know which part of it is wanted.");
  let text = String(typed).trim();
  if (equal(text, "")) {
    let r = "";
    return r;
  }
  let id = /profile\.php\?id=([0-9]+)/.exec(text);
  if (id) {
    let r2 = id[1];
    return r2;
  }
  let name = text
    .replace(/^https?:\/\//i, "")
    .replace(/^(www\.|m\.|web\.)/i, "")
    .replace(/^(m\.me\/|facebook\.com\/|fb\.com\/|messenger\.com\/t\/)/i, "")
    .replace(/[/?#].*$/, "");
  if (/^[A-Za-z0-9.]{1,50}$/.test(name)) {
    return name;
  }
  return null;
}
