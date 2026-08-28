import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_family_telling_bank } from "./app_code_lesson_family_telling_bank.mjs";
import { property_get } from "./property_get.mjs";
import { repo_love_function_read } from "./repo_love_function_read.mjs";
import { app_code_lesson_source_line_shapes } from "./app_code_lesson_source_line_shapes.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_add_unique } from "./list_add_unique.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_unique } from "./list_unique.mjs";
export async function app_code_lesson_telling_shapes_missing_one(
  root,
  roots,
  names,
) {
  arguments_assert(arguments, 3);
  ("the ways of shaping a line that one lesson's question bank writes and its telling never shows, or null when the telling shows them all.");
  ("The finer twin of the check that holds operator SYMBOLS against the telling, and the two are held against the same split of the lesson into its halves. Symbols are the coarsest thing that goes wrong this way; a shape is the next thing down, and it catches what symbols cannot: a telling and a bank writing the very same operators, one of them bracketed and the other flat, or the value on one side and then the other.");
  ("This is the check the reported fault actually needed. A person read lesson eighty-nine, saw false !== (3 === 3) explained and 2 !== 2 === false asked, and named the two differences themselves: the brackets had gone, and the false had moved to the other side. Both lines write === and !== and nothing else, so the symbol check passes them, and the whole of what the learner is stuck on is what the symbol check cannot see.");
  ("A telling that comes out with no shapes at all is left in the answer rather than dropped, for the same reason the symbol check leaves it: a lesson counted as clean because nothing was found to check is the one failure that would make the whole check worthless. The caller separates them.");
  let sides = await app_code_lesson_family_telling_bank(root, roots, names);
  let telling_names = property_get(sides, "telling");
  let bank_names = property_get(sides, "bank");
  let telling = [];
  for (let name of telling_names) {
    let source = await repo_love_function_read(name);
    let shapes = app_code_lesson_source_line_shapes(source);
    list_add_multiple(telling, shapes);
  }
  let bank = [];
  for (let name of bank_names) {
    let source = await repo_love_function_read(name);
    let shapes = app_code_lesson_source_line_shapes(source);
    list_add_multiple(bank, shapes);
  }
  let missing = [];
  for (let shape of bank) {
    let told = list_includes_not(telling, shape);
    if (told) {
      list_add_unique(missing, shape);
    }
  }
  let none = list_empty_is(missing);
  if (none) {
    return null;
  }
  let telling_unique = list_unique(telling);
  let bank_unique = list_unique(bank);
  let report = {
    lesson: root,
    telling: telling_unique,
    bank: bank_unique,
    missing,
  };
  return report;
}
