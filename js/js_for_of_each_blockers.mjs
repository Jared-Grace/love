import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_list_types_nodes } from "./js_list_types_nodes.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { list_includes } from "./list_includes.mjs";
import { equal } from "./equal.mjs";
import { list_unique } from "./list_unique.mjs";
export function js_for_of_each_blockers(loop) {
  arguments_assert(arguments, 1);
  ("Everything standing in the way of one walking loop being written as a call to the repo's own walk instead - empty when nothing is.");
  ("★ A WALK IS NOT THE SAME THING AS A LOOP, AND FOUR DIFFERENCES ARE WHY. The repo's walk takes a function, so a `return` in the body would leave that function and not the one the loop is in; a `break` has nowhere to go; an `await` inside a loop is waited for one at a time and inside a handed-over function is not; and the walk refuses anything that is not a list, while a loop will walk a set, a map, or the letters of a word. Each of those is a silent change of meaning, so each is named here rather than reasoned about at the moment of rewriting.");
  ("`continue` is not among them. It is the one keyword that translates exactly - leaving the handed-over function early is leaving this turn of the loop early - so a body whose only jump is a continue is a body that can be walked.");
  ("A `return` written inside a function nested in the body is counted too, although it is harmless there. Over-counting costs a rewrite that was safe and is not made; under-counting costs a function that quietly stops returning what it returned.");
  let blockers = [];
  let body = property_get(loop, "body");
  let types = [
    "BreakStatement",
    "ReturnStatement",
    "AwaitExpression",
    "YieldExpression",
    "LabeledStatement",
  ];
  let stoppers = js_list_types_nodes(body, types);
  function each_stopper(node) {
    let type = property_get(node, "type");
    list_add(blockers, type);
  }
  each(stoppers, each_stopper);
  let right = property_get(loop, "right");
  let kind = property_get(right, "type");
  let plainly_not_a_list = list_includes(
    ["NewExpression", "TemplateLiteral", "MemberExpression"],
    kind,
  );
  if (plainly_not_a_list) {
    list_add(blockers, "walks " + kind);
  }
  let called = equal(kind, "CallExpression");
  if (called) {
    let callee = property_get(right, "callee");
    let callee_kind = property_get(callee, "type");
    let reached_through = equal(callee_kind, "MemberExpression");
    if (reached_through) {
      list_add(blockers, "walks what a method answered");
    }
  }
  let unique = list_unique(blockers);
  return unique;
}
