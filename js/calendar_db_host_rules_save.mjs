import { arguments_assert } from "./arguments_assert.mjs";
import { calendar_messenger_name_read } from "./calendar_messenger_name_read.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
export async function calendar_db_host_rules_save(
  db,
  uid,
  messenger_typed,
  max_typed,
  max_guest_typed,
) {
  arguments_assert(arguments, 5);
  ("Saves a host's booking rules as they typed them; answers {ok, reason}. messenger_typed is their Messenger name or link, blank for WhatsApp only. max_typed is the most meetings they take in one day, blank for no limit. max_guest_typed is the most upcoming meetings one guest may hold with them, a weekly one counting once, blank for no limit. Reasons: messenger, max and max_guest (1 to 24), no_host (save the booking link first).");
  let messenger = calendar_messenger_name_read(messenger_typed);
  if (equal(messenger, null)) {
    let r = {
      ok: false,
      reason: "messenger",
    };
    return r;
  }
  function cap_read(typed) {
    "A cap as typed: blank is no cap (null), 1 to 24 is that number, anything else is refused (undefined).";
    let text = String(typed).trim();
    if (equal(text, "")) {
      return null;
    }
    let n = Number(text);
    let b = /^[0-9]+$/.test(text);
    if (not(b) || less_than(n, 1) || greater_than(n, 24)) {
      return undefined;
    }
    return n;
  }
  let max_per_day = cap_read(max_typed);
  if (equal(max_per_day, undefined)) {
    let r2 = {
      ok: false,
      reason: "max",
    };
    return r2;
  }
  let max_per_guest = cap_read(max_guest_typed);
  if (equal(max_per_guest, undefined)) {
    let r5 = {
      ok: false,
      reason: "max_guest",
    };
    return r5;
  }
  let written = await db
    .prepare(
      "UPDATE hosts SET messenger = ?1, max_per_day = ?2, max_per_guest = ?4 WHERE uid = ?3",
    )
    .bind(messenger, max_per_day, uid, max_per_guest)
    .run();
  if (equal(written.meta.changes, 0)) {
    let r3 = {
      ok: false,
      reason: "no_host",
    };
    return r3;
  }
  let r4 = {
    ok: true,
    reason: null,
  };
  return r4;
}
