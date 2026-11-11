import { arguments_assert } from "./arguments_assert.mjs";
import { list_copy } from "./list_copy.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_size } from "./list_size.mjs";
import { list_pop } from "./list_pop.mjs";
import { property_exists } from "./property_exists.mjs";
import { function_name_to_path_absolute } from "./function_name_to_path_absolute.mjs";
import { file_read_uncached } from "./file_read_uncached.mjs";
import { property_set } from "./property_set.mjs";
import { list_add } from "./list_add.mjs";
export async function functions_imports_sources_reached(f_names) {
  arguments_assert(arguments, 1);
  ("The source of these functions and of every function they reach through their imports, filed under each one's name, read straight off the disk as it is right now.");
  ("★ THE IMPORTS ARE FOUND BY THEIR SPELLING, NOT BY PARSING. Every import between functions here is written by the canonical pass as the word from, then the name with a dot-slash before it and .mjs after it, inside quotes, so looking for that spelling finds each of them. ★ THIS NOTE MUST NOT SPELL THAT SHAPE ITSELF: it once did, with the word name in it, and every hash over code reaching this file threw looking for a function called name. Measured 2026-11-06 on the reply rules: the same 553 functions as the parsing walk, in 16 milliseconds against about a second. Erring is only ever one way: a comment or a string that happens to spell an import adds a function that was not needed, and nothing reached by a real import can be left out.");
  ("Read uncached because what this is for is noticing a change. A copy kept from earlier in a long-running process would answer for code that is no longer there.");
  let sources = {};
  let waiting = list_copy(f_names);
  while (greater_than(list_size(waiting), 0)) {
    let name = list_pop(waiting);
    if (property_exists(sources, name)) {
      continue;
    }
    let file_path = function_name_to_path_absolute(name);
    let source = await file_read_uncached(file_path);
    property_set(sources, name, source);
    for (let found of source.matchAll(/from\s+["']\.\/([^"']+)\.mjs["']/g)) {
      list_add(waiting, found[1]);
    }
  }
  return sources;
}
