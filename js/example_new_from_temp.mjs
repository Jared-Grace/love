import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine } from "./text_combine.mjs";
import { path_join } from "./path_join.mjs";
import { file_js_parse } from "./file_js_parse.mjs";
import { examples_folder } from "./examples_folder.mjs";
import { file_exists_not_assert_json } from "./file_exists_not_assert_json.mjs";
import { file_read } from "./file_read.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { examples_imports_repair } from "./examples_imports_repair.mjs";
import { property_get } from "./property_get.mjs";
import { example_check } from "./example_check.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { file_delete } from "./file_delete.mjs";
import { equal_assert_json } from "./equal_assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { function_select_apply_args_auto } from "./function_select_apply_args_auto.mjs";
import { fn_name } from "./fn_name.mjs";
import { scripts_temp_delete } from "./scripts_temp_delete.mjs";
import { examples_data_write } from "./examples_data_write.mjs";
export async function example_new_from_temp(
  example_name,
  group_name,
  name_after,
) {
  arguments_assert(arguments, 3);
  ("$plain example_name");
  ("$plain group_name");
  ("$plain name_after");
  ("Promotes a worked example drafted in the throwaway folder into the corpus, gives it its place in the reading order, and refuses it unless it passes there.");
  ("THE OTHER DOOR THROUGH THE COMMANDS-ONLY SWITCH, and the one that was missing. Its twin for functions covers the repo's javascript and nothing else, so a new example - which is data rather than code - had no command at all and every one of the hundred and thirty-six in the corpus was written by hand. A switch that refuses the writing tools while one whole kind of file has no command behind it is a wall rather than a door.");
  ("IT MUST PASS BEFORE IT IS KEPT, which no hand-written example ever promised. An example whose after does not match what the transform really writes is worse than no example: it is a claim about the repo that the corpus itself contradicts, and until the gate is next run nothing says so. So the file is written, run once, and taken straight back out again if it fails - the corpus is never left holding an example nobody has seen pass.");
  ("The reading order is named rather than guessed. An example arriving with no place lands at the end of the corpus, which is where a reader meets it last however simple it is - so the group it belongs to and the example it follows from are asked for, and the same verb a person would use by hand puts it there.");
  ("The draft reaches the repo's javascript from wherever it was drafted, and the repairing pass points it at the right depth once it lands. That is a fact about which folder the file is in rather than anything the author should have to know.");
  let file_name = text_combine(example_name, ".mjs");
  let path_draft = path_join(["scripts", "temp", file_name]);
  await file_js_parse(path_draft);
  let folder = examples_folder();
  let path_corpus = path_join([folder, file_name]);
  await file_exists_not_assert_json(path_corpus, {
    hint: "an example already answers to this name, and a corpus entry is replaced by editing it rather than by promoting a second draft over the top of it",
    file_name,
  });
  let text = await file_read(path_draft);
  await file_overwrite(path_corpus, text);
  await examples_imports_repair();
  let path_import = text_combine("../", path_corpus);
  let module_read = await import(path_import);
  let example = property_get(module_read, "example");
  let verdict = await example_check(example);
  let passed = equal(verdict, "pass");
  if (not(passed)) {
    await file_delete(path_corpus);
  }
  equal_assert_json(verdict, "pass", {
    hint: "an example is kept only once it has been run and agreed with the transform it shows, so this draft has been left where it was drafted rather than added to the corpus",
    example_name,
    verdict,
  });
  let apply_args = text_combine_multiple([
    "examples,",
    example_name,
    ",",
    name_after,
  ]);
  let f_name = fn_name("examples_groups");
  let select_fn_name = fn_name("js_find_object_containing_text");
  let apply_fn_name = fn_name("js_object_property_text_add_after");
  await function_select_apply_args_auto(
    f_name,
    select_fn_name,
    group_name,
    apply_fn_name,
    apply_args,
  );
  await scripts_temp_delete(file_name);
  await examples_data_write();
  let r = {
    example_name,
    group_name,
    verdict,
  };
  return r;
}
