import { arguments_assert } from "./arguments_assert.mjs";
import { calendar_profile_url_read } from "./calendar_profile_url_read.mjs";
import { equal } from "./equal.mjs";
import { calendar_confirm_code_read } from "./calendar_confirm_code_read.mjs";
export async function calendar_db_confirm_messenger(
  db,
  host_uid,
  code,
  profile_typed,
  now_iso,
) {
  arguments_assert(arguments, 5);
  ("The host saw code arrive in Messenger: confirms host_uid's waiting Messenger meetings holding that code, and keeps the sender's profile link on them; answers {ok, reason, confirmed}. Reasons: profile (not a Facebook or Messenger link), no_code.");
  ("★ ON MESSENGER THE SENDER IS THE PROOF. There is no number to compare: the host sees who sent the code, and the profile link they paste is that person. A WhatsApp meeting is never confirmed here, nor a Messenger one by number.");
  let profile_url = calendar_profile_url_read(profile_typed);
  if (equal(profile_url, null)) {
    let r = {
      ok: false,
      reason: "profile",
      confirmed: 0,
    };
    return r;
  }
  let wanted = calendar_confirm_code_read(code);
  let written = await db
    .prepare(
      `UPDATE meetings SET confirmed_at = ?1, profile_url = ?2
WHERE host_uid = ?3 AND code = ?4 AND via = 'messenger' AND confirmed_at IS NULL AND cancelled_at IS NULL`,
    )
    .bind(now_iso, profile_url, host_uid, wanted)
    .run();
  let confirmed = written.meta.changes;
  if (equal(confirmed, 0)) {
    let r2 = {
      ok: false,
      reason: "no_code",
      confirmed: 0,
    };
    return r2;
  }
  let r3 = {
    ok: true,
    reason: null,
    confirmed,
  };
  return r3;
}
