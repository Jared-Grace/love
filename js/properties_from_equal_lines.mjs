import { each } from "./each.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { text_split_equal_first } from "./text_split_equal_first.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_trim } from "./text_trim.mjs";
export function properties_from_equal_lines(text) {
  ("lines of name=value read back as one object, so the caller asks by name instead of counting lines");
  ("split on the FIRST equals only: a value is free to contain more of them, and a timestamp or a command line usually does");
  let v = {};
  function line_add(line) {
    let pair = text_split_equal_first(line);
    property_set(v, property_get(pair, "first"), property_get(pair, "second"));
  }
  each(text_split_newline(text_trim(text)), line_add);
  return v;
}
