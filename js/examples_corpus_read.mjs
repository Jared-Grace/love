import { folder_read } from "./folder_read.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
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
export async function examples_corpus_read() {
  let names = await folder_read("data/examples");
  function is_mjs(name) {
    return text_ends_with(name, ".mjs");
  }
  let mjs = list_filter(names, is_mjs);
  list_sort_text(mjs);
  // Curriculum order first (see examples_order), then any file not yet listed —
  // so the reading page teaches in a deliberate easy-to-hard sequence.
  function to_file(base) {
    return text_combine(base, ".mjs");
  }
  let order_files = list_map(examples_order(), to_file);
  function is_present(file) {
    return list_includes(mjs, file);
  }
  let present = list_filter(order_files, is_present);
  function not_ordered(file) {
    return list_includes_not(present, file);
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
    let fn_name = property_get(example, "fn");
    example.alias = example_alias_derive(fn_name, inverted);
    return example;
  }
  let with_alias = list_map(examples, alias_attach);
  return with_alias;
}
