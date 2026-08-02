import { js_builtin_objects_spellings } from "./js_builtin_objects_spellings.mjs";
import { repo_functions_names_code_includes_multiple } from "./repo_functions_names_code_includes_multiple.mjs";
import { each_async } from "./each_async.mjs";
import { file_js_parse } from "./file_js_parse.mjs";
import { folder_js } from "./folder_js.mjs";
import { function_name_extension } from "./function_name_extension.mjs";
import { js_builtin_calls_rewrite } from "./js_builtin_calls_rewrite.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { path_join } from "./path_join.mjs";
import { property_get } from "./property_get.mjs";
import { repo_love_name } from "./repo_love_name.mjs";
import { text_combine } from "./text_combine.mjs";
export async function functions_builtin_calls_pending() {
  "Every function still calling a built-in method the repo keeps a name for, asked of the whole repo and answered without writing to a single file.";
  "The question is asked of the tree rather than of the text, because the text cannot answer it. A call handing over three things where the function beside it takes two is left standing on purpose, so a file spelling one of those would be named as pending forever and a sweep proving itself by asking again would never come back empty. Rewriting a parsed copy and seeing what moved asks exactly what the sweep will do.";
  "Only files that reach a method of one of the covered built-ins at all are parsed. The wider question is the same answer and several thousand parses more, and the name with its dot is right there in the source of every file that could possibly qualify.";
  "Which pieces of text those are is read off the pairings rather than written out here. Spelled out, this would go on skipping every file that only ever mentions a built-in added later, and would report nothing pending while reading as if it had looked.";
  let repo = repo_love_name();
  let spellings = js_builtin_objects_spellings();
  let mentions = await repo_functions_names_code_includes_multiple(
    repo,
    spellings,
  );
  let pending = [];
  async function lambda(name) {
    let right = function_name_extension();
    let file_name = text_combine(name, right);
    let src = folder_js();
    let f_path = path_join([src, file_name]);
    let parsed = await file_js_parse(f_path);
    let ast = property_get(parsed, "ast");
    let rewritten = js_builtin_calls_rewrite(ast);
    let moved = property_get(rewritten, "moved");
    let none = list_empty_is(moved);
    if (none) {
      return;
    }
    let one = {
      name,
      f_path,
      moved,
    };
    list_add(pending, one);
  }
  await each_async(mentions, lambda);
  return pending;
}
