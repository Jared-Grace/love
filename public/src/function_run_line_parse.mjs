import { data_path } from "./data_path.mjs";
import { list_unique_reverse } from "./list_unique_reverse.mjs";
import { list_add } from "./list_add.mjs";
import { data_transform } from "./data_transform.mjs";
export async function function_run_line_parse(line) {
  const [f_name, ...args] = line.split(" ");
  function lambda(previous) {
    list_add(previous, line);
    let unique = list_unique_reverse(previous);
    return unique;
  }
  let d_path = data_path();
  await data_transform("prompts", [], lambda, d_path);
  let v = {
    f_name,
    args,
  };
  return v;
}
