import { reply_pairs_parsable_approved } from "./reply_pairs_parsable_approved.mjs";
import { reply_pairs_parsable_judged } from "./reply_pairs_parsable_judged.mjs";
export async function reply_pairs_parsable() {
  "Every pair of dictionary words known to read as English together: the ones approved samples hold, and the ones judged and kept.";
  let approved = await reply_pairs_parsable_approved();
  let judged = reply_pairs_parsable_judged();
  let pairs = [...new Set([...approved, ...judged])].sort();
  return pairs;
}
