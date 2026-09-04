import { arguments_assert } from "./arguments_assert.mjs";
import { function_exists_assert_json } from "./function_exists_assert_json.mjs";
import { each_unordered_async } from "./each_unordered_async.mjs";
import { property_get } from "./property_get.mjs";
import { visit_unique_async } from "./visit_unique_async.mjs";
import { function_imports_bundled } from "./function_imports_bundled.mjs";
import { list_adder_unique_async } from "./list_adder_unique_async.mjs";
export async function function_dependencies_bundled(f_names) {
  "Every function these ones reach, whether they say so at the top or fetch it while running, each one listed once - the whole of what a build puts out for them, pieces set aside beside the main file included.";
  "IT WALKS THE SAME WAY AS THE PLAIN ONE AND DIFFERS ONLY IN WHAT COUNTS AS REACHING. Keeping them apart rather than widening the plain one is the point: about nineteen callers ask the plain question, several of them gates holding a number that may only fall, and every one of them is asking what a page CARRIES. Widening it would have moved all of their numbers at once, for a question none of them asked.";
  arguments_assert(arguments, 1);
  async function exists_lambda(f_name) {
    await function_exists_assert_json(f_name, {
      hint: "each function should exist to gather its dependencies",
    });
  }
  await each_unordered_async(f_names, exists_lambda);
  async function adder_lambda(la) {
    async function seed_lambda(item) {
      function node_lambda(v) {
        let node = property_get(v, "node");
        la(node);
      }
      await visit_unique_async(item, function_imports_bundled, node_lambda);
    }
    await each_unordered_async(f_names, seed_lambda);
  }
  let reached = await list_adder_unique_async(adder_lambda);
  return reached;
}
