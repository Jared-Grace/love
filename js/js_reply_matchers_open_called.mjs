import { arguments_assert } from "./arguments_assert.mjs";
import { reply_matchers_open } from "./reply_matchers_open.mjs";
import { js_list_types_nodes } from "./js_list_types_nodes.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { list_unique } from "./list_unique.mjs";
export function js_reply_matchers_open_called(ast) {
  arguments_assert(arguments, 1);
  ("The open-ended reply matchers this tree calls, named once each - empty for code that reaches none of them.");
  ("It reads calls and not mentions, and the difference is the whole reason it can be run at all. The proposal bench spells one of these names in every proposal that would introduce it, so a reading that counted a name wherever it appeared would be red today over a change nobody has agreed to yet. A call is the thing that makes a matcher live.");
  ("A name reached through something else - handed on as a value, or looked up - is not seen here. That is the known gap, and it is the cheap half of the question rather than all of it; the expensive half is that a rule can only be built by calling its pieces, so the way in that this misses is a way nobody here writes.");
  let called = [];
  let names = reply_matchers_open();
  let calls = js_list_types_nodes(ast, ["CallExpression"]);
  function each_call(call) {
    let callee = property_get(call, "callee");
    let kind = property_get(callee, "type");
    let named = equal(kind, "Identifier");
    if (not(named)) {
      return;
    }
    let name = property_get(callee, "name");
    let open = list_includes(names, name);
    if (not(open)) {
      return;
    }
    list_add(called, name);
  }
  each(calls, each_call);
  let unique = list_unique(called);
  return unique;
}
