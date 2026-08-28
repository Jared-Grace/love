import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { function_read } from "./function_read.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_includes } from "./text_includes.mjs";
import { and } from "./and.mjs";
import { list_add } from "./list_add.mjs";
export async function app_code_lesson_family_roots(names) {
  arguments_assert(arguments, 1);
  ("the lessons whose telling and question bank can be held against each other: a lesson of the code app that builds itself from the lesson maker and takes nothing to do it with.");
  ("Recognised by what a lesson does rather than by what it is called. Every one of them asks the lesson maker to build it and nothing else in the repo does, so the test is the test a reader would apply.");
  ("Taking nothing is the second half of the test and it is not a formality. Several makers here ask the lesson maker to build something too, and are handed the operator and the words to say by whoever calls them; a maker has no telling of its own, so holding one against a bank accuses it of never showing a symbol that its callers show for it. That is exactly what happened before this line existed, to the one maker whose name does not end in the word generic.");
  let found = [];
  let maker = fn_name("app_code_lesson_expression_generic");
  for (let name of names) {
    let lesson_named = text_starts_with(name, "app_code_lesson_");
    if (lesson_named) {
      let source = await function_read(name);
      let call = text_combine(maker, "({");
      let builds = text_includes(source, call);
      let empty_handed = text_combine(name, "() {");
      let takes_nothing = text_includes(source, empty_handed);
      let root_is = and(builds, takes_nothing);
      if (root_is) {
        list_add(found, name);
      }
    }
  }
  return found;
}
