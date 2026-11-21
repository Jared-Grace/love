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
    .replace(/^(www\.|m\.(?!me\/)|web\.)/i, "")
    .replace(/^(m\.me\/|facebook\.com\/|fb\.com\/|messenger\.com\/t\/)/i, "")
    .replace(/[/?#].*$/, "");
  ("2026-11-15: a word Facebook keeps for itself is not anybody's name. facebook.com/me is whoever is signed in, so a host who pasted it sent every guest to m.me/me, a chat with the guest's own self; share and profile.php are parts of a link, not the person.");
  ("2026-11-21: the m. of a phone address is dropped only when it is not the m. of m.me itself - dropped there, https://m.me/x read as me/x, came out as me and was refused, so the shortest link a host has to their own chat could never be saved.");
  let kept = ["me", "share", "profile.php", "people", "messages", "t"];
  let v = name.toLowerCase();
  if (kept.includes(v)) {
    return null;
  }
  if (/^[A-Za-z0-9.]{1,50}$/.test(name)) {
    return name;
  }
  return null;
}
