import { memory_symbol_references_unresolved } from "./memory_symbol_references_unresolved.mjs";
import { memory_symbol_namespaces } from "./memory_symbol_namespaces.mjs";
import { text_split_first } from "./text_split_first.mjs";
import { property_exists } from "./property_exists.mjs";
import { list_filter } from "./list_filter.mjs";
export async function memory_symbol_references_judged() {
  "The call-shaped names in memory that resolve to nothing AND open with a word some live function opens with. Those are the ones making a claim about repo code, so those are the ones worth holding to it.";
  "Everything else is left alone by construction rather than by exception, which is the same line the double-bracket check draws. A note quoting its own callbacks writes names like a click handler or a fresh-draw helper; no family in the repo begins that way, so nothing has to decide case by case whether they were meant to be real.";
  let unresolved = await memory_symbol_references_unresolved();
  let namespaces = await memory_symbol_namespaces();
  function claims_repo_code(token) {
    let first = text_split_first(token, "_");
    let known = property_exists(namespaces, first);
    return known;
  }
  let judged = list_filter(unresolved, claims_repo_code);
  return judged;
}
