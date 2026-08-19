import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { equal_not } from "./equal_not.mjs";
import { js_identifiers_referenced_named_nodes } from "./js_identifiers_referenced_named_nodes.mjs";
import { js_name_fixed_is } from "./js_name_fixed_is.mjs";
import { js_node_identifier_replace } from "./js_node_identifier_replace.mjs";
import { js_property_path_get_2_step_replace } from "./js_property_path_get_2_step_replace.mjs";
import { js_record_read_rows } from "./js_record_read_rows.mjs";
import { js_record_name_entries_try } from "./js_record_name_entries_try.mjs";
import { js_record_read_replacements_try } from "./js_record_read_replacements_try.mjs";
import { list_add } from "./list_add.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_remove } from "./list_remove.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export function js_declaration_record_read_collapse_try(ast, rebound, row) {
  arguments_assert(arguments, 3);
  ("Take away one line that gathers names into a record when nothing ever wants the record, only the names back out of it, and answer whether it went.");
  ("A piece of work moved out of a body hands several answers back at once, and a record is how several answers travel as one. Folding that piece back in leaves the gathering and the taking-apart standing next to each other with the names they were carrying still in scope on both sides, so the whole round trip says nothing and can go.");
  ("Every name involved has to mean one thing everywhere and never be pointed somewhere else - the record's own name and each of the names it carries. Without that, a name read out of the record on a later line and the same word standing on an earlier one are not the one thing, and answering the one with the other quietly changes what runs.");
  ("The line that brings the record into being names it too, and that naming is not a use. It is left out before the uses are judged, or the record would look like something wanted for itself and never go.");
  let init = property_get(row, "init");
  let entries = js_record_name_entries_try(init);
  if (null_is(entries)) {
    return false;
  }
  let name = property_get(row, "name");
  let names = list_map_property(entries, "name");
  list_add(names, name);
  for (let each_name of names) {
    let fixed_is = js_name_fixed_is(ast, rebound, each_name);
    if (not(fixed_is)) {
      return false;
    }
  }
  let id = property_get(row, "id");
  let mentions = js_identifiers_referenced_named_nodes(ast, name);
  function use_is(node) {
    let other_is = equal_not(node, id);
    return other_is;
  }
  let uses = list_filter(mentions, use_is);
  let reads = js_record_read_rows(ast);
  let replacements = js_record_read_replacements_try(entries, reads, uses);
  if (null_is(replacements)) {
    return false;
  }
  function replacement_each(replacement) {
    let call = property_get(replacement, "call");
    let to = property_get(replacement, "name");
    let after = property_get(replacement, "after");
    let stops_is = null_is(after);
    if (stops_is) {
      js_node_identifier_replace(call, to);
      return;
    }
    js_property_path_get_2_step_replace(call, to);
  }
  each(replacements, replacement_each);
  let list = property_get(row, "list");
  let declaration = property_get(row, "declaration");
  list_remove(list, declaration);
  return true;
}
