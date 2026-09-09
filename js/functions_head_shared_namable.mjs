import { arguments_assert } from "./arguments_assert.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { functions_head_duplicates } from "./functions_head_duplicates.mjs";
import { property_get } from "./property_get.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { js_function_declaration_head_namable_or_null } from "./js_function_declaration_head_namable_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { not } from "./not.mjs";
import { list_first } from "./list_first.mjs";
export async function functions_head_shared_namable(size) {
  arguments_assert(arguments, 1);
  ("Every group of functions that begin alike, split by whether the shared opening could be written out as a function at all.");
  ("Its neighbour asks whether the shared run already has a name. This asks the question underneath that one, and it is the question worth asking first: a group whose run cannot be cut out is not waiting for anybody to think of a name for it. Measured over the whole repo at three lines, the groups with a helper already were eleven out of a hundred and thirty, which leaves a long list nobody can act on until the ones that are merely impossible have been taken out of it.");
  ("A group is offered when at least one of its members could give the run up, and the members that could are named. One is enough because the run is what they share: the rest are then asked one at a time by the reading that lists what is collapsible, which is the same order of work the helper path already follows.");
  ("The run is handed back written out, together with what it reads of the things its function was handed and the name it hands back, because the reader of this is about to write that function and those are the three things they would otherwise go and look up.");
  ("The length is handed in as a word, the way a command line hands everything over, and turned into a number once here rather than in each of the readings below.");
  ("$plain size");
  let wanted = number_from_text(size);
  let groups = await functions_head_duplicates(wanted);
  let namable = [];
  let blocked = [];
  for (let group of groups) {
    let names = property_get(group, "names");
    let count = property_get(group, "count");
    let takers = [];
    let reads = [];
    for (let f_name of names) {
      let parsed = await function_parse_declaration(f_name);
      let declaration = property_get(parsed, "declaration");
      let read = js_function_declaration_head_namable_or_null(
        declaration,
        wanted,
      );
      let cut_is = null_is(read);
      if (cut_is) {
        continue;
      }
      list_add(takers, f_name);
      list_add(reads, read);
    }
    let some_is = list_empty_not_is(takers);
    if (not(some_is)) {
      let shut = {
        count: count,
        names: names,
      };
      list_add(blocked, shut);
      continue;
    }
    let shown = list_first(reads);
    let answer = property_get(shown, "answer");
    let params = property_get(shown, "params");
    let lines = property_get(shown, "lines");
    let open = {
      count: count,
      names: names,
      takers: takers,
      answer: answer,
      params: params,
      lines: lines,
    };
    list_add(namable, open);
  }
  let split = {
    size: wanted,
    namable: namable,
    blocked: blocked,
  };
  return split;
}
