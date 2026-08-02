import { js_builtin_calls } from "./js_builtin_calls.mjs";
import { list_map_property_unique } from "./list_map_property_unique.mjs";
import { list_map_combine } from "./list_map_combine.mjs";
export function js_builtin_objects_spellings() {
  "Each built-in the repo keeps names for, written with the dot that has to follow it - the shortest piece of text a file must carry before it can possibly hold one of these calls.";
  "Read off the pairings rather than written out again, so a built-in joining that list is looked for from the moment it is added. Written out separately, a sweep would go on skipping every file that only ever mentions the new one, and would report nothing left to do while reading as if it had looked.";
  "The dot is part of it because the name on its own is a word files use for other things. A file saying the word and never reaching a method of it is a parse spent for nothing, and there are several thousand files to spend it on.";
  let calls = js_builtin_calls();
  let objects = list_map_property_unique(calls, "object");
  let dot = ".";
  let spellings = list_map_combine(objects, dot);
  return spellings;
}
