import { js_function_declaration_statements_working } from "./js_function_declaration_statements_working.mjs";
import { js_statement_arguments_assert_not_is } from "./js_statement_arguments_assert_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
export function js_function_declaration_statements_working_without_arguments_assert(
  declaration,
) {
  "The work in a function that a person wrote, with the line counting its arguments left out along with the prose and the marks.";
  "That line is written by the pass rather than by hand, and every function of the same arity carries the same one. So two functions holding it are not two functions holding a shared run of work - they are two functions the pass has been over. A reading that groups functions by what they have in common has to leave it out, or it reports agreement that was never authored and could never be collapsed: the line is already a call to one shared function, and there is nothing left to name.";
  "The narrowing next door stops one step short of this, because how big a function is has to count the line - it runs, and it is part of what a reader of that body reads.";
  let working = js_function_declaration_statements_working(declaration);
  let authored = list_filter(working, js_statement_arguments_assert_not_is);
  return authored;
}
