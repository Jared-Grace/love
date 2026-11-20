import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { calendar_db_guest_book } from "./calendar_db_guest_book.mjs";
import { not } from "./not.mjs";
export async function calendar_db_proven_book(
  db,
  uid,
  slug,
  timezone,
  day,
  start_minute,
  weekly,
  now_iso,
  id,
) {
  arguments_assert(arguments, 9);
  ("A guest the host at slug has already proven books a time: answers {ok, reason, start_utc}. The meeting is confirmed the moment it is written, on the app and with the number or profile link the host proved - never ones typed now. Reasons: unproven (no proof, or one still waiting for its code), and the booking's own limit, no_host, not_open, taken, timezone.");
  ("★ NO BOOKING WAITS. A guest who is not yet proven cannot book at all, so there is no booking that is only a request - nothing a guest could mistake for a meeting that will happen.");
  let proof = await db
    .prepare(
      `SELECT pr.via, pr.whatsapp, pr.profile_url, pr.confirmed_at, p.name
FROM proofs pr JOIN hosts h ON h.uid = pr.host_uid JOIN people p ON p.uid = pr.guest_uid
WHERE h.slug = ?1 AND pr.guest_uid = ?2`,
    )
    .bind(slug, uid)
    .first();
  if (equal(proof, null) || equal(proof.confirmed_at, null)) {
    let r = {
      ok: false,
      reason: "unproven",
      start_utc: null,
    };
    return r;
  }
  let booked = await calendar_db_guest_book(
    db,
    uid,
    slug,
    proof.name,
    proof.whatsapp,
    timezone,
    day,
    start_minute,
    weekly,
    now_iso,
    id,
    proof.via,
    proof.profile_url,
  );
  if (not(booked.ok)) {
    return booked;
  }
  await db
    .prepare(
      "UPDATE meetings SET confirmed_at = ?1, via = ?2, profile_url = ?3 WHERE id = ?4",
    )
    .bind(now_iso, proof.via, proof.profile_url, id)
    .run();
  return booked;
}
