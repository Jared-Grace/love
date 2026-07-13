import { list_is_assert_json } from "./list_is_assert_json.mjs";
export function list_size(list) {
  list_is_assert_json(list, {
    hint: "list_size expects a list to measure",
  });
  let size = list.length;
  return size;
}
