import { property_negative } from "./property_negative.mjs";
import { list_size_less_than_value } from "./list_size_less_than_value.mjs";
import { functions_names } from "./functions_names.mjs";
import { property_count_add } from "./property_count_add.mjs";
import { property_get } from "./property_get.mjs";
import { text_split } from "./text_split.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { list_size } from "./list_size.mjs";
import { list_add } from "./list_add.mjs";
import { list_take } from "./list_take.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
export async function functions_name_vocabulary(top) {
  "The words this repo actually names things with - what it calls the thing a name ends in, and what it calls the area a name starts in.";
  "Written because a search over names can only be used by somebody who already speaks the repo's words, and on 2026-07-28 that cost about nine hundred commands. The function looked for was named perfectly; the search said batch and refusal check while the repo says multiple and grant add, and no amount of naming discipline closes a gap that sits in the asker rather than in the name. Reading this first is the translation step, and it is one command.";
  "Derived from the names themselves rather than written down, so it cannot drift from what the repo does. A list of conventions kept by hand says what somebody meant to do; this says what is actually there, including the shapes nobody declared.";
  let names = await functions_names();
  let tails = {};
  let heads = {};
  for (let f_name of names) {
    let parts = text_split(f_name, "_");
    let lone = list_size_less_than_value(parts, 2);
    if (lone) {
      continue;
    }
    let word_last = list_last(parts);
    let word_first = list_first(parts);
    property_count_add(tails, word_last, 1);
    property_count_add(heads, word_first, 1);
  }
  function ranked(counts) {
    let out = [];
    let words = Object.keys(counts);
    for (let word of words) {
      let times = property_get(counts, word);
      list_add(out, {
        word,
        times,
      });
    }
    function lambda_rank(record) {
      let ordered = property_negative(record, "times");
      return ordered;
    }
    list_sort_number_mapper(out, lambda_rank);
    let taken = list_take(out, top);
    return taken;
  }
  let ends_in = ranked(tails);
  let starts_in = ranked(heads);
  let report = {
    named: list_size(names),
    ends_in,
    starts_in,
  };
  return report;
}
