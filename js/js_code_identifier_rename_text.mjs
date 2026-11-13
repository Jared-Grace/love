import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_identifiers_referenced_nodes } from "./js_identifiers_referenced_nodes.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
export function js_code_identifier_rename_text(code, name_from, name_to) {
  arguments_assert(arguments, 3);
  ("code with every word that reads the value name_from spelled name_to instead, and every other character left exactly as it was - a word naming a property or a key, or inside a string, stays");
  ("2026-11-13, so a lesson can build its programs with one name and hand each question its own letter. The text is cut at each word's place rather than the tree printed again, so the program keeps the spacing it was built with, which the lessons' wrong answers and the step tracer are matched against.");
  let ast = js_parse(code);
  let nodes = js_identifiers_referenced_nodes(ast);
  function named(node) {
    let name = property_get(node, "name");
    let same = equal(name, name_from);
    return same;
  }
  let found = list_filter(nodes, named);
  function start_of(node2) {
    let start = property_get(node2, "start");
    return start;
  }
  list_sort_number_mapper(found, start_of);
  let renamed = "";
  let at = 0;
  for (let node3 of found) {
    let start2 = property_get(node3, "start");
    let end = property_get(node3, "end");
    renamed = renamed + code.slice(at, start2) + name_to;
    at = end;
  }
  renamed = renamed + code.slice(at);
  return renamed;
}
