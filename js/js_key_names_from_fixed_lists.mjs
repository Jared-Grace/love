import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { subtract } from "./subtract.mjs";
import { not } from "./not.mjs";
import { property_name_internal_names } from "./property_name_internal_names.mjs";
import { js_visit } from "./js_visit.mjs";
export function js_key_names_from_fixed_lists(ast, reassigned) {
  "2026-11-16, for Reading every property with a loop: the names whose value is always one item of a list of plain words that nothing ever changes - let keys = [\"name\", \"town\"]; then let k = keys[i]; - so p[k] can only ever name one of those words, or undefined when i is past the end. The index is judged on its own, as every bracketed key is.";
  "Strict on purpose, since it lets a key through the check that keeps code from reaching the language's machinery. The list is written straight out as words or numbers, none of them the machinery's names. Every other mention of the list is a read of one item or of its length - never written to, called, deleted, handed on or taken apart into, so it cannot change after it is written. Both the list and the name are bound exactly once in the whole code, counting every parameter and pattern, so the spelling means one thing everywhere; and the name is never given a new value.";
  "Not picked: following the list into a call or a second name, which the check would then have to trust as well.";
  let internal = property_name_internal_names();
  let bindings = new Map();
  function binding_add(name) {
    bindings.set(name, (bindings.get(name) ?? 0) + 1);
  }
  function pattern_bindings_add(pattern) {
    if (equal(pattern, null) || equal(pattern, undefined)) {
      return;
    }
    function mark(v) {
      if (equal(v.node.type, "Identifier")) {
        binding_add(v.node.name);
      }
    }
    js_visit(pattern, mark);
  }
  let declarators = new Map();
  let scoped = new Set();
  let mentions = [];
  function read(v) {
    let n = v.node;
    if (
      equal(n.type, "VariableDeclaration") &&
      (equal(n.kind, "let") || equal(n.kind, "const"))
    ) {
      for (let declarator of n.declarations) {
        scoped.add(declarator);
      }
    }
    if (equal(n.type, "VariableDeclarator")) {
      pattern_bindings_add(n.id);
      if (equal(n.id.type, "Identifier")) {
        declarators.set(n.id.name, n);
      }
    }
    if (
      equal(n.type, "FunctionDeclaration") ||
      equal(n.type, "FunctionExpression") ||
      equal(n.type, "ArrowFunctionExpression")
    ) {
      pattern_bindings_add(n.id);
      for (let param of n.params) {
        pattern_bindings_add(param);
      }
    }
    if (equal(n.type, "ClassDeclaration") || equal(n.type, "ClassExpression")) {
      pattern_bindings_add(n.id);
    }
    if (equal(n.type, "CatchClause")) {
      pattern_bindings_add(n.param);
    }
    if (
      equal(n.type, "ImportSpecifier") ||
      equal(n.type, "ImportDefaultSpecifier") ||
      equal(n.type, "ImportNamespaceSpecifier")
    ) {
      pattern_bindings_add(n.local);
    }
    if (equal(n.type, "Identifier")) {
      mentions.push(v);
    }
  }
  js_visit(ast, read);
  function once_declared(name) {
    let d = declarators.get(name);
    let left = bindings.get(name);
    let r = equal(left, 1) && not_equal(d, undefined) && scoped.has(d);
    return r;
  }
  function word_is(element) {
    let r =
      not_equal(element, null) &&
      equal(element.type, "Literal") &&
      (equal(typeof element.value, "string") ||
        equal(typeof element.value, "number")) &&
      not(internal.includes(String(element.value)));
    return r;
  }
  let writes = new Set([
    "AssignmentExpression",
    "UpdateExpression",
    "ArrayPattern",
    "ObjectPattern",
    "AssignmentPattern",
    "RestElement",
    "ForOfStatement",
    "ForInStatement",
    "CallExpression",
    "NewExpression",
    "TaggedTemplateExpression",
    "UnaryExpression",
  ]);
  function read_only_is(list_name) {
    let d = declarators.get(list_name);
    for (let v of mentions) {
      let n = v.node;
      if (not_equal(n.name, list_name) || equal(n, d.id)) {
        continue;
      }
      let parent = v.stack[subtract(v.stack.length, 2)] ?? null;
      let above = v.stack[subtract(v.stack.length, 3)] ?? null;
      let item_read =
        not_equal(parent, null) &&
        equal(parent.type, "MemberExpression") &&
        equal(parent.object, n) &&
        (parent.computed ||
          (equal(parent.property.type, "Identifier") &&
            equal(parent.property.name, "length")));
      if (not(item_read)) {
        return false;
      }
      let pattern = v.stack[subtract(v.stack.length, 4)] ?? null;
      if (
        not_equal(above, null) &&
        equal(above.type, "Property") &&
        not_equal(pattern, null) &&
        equal(pattern.type, "ObjectPattern")
      ) {
        return false;
      }
      if (not_equal(above, null) && writes.has(above.type)) {
        let operand = equal(above.type, "UnaryExpression")
          ? not_equal(above.operator, "typeof")
          : true;
        let reads_only =
          (equal(above.type, "AssignmentExpression") &&
            equal(above.right, parent)) ||
          (equal(above.type, "AssignmentPattern") &&
            equal(above.right, parent)) ||
          ((equal(above.type, "ForOfStatement") ||
            equal(above.type, "ForInStatement")) &&
            equal(above.right, parent)) ||
          ((equal(above.type, "CallExpression") ||
            equal(above.type, "NewExpression")) &&
            not_equal(above.callee, parent)) ||
          (equal(above.type, "UnaryExpression") && not(operand));
        if (not(reads_only)) {
          return false;
        }
      }
    }
    return true;
  }
  let fixed = new Set();
  for (let [name, d] of declarators) {
    let init = d.init;
    if (
      once_declared(name) &&
      not(reassigned.has(name)) &&
      not_equal(init, null) &&
      equal(init.type, "ArrayExpression") &&
      init.elements.every(word_is) &&
      read_only_is(name)
    ) {
      fixed.add(name);
    }
  }
  let names = new Set();
  for (let [name, d] of declarators) {
    let init = d.init;
    if (
      once_declared(name) &&
      not(reassigned.has(name)) &&
      not_equal(init, null) &&
      equal(init.type, "MemberExpression") &&
      init.computed &&
      equal(init.object.type, "Identifier") &&
      fixed.has(init.object.name)
    ) {
      names.add(name);
    }
  }
  return names;
}
