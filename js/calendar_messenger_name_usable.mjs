import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { calendar_messenger_name_read } from "./calendar_messenger_name_read.mjs";
import { equal } from "./equal.mjs";
export function calendar_messenger_name_usable(saved) {
  arguments_assert(arguments, 1);
  ("Whether a host's saved Messenger name can take Messenger bookings: read again by the same reader that saves it, so a name saved before that reader learned to refuse it - m.me/me sent every guest to a chat with themselves - counts as no name at all, and the page offers WhatsApp only rather than a link that reaches nobody.");
  let name = calendar_messenger_name_read(saved);
  if (equal(name, null)) {
    return false;
  }
  let b = equal(name, "");
  let n = not(b);
  return n;
}
