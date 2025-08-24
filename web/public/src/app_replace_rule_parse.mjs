import {list_skip} from "./list_skip.mjs";
import {list_take} from "./list_take.mjs";
import {list_index_of} from "./list_index_of.mjs";
import {string_split_space} from "./string_split_space.mjs";
export function app_replace_rule_parse(rule) {
  let split = string_split_space(rule);
  let middle = list_index_of(split, ">");
  let left = list_take(split, middle);
  let right = list_skip(split, middle + 1);
  let v = {
    left,
    right
  };
  return v;
}
