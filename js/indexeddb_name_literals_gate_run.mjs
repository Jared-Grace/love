import { literals_gate_run_generic } from "./literals_gate_run_generic.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { indexeddb_name_doors } from "./indexeddb_name_doors.mjs";
import { indexeddb_name_literals_all } from "./indexeddb_name_literals_all.mjs";
import { list_size } from "./list_size.mjs";
export async function indexeddb_name_literals_gate_run() {
  "QA gate: no file names a browser database or one of its stores by writing the name into the call. Every one of them is held by a function, so it can be frozen.";
  "A name like this reaches a disk in somebody's browser the first time anything is kept under it, and nothing here can reach that disk again. Written at the site it looks like nothing - an everyday word like files or bible, in a line that reads clearly - and rewording it is the sort of tidy-up nobody would think to check. Everything a person had kept under the old name is then simply not there, and no later edit brings it back.";
  "Held by a function it can be named in the frozen list, and there an in-place change shows up as a changed value rather than as nothing at all. So this asks the one thing that has to be true before the freeze can watch anything: that there is a name to freeze.";
  "This is the one kind of published word the other watches cannot reach. The one that follows frozen words into longer strings looks for the word with an equals sign after it, which a store name never has, and looking for the values themselves would answer with every sentence that happens to use an everyday word. Only the shape is left.";
  "It stands at zero rather than at a line already drawn, because every way into a store in this repo already holds its name in a function. Nothing here is being lived with.";
  "How many ways in were found, and how many files were opened, are both carried out with the answer. A gate that passes by finding nothing cannot be told apart from one whose reading has stopped answering, and either of those numbers coming back at zero is the second of those.";
  "What is left here is the sentence saying what kind of word this is, and the count of ways in. The asking itself - the sites, the three commands that repair them, and the file count travelling with the verdict - is the same question the two address gates ask, and is asked in one place next door.";
  "Throws so the dispatcher seam exits nonzero.";
  arguments_assert(arguments, 0);
  let doors = await indexeddb_name_doors();
  let ways = object_property_names(doors);
  let walked = await indexeddb_name_literals_all();
  let told = literals_gate_run_generic(
    walked,
    "the name of a browser database or one of its stores is written straight into a call",
  );
  let files = property_get(told, "files");
  let sites = property_get(told, "sites");
  let r = {
    doors: list_size(ways),
    files,
    sites,
  };
  return r;
}
