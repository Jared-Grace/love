import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_flo } from "./js_flo.mjs";
import { property_get } from "./property_get.mjs";
import { list_size_less_than_value } from "./list_size_less_than_value.mjs";
import { list_last } from "./list_last.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { not } from "./not.mjs";
import { js_return_argument_get } from "./js_return_argument_get.mjs";
import { list_size_subtract } from "./list_size_subtract.mjs";
import { equal } from "./equal.mjs";
import { list_size } from "./list_size.mjs";
import { list_first } from "./list_first.mjs";
import { js_unparse } from "./js_unparse.mjs";
export function js_code_product_dropped(code) {
  arguments_assert(arguments, 1);
  ("The one function written out in this piece of code with what it hands back taken away, when what it hands back is a name bound by the line above the return and nothing else.");
  ("Asked where a run of lines is being pointed at a function that already exists. The run was living inside a longer function, so it ends with the work done and nothing handed on; the function it should call ends with that same work bound to a name and that name returned. Those two are the same work, and the only reader that can say so is one that has seen the product taken off.");
  ("It is the last two lines or nothing. A return of anything other than a bare name is left alone, a return that is not the last line is left alone, and a line above it binding a different name is left alone - each of those is a function whose product is made rather than merely passed on, and taking it away would be taking away work.");
  ("Nothing else can be reading the name, and that is settled by where it is bound rather than by looking. A line below it would have to be the return, since the return is the last line; a line above it cannot read a name not yet bound. So the binding has exactly one reader and dropping it drops no other line's value.");
  ("Refusing by handing the code straight back rather than by throwing. Every caller of this is about to compare what comes out against something else, and code that could not be shortened simply fails to match - which is the same answer, reached without a caller having to catch anything.");
  let ast = js_parse(code);
  let declaration = js_flo(ast);
  let block = property_get(declaration, "body");
  let statements = property_get(block, "body");
  let too_few = list_size_less_than_value(statements, 2);
  if (too_few) {
    return code;
  }
  let last = list_last(statements);
  let returning = js_node_type_is(last, "ReturnStatement");
  if (not(returning)) {
    return code;
  }
  let argument = js_return_argument_get(last);
  let named_is = js_node_type_is(argument, "Identifier");
  if (not(named_is)) {
    return code;
  }
  let name = property_get(argument, "name");
  let at = list_size_subtract(statements, 2);
  let above = property_get(statements, at);
  let declaring = js_node_type_is(above, "VariableDeclaration");
  if (not(declaring)) {
    return code;
  }
  let declarators = property_get(above, "declarations");
  let left = list_size(declarators);
  let one_is = equal(left, 1);
  if (not(one_is)) {
    return code;
  }
  let declarator = list_first(declarators);
  let id = property_get(declarator, "id");
  let bound = property_get(id, "name");
  let same_is = equal(bound, name);
  if (not(same_is)) {
    return code;
  }
  let init = property_get(declarator, "init");
  let held = js_parse("null;");
  let held_body = property_get(held, "body");
  let statement = list_first(held_body);
  statement.expression = init;
  statements.splice(at, 2, statement);
  let written = js_unparse(ast);
  return written;
}
