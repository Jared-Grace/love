import { arguments_assert } from "./arguments_assert.mjs";
import { js_imports } from "./js_imports.mjs";
import { js_visit_types } from "./js_visit_types.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { js_stack_node_above } from "./js_stack_node_above.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { greater_than } from "./greater_than.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function js_name_only_imports(ast) {
  arguments_assert(arguments, 1);
  ("The names this file imports and then uses for nothing but their own spelling");
  ("Reaching for a function only to read the word it is called still costs a real import, and an import is a road: everything that function reaches is now reachable from here. So a line of prose saying which function this one pairs with can hand a screen the whole of a download chain it never calls, and a check that asks what an app can reach will rightly say so. That is not a wrong answer to the wrong question - the import really is there, and the only thing that was wrong is that a mention was written as a dependency");
  ("The repair is to spell the word instead, which is what the marker for a spelled name is for. The word survives a rename either way, because the rename follows both, so nothing is lost by spelling it and a whole subsystem is dropped from the reach");
  ("A name used for its spelling AND for anything else is not offered, because removing the import would break the other use - only a name whose every mention is the reading of its own word can be spelled instead");
  let imported = js_imports(ast);
  let mentions = {};
  let spellings = {};
  function lambda(v) {
    let node = property_get(v, "node");
    let mentioned = property_get_or_null(node, "name");
    let ours = list_includes(imported, mentioned);
    if (not(ours)) {
      return;
    }
    let stack = property_get(v, "stack");
    let above = js_stack_node_above(stack);
    let above_type = js_node_type(above);
    ("The mention inside the import line itself is not a use of the name - counting");
    ("it would make every import look as though something read it");
    let brought_in = equal(above_type, "ImportSpecifier");
    if (brought_in) {
      return;
    }
    let counted = property_get_or_null(mentions, mentioned);
    mentions[mentioned] = counted ? counted + 1 : 1;
    let read_is = equal(above_type, "MemberExpression");
    if (not(read_is)) {
      return;
    }
    ("Standing on the left of the dot is what makes this the reading of this name's");
    ("own word. On the right it would be somebody else's field that happens to be");
    ("called the same thing");
    let looked_up = property_get(above, "property");
    let object = property_get(above, "object");
    let ours_is = equal(object, node);
    let word = property_get_or_null(looked_up, "name");
    let spelling_is = equal(word, "name");
    let spelled = ours_is && spelling_is;
    if (spelled) {
      let told = property_get_or_null(spellings, mentioned);
      spellings[mentioned] = told ? told + 1 : 1;
    }
  }
  js_visit_types(ast, ["Identifier"], lambda);
  let only = [];
  for (let mentioned of imported) {
    let counted = property_get_or_null(mentions, mentioned);
    let told = property_get_or_null(spellings, mentioned);
    let used = counted ? counted : 0;
    let spelled = told ? told : 0;
    let any = greater_than(used, 0);
    let all_spelled = equal(used, spelled);
    let name_only = any && all_spelled;
    if (name_only) {
      list_add(only, mentioned);
    }
  }
  return only;
}
