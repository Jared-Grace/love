import { arguments_assert } from "./arguments_assert.mjs";
import { list_add } from "./list_add.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export function js_record_read_replacements_try(entries, reads, uses) {
  arguments_assert(arguments, 3);
  ("Given every mention of a record and every reading of a named entry in the file, the piece of code to write over for each mention and the name to put there - and nothing at all when even one mention is not answerable this way.");
  ("This is the whole question of whether a record can be taken away. It can when the record is never looked at as a thing in itself - never handed to anything, never given back, never compared - but only ever asked for one of the entries it was written with. Each such asking has a known answer, so each can be replaced by that answer and nothing is left needing the record.");
  ("One mention that is not a reading of a known entry stops all of it, not just itself. Half the mentions answered and half still reaching for a record that is no longer there is worse than leaving the record alone.");
  ("Nothing is written here. The list handed back is a plan, so that whoever asked can look at every part of it before any of it happens.");
  ("A reading that carries on one step past the entry keeps that step beside it in the plan. It is not answerable by a name on its own, and whoever carries the plan out has to know that about it.");
  let replacements = [];
  for (let use of uses) {
    let read = list_find_property_or_null(reads, "target", use);
    if (null_is(read)) {
      return null;
    }
    let key = property_get(read, "key");
    let entry = list_find_property_or_null(entries, "key", key);
    if (null_is(entry)) {
      return null;
    }
    let call = property_get(read, "call");
    let after = property_get(read, "after");
    let name = property_get(entry, "name");
    list_add(replacements, {
      call,
      name,
      after,
    });
  }
  return replacements;
}
