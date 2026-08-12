import { arguments_assert } from "./arguments_assert.mjs";
import { permission_plain_marker } from "./permission_plain_marker.mjs";
import { text_combine } from "./text_combine.mjs";
import { function_transform } from "./function_transform.mjs";
import { js_strings_text_replace } from "./js_strings_text_replace.mjs";
export async function function_param_plain_marker_rename(
  f_name,
  name,
  name_after,
) {
  "Carry a parameter's declaration that it holds ordinary data across to the parameter's new name, so the declaration goes on saying what it was written to say.";
  "The declaration is a written-out piece of text rather than a mention of the parameter, so a rename that moves every mention of a name walks straight past it. What is left behind names a parameter the function no longer has - and the place that reads these declarations sees a name matching nothing as nothing said, so the parameter silently stops being declared and no line anywhere goes red.";
  "Doing nothing is the ordinary case, because most parameters were never declared this way. So there is nothing to check for and nothing to report: where the declaration is absent, no piece of text says the thing being looked for and none is changed.";
  arguments_assert(arguments, 3);
  let plain_prefix = permission_plain_marker();
  let marker = text_combine(plain_prefix, name);
  let marker_after = text_combine(plain_prefix, name_after);
  function lambda$ast(ast) {
    js_strings_text_replace(ast, marker, marker_after);
  }
  let r = await function_transform(f_name, lambda$ast);
  return r;
}
