import { arguments_assert } from "./arguments_assert.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { examples_paths } from "./examples_paths.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { file_js_parse } from "./file_js_parse.mjs";
import { property_get } from "./property_get.mjs";
import { text_identifier_includes } from "./text_identifier_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_add } from "./list_add.mjs";
import { examples_comments_none_assert } from "./examples_comments_none_assert.mjs";
import { example_rename_lambda } from "./example_rename_lambda.mjs";
import { file_js_unparse } from "./file_js_unparse.mjs";
export async function function_rename_examples_check_map(renames) {
  "The example corpus step of a rename, for a whole map of old names to new ones at once. Each file is parsed once and written once however many of the names it holds, which is the point: asked one name at a time, every name parsed the whole corpus again.";
  "A file earns its rewrite by spelling at least one of the old names, and every file that does is asked about its remarks before anything is written, so a refusal still leaves the corpus untouched.";
  arguments_assert(arguments, 1);
  let befores = object_property_names(renames);
  let paths = await examples_paths();
  let parseds = await list_map_unordered_async(paths, file_js_parse);
  let mentioning = [];
  let names_each = [];
  for (let parsed of parseds) {
    let code = property_get(parsed, "code");
    function named_is(before) {
      let includes = text_identifier_includes(code, before);
      return includes;
    }
    let names = list_filter(befores, named_is);
    if (list_empty_is(names)) {
      continue;
    }
    list_add(mentioning, parsed);
    list_add(names_each, {
      parsed,
      names,
    });
  }
  examples_comments_none_assert(mentioning);
  async function rewrite(one) {
    let parsed = property_get(one, "parsed");
    let names = property_get(one, "names");
    let ast = property_get(parsed, "ast");
    for (let before of names) {
      let after = property_get(renames, before);
      let lambda = example_rename_lambda(before, after);
      lambda(ast);
    }
    await file_js_unparse(parsed);
  }
  let waited = await list_map_unordered_async(names_each, rewrite);
  return waited;
}
