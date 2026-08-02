import { list_skip } from "./list_skip.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { property_get } from "./property_get.mjs";
import { js_function_declaration_statements_working } from "./js_function_declaration_statements_working.mjs";
import { js_function_declaration_to_block_body } from "./js_function_declaration_to_block_body.mjs";
import { js_function_declaration_params_names } from "./js_function_declaration_params_names.mjs";
import { js_statements_declared_names } from "./js_statements_declared_names.mjs";
import { js_statements_referenced_names } from "./js_statements_referenced_names.mjs";
import { js_function_declaration_asyncify } from "./js_function_declaration_asyncify.mjs";
import { js_find_body_block } from "./js_find_body_block.mjs";
import { js_block_body_add_code } from "./js_block_body_add_code.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { function_new_transform } from "./function_new_transform.mjs";
import { function_transform } from "./function_transform.mjs";
import { function_auto } from "./function_auto.mjs";
import { list_take } from "./list_take.mjs";
import { list_size } from "./list_size.mjs";
import { list_intersect } from "./list_intersect.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_remove_multiple } from "./list_remove_multiple.mjs";
import { list_get } from "./list_get.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { list_size_less_than_value } from "./list_size_less_than_value.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { assert_message } from "./assert_message.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function function_head_extract(f_name, size, name_new, meaning) {
  arguments_assert(arguments, 4);
  ("Takes the opening run of work out of a function, gives it a name and a file of its own, and leaves a call to it where the run used to be.");
  ("This is the repair the shared-opening gate asks for in words - give the shared opening its own name and call it from each - and it was the one edit that had no command. Doing it by hand is a new file, a return line, an import and a call, four places to get right, and the two atoms this leans on were written for it and left waiting: one says which names a run brings into being, the other which names the lines after it still read.");
  ("Only the first function is moved over. The second function that shares the opening is repointed by hand, and deliberately so - whether its opening really is the same idea or only the same keystrokes is the judgment the gate exists to put in front of somebody, and a command that answered it for both would be answering it for nobody.");
  ("What comes back out of the new function is the one name the rest still reads. Nothing else is a safe answer here: no name at all means the run was never an opening, it was the whole point of the function, and two names means the caller wanted a record rather than a value, which is a different edit with a different shape. Both are refused by name rather than guessed at.");
  ("The new function is async exactly when the one it came out of is, and its call is awaited to match. Copying it across is right whether or not the run itself waits on anything - a function that waits on nothing still answers correctly when awaited - and it is the only rule that cannot get the two out of step.");
  let parsed = await function_parse_declaration(f_name);
  let declaration = property_get(parsed, "declaration");
  let working = js_function_declaration_statements_working(declaration);
  let short_is = list_size_less_than_value(working, size);
  let long_enough = not(short_is);
  assert_message(
    long_enough,
    "That function has less work in it than the run you asked to take out. Would you like to name a shorter run?",
  );
  let head = list_take(working, size);
  let rest = list_skip(working, size);
  let made = js_statements_declared_names(head);
  let read_after = js_statements_referenced_names(rest);
  let carried = list_intersect(made, read_after);
  let one = equal(list_size(carried), 1);
  let joined = list_join_comma(carried);
  let combined = text_combine_multiple([
    "The lines after that run read ",
    list_size(carried),
    " of the names it makes (",
    joined,
    "), and a function hands back one thing. Would you like to name a run whose only lasting name is the one the rest works on?",
  ]);
  assert_message(one, combined);
  let name_carried = list_get(carried, 0);
  ("Which of the function's own arguments the run reads is what the new one has to be handed, and their order is kept as the function itself writes them so the call reads the same way round.");
  let params = js_function_declaration_params_names(declaration);
  let read_head = js_statements_referenced_names(head);
  function lambda(param) {
    let read = list_includes(read_head, param);
    return read;
  }
  let taken = list_filter(params, lambda);
  let lines = [];
  for (let statement of head) {
    let line = js_unparse(statement);
    lines.push(line);
  }
  async function lambda_new(ast) {
    let block = js_find_body_block(ast);
    let left = JSON.stringify(meaning);
    let prose = text_combine_multiple([left, ";"]);
    js_block_body_add_code(ast, [block], prose);
    for (let line of lines) {
      js_block_body_add_code(ast, [block], line);
    }
    let returned = text_combine_multiple(["return ", name_carried, ";"]);
    js_block_body_add_code(ast, [block], returned);
    let declaration_new = js_find_body_block(ast);
    js_function_declaration_asyncify(declaration_new, declaration);
  }
  await function_new_transform(name_new, lambda_new);
  await function_auto(name_new);
  ("The call goes in where the run started rather than at the top, because the marks and the prose the run sat under are still there and still belong first.");
  let waited = "await ";
  let asynchronous = property_get(declaration, "async");
  if (not(asynchronous)) {
    waited = "";
  }
  let arguments_written = list_join_comma(taken);
  let call = text_combine_multiple([
    "let ",
    name_carried,
    " = ",
    waited,
    name_new,
    "(",
    arguments_written,
    ");",
  ]);
  async function lambda_old(ast) {
    let declaration_old = property_get(
      await function_parse_declaration(f_name),
      "declaration",
    );
    let body = js_function_declaration_to_block_body(declaration_old);
    let first = list_get(head, 0);
    let at = list_index_of(body, first);
    list_remove_multiple(body, head);
    js_block_body_add_code(ast, [ast], call);
  }
  await function_transform(f_name, lambda_old);
  await function_auto(f_name);
  let r = {
    name_new,
    carried: name_carried,
    taken,
    moved: size,
  };
  return r;
}
