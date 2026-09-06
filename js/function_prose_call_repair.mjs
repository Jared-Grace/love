import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_name_to_path_absolute } from "./function_name_to_path_absolute.mjs";
import { file_read_uncached } from "./file_read_uncached.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
import { each } from "./each.mjs";
import { list_join } from "./list_join.mjs";
import { equal } from "./equal.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
export async function function_prose_call_repair(f_name) {
  "$plain f_name";
  arguments_assert(arguments, 1);
  ("A prose paragraph that an editor turned into a call on the paragraph above it, given its own statement back, and the count of paragraphs handed out that way.");
  ("The fault is one an editor makes and a reader cannot see. A file here is mostly paragraphs, each one a string standing alone on its own line, and a paste that loses one line break leaves the opening bracket of the new paragraph welded to the end of the old one. What is written then is a string being called as though it were a function, with the paragraphs after it as its arguments - which is a sentence JavaScript is happy to parse and certain to throw on, and it throws the moment anything at all reads the file rather than at the line that broke.");
  ("Nothing else in this repo ever calls a string, so the shape is safe to read as the fault every time it appears. That is what lets this repair without asking: it is not guessing what was meant, it is undoing the one thing that could have written this.");
  ("It repairs the source as text rather than through the tree, because a file with this fault still parses and a file with the fault repaired is the only one whose tree is the one anybody wanted. A transform would be reading the broken sentence as though it were the intended one.");
  ("A group whose closing bracket never arrives is left exactly as it was. That is the case where something other than this fault is going on, and a repair that guessed there would be writing a file nobody could check.");
  let f_path = function_name_to_path_absolute(f_name);
  let text = await file_read_uncached(f_path);
  let lines = text.split("\n");
  let opener = new RegExp('^(\\s*)(".*")\\($');
  let argument = new RegExp('^\\s*(".*"),?$');
  let closer = new RegExp("^\\s*\\);$");
  let after = [];
  let repaired = 0;
  let index = 0;
  let size = lines.length;
  while (less_than(index, size)) {
    let line = lines[index];
    let opened = line.match(opener);
    let plain = null_is(opened);
    if (plain) {
      list_add(after, line);
      index = index + 1;
      continue;
    }
    let indent = opened[1];
    let literals = [opened[2]];
    let walk = index + 1;
    let closed = false;
    while (less_than(walk, size)) {
      let next = lines[walk];
      let ending = closer.test(next);
      if (ending) {
        closed = true;
        break;
      }
      let held = next.match(argument);
      let other = null_is(held);
      if (other) {
        break;
      }
      list_add(literals, held[1]);
      walk = walk + 1;
    }
    if (not(closed)) {
      list_add(after, line);
      index = index + 1;
      continue;
    }
    function statement(literal) {
      let written = indent + "(" + literal + ");";
      list_add(after, written);
    }
    each(literals, statement);
    repaired = repaired + literals.length;
    index = walk + 1;
  }
  let written_all = list_join(after, "\n");
  let same = equal(written_all, text);
  if (same) {
    let none = {
      f_name,
      repaired: 0,
    };
    return none;
  }
  await file_overwrite_uncached(f_path, written_all);
  let r = {
    f_name,
    repaired,
  };
  return r;
}
