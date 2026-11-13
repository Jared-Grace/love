import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function calendar_db_host_save(
  db,
  uid,
  slug,
  block_minutes,
  meeting_minutes,
  now_iso,
) {
  arguments_assert(arguments, 6);
  ("Turns bookings on for uid, or changes their booking link and meeting lengths; answers {ok, reason}. uid must already be a person. The link is slug, written like_this: lowercase letters, digits and underscores.");
  ("A link another host already has is answered slug_taken rather than thrown, since a person choosing one will often pick a taken name.");
  let b = /^[a-z0-9_]{2,40}$/.test(slug);
  if (not(b)) {
    let r = {
      ok: false,
      reason: "slug",
    };
    return r;
  }
  let taken = await db
    .prepare("SELECT uid FROM hosts WHERE slug = ?1 AND uid <> ?2")
    .bind(slug, uid)
    .first();
  if (not_equal(taken, null)) {
    let r2 = {
      ok: false,
      reason: "slug_taken",
    };
    return r2;
  }
  try {
    await db
      .prepare(
        `INSERT INTO hosts (uid, slug, block_minutes, meeting_minutes, created_at) VALUES (?1, ?2, ?3, ?4, ?5)
ON CONFLICT (uid) DO UPDATE SET slug = excluded.slug, block_minutes = excluded.block_minutes, meeting_minutes = excluded.meeting_minutes`,
      )
      .bind(uid, slug, block_minutes, meeting_minutes, now_iso)
      .run();
  } catch (e) {
    let message = String(e.message);
    if (message.includes("UNIQUE")) {
      let r3 = {
        ok: false,
        reason: "slug_taken",
      };
      return r3;
    }
    if (message.includes("CHECK")) {
      let r4 = {
        ok: false,
        reason: "minutes",
      };
      return r4;
    }
    if (message.includes("FOREIGN KEY")) {
      let r5 = {
        ok: false,
        reason: "no_person",
      };
      return r5;
    }
    throw e;
  }
  let r6 = {
    ok: true,
    reason: null,
  };
  return r6;
}
