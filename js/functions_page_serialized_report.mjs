import { js_page_serialized_imported_names } from "./js_page_serialized_imported_names.mjs";
import { js_page_serialized_import_uses } from "./js_page_serialized_import_uses.mjs";
import { function_name_to_base } from "./function_name_to_base.mjs";
import { not } from "./not.mjs";
import { js_page_serializing_members } from "./js_page_serializing_members.mjs";
import { js_page_serialized_names } from "./js_page_serialized_names.mjs";
import { js_page_serializing_call_is } from "./js_page_serializing_call_is.mjs";
import { repo_functions_names_code_includes_multiple } from "./repo_functions_names_code_includes_multiple.mjs";
import { each_async } from "./each_async.mjs";
import { file_js_parse } from "./file_js_parse.mjs";
import { folder_js } from "./folder_js.mjs";
import { list_add } from "./list_add.mjs";
import { path_join } from "./path_join.mjs";
import { property_get } from "./property_get.mjs";
import { repo_love_name } from "./repo_love_name.mjs";
export async function functions_page_serialized_report() {
  "Every file that hands work to a browser to run, and which of the functions written in it end up running there, asked of the whole repo and answered without writing anything.";
  "This is the one place in the repo a normalizing pass cannot be trusted, and nothing about a file says so from the outside. A function sent to a browser is sent as text, so the names it was written against are not there when it runs and the failure surfaces as a browser test going wrong, not as anything a reading of this repo would show. A list of the exposed files is what lets a person check them by hand before trusting a sweep that touched one.";
  "The last of the three answers is the one that says something is wrong. A function sent to a browser that reads a name imported at the top of its file is already broken where it runs, and nothing but this says so.";
  "Two answers rather than one, because they differ and the difference is the useful part. A file that talks to a page at all is the wider answer and the one a pass should act on; the functions actually written out are the narrower answer and the ones a person would go and read. A file in the first list with nothing in the second is keeping its browser code as text, which is the shape that cannot break this way.";
  "The fourth answer is the one that reaches outside this file. A function sent to a browser need not be written where it is sent from - it can be imported by name from a file of its own, and then it is broken in exactly the same way while neither file says anything: the sender does not hold it, and the file holding it mentions no browser at all. Those names are listed so something can go and read the far file, which is the only place the damage would show.";
  let repo = repo_love_name();
  let members = js_page_serializing_members();
  let mentions = await repo_functions_names_code_includes_multiple(
    repo,
    members,
  );
  let exposed = [];
  async function lambda(name) {
    let file_name = function_name_to_base(name);
    let src = folder_js();
    let f_path = path_join([src, file_name]);
    let parsed = await file_js_parse(f_path);
    let ast = property_get(parsed, "ast");
    let serializes = js_page_serializing_call_is(ast);
    if (not(serializes)) {
      return;
    }
    let serialized = js_page_serialized_names(ast);
    let borrowed = js_page_serialized_import_uses(ast);
    let imported = js_page_serialized_imported_names(ast);
    let one = {
      name,
      f_path,
      serialized,
      borrowed,
      imported,
    };
    list_add(exposed, one);
  }
  await each_async(mentions, lambda);
  return exposed;
}
