import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { calendar_send_url } from "./calendar_send_url.mjs";
import { not } from "./not.mjs";
export async function calendar_db_proof_read(db, slug, uid) {
  arguments_assert(arguments, 3);
  ("Where the guest uid stands with the host at slug: null when they have never asked to prove who they are; otherwise {via, whatsapp, profile_given, code, send_url, proven}, so the guest's page shows either the code still to send or the times to pick.");
  let proof = await db
    .prepare(
      `SELECT pr.via, pr.whatsapp, pr.profile_given, pr.code, pr.confirmed_at, hp.whatsapp AS host_whatsapp, h.messenger AS host_messenger
FROM proofs pr JOIN hosts h ON h.uid = pr.host_uid JOIN people hp ON hp.uid = h.uid
WHERE h.slug = ?1 AND pr.guest_uid = ?2`,
    )
    .bind(slug, uid)
    .first();
  if (equal(proof, null)) {
    return null;
  }
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
