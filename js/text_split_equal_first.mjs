import { text_size } from "./text_size.mjs";
import { text_skip } from "./text_skip.mjs";
import { text_split_first } from "./text_split_first.mjs";
export function text_split_equal_first(text) {
  ("one name=value pair read apart at the FIRST equals, so everything after it stays with the value");
  ("splitting at every equals quietly truncates any value that contains one, and a url or a query string almost always does");
  let first = text_split_first(text, "=");
  let second = text_skip(text, text_size(first) + 1);
  let v = {
    first,
    second,
  };
  return v;
}
