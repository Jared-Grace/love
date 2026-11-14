import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { calendar_messenger_name_read } from "./calendar_messenger_name_read.mjs";
import { equal } from "./equal.mjs";
export async function calendar_db_host_rules_save(
  db,
  uid,
  messenger_typed,
  max_typed,
) {
  arguments_assert(arguments, 4);
  ("Saves a host's booking rules as they typed them; answers {ok, reason}. messenger_typed is their Messenger name or link, blank for WhatsApp only. max_typed is the most meetings they take in one day, blank for no limit. Reasons: messenger, max (1 to 24), no_host (save the booking link first).");
  let messenger = calendar_messenger_name_read(messenger_typed);
  if (equal(messenger, null)) {
    let r = {
      ok: false,
      reason: "messenger",
    };
    return r;
  }
  let max_text = String(max_typed).trim();
  let max_per_day = null;
  let b = equal(max_text, "");
  if (not(b)) {
    let n = Number(max_text);
    let b2 = /^[0-9]+$/.test(max_text);
    if (not(b2) || less_than(n, 1) || greater_than(n, 24)) {
      let r2 = {
        ok: false,
        reason: "max",
      };
      return r2;
    }
    max_per_day = n;
  }
  let written = await db
    .prepare("UPDATE hosts SET messenger = ?1, max_per_day = ?2 WHERE uid = ?3")
    .bind(messenger, max_per_day, uid)
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
