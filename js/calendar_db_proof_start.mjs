import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { calendar_messenger_name_usable } from "./calendar_messenger_name_usable.mjs";
import { calendar_profile_url_read } from "./calendar_profile_url_read.mjs";
import { calendar_db_person_write } from "./calendar_db_person_write.mjs";
import { calendar_confirm_code } from "./calendar_confirm_code.mjs";
import { calendar_send_url } from "./calendar_send_url.mjs";
export async function calendar_db_proof_start(
  db,
  uid,
  slug,
  name,
  timezone,
  via,
  profile_typed,
  now_iso,
  id,
) {
  arguments_assert(arguments, 9);
  ("A guest asks to prove who they are to the host at slug, before any time can be booked: writes who they are under uid, and answers {ok, reason, code, send_url, proven}. send_url opens WhatsApp (or Messenger) to the host with the code typed. Reasons: no_host, messenger, profile, timezone.");
  ('★ NO NUMBER IS TYPED (human, 2026-11-27: "Do they need to enter their wa#? I receive their wa# with the code from whatever # they\'re logged into - otherwise, what if the number they send the code from is different than what they entered?"). The code is the proof, and the number it arrives from is the number proven: the host types that number on Confirm, and it is written then. So a WhatsApp proof starts with no number, and a guest keeps any number already proven until a new code is confirmed.');
  ("For WhatsApp, a code still waiting is kept, so a code already sent still matches; asking while proven starts a new proof with a new code - that is how a guest changes number, sending the new code from the new phone.");
  ('★ PROVE FIRST, THEN BOOK (human, 2026-11-20: "100% knowing their FB url/wa# so they don\'t book, enter something wrong, expect me to show up"). Many guests do not read English well, so a booking that is only a request until a code arrives can be read as a meeting. Here nothing is booked until the host has seen the code arrive from the number or profile given; after that, every time picked is booked at once.');
  ('★ ONE PROOF PER GUEST, HOST AND APP (human, 2026-11-24: "it should allow multiple communications as confirmed"). A guest proven on WhatsApp who asks to meet on Messenger keeps WhatsApp proven while the Messenger code waits, so they can still book on WhatsApp at once.');
  ("★ EACH PROOF KEPT. On Messenger, asking again with the same profile link keeps the proof as it is - proven stays proven, a waiting one keeps its code, so a code already sent still matches. A different link starts a new proof with a new code, because the host has proven only the one they saw.");
  ("A Messenger guest gives no number and keeps any number already given, as when booking; profile_given is the link they typed, and profile_url is the one the host confirms from, which may differ.");
  function refused(reason) {
    let r = {
      ok: false,
      reason,
      code: null,
      send_url: null,
      proven: false,
    };
    return r;
  }
  let host = await db
    .prepare(
      "SELECT h.uid, p.whatsapp, h.messenger FROM hosts h JOIN people p ON p.uid = h.uid WHERE h.slug = ?1",
    )
    .bind(slug)
    .first();
  if (equal(host, null)) {
    let r2 = refused("no_host");
    return r2;
  }
  let messenger = equal(via, "messenger");
  let via_kept = messenger ? "messenger" : "whatsapp";
  if (messenger && not(calendar_messenger_name_usable(host.messenger))) {
    let r3 = refused("messenger");
    return r3;
  }
  let profile_given = messenger
    ? calendar_profile_url_read(profile_typed)
    : null;
  if (messenger && equal(profile_given, null)) {
    let r4 = refused("profile");
    return r4;
  }
  let before = await db
    .prepare("SELECT whatsapp FROM people WHERE uid = ?1")
    .bind(uid)
    .first();
  let saved = await calendar_db_person_write(
    db,
    uid,
    name,
    equal(before, null) ? "" : before.whatsapp,
    timezone,
    now_iso,
  );
  if (not(saved.ok)) {
    let r5 = refused(saved.reason);
    return r5;
  }
  let number = "";
  let old = await db
    .prepare(
      "SELECT via, whatsapp, profile_given, code, confirmed_at FROM proofs WHERE host_uid = ?1 AND guest_uid = ?2 AND via = ?3",
    )
    .bind(host.uid, uid, via_kept)
    .first();
  let b = equal(old, null);
  let same =
    not(b) &&
    equal(old.via, via_kept) &&
    (messenger
      ? equal(old.profile_given, profile_given)
      : equal(old.confirmed_at, null));
  let code = same ? old.code : calendar_confirm_code(id);
  let proven = same && not(equal(old.confirmed_at, null));
  if (same) {
    ("A waiting proof asked for again is listed again for the host, who sees waiting proofs from the last days only.");
    if (not(proven)) {
      await db
        .prepare(
          "UPDATE proofs SET created_at = ?1 WHERE host_uid = ?2 AND guest_uid = ?3 AND via = ?4",
        )
        .bind(now_iso, host.uid, uid, via_kept)
        .run();
    }
  } else {
    await db
      .prepare(
        `INSERT INTO proofs (host_uid, guest_uid, via, whatsapp, profile_given, profile_url, code, created_at, confirmed_at)
VALUES (?1, ?2, ?3, ?4, ?5, NULL, ?6, ?7, NULL)
ON CONFLICT (host_uid, guest_uid, via) DO UPDATE SET whatsapp = excluded.whatsapp, profile_given = excluded.profile_given, profile_url = NULL, code = excluded.code, created_at = excluded.created_at, confirmed_at = NULL`,
      )
      .bind(host.uid, uid, via_kept, number, profile_given, code, now_iso)
      .run();
  }
  let send_url = calendar_send_url(
    via_kept,
    host.whatsapp,
    host.messenger,
    code,
  );
  let r = {
    ok: true,
    reason: null,
    code,
    send_url,
    proven,
  };
  return r;
}
