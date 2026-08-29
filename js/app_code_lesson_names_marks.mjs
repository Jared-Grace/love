import { arguments_assert } from "./arguments_assert.mjs";
import { repo_love_function_read } from "./repo_love_function_read.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export async function app_code_lesson_names_marks(names, source_read) {
  arguments_assert(arguments, 2);
  ("every mark the given lesson files carry, read out of each one in turn and gathered into a single list.");
  ("What counts as a mark is the caller's business - an operator symbol, a way of shaping a line - and this is the part that does not change whichever is being asked for: find the file, read it, add what came back to the pile. Repeats are kept, because the pile is later asked what it holds rather than how many of each.");
  let marks = [];
  for (let name of names) {
    let source = await repo_love_function_read(name);
    let found = await source_read(source);
    list_add_multiple(marks, found);
  }
  return marks;
}
