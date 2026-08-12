import { list_map_property } from "./list_map_property.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { functions_name_only_imports } from "./functions_name_only_imports.mjs";
export async function functions_name_only_imports_gate_run() {
  "QA gate: no file imports a name only to read the word it is called";
  "An import is a road, so a name reached for just to be spelled hands this file everything that name can reach. Nothing calls any of it and the bundler drops it, but every question asked of the code statically believes the road - which is how one line of prose put a whole download chain inside a game screen's reach and turned another gate red for everybody, and how a permission can be refused for reaching something it never touches";
  "The repair takes no reading and no judgment, so this asks for zero rather than for less than last time: spell the word instead, which a rename follows just as faithfully, and the road is gone. One command does the whole repo";
  "Throws so the dispatcher seam exits nonzero";
  "What it says is thrown as a record rather than printed and summed up in a sentence, because whoever reads a failure next reads it for names and cannot tell a name being accused from a name being mentioned. The files at fault are the record; the command that repairs them, and the names each one imported without calling, are advice - and those imported names are exactly the innocent ones, since the whole fault is that nothing calls them.";
  let offenders = await functions_name_only_imports();
  let names = list_map_property(offenders, "f_name");
  let f_name = fn_name("functions_name_only_imports_spell");
  let advice = text_combine_multiple([
    "these import a name only to spell it - run ",
    f_name,
  ]);
  let hint = {
    advice,
    offenders,
  };
  list_empty_is_assert_json(names, {
    hint,
  });
  let r = {
    offenders: 0,
  };
  return r;
}
