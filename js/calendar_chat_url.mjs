import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { calendar_profile_url_read } from "./calendar_profile_url_read.mjs";
export function calendar_chat_url(via, typed, message) {
  arguments_assert(arguments, 3);
  ("The address that opens one person's chat with message waiting in it: on WhatsApp a wa.me link to the digits typed, on Messenger the profile or chat link typed, written back whole. One place for both host screens (human, 2026-11-28: \"open the chat link didn't work - dev/facebook.com\": a link typed without https:// was opened as a page under this site).");
  if (equal(via, "messenger")) {
    let profile = calendar_profile_url_read(typed);
    return profile;
  }
  let wa =
    "https://wa.me/" +
    String(typed).replace(/\D/g, "") +
    "?text=" +
    encodeURIComponent(message);
  return wa;
}
