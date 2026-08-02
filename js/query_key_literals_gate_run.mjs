import { arguments_assert } from "./arguments_assert.mjs";
import { query_key_literals_all } from "./query_key_literals_all.mjs";
import { key_literals_gate_run_generic } from "./key_literals_gate_run_generic.mjs";
export async function query_key_literals_gate_run() {
  "QA gate: no word is written straight into the query part of a page address. Every one of them is held by a function, so it can be frozen.";
  "The query part is published exactly like the part after the hash - somebody bookmarks the link, or sends it to a friend - and after that it is on disks nobody here can reach.";
  "The part after the hash had a full watch over it while this half had one frozen word and nothing looking. That is the gap this closes, and it was a gap of the worst kind: everything about it read as healthy.";
  "All that is said here is which part of the address is meant. The judging is shared with the part after the hash, which asks the identical question of a different walk.";
  arguments_assert(arguments, 0);
  let sites = await query_key_literals_all();
  let r = key_literals_gate_run_generic(sites, "the query part");
  return r;
}
