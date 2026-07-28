import { ai_log_entries } from "./ai_log_entries.mjs";
import { ai_log_pairs_ranked } from "./ai_log_pairs_ranked.mjs";
import { list_take } from "./list_take.mjs";
export async function ai_log_pairs_frequent(top) {
  let entries = await ai_log_entries();
  let pairs = ai_log_pairs_ranked(entries);
  let taken = list_take(pairs, top);
  return taken;
}
