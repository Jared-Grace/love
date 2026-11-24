import { arguments_assert } from "./arguments_assert.mjs";
import { calendar_send_url } from "./calendar_send_url.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function calendar_db_guest_proofs_read(db, slug, uid) {
  arguments_assert(arguments, 3);
  ("Where the guest uid stands with the host at slug, once per app: a list, newest asked first, each {via, whatsapp, profile_given, code, send_url, proven}; empty when they have never asked to prove who they are. The guest's page picks the app the guest chose, and shows either the code still to send or the times to pick.");
  ('A list because a guest may be proven on WhatsApp and on Messenger both (human, 2026-11-24: "it should allow multiple communications as confirmed").');
  let read = await db
    .prepare(
      `SELECT pr.via, pr.whatsapp, pr.profile_given, pr.code, pr.confirmed_at, hp.whatsapp AS host_whatsapp, h.messenger AS host_messenger
FROM proofs pr JOIN hosts h ON h.uid = pr.host_uid JOIN people hp ON hp.uid = h.uid
WHERE h.slug = ?1 AND pr.guest_uid = ?2
ORDER BY pr.created_at DESC`,
    )
    .bind(slug, uid)
    .all();
  function shown(proof) {
    let send_url = calendar_send_url(
      proof.via,
      proof.host_whatsapp,
      proof.host_messenger,
      proof.code,
    );
    let b = equal(proof.confirmed_at, null);
    let r = {
      via: proof.via,
      whatsapp: proof.whatsapp,
      profile_given: proof.profile_given,
      code: proof.code,
      send_url,
      proven: not(b),
    };
    return r;
  }
  let r2 = read.results.map(shown);
  return r2;
}
