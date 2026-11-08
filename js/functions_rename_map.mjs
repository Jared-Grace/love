import { arguments_assert } from "./arguments_assert.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { equal_not_assert_json } from "./equal_not_assert_json.mjs";
import { function_name_to_path_unalias } from "./function_name_to_path_unalias.mjs";
import { property_set_exists_not } from "./property_set_exists_not.mjs";
import { object_values } from "./object_values.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
import { list_unique_is_assert_json } from "./list_unique_is_assert_json.mjs";
import { list_intersect_empty_is_assert_json } from "./list_intersect_empty_is_assert_json.mjs";
import { function_rename_check } from "./function_rename_check.mjs";
import { folders_function_named_rename_check } from "./folders_function_named_rename_check.mjs";
import { function_parse_unaliased } from "./function_parse_unaliased.mjs";
import { js_identifiers_named } from "./js_identifiers_named.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { function_rename_examples_check_map } from "./function_rename_examples_check_map.mjs";
import { function_rename_fn_names_check_map } from "./function_rename_fn_names_check_map.mjs";
import { function_rename_data_check_map } from "./function_rename_data_check_map.mjs";
import { function_alias_rename } from "./function_alias_rename.mjs";
import { data_identifiers_get } from "./data_identifiers_get.mjs";
import { function_move_unchecked } from "./function_move_unchecked.mjs";
import { functions_identifiers_rename_map } from "./functions_identifiers_rename_map.mjs";
import { functions_imports_dynamic_rename_map } from "./functions_imports_dynamic_rename_map.mjs";
import { permission_settings_allow_rename_report } from "./permission_settings_allow_rename_report.mjs";
import { memory_fn_references_rename_report } from "./memory_fn_references_rename_report.mjs";
import { storage_local_key_owner_renamed_record } from "./storage_local_key_owner_renamed_record.mjs";
import { folders_function_named_rename } from "./folders_function_named_rename.mjs";
export async function functions_rename_map(renames) {
  "Renames a whole map of functions at once, old name to new, and hands back the map with every old name resolved through its alias. A single rename is this with one entry.";
  "Each sweep runs once for the whole map rather than once per name. Asked one name at a time, every rename parsed the example corpus, read every data file, folded the identifier index again after its own writes, read the whole repo's source for fetches, and rewrote a calling file once for each name it called - measured 2026-11-08 at 17 seconds a name with no callers at all, which a prefix migration of two thousand names pays two thousand times.";
  "Everything that can refuse is asked before anything is written: each new name differs from its old one, the new names are all different, none of them is also an old name, none is taken by an identifier or a store on this disk, and none already sits inside the file being renamed. A new name that is also an old one is refused because the sweeps then swap names one after another in the same text, and a later swap would move an earlier one's result.";
  "The order is the single rename's order. The corpus goes first because it is the step that can still refuse; aliases and data follow; the identifier index is read once just before the functions move, because a move changes files and the index folds itself again after every change; then the callers, the fetches, and the reports.";
  arguments_assert(arguments, 1);
  let unaliased = {};
  for (let before_given of object_property_names(renames)) {
    let after_given = property_get(renames, before_given);
    equal_not_assert_json(before_given, after_given, {
      hint: "the new name should differ from the old name — is this actually a rename?",
    });
    let v = await function_name_to_path_unalias(before_given);
    let name = property_get(v, "unaliased");
    property_set_exists_not(unaliased, name, after_given);
  }
  let befores = object_property_names(unaliased);
  let afters = object_values(unaliased);
  list_empty_not_is_assert_json(befores, {
    hint: "the map should hold at least one rename",
  });
  list_unique_is_assert_json(afters, {
    hint: "two functions cannot both be renamed to one name",
  });
  list_intersect_empty_is_assert_json(afters, befores, {
    hint: "a new name may not also be an old name in the same batch - rename in two batches",
  });
  for (let after of afters) {
    await function_rename_check(after);
    ("a store on this disk is named after the function that owns it, so a name already holding one is as taken as a name already bound - asked before anything moves, because code renamed away from its own data is worse than a rename left undone");
    await folders_function_named_rename_check(after);
  }
  for (let before of befores) {
    let after = property_get(unaliased, before);
    let v2 = await function_parse_unaliased(before);
    let ast = property_get(v2, "ast");
    let identifiers_named = js_identifiers_named(ast, after);
    list_empty_is_assert_json(identifiers_named, {
      f_name_after: after,
      msg: "already exists in file as identifier",
    });
  }
  await function_rename_examples_check_map(unaliased);
  await function_rename_fn_names_check_map(unaliased);
  await function_rename_data_check_map(unaliased);
  for (let before of befores) {
    let after = property_get(unaliased, before);
    await function_alias_rename(before, after);
  }
  let identifiers = await data_identifiers_get();
  for (let before of befores) {
    let after = property_get(unaliased, before);
    await function_move_unchecked(before, after);
  }
  await functions_identifiers_rename_map(unaliased, identifiers);
  ("a fetch made while running names the file as a piece of writing, which the identifier rename never reads - so it is moved here, or it keeps naming a file that is no longer there and fails only when somebody opens it");
  await functions_imports_dynamic_rename_map(unaliased);
  for (let before of befores) {
    let after = property_get(unaliased, before);
    ("a standing approval names the function as plain text, so the generated rules file stops matching when the function it names moves. renaming is itself auto-approved, so this says so rather than writing the file - an auto-approved command that edits the allow list is the one shape the permission system refuses, and it refused this");
    permission_settings_allow_rename_report(before, after);
    ("aliases already follow a rename; memory notes are the other named referrer, so marked pointers follow too and bare mentions are reported for a human to weigh");
    await memory_fn_references_rename_report(before, after);
    ("a browser storage key is the owning function's own name, so settings people saved are filed under the old name. The rename is recorded, and the browser carries those settings across to the new name the first time it reads them");
    await storage_local_key_owner_renamed_record(before, after);
    ("a store on this disk is reachable, so it is moved rather than reported - the sentence a browser key gets is only a sentence because nothing here can reach that disk");
    await folders_function_named_rename(before, after);
  }
  return unaliased;
}
