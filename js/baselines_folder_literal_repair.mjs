import { arguments_assert } from "./arguments_assert.mjs";
import { baselines_folder_literal_names } from "./baselines_folder_literal_names.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_transform_imports } from "./function_transform_imports.mjs";
import { js_literal_prefix_folder_join } from "./js_literal_prefix_folder_join.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { text_combine } from "./text_combine.mjs";
export async function baselines_folder_literal_repair() {
  "Points every address that writes the baselines room out in full at the function that says where the room is, and then asks again to show there are none left.";
  "Asking afterwards is the proof, and it is a different question from counting what was done. A count that comes back the size of the list only says the loop ran the number of times the loop was going to run; asking the finder a second time says the thing that was wanted, which is that nobody spells the room any more.";
  "One change and so one commit, even though it lands in fifty files. The rule for splitting a run into a commit each is that the steps are independent things - this is a single duplication being collapsed, and half of it committed is a repo where some addresses are built and some are written out, which is neither of the two states anybody wants to land on.";
  arguments_assert(arguments, 0);
  let folder = data_given_baselines_folder();
  let inside = text_combine(folder, "/");
  let getter = fn_name("data_given_baselines_folder");
  let before = await baselines_folder_literal_names();
  let repaired = [];
  for (let f_name of before) {
    async function join_prefixed(ast) {
      await js_literal_prefix_folder_join(ast, inside, getter);
    }
    await function_transform_imports(f_name, join_prefixed);
    list_add(repaired, f_name);
  }
  let after = await baselines_folder_literal_names();
  list_empty_is_assert_json(after, {
    hint: "these functions still write the baselines room out in full after the repair, so they were either not reached or not changed - read one of them before running this again, because a repair that leaves the same names behind twice is not going to clear them on a third try",
    after,
    repaired: repaired.length,
  });
  let r = {
    repaired,
    remaining: after,
  };
  return r;
}
