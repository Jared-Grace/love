import { arguments_assert } from "./arguments_assert.mjs";
import { path_base } from "./path_base.mjs";
import { text_combine } from "./text_combine.mjs";
import { path_join } from "./path_join.mjs";
import { file_js_parse } from "./file_js_parse.mjs";
import { property_get } from "./property_get.mjs";
import { js_flo } from "./js_flo.mjs";
import { js_function_declaration_name } from "./js_function_declaration_name.mjs";
import { equal_assert_json } from "./equal_assert_json.mjs";
export async function function_temp_declaration_read(f_name) {
  arguments_assert(arguments, 1);
  ("The one function drafted in the throwaway folder under a name, read out as a tree, together with the bare name and the file name it was found by.");
  ("The door out of the commands-only switch opens twice - once for a name nothing answers to yet and once for a name that already has a file - and everything before the write is the same both times. Reading the draft, insisting it holds exactly one function, and insisting that function is named after its own file are what make the door narrow, so they belong to the door rather than to either side of it.");
  ("The name written in the draft is held against the name asked for rather than trusted, because the name decides which file is written and a draft naming itself something else would put a function somewhere nobody asked for.");
  ("The file name comes back as well as the bare name, because whoever writes the function goes on to take the draft away afterwards and would otherwise spell the same two parts a second time.");
  let base = path_base(f_name);
  let file_name = text_combine(base, ".mjs");
  let path = path_join(["scripts", "temp", file_name]);
  let parsed = await file_js_parse(path);
  let ast = property_get(parsed, "ast");
  let declaration = js_flo(ast);
  let drafted = js_function_declaration_name(declaration);
  equal_assert_json(drafted, base, {
    hint: "the drafted function has to be named after the file holding it, so that the name asked for and the name written are the same thing",
    file_name,
  });
  let read = {
    base,
    file_name,
    declaration,
  };
  return read;
}
