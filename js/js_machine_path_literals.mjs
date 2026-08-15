import { arguments_assert } from "./arguments_assert.mjs";
import { js_literals_used } from "./js_literals_used.mjs";
import { machine_path_prefixes } from "./machine_path_prefixes.mjs";
import { property_get } from "./property_get.mjs";
import { text_is } from "./text_is.mjs";
import { not } from "./not.mjs";
import { list_any_starts_with } from "./list_any_starts_with.mjs";
import { list_add } from "./list_add.mjs";
export function js_machine_path_literals(ast) {
  "Every place this file writes out a folder belonging to one machine instead of calling something that holds it.";
  "Only what the file uses as a value. An explanation that mentions a folder is left alone, which it has to be - the place where the naming is worked out explains itself by showing the old written-out answer, and a reading that could not tell those apart would be complaining about the very function that fixed the problem.";
  "The written-out folder has to be the whole of what is written, not a part of it. A folder used as a folder is the whole value, whereas the same letters in the middle of a longer line are a web address or a line of commands - one such address was found to hold them, and reading the middle would have called it a fault. What that leaves out is a folder built into a longer sentence, which in this repo is only ever the practice material the rules are checked against, and that has to stay written out anyway.";
  arguments_assert(arguments, 1);
  let prefixes = machine_path_prefixes();
  let literals = js_literals_used(ast);
  let sites = [];
  for (let node of literals) {
    let value = property_get(node, "value");
    let written = text_is(value);
    if (not(written)) {
      continue;
    }
    let machine = list_any_starts_with(value, prefixes);
    if (not(machine)) {
      continue;
    }
    let site = {
      value,
    };
    list_add(sites, site);
  }
  return sites;
}
