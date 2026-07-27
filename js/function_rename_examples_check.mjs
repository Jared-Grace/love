import { examples_comments_none_assert } from "./examples_comments_none_assert.mjs";
import { examples_paths } from "./examples_paths.mjs";
import { example_rename_lambda } from "./example_rename_lambda.mjs";
import { file_js_parse } from "./file_js_parse.mjs";
import { file_js_unparse } from "./file_js_unparse.mjs";
import { text_identifier_includes } from "./text_identifier_includes.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_filter } from "./list_filter.mjs";
import { property_get } from "./property_get.mjs";
export async function function_rename_examples_check(
  f_name_before,
  f_name_after,
) {
  "The example corpus is code, so a rename reaches it the way the repo is edited everywhere else - by the tree rather than by the letters. That is what tells a reference apart from a name that merely reads the same: a fixture the example owns, a name the shown command brings into being, and an ordinary word in the prose all sit in strings and are left alone, while a name read as a value and the one way in both move. No registry lists these files, so this is told where they are.";
  "Reading the letters is still how a file earns a second look - a text that never spells the name cannot be touched by the rename, and asking first spares it a rewrite it would fail. Over-including a file costs one parse; the deciding is left to the tree.";
  "Everything that could refuse is asked before anything is written. A file whose remarks the writer would destroy refuses, and refusing halfway through would leave the corpus saying two different things at once.";
  let paths = await examples_paths();
  let parseds = await list_map_unordered_async(paths, file_js_parse);
  function mentions_is(parsed) {
    let code = property_get(parsed, "code");
    let includes = text_identifier_includes(code, f_name_before);
    return includes;
  }
  let mentioning = list_filter(parseds, mentions_is);
  examples_comments_none_assert(mentioning);
  let lambda = example_rename_lambda(f_name_before, f_name_after);
  async function rewrite(parsed) {
    let ast = property_get(parsed, "ast");
    lambda(ast);
    await file_js_unparse(parsed);
  }
  let waited = await list_map_unordered_async(mentioning, rewrite);
  return waited;
}
