import { memory_types } from "./memory_types.mjs";
import { text_combine } from "./text_combine.mjs";
import { list_map } from "./list_map.mjs";
export function memory_type_prefixes() {
  "How each kind of note shows up at the front of its name. Every memory note is named for its kind first, so these are what tell a link that names a note apart from a link that names something else.";
  "Derived from the kinds themselves rather than listed again, so adding a kind cannot leave the checks reading for one that no longer exists.";
  let types = memory_types();
  let separator = "_";
  function with_separator(type) {
    let prefix = text_combine(type, separator);
    return prefix;
  }
  let prefixes = list_map(types, with_separator);
  return prefixes;
}
