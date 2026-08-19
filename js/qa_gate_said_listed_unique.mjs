import { arguments_assert } from "./arguments_assert.mjs";
import { object_is } from "./object_is.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { text_is_if_or_null } from "./text_is_if_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { text_split } from "./text_split.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { list_unique } from "./list_unique.mjs";
export function qa_gate_said_listed_unique(list) {
  arguments_assert(arguments, 1);
  let names = [];
  for (let entry of list) {
    let carried = object_is(entry);
    if (carried) {
      ("every word an offender is written down under, because there is no one property a gate calls it by - one says name, one says bible_folder, one says path, and asking for a single one of those reads eleven of twelve gates as having named nobody");
      ("a value with a space in it is prose rather than a word anything answers to, so it is left where it is. A hint sentence taken as a name would let a gate claim to have named somebody while naming nothing that could ever match, which is the one wrong answer here - it turns a gate that must block into a gate that is somebody else's business");
      for (let key of object_property_names(entry)) {
        let held = property_get_or_null(entry, key);
        let word = text_is_if_or_null(held);
        if (null_is(word)) {
          continue;
        }
        let empty = text_empty_is(word);
        if (empty) {
          continue;
        }
        let parts = text_split(word, " ");
        let one_word = list_size_1(parts);
        if (not(one_word)) {
          continue;
        }
        list_add(names, word);
      }
      continue;
    }
    let plain = text_is_if_or_null(entry);
    if (null_is(plain)) {
      continue;
    }
    list_add(names, plain);
  }
  let unique = list_unique(names);
  return unique;
}
