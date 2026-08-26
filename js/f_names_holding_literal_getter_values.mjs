import { arguments_assert } from "./arguments_assert.mjs";
import { literal_getters } from "./literal_getters.mjs";
import { json_to } from "./json_to.mjs";
import { text_includes } from "./text_includes.mjs";
import { list_add } from "./list_add.mjs";
import { property_set } from "./property_set.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { text_quote_to_quote_runs } from "./text_quote_to_quote_runs.mjs";
import { property_exists } from "./property_exists.mjs";
import { not } from "./not.mjs";
export function f_names_holding_literal_getter_values(codes) {
  arguments_assert(arguments, 1);
  ("The files in a handed-in body of source that spell out the value of some literal getter somewhere in them - the only files any question about a repeated constant can ever be about.");
  ("The audit next door asks, of every getter, which files hold its value, and it asked that of every file in the repo: two hundred and eighty-eight getters against thirteen thousand files is nearly four million searches of a whole file, and four hundred and seven files hold any getter's value at all. Handing that short list to the loop instead of the whole repo drops nothing, because a file holding no getter value fails the search for every getter and so was never going to be offered for any of them.");
  ("The whole set is found in one pass rather than one search per getter. Every value is written between quotation marks wherever it occurs, so the runs from mark to mark are the only places one can be standing, and asking whether a run is a getter's value is a lookup. A value carrying a quotation mark of its own cannot be found that way, so those few are searched for in the file as written; today there are none of them, and the branch is here so that the day there is one costs a search rather than a wrong answer.");
  let getters = literal_getters(codes);
  let plain = {};
  let awkward = [];
  for (let getter of getters) {
    let quoted = json_to(getter.literal);
    let inner = quoted.slice(1, -1);
    let marked = text_includes(inner, '"');
    if (marked) {
      list_add(awkward, quoted);
      continue;
    }
    property_set(plain, quoted, true);
  }
  let held = [];
  for (let f_name of object_property_names(codes)) {
    let code = property_get(codes, f_name);
    let holds = false;
    for (let run of text_quote_to_quote_runs(code)) {
      let known = property_exists(plain, run);
      if (known) {
        holds = true;
        break;
      }
    }
    if (not(holds)) {
      for (let quoted of awkward) {
        let there = text_includes(code, quoted);
        if (there) {
          holds = true;
          break;
        }
      }
    }
    if (not(holds)) {
      continue;
    }
    list_add(held, f_name);
  }
  return held;
}
