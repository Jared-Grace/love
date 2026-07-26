import { fn_name } from "./fn_name.mjs";
import { add } from "./add.mjs";
import { text_combine } from "./text_combine.mjs";
import { list_add } from "./list_add.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_join } from "./list_join.mjs";
import { json_to } from "./json_to.mjs";
export function js_code_names_spelled(f_name, note, names) {
  "the source of a function that answers a list of spelled function names";
  "each name gets its own binding because the normalize pass lifts every call out of a list literal, and a generated file it would immediately rewrite is a file that reports itself stale forever";
  "close to what that pass leaves behind, but not the same: it numbers the first binding like all the others and puts the whole list on one line, where the pass drops that number and wraps the list one name to a line. So run the pass over the file after writing it, and let the file that results be the canonical one - the caller that does this is the writer, and the round trip through it is exact.";
  let lines = [];
  let bindings = [];
  let index = 0;
  for (let name of names) {
    index = add(index, 1);
    let binding = text_combine("spelled", index);
    list_add(bindings, binding);
    let line = text_combine_multiple([
      "  let ",
      binding,
      text_combine_multiple([" = ", fn_name.name, '("']),
      name,
      '");\n',
    ]);
    list_add(lines, line);
  }
  let joined = list_join(lines, "");
  let listed = list_join(bindings, ", ");
  let json = json_to(note);
  let code = text_combine_multiple([
    text_combine_multiple([
      "import { ",
      fn_name.name,
      ' } from "./',
      fn_name.name,
      '.mjs";\n',
    ]),
    "export function ",
    f_name,
    "() {\n",
    "  ",
    json,
    ";\n",
    joined,
    "  let names = [",
    listed,
    "];\n",
    "  return names;\n",
    "}\n",
  ]);
  return code;
}
