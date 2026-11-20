import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { calendar_messenger_name_usable } from "./calendar_messenger_name_usable.mjs";
import { calendar_profile_url_read } from "./calendar_profile_url_read.mjs";
import { calendar_db_person_write } from "./calendar_db_person_write.mjs";
import { calendar_db_person_save } from "./calendar_db_person_save.mjs";
import { calendar_confirm_code } from "./calendar_confirm_code.mjs";
export async function calendar_db_invite(
  db,
  host_uid,
  guest_uid,
  name,
  via,
  contact,
  now_iso,
) {
  arguments_assert(arguments, 7);
  ("The host at host_uid is about to send a booking link into one chat: writes the person in that chat as guest_uid, already proven on that app, and answers {ok, reason, slug}. via is whatsapp or messenger; contact is the WhatsApp number the chat is with, or the link to the Messenger chat or profile. Reasons: no_host, messenger, profile, whatsapp.");
  ('★ THE HOST SENDING THE LINK IS THE PROOF (human, 2026-11-20: \"Could this link already be attached to their phone number or messenger conversation url/FB profile url ... so that it\'s already verified\"). A code proves a number belongs to the guest by the guest sending from it; the host sending the link into that very chat proves the same thing from the other side. So nothing is typed by the guest, and nothing can be typed wrong.');
  ("The link is then the proof: whoever opens it books as this guest. The guest's page names the number or chat the meeting is on, so a stranger handed it can see it is not theirs.");
  ("The time zone starts as the host's, and the guest's page sends its own with every booking.");
  function refused(reason) {
    let r = {
      ok: false,
      reason,
      slug: null,
    };
    return r;
  }
  let host = await db
    .prepare(
      "SELECT h.slug, h.messenger, p.timezone FROM hosts h JOIN people p ON p.uid = h.uid WHERE h.uid = ?1",
    )
    .bind(host_uid)
    .first();
  if (equal(host, null)) {
    let r2 = refused("no_host");
    return r2;
  }
  let messenger = equal(via, "messenger");
  if (messenger && not(calendar_messenger_name_usable(host.messenger))) {
    let r3 = refused("messenger");
    return r3;
  }
  let profile = messenger ? calendar_profile_url_read(contact) : null;
  if (messenger && equal(profile, null)) {
    let r4 = refused("profile");
    return r4;
  }
  let saved = messenger
    ? await calendar_db_person_write(
        db,
        guest_uid,
        name,
        "",
        host.timezone,
        now_iso,
      )
    : await calendar_db_person_save(
        db,
        guest_uid,
        name,
        contact,
        host.timezone,
        now_iso,
      );
  if (not(saved.ok)) {
    let r5 = refused(saved.reason);
    return r5;
  }
  let person = await db
    .prepare("SELECT whatsapp FROM people WHERE uid = ?1")
    .bind(guest_uid)
    .first();
  ("A code is still written, since every proof holds one; nobody is shown it or sends it.");
  let code = calendar_confirm_code(guest_uid);
  await db
    .prepare(
      `INSERT INTO proofs (host_uid, guest_uid, via, whatsapp, profile_given, profile_url, code, created_at, confirmed_at)
VALUES (?1, ?2, ?3, ?4, ?5, ?5, ?6, ?7, ?7)`,
    )
    .bind(
      host_uid,
      guest_uid,
      messenger ? "messenger" : "whatsapp",
      person.whatsapp,
      profile,
      code,
      now_iso,
    )
    .run();
  let r = {
    ok: true,
    reason: null,
    slug: host.slug,
  };
  return r;
}
