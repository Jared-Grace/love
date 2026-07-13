import { list_size_1_assert_message } from "./list_size_1_assert_message.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
export function text_split_comma_size_1_assert(param_names) {
  let split = text_split_comma(param_names);
  list_size_1_assert_message(split, {
    hint: "expected a single param name, not a comma-separated list",
  });
}
