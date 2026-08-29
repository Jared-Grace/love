import { arguments_assert } from "./arguments_assert.mjs";
import { text_split } from "./text_split.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_any } from "./list_any.mjs";
export function js_name_number_is(name) {
  arguments_assert(arguments, 1);
  ("$plain name");
  ("Whether a name written in code says outright that what it holds is a number.");
  ("THE WORDS ARE MATCHED WHOLE AND ONLY BETWEEN THE UNDERSCORES, never anywhere inside the letters. A name here is words joined by underscores, so those are the pieces it is made of, and reading the letters instead would find count inside country and index inside indexed.");
  ("It is a claim about the name and never about the value, and it is only ever used to catch a mistake rather than to decide what to do with something. A name that lies is exactly the case this cannot see, and a reader above it is the poorer for that rather than wrong.");
  let words = [
    "number",
    "count",
    "index",
    "total",
    "length",
    "size",
    "position",
  ];
  let parts = text_split(name, "_");
  function part_numbered(part) {
    let said = list_includes(words, part);
    return said;
  }
  let numbered = list_any(parts, part_numbered);
  return numbered;
}
