import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { assert_json } from "./assert_json.mjs";
import { functions_names_includes } from "./functions_names_includes.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_flo } from "./js_flo.mjs";
import { function_new_declaration_from } from "./function_new_declaration_from.mjs";
import { function_auto } from "./function_auto.mjs";
export async function app_sandbox_previews_load_new(preview_name, f_name) {
  arguments_assert(arguments, 2);
  ("Writes a new sandbox preview's loader, the small function that fetches the preview's file only when its address is opened, and answers with the loader's name.");
  ("★ THE LOADER IS WRITTEN FROM A FIXED TEMPLATE, AND THE ONLY WORDS IN IT ARE A NAME THE REPO ALREADY ANSWERS TO. The ordinary door for a new function refuses any `import(...)`, because it cannot tell a fetch of a fixed sibling file from a fetch of anything; so every loader went through the door a person must approve, one click per preview. Here the fetched file is a repo function checked by its full name (an alias is refused, because its file is named after the function, not the alias), and both words may hold only lower-case letters, digits and underscores, so nothing written in can reach outside the template.");
  ("Registering the loader in ",
    fn_name("app_sandbox_previews"),
    " is left to the caller, as before.");
  let plain = /^[a-z0-9_]+$/;
  let b = plain.test(preview_name);
  assert_json(b, {
    hint: "the preview name may hold only lower-case letters, digits and underscores",
    preview_name,
  });
  let b2 = plain.test(f_name);
  assert_json(b2, {
    hint: "the function name may hold only lower-case letters, digits and underscores",
    f_name,
  });
  let known = await functions_names_includes(f_name);
  assert_json(known, {
    hint: "the preview to load has to be a function this repo answers to by its full name",
    f_name,
  });
  let loader = "app_sandbox_previews_" + preview_name + "_load";
  let code =
    "export async function " +
    loader +
    text_combine_multiple([
      "() {\n  ",
      fn_name("arguments_assert"),
      '(arguments, 0);\n  let m = await import("./',
    ]) +
    f_name +
    '.mjs");\n  let r = m.' +
    f_name +
    ";\n  return r;\n}\n";
  let ast = js_parse(code);
  let declaration = js_flo(ast);
  await function_new_declaration_from(declaration);
  await function_auto(loader);
  return loader;
}
