import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { browser_secure_context_names } from "./browser_secure_context_names.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { js_member_dotted_or_null } from "./js_member_dotted_or_null.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_add_unique } from "./list_add_unique.mjs";
import { list_includes } from "./list_includes.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
export function js_secure_context_asked(ast) {
  "Which of the browser's https-only things this file ASKS ABOUT rather than simply uses - the ones it reads once as a value, which is the only reason there is to read them without calling them or looking inside them.";
  ("That is what asking looks like in every place this repo does it. ",
    fn_name("uuid_browser"),
    " writes `let ready = crypto.randomUUID` and then tests ready; ",
    fn_name("window_share"),
    " writes `b && navigator.share`; ",
    fn_name("clipboard_copy_browser"),
    " writes `navigator.clipboard && navigator.clipboard.writeText`. In each the pairing is read bare in one place and called or looked inside in another, and the bare read is the question.");
  ("The rule is the shape of the reading rather than where its answer travels to, because following a value from a read to the test it decides is a walk this needs no part of. The cost is that reading the thing and then ignoring the answer would pass - which is not a line anybody writes by accident, and the gate this feeds measures against what the repo already carried anyway.");
  arguments_assert(arguments, 1);
  let wanted = browser_secure_context_names();
  let members = js_list_type_nodes(ast, "MemberExpression");
  let calls = js_list_type_nodes(ast, "CallExpression");
  let used = [];
  for (let call of calls) {
    let callee = property_get(call, "callee");
    list_add(used, callee);
  }
  for (let node of members) {
    let object = property_get(node, "object");
    list_add(used, object);
  }
  let asked = [];
  for (let node of members) {
    let dotted = js_member_dotted_or_null(node);
    if (null_is(dotted)) {
      continue;
    }
    let known = list_includes(wanted, dotted);
    if (not(known)) {
      continue;
    }
    let spent = list_includes(used, node);
    if (spent) {
      continue;
    }
    list_add_unique(asked, dotted);
  }
  asked.sort();
  return asked;
}
