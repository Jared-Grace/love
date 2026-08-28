import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { and } from "./and.mjs";
import { not } from "./not.mjs";
import { function_read } from "./function_read.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_includes } from "./text_includes.mjs";
import { list_add } from "./list_add.mjs";
export async function app_code_lesson_family_roots(names) {
  arguments_assert(arguments, 1);
  ("the lessons whose telling and question bank can be held against each other: an ",
    fn_name("app_code"),
    " lesson that builds itself from the lesson maker. A helper of a lesson is not one of these, and neither is a generic - several lessons hand a generic their own words, so it has no telling of its own for anything to be true or untrue of.");
  ("Recognised by what a lesson DOES rather than by what it is called. Every one of them asks the lesson maker to build it, and nothing else in the repo does, so the test is the same test a reader would apply.");
  let found = [];
  let maker = fn_name("app_code_lesson_expression_generic");
  for (let name of names) {
    let lesson_named = text_starts_with(name, "app_code_lesson_");
    let generic_named = text_ends_with(name, "_generic");
    let right = not(generic_named);
    let candidate = and(lesson_named, right);
    if (candidate) {
      let source = await function_read(name);
      let call = text_combine(maker, "({");
      let builds = text_includes(source, call);
      if (builds) {
        list_add(found, name);
      }
    }
  }
  return found;
}
