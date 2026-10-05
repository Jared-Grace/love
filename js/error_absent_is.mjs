import { arguments_assert } from "./arguments_assert.mjs";
import { error_json_object_or_null } from "./error_json_object_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { equal } from "./equal.mjs";
export function error_absent_is(e) {
  "$plain e";
  "Whether a failure is an address answering that nothing is kept there, rather than anything going wrong on the way to asking.";
  "The two arrive at a caller as the same thing - something failed - and they want opposite words said to whoever is reading. Nothing kept there is settled, and asking again will never change it; a connection that dropped is the one case where asking again is the whole of the advice. So a reader told to try again over a word that is in no verse is sent back forever, and a reader told the word is in no verse when the connection dropped is told something false.";
  "The status is what tells them apart and it is carried in the failure's own words, so this asks for it there rather than asking the address a second time - a second ask is another round trip, and it can come back differently, which would answer about a moment nobody was told about.";
  arguments_assert(arguments, 1);
  let o = error_json_object_or_null(e);
  let n = null_is(o);
  if (n) {
    ("nothing was written down, so nothing says the address answered at all");
    return false;
  }
  let status = property_get_or_null(o, "status");
  let absent = equal(status, 404);
  return absent;
}
