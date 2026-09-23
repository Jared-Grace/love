import { arguments_assert } from "./arguments_assert.mjs";
import { js_declarations_single_rows } from "./js_declarations_single_rows.mjs";
import { js_rebound_names } from "./js_rebound_names.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { js_visit_types } from "./js_visit_types.mjs";
import { js_visit } from "./js_visit.mjs";
import { js_call_fn_name_literal_is } from "./js_call_fn_name_literal_is.mjs";
import { not } from "./not.mjs";
import { list_includes } from "./list_includes.mjs";
import { js_name_single_binding_is } from "./js_name_single_binding_is.mjs";
import { js_identifiers_referenced_named_nodes } from "./js_identifiers_referenced_named_nodes.mjs";
import { equal } from "./equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { list_first } from "./list_first.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { object_copy } from "./object_copy.mjs";
import { object_replace } from "./object_replace.mjs";
import { list_remove } from "./list_remove.mjs";
export function js_fn_name_declarations_inline(ast) {
  arguments_assert(arguments, 1);
  ("Put every line that only gives a marked function name a local name back into the one place that reads it.");
  ("The lifting pass used to take the marker call out of wherever it stood and give it a line of its own, so a name written inside a call came to be written twice - once as the line, once as the local it bound. The call does nothing but hand back its string, so it can stand anywhere and run any number of times with the same result; putting it back changes what the line says and nothing about what runs.");
  ("Four things are asked before a line goes, and each one is a way this could be silently wrong. The local must never be pointed somewhere else, or the place reading it might be reading a later value. The word must mean one thing everywhere the file spells it, so the one mention found is this local's and no other's. It must be read exactly once, because a second reader would have nothing left to read. And it must be read after the line, because a read standing earlier in the file is a read of a local not yet made, which throws - putting the call there would make it stop throwing.");
  ("A local written the short way inside a record is left alone. There the word is the entry's name as well as its value, and putting a call in its place would take the entry's name away.");
  let inlined = [];
  let rows = js_declarations_single_rows(ast);
  let rebound = js_rebound_names(ast);
  let short = [];
  function short_add(v) {
    let node = property_get(v, "node");
    let shorthand = property_get(node, "shorthand");
    if (shorthand) {
      let key = property_get(node, "key");
      let item = property_get(key, "name");
      list_add(short, item);
    }
  }
  js_visit_types(ast, ["Property"], short_add);
  ("Which of two places comes first is read off the order the walk meets them in, not off where they sat in the text. A piece made earlier in the same pass was never in any text, so it carries no place to compare.");
  let order = [];
  function order_add(v) {
    let item2 = property_get(v, "node");
    list_add(order, item2);
  }
  js_visit(ast, order_add);
  for (let row of rows) {
    let init = property_get(row, "init");
    let marker_is = js_call_fn_name_literal_is(init);
    if (not(marker_is)) {
      continue;
    }
    let name = property_get(row, "name");
    if (list_includes(rebound, name)) {
      continue;
    }
    if (list_includes(short, name)) {
      continue;
    }
    let single_is = js_name_single_binding_is(ast, name);
    if (not(single_is)) {
      continue;
    }
    let id = property_get(row, "id");
    let mentions = js_identifiers_referenced_named_nodes(ast, name);
    function other_is(node) {
      let b = equal(node, id);
      let is = not(b);
      return is;
    }
    let reads = list_filter(mentions, other_is);
    let once_is = list_size_1(reads);
    if (not(once_is)) {
      continue;
    }
    let read = list_first(reads);
    let declaration = property_get(row, "declaration");
    let a = list_index_of(order, read);
    let b2 = list_index_of(order, declaration);
    let early_is = less_than_equal(a, b2);
    if (early_is) {
      continue;
    }
    let copy = object_copy(init);
    object_replace(read, copy);
    let list = property_get(row, "list");
    list_remove(list, declaration);
    list_add(inlined, name);
  }
  return inlined;
}
