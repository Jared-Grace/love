import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { list_size_equal } from "./list_size_equal.mjs";
import { assert_json } from "./assert_json.mjs";
import { list_indexes } from "./list_indexes.mjs";
import { list_get } from "./list_get.mjs";
import { property_set_exists_not } from "./property_set_exists_not.mjs";
import { functions_rename_map } from "./functions_rename_map.mjs";
export async function functions_rename_comma(befores_comma, afters_comma) {
  "Renames several functions in one pass, from the command line: the old names as one comma-joined word, the new names as another, paired by position. Handed back is the map that was renamed, each old name resolved through its alias.";
  "Two lists rather than one list of pairs, because a command line hands each word over as it is, and a list here is one comma-joined word - so the pairs are made by position, and two lists of different lengths are refused before anything moves.";
  arguments_assert(arguments, 2);
  let befores = text_split_comma(befores_comma);
  let afters = text_split_comma(afters_comma);
  let paired = list_size_equal(befores, afters);
  assert_json(paired, {
    hint: "each old name needs exactly one new name, in the same place in the other list",
    befores,
    afters,
  });
  let renames = {};
  for (let index of list_indexes(befores)) {
    let before = list_get(befores, index);
    let after = list_get(afters, index);
    property_set_exists_not(renames, before, after);
  }
  let renamed = await functions_rename_map(renames);
  return renamed;
}
