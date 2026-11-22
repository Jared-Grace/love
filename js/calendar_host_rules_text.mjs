import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
export function calendar_host_rules_text(host) {
  arguments_assert(arguments, 1);
  ("A host's saved booking rules as host_rules_save takes them typed - {messenger, max, max_guest}, a missing limit as blank - so a screen saving one of them sends the others back unchanged. host is the settings' host, or null before one is saved, which answers what a new host row starts with: no Messenger, no daily limit, 2 per guest.");
  function typed(limit) {
    let r = equal(limit, null) ? "" : String(limit);
    return r;
  }
  if (equal(host, null)) {
    let r2 = {
      messenger: "",
      max: "",
      max_guest: "2",
    };
    return r2;
  }
  let r3 = {
    messenger: host.messenger,
    max: typed(host.max_per_day),
    max_guest: typed(host.max_per_guest),
  };
  return r3;
}
