import { arguments_assert } from "./arguments_assert.mjs";
import { indexeddb_name_doors } from "./indexeddb_name_doors.mjs";
import { indexeddb_name_literals_all } from "./indexeddb_name_literals_all.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_size } from "./list_size.mjs";
export async function indexeddb_name_literals_gate_run() {
  "QA gate: no file names a browser database or one of its stores by writing the name into the call. Every one of them is held by a function, so it can be frozen.";
  "A name like this reaches a disk in somebody's browser the first time anything is kept under it, and nothing here can reach that disk again. Written at the site it looks like nothing - an everyday word like files or bible, in a line that reads clearly - and rewording it is the sort of tidy-up nobody would think to check. Everything a person had kept under the old name is then simply not there, and no later edit brings it back.";
  "Held by a function it can be named in the frozen list, and there an in-place change shows up as a changed value rather than as nothing at all. So this asks the one thing that has to be true before the freeze can watch anything: that there is a name to freeze.";
  "This is the one kind of published word the other watches cannot reach. The one that follows frozen words into longer strings looks for the word with an equals sign after it, which a store name never has, and looking for the values themselves would answer with every sentence that happens to use an everyday word. Only the shape is left.";
  "It stands at zero rather than at a line already drawn, because every way into a store in this repo already holds its name in a function. Nothing here is being lived with.";
  "How many ways in were found is carried out with the answer. A gate that passes by finding nothing cannot be told apart from one whose reading has stopped answering, and a run reporting no ways in at all is the second of those.";
  "Throws so the dispatcher seam exits nonzero.";
  arguments_assert(arguments, 0);
  let doors = await indexeddb_name_doors();
  let ways = Object.keys(doors);
  let sites = await indexeddb_name_literals_all();
  let f_name = fn_name("function_new_getter");
  let f_name2 = fn_name("function_literal_route");
  let f_name3 = fn_name("literals_frozen_record_new");
  list_empty_is_assert_json(sites, {
    hint: text_combine_multiple([
      "the name of a browser database or one of its stores is written straight into a call, where nothing can watch it - give it a function of its own with ",
      f_name,
      ", move the sites onto that function with ",
      f_name2,
      ", then name the function in the frozen list and record it with ",
      f_name3,
    ]),
    sites,
  });
  let r = {
    doors: list_size(ways),
    sites: list_size(sites),
  };
  return r;
}
