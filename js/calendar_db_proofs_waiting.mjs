import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { multiply } from "./multiply.mjs";
export async function calendar_db_proofs_waiting(db, host_uid, now_iso) {
  arguments_assert(arguments, 3);
  ("The guests waiting for host_uid to see their code arrive, oldest first: [{guest_uid, name, via, whatsapp, profile_given, code, created_at}], so the host's page can offer to confirm each.");
  ("Only those asked in the last 7 days: a waiting proof holds no hour, so it is never cancelled, but one nobody sent a code for would otherwise sit on the host's page for ever. A guest who asks again is listed again.");
  let left2 = multiply(7, 24);
  let right = multiply(60, 60);
  let left = multiply(left2, right);
  let left3 = Date.parse(now_iso);
  let right2 = multiply(left, 1000);
  let difference = subtract(left3, right2);
  let since = new Date(difference).toISOString();
  let read = await db
    .prepare(
      `SELECT pr.guest_uid, p.name, pr.via, pr.whatsapp, pr.profile_given, pr.code, pr.created_at
FROM proofs pr JOIN people p ON p.uid = pr.guest_uid
WHERE pr.host_uid = ?1 AND pr.confirmed_at IS NULL AND pr.created_at >= ?2
ORDER BY pr.created_at`,
    )
    .bind(host_uid, since)
    .all();
  let r = read.results;
  return r;
}
