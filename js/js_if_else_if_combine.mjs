import { js_statement_if_alternate_get } from "./js_statement_if_alternate_get.mjs";
import { js_statement_if_consequent_get } from "./js_statement_if_consequent_get.mjs";
import { js_statement_if_test_set } from "./js_statement_if_test_set.mjs";
import { js_statement_if_test_get } from "./js_statement_if_test_get.mjs";
import { js_visit_type_each_async } from "./js_visit_type_each_async.mjs";
import { property_set } from "./property_set.mjs";
import { js_left_right_set } from "./js_left_right_set.mjs";
import { js_code_or } from "./js_code_or.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { equal_by_async } from "./equal_by_async.mjs";
import { property_get } from "./property_get.mjs";
import { js_node_type_is_if_async } from "./js_node_type_is_if_async.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { list_get_end_1 } from "./list_get_end_1.mjs";
export async function js_if_else_if_combine(ast) {
  "Two neighbouring branches of one if-chain that do the same thing are made into one branch, asked with or.";
  "Only the two tests are joined. Every branch below them is kept exactly where it was, and that is the whole of the repair made here on 2026-08-14: the alternate used to be set to null, which threw away the entire rest of the chain the moment any two adjacent branches happened to share a body. A seven-branch reader of word endings went in and a three-branch one came out, the pass reported ok, and no gate was red, because nothing that was left was wrong - there was simply less of it.";
  "The lesson is worth more than the line. A transform that only ever ADDS or REWRITES can be trusted to a checked run; one that can DELETE has to be read on its diff, because a silent deletion is indistinguishable from a clean run in every signal the repo gives.";
  async function lambda(v) {
    let stack = property_get(v, "stack");
    let node = property_get(v, "node");
    let stack_1 = list_get_end_1(stack);
    async function lambda3() {
      let consequent2 = js_statement_if_consequent_get(node);
      let consequent = js_statement_if_consequent_get(stack_1);
      let eq = await equal_by_async(consequent, consequent2, js_unparse);
      if (eq) {
        let test = js_statement_if_test_get(node);
        let test2 = js_statement_if_test_get(stack_1);
        let code_expression = js_code_or("a", "a");
        let expression = js_parse_expression(code_expression);
        js_left_right_set(expression, test2, test);
        js_statement_if_test_set(stack_1, expression);
        let rest = js_statement_if_alternate_get(node);
        property_set(stack_1, "alternate", rest);
      }
    }
    await js_node_type_is_if_async(stack_1, "IfStatement", lambda3);
  }
  await js_visit_type_each_async(ast, "IfStatement", lambda);
}
