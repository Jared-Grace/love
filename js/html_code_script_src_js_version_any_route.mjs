import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { text_includes } from "./text_includes.mjs";
import { html_code_script_src_js_version } from "./html_code_script_src_js_version.mjs";
import { app_shared_route_slash } from "./app_shared_route_slash.mjs";
import { file_name_js } from "./file_name_js.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { json_to } from "./json_to.mjs";
import { html_code_element } from "./html_code_element.mjs";
export function html_code_script_src_js_version_any_route(
  a_name,
  version_query,
) {
  "$plain a_name";
  arguments_assert(arguments, 2);
  ("The tag that loads an app's script, found from the page whether the page was opened at its own file name or at the address its name reads as with each underscore taken as a folder - learn_en.html beside its script, or /learn/en, where a plain relative address would look inside a learn folder that holds nothing.");
  ("A name with no underscore reads the same either way, so it keeps the plain tag and its page is unchanged.");
  let b = text_includes(a_name, "_");
  if (not(b)) {
    let r = html_code_script_src_js_version(a_name, version_query);
    return r;
  }
  ("Opened at the slash address, the folder holding the page is whatever comes before that address, so a copy under /dev/ still loads the copy beside it. Opened any other way, the address stays relative exactly as before.");
  ("It is written while the page is still being read, so the script runs at the same point in the page it always did rather than after the page has finished loading.");
  let slash = app_shared_route_slash(a_name);
  let src = file_name_js(a_name) + version_query;
  let json = json_to(slash);
  let json2 = json_to(src);
  let code = text_combine_multiple([
    "(function () { var slash = ",
    json,
    "; var path = location.pathname; var folder = ''; if (path.slice(-slash.length) === slash) { folder = path.slice(0, -slash.length) + '/'; } document.write('<script src=\"' + folder + ",
    json2,
    " + '\"><\\/script>'); })();",
  ]);
  let r = html_code_element("script", {}, code);
  return r;
}
