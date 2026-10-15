import { arguments_assert } from "./arguments_assert.mjs";
import { permission_grant_names } from "./permission_grant_names.mjs";
import { path_join } from "./path_join.mjs";
import { folder_js } from "./folder_js.mjs";
import { file_read_sync } from "./file_read_sync.mjs";
import { js_flo } from "./js_flo.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_declaration_fixed_call } from "./js_declaration_fixed_call.mjs";
import { not_equal } from "./not_equal.mjs";
export function functions_fixed_call_twins() {
  arguments_assert(arguments, 0);
  ("Every granted function that only calls another function with its inputs written in, each as one line of words: the granted name, then the call it stands for. For the bash guard, which can then answer a prompt for the call with the granted name.");
  ("★ FOUND FROM THE GRANTS, NOT LISTED. The guard's other twin pairs are hand-written because python cannot read which function wraps which; this side can, so a new wrapper is found the moment it is granted, and one that stops being a plain pass-through drops out by itself.");
  ("One line of words rather than a pair because the mirror carries a set of text, and a word here can hold no space by construction - a name cannot, and an input has to be a plain word to count at all.");
  ("Read without waiting because the mirror writer asks its sources for their lists without waiting, and that writer may not be edited unasked - it writes files. Every granted name has its file in the js folder, so the file is read there directly; a read that fails throws, which is the loud answer the mirror wants.");
  let twins = [];
  for (let name of permission_grant_names()) {
    let js = folder_js();
    let path = path_join([js, name + ".mjs"]);
    let code = file_read_sync(path);
    let ast = js_parse(code);
    let declaration = js_flo(ast);
    let fixed = js_declaration_fixed_call(declaration);
    if (not_equal(fixed, null)) {
      let v = [name, fixed.fn, ...fixed.args].join(" ");
      twins.push(v);
    }
  }
  return twins;
}
