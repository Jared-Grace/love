import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { calendar_messenger_name_read } from "./calendar_messenger_name_read.mjs";
import { equal } from "./equal.mjs";
export async function calendar_db_host_messenger_save(
  db,
  uid,
  messenger_typed,
) {
  arguments_assert(arguments, 3);
  ("Saves only a host's Messenger name or link, blank for WhatsApp only; answers {ok, reason}, reasons messenger and no_host. Apart from ",
    fn_name("calendar_db_host_rules_save"),
    " so the About you screen, which asks for it beside the WhatsApp number, leaves the rules - and whether they were ever saved - as they were.");
  let messenger = calendar_messenger_name_read(messenger_typed);
  if (equal(messenger, null)) {
    let r = {
      ok: false,
      reason: "messenger",
    };
    return r;
  }
  let written = await db
    .prepare("UPDATE hosts SET messenger = ?1 WHERE uid = ?2")
    .bind(messenger, uid)
    .run();
  if (equal(written.meta.changes, 0)) {
    let r2 = {
      ok: false,
      reason: "no_host",
    };
    return r2;
  }
  let r3 = {
    ok: true,
    reason: null,
  };
  return r3;
}
