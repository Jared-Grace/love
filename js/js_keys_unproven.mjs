import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { js_key_facts } from "./js_key_facts.mjs";
import { js_key_safe_is } from "./js_key_safe_is.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { property_get } from "./property_get.mjs";
import { js_visit } from "./js_visit.mjs";
export function js_keys_unproven(ast) {
  "every key in this code that reaches a record by brackets - a[k], or { [k]: v } - and that the code alone does not prove safe, written back out as code, each one once. A key spelled with a dot is written by whoever wrote the line, so it is never a question; a key in brackets can arrive from anywhere.";
  "The core accessors refuse the dangerous words as they run. Brackets written straight into a body step around them, which is why it is the brackets that are counted here.";
  let facts = js_key_facts(ast);
  let texts = [];
  function key_judge(key) {
    let safe = js_key_safe_is(key, facts);
    if (safe) {
      return;
    }
    let text = js_unparse(key);
    let b = texts.includes(text);
    if (not(b)) {
      texts.push(text);
    }
  }
  function node_read(v) {
    let n = property_get(v, "node");
    if (equal(n.type, "MemberExpression") && n.computed) {
      key_judge(n.property);
    }
    if (equal(n.type, "Property") && n.computed) {
      key_judge(n.key);
    }
  }
  js_visit(ast, node_read);
  return texts;
}
