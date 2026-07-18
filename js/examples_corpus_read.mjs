import { folder_read } from "./folder_read.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_map } from "./list_map.mjs";
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
  async function to_example(name) {
    let mod = await import("../data/examples/" + name);
    let example = property_get(mod, "example");
    return example;
  }
  let examples = await list_map_unordered_async(mjs, to_example);
  let inverted = await function_aliases_inverted();
  function alias_attach(example) {
    let fn_name = property_get(example, "fn");
    example.alias = example_alias_derive(fn_name, inverted);
    return example;
  }
  let with_alias = list_map(examples, alias_attach);
  return with_alias;
}
