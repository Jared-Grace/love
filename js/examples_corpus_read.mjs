import { examples_names } from "./examples_names.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_map } from "./list_map.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_concat } from "./list_concat.mjs";
import { text_combine } from "./text_combine.mjs";
import { examples_order } from "./examples_order.mjs";
import { property_get } from "./property_get.mjs";
import { function_aliases_inverted } from "./function_aliases_inverted.mjs";
import { example_alias_derive } from "./example_alias_derive.mjs";
import { example_tool_family } from "./example_tool_family.mjs";
export async function examples_corpus_read() {
  let mjs = await examples_names();
  list_sort_text(mjs);
  function to_file(base) {
    let combined = text_combine(base, ".mjs");
    return combined;
  }
  let list = examples_order();
  let order_files = list_map(list, to_file);
  function is_present(file) {
    let includes = list_includes(mjs, file);
    return includes;
  }
  let present = list_filter(order_files, is_present);
  function not_ordered(file) {
    let n = list_includes_not(present, file);
    return n;
  }
  let extra = list_filter(mjs, not_ordered);
  let ordered = list_concat(present, extra);
  async function to_example(name) {
    let mod = await import("../data/examples/" + name);
    let example = property_get(mod, "example");
    return example;
  }
  let examples = await list_map_unordered_async(ordered, to_example);
  let inverted = await function_aliases_inverted();
  function alias_attach(example) {
    let f_name = property_get(example, "fn");
    example.alias = example_alias_derive(f_name, inverted);
    example.family = example_tool_family(f_name);
    return example;
  }
  let with_alias = list_map(examples, alias_attach);
  return with_alias;
}
