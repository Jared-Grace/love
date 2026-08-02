import { arguments_assert } from "./arguments_assert.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { js_flo } from "./js_flo.mjs";
import { js_function_declaration_statements_working } from "./js_function_declaration_statements_working.mjs";
import { js_function_declaration_to_block_body } from "./js_function_declaration_to_block_body.mjs";
import { js_function_declaration_params_names } from "./js_function_declaration_params_names.mjs";
import { js_function_declaration_asyncify } from "./js_function_declaration_asyncify.mjs";
import { js_statements_declared_names } from "./js_statements_declared_names.mjs";
import { js_statements_referenced_names } from "./js_statements_referenced_names.mjs";
import { js_find_body_block } from "./js_find_body_block.mjs";
import { js_block_body_add_code } from "./js_block_body_add_code.mjs";
import { js_flo_params_add } from "./js_flo_params_add.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { function_new_transform } from "./function_new_transform.mjs";
import { function_transform_result } from "./function_transform_result.mjs";
import { function_auto } from "./function_auto.mjs";
import { property_get } from "./property_get.mjs";
import { list_take } from "./list_take.mjs";
import { list_skip } from "./list_skip.mjs";
import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
import { list_map } from "./list_map.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_intersect } from "./list_intersect.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_insert } from "./list_insert.mjs";
import { list_remove_multiple } from "./list_remove_multiple.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { list_size_less_than_value } from "./list_size_less_than_value.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { assert_message } from "./assert_message.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function function_head_extract(
  f_name,
  size_text,
  name_new,
  meaning,
) {
  arguments_assert(arguments, 4);
  ("Takes the opening run of work out of a function, gives it a name and a file of its own, and leaves a call to it where the run used to be.");
  ("This is the repair the shared-opening gate asks for in words - give the shared opening its own name and call it from each - and it was the one edit that had no command. By hand it is a new file, a return line, an import and a call, four places to get right; and the two atoms this leans on were written for it and left waiting, one saying which names a run brings into being and the other which names the lines after it still read.");
  ("Only the function named here is changed. A second function sharing the opening is repointed separately, and deliberately so: whether its opening really is the same idea or only the same keystrokes is the judgment the gate exists to put in front of somebody, and a command that answered it for both would be answering it for nobody.");
  ("What comes back out of the new function is the one name the rest still reads. Nothing else is a safe answer: no name at all means the run was not an opening but the whole point of the function, and two names means the caller wanted a record rather than a value, which is a different edit with a different shape. Both are refused by name rather than guessed at.");
  ("The new function is async exactly when the one it came out of is, and its call is awaited to match. Copying it across is right whether or not the run itself waits on anything - a function that waits on nothing still answers correctly when awaited - and it is the only rule that cannot get the two out of step.");
  ("The meaning is a whole argument rather than a word inside a joined list, the same as when a constant is named, which is what lets it hold a full stop.");
  let run_size = number_from_text(size_text);
  let answer = null;
  async function lambda_old(ast) {
    let declaration = js_flo(ast);
    let working = js_function_declaration_statements_working(declaration);
    let short_is = list_size_less_than_value(working, run_size);
    let long_enough = not(short_is);
    assert_message(
      long_enough,
      "That function has less work in it than the run you asked to take out. Would you like to name a shorter run?",
    );
    let statements_head = list_take(working, run_size);
    let statements_rest = list_skip(working, run_size);
    let names_made = js_statements_declared_names(statements_head);
    let names_read_after = js_statements_referenced_names(statements_rest);
    let names_carried = list_intersect(names_made, names_read_after);
    let carried_size = list_size(names_carried);
    let one_is = equal(carried_size, 1);
    let joined = list_join_comma(names_carried);
    let combined = text_combine_multiple([
      "The lines after that run read ",
      carried_size,
      " of the names it makes (",
      joined,
      "), and a function hands back one thing. Would you like to name a run whose only lasting name is the one the rest works on?",
    ]);
    assert_message(one_is, combined);
    let name_carried = list_get(names_carried, 0);
    ("Which of the function's own arguments the run reads is what the new one has to be handed, and the order is the one the function itself writes them in, so the call reads the same way round.");
    let params = js_function_declaration_params_names(declaration);
    let names_read_head = js_statements_referenced_names(statements_head);
    function lambda_read(param) {
      let read_is = list_includes(names_read_head, param);
      return read_is;
    }
    let params_taken = list_filter(params, lambda_read);
    let code_lines = list_map(statements_head, js_unparse);
    function lambda_new(ast_new) {
      let block = js_find_body_block(ast_new);
      let left = JSON.stringify(meaning);
      let prose = text_combine_multiple([left, ";"]);
      js_block_body_add_code(ast_new, [block], prose);
      for (let line of code_lines) {
        js_block_body_add_code(ast_new, [block], line);
      }
      let returned = text_combine_multiple(["return ", name_carried, ";"]);
      js_block_body_add_code(ast_new, [block], returned);
      js_flo_params_add(ast_new, params_taken);
      let declaration_new = js_flo(ast_new);
      js_function_declaration_asyncify(declaration_new, declaration);
    }
    await function_new_transform(name_new, lambda_new);
    await function_auto(name_new);
    ("The call goes back where the run started rather than at the top, because the marks and the prose the run sat under are still there and still belong first.");
    let waited = "await ";
    let asynchronous = property_get(declaration, "async");
    if (not(asynchronous)) {
      waited = "";
    }
    let arguments_written = list_join_comma(params_taken);
    let code_call = text_combine_multiple([
      "let ",
      name_carried,
      " = ",
      waited,
      name_new,
      "(",
      arguments_written,
      ");",
    ]);
    let body_statements = js_function_declaration_to_block_body(declaration);
    let statement_first = list_get(statements_head, 0);
    let index_at = list_index_of(body_statements, statement_first);
    list_remove_multiple(body_statements, statements_head);
    let statement_call = js_parse_statement(code_call);
    list_insert(body_statements, index_at, statement_call);
    answer = {
      name_new,
      carried: name_carried,
      taken: params_taken,
      moved: run_size,
    };
  }
  await function_transform_result(f_name, lambda_old);
  await function_auto(f_name);
  return answer;
}
