import { functions_names } from "./functions_names.mjs";
import { text_identifier_segments } from "./text_identifier_segments.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { function_commit_last } from "./function_commit_last.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { not } from "./not.mjs";
export async function qa_gate_blame_told(message) {
  "For every function a gate complained about, the last commit that touched it";
  "A gate names what is wrong and stops there. With several of us in one folder the answer to who is nearly always somebody else, mid-migration - and without the commit the reader spends the next minutes proving the fault is not theirs. That is the cost this removes, and it is paid on every red gate by everyone who sees it.";
  "The names are picked out of what the gate said rather than reported by the gate, so this works for every gate at once and no gate has to be changed to join in.";
  "Only names that answer to a real function survive, so an ordinary word in the sentence cannot become an accusation.";
  let known = await functions_names();
  let segments = text_identifier_segments(message);
  let named = [];
  for (let segment of segments) {
    let identifier = property_get(segment, "identifier");
    if (not(identifier)) {
      continue;
    }
    let text = property_get(segment, "text");
    let real = list_includes(known, text);
    if (real) {
      list_add(named, text);
    }
  }
  let unique = list_unique(named);
  let blamed = await list_map_unordered_async(unique, function_commit_last);
  let found = list_filter_null_not_is(blamed);
  return found;
}
