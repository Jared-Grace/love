import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_en_stores } from "./app_learn_en_stores.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_unique } from "./list_unique.mjs";
import { language_code_key } from "./language_code_key.mjs";
import { property_path_get_2 } from "./property_path_get_2.mjs";
export function app_learn_en_stores_fields_missing() {
  "Each language this app offers that lacks something another language has - a field left out, or a piece of text left blank - with the names of what it lacks. [] when every language carries the same fields, all filled.";
  "The rule is read off the languages themselves rather than written down here: whatever one language has, every language must have. So a field added to one language later is required of the rest the moment it lands, and this list never has to be told about it.";
  "Why it matters: the first screen draws one line and one button per language from these fields, and a field one language lacks throws there - Spanish was offered with no name of its own, and every new reader got an error instead of the question.";
  arguments_assert(arguments, 0);
  let stores = app_learn_en_stores();
  let all = [];
  for (let store of stores) {
    all.push(...properties_get(store));
  }
  let required = list_unique(all);
  let property_name = language_code_key();
  let r = [];
  for (let store of stores) {
    let lacks = [];
    for (let field of required) {
      if (not(field in store)) {
        lacks.push(field);
        continue;
      }
      let value = store[field];
      if (equal(typeof value, "string") && equal(value.trim(), "")) {
        lacks.push(field);
      }
    }
    if (greater_than(lacks.length, 0)) {
      let language_code = property_path_get_2(store, "language", property_name);
      r.push({
        language_code,
        lacks,
      });
    }
  }
  return r;
}
