import { list_map_concat_multiple } from "./list_map_concat_multiple.mjs";
import { examples_groups } from "./examples_groups.mjs";
import { property_get } from "./property_get.mjs";
("The reading order is just the groups flattened — examples_groups is the one source");
("(so order and grouping can never drift). Files not listed there are appended at the");
("end by examples_corpus_read (a new example still shows up).");
export function examples_order() {
  function to_examples(group) {
    return property_get(group, "examples");
  }
  let order = list_map_concat_multiple(examples_groups(), to_examples);
  return order;
}
