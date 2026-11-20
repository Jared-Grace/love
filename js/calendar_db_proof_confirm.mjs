import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { calendar_confirm_code_read } from "./calendar_confirm_code_read.mjs";
import { calendar_profile_url_read } from "./calendar_profile_url_read.mjs";
export async function calendar_db_proof_confirm(
  db,
  host_uid,
  via,
  code,
  sender,
  now_iso,
) {
  arguments_assert(arguments, 6);
  ("The host saw code arrive: proves every guest waiting on host_uid with that code, when sender matches; answers {ok, reason, confirmed}. via is whatsapp or messenger. On WhatsApp sender is the number the code came from, and must be the number the guest gave (reason number). On Messenger sender is the link to the profile that sent it, kept as the guest's profile_url (reason profile when it is not a Facebook or Messenger link). no_code: nothing waiting holds that code on that app.");
  ("★ A CODE PROVES ONLY TOGETHER WITH WHO SENT IT. The guest's page shows the code, so a code alone proves nothing; the number it came from (or the profile the host sees sending it) is the proof. Numbers are compared by digits alone.");
  let messenger = equal(via, "messenger");
  let via_kept = messenger ? "messenger" : "whatsapp";
  let wanted = calendar_confirm_code_read(code);
  let read = await db
    .prepare(
      "SELECT guest_uid, whatsapp FROM proofs WHERE host_uid = ?1 AND code = ?2 AND via = ?3 AND confirmed_at IS NULL",
    )
    .bind(host_uid, wanted, via_kept)
    .all();
  if (equal(read.results.length, 0)) {
    let r = {
      ok: false,
      reason: "no_code",
      confirmed: 0,
    };
    return r;
  }
  let profile_url = null;
  let matching = read.results;
  if (messenger) {
    profile_url = calendar_profile_url_read(sender);
    if (equal(profile_url, null)) {
      let r2 = {
        ok: false,
        reason: "profile",
        confirmed: 0,
      };
      return r2;
    }
  } else {
    let digits = String(sender).replace(/[^0-9]/g, "");
    function same_number(proof) {
      let left = String(proof.whatsapp).replace(/[^0-9]/g, "");
      let r3 = equal(left, digits);
      return r3;
    }
    matching = read.results.filter(same_number);
    if (equal(matching.length, 0)) {
      let r4 = {
        ok: false,
        reason: "number",
        confirmed: 0,
      };
      return r4;
    }
  }
  let confirmed = 0;
  for (let proof of matching) {
    let written = await db
      .prepare(
        "UPDATE proofs SET confirmed_at = ?1, profile_url = ?2 WHERE host_uid = ?3 AND guest_uid = ?4 AND confirmed_at IS NULL",
      )
      .bind(now_iso, profile_url, host_uid, proof.guest_uid)
      .run();
    confirmed += written.meta.changes;
  }
  let r5 = {
    ok: true,
    reason: null,
    confirmed,
  };
  return r5;
}
