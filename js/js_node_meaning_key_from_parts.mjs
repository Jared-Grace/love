import { list_join } from "./list_join.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
export function js_node_meaning_key_from_parts(head, parts, settle) {
  "What a thing says, written out from the head it is written under and what each of its parts says: the parts inside the head's brackets, separated by commas.";
  "A thing whose parts may be given in any order without changing what is said has them put in a settled order first, so that the several ways of writing one all come out as the same key. Whether that is so is decided by whoever is asking, because the answer is different for a sign than it is for a call, and different again for one sign than another.";
  if (settle) {
    list_sort_text(parts);
  }
  let written = list_join(parts, ",");
  let pieces = [head, "(", written, ")"];
  let key = list_join(pieces, "");
  return key;
}
