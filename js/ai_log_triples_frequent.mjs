import { ai_log_entries } from "./ai_log_entries.mjs";
import { ai_log_triples_ranked } from "./ai_log_triples_ranked.mjs";
import { list_take } from "./list_take.mjs";
export async function ai_log_triples_frequent(top) {
  "The commands most often run three straight after another, most frequent first, so a run of work worth making into one command shows itself, and so a pair already seen can be read for what usually follows it.";
  let entries = await ai_log_entries();
  let triples = ai_log_triples_ranked(entries);
  let taken = list_take(triples, top);
  return taken;
}
