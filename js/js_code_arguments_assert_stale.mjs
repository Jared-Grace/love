import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_function_declaration_params_ast_get } from "./js_function_declaration_params_ast_get.mjs";
import { js_function_arguments_assert_count_or_null } from "./js_function_arguments_assert_count_or_null.mjs";
import { property_get } from "./property_get.mjs";
import { property_list_size } from "./property_list_size.mjs";
import { catch_null } from "./catch_null.mjs";
import { null_is } from "./null_is.mjs";
import { equal } from "./equal.mjs";
export function js_code_arguments_assert_stale(code) {
  arguments_assert(arguments, 1);
  ("The one thing wrong with this file when the line counting a function's arguments says a different number from the number of names it takes, and nothing when the two agree.");
  ("The number is not decoration. Every correct call throws the moment the two disagree, and it throws saying the caller passed the wrong count - so the reading points at whoever called rather than at the line that is actually wrong. Nothing shows until something calls it, which for a function reached from one place can be a long time.");
  ("The way they come apart is always the same: a command adds a name to the list or takes one away, and the line at the top is written once when the function is first made and never looked at again. So this is a check on the commands rather than on anybody's typing.");
  ("A file with no such line has nothing to disagree, and a file that will not read is not an answer to this question either. Both come back empty and let the sweep around this one count them.");
  function read() {
    let ast = js_parse(code);
    let got = js_function_declaration_params_ast_get(ast);
    let declaration = property_get(got, "declaration");
    return declaration;
  }
  let declaration = catch_null(read);
  let unreadable = null_is(declaration);
  if (unreadable) {
    let r = [];
    return r;
  }
  let declared = js_function_arguments_assert_count_or_null(declaration);
  let unguarded = null_is(declared);
  if (unguarded) {
    let r2 = [];
    return r2;
  }
  let params = property_list_size(declaration, "params");
  let agrees = equal(declared, params);
  if (agrees) {
    let r3 = [];
    return r3;
  }
  let stale = [
    {
      declared,
      params,
    },
  ];
  return stale;
}
