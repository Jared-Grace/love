import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
export async function calendar_db_invite_guest_find(
  db,
  host_uid,
  messenger,
  contact,
) {
  arguments_assert(arguments, 4);
  ("The guest this host has already proven on that chat, or null: messenger says which app, contact is the WhatsApp number as typed or the Facebook link as checked.");
  ("A number matches on its digits alone, so +63 917 and 63917 are one number. A link matches with its letters lowered and a closing slash dropped. Fewer than six digits matches nothing, so a proof holding no number never matches.");
  ("Only a confirmed proof counts - a code nobody sent yet proves nothing - and the newest wins, should one chat somehow name two guests.");
  function digits(text) {
    let d = String(text).replace(/\D/g, "");
    return d;
  }
  function link(text) {
    let l = String(text).toLowerCase().replace(/\/+$/, "");
    return l;
  }
  let wanted = messenger ? link(contact) : digits(contact);
  if (equal(wanted, "") || (not(messenger) && less_than(wanted.length, 6))) {
    return null;
  }
  let rows = await db
    .prepare(
      "SELECT guest_uid, whatsapp, profile_url FROM proofs WHERE host_uid = ?1 AND confirmed_at IS NOT NULL ORDER BY confirmed_at DESC",
    )
    .bind(host_uid)
    .all();
  for (let row of rows.results) {
    let have = messenger
      ? link(row.profile_url || "")
      : digits(row.whatsapp || "");
    if (equal(have, wanted)) {
      let r = row.guest_uid;
      return r;
    }
  }
  return null;
}
