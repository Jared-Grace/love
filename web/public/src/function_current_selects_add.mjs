import { data_transform } from "../../../love/public/src/data_transform.mjs";
import { user_data_path } from "../../../love/public/src/user_data_path.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
export async function function_current_selects_add(item_to_add, on_previous) {
  async function lambda(previous) {
    list_add(previous, item_to_add);
    on_previous(previous);
    return previous;
  }
  let d_path = user_data_path();
  let value = await data_transform(
    "function_current_selects",
    [],
    lambda,
    d_path,
  );
  return value;
}
