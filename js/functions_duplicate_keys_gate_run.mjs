import { functions_duplicate_keys } from "./functions_duplicate_keys.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function functions_duplicate_keys_gate_run() {
  ("Gate: no set of settings in this repo gives one name twice.");
  ("The language allows it and says nothing — the later entry wins and the earlier");
  ("is discarded — so this is a mistake that cannot announce itself. A register");
  ("holding two entries under one key keeps only one, and the one lost is the one");
  ("written first.");
  ("Held as a gate because the loss is invisible at every other moment. It read");
  ("clean across the whole repo the day it was written, which is what makes it");
  ("safe to hold to zero rather than to a baseline.");
  let offenders = await functions_duplicate_keys();
  list_empty_is_assert_json(offenders, {
    hint: "these functions name the same key twice inside one record, so the first of each pair is silently thrown away — would you like to keep one of them, or rename the other?",
  });
  let r = {
    offenders: offenders.length,
  };
  return r;
}
