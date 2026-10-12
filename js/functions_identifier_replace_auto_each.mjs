import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { lists_sizes_equal_assert_json } from "./lists_sizes_equal_assert_json.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { list_size } from "./list_size.mjs";
import { less_than } from "./less_than.mjs";
import { list_get } from "./list_get.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { function_identifier_replace_auto } from "./function_identifier_replace_auto.mjs";
import { list_add } from "./list_add.mjs";
export async function functions_identifier_replace_auto_each(
  f_names_comma,
  names_before_comma,
  replacement,
) {
  arguments_assert(arguments, 3);
  ("In each function named, one name of its own becomes replacement: the first name of names_before_comma in the first function, the second in the second, read off in step. For one change made the same way to several functions that each name it differently, such as each lesson handing over its own explanation and all of them then handing over the same one.");
  ("Each is committed as it lands, as its own ",
    fn_name("function_identifier_replace_auto"),
    ", so the log reads as the commands run and a peer's sweep cannot file one under someone else's name. Not picked: one command per function typed in a row, which is the loop this command replaces.");
  let f_names = text_split_comma(f_names_comma);
  let names_before = text_split_comma(names_before_comma);
  lists_sizes_equal_assert_json([f_names, names_before], {
    hint: "each function needs the one name in it that is replaced, so give the two lists the same number of words",
  });
  await ai_git_noted();
  let replaced = [];
  let size = list_size(f_names);
  for (let index = 0; less_than(index, size); index++) {
    let f_name = list_get(f_names, index);
    let name_before = list_get(names_before, index);
    await function_call_commit(function_identifier_replace_auto, [
      f_name,
      name_before,
      replacement,
    ]);
    list_add(replaced, f_name);
  }
  let r = {
    replaced,
  };
  return r;
}
