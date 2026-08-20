import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { function_ast } from "./function_ast.mjs";
import { js_ast_declarator_init_named } from "./js_ast_declarator_init_named.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { property_get } from "./property_get.mjs";
import { qa_gate_answer_node_try } from "./qa_gate_answer_node_try.mjs";
import { qa_gate_count_hollow_is } from "./qa_gate_count_hollow_is.mjs";
import { qa_gate_judged_list_names } from "./qa_gate_judged_list_names.mjs";
import { qa_gate_population_words } from "./qa_gate_population_words.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function qa_gate_miscounted_keys(f_name) {
  "Which parts of one gate's answer are named for how much it looked at while holding how much was wrong - each named as the gate and the key joined by a space.";
  "This is the other half of asking whether a gate says anything. Its sibling asks whether even one part of the answer is a reading, and stops as soon as it finds one; so a gate carrying an honest count is passed the moment that count is seen, and a lying word sitting in the next key along is never looked at. The two faults are independent: one gate can walk ten thousand files, report the number honestly, and still call its offender count the amount checked.";
  "Worth catching separately because of who it fools. A gate that says nothing at all invites a reader to go and look. A gate that says checked and means found does not - it hands back a word that answers the question, so nobody asks it again, and the answer has been nothing all along.";
  "A key whose value is written straight into the answer counts as one of these when the word promises the looking. A nought spelled out is true of the gate and says nothing about what it reached, which is exactly what the word denies.";
  "A name bound outside anything this can read is let through. It came in as something asked for or out of something imported, and there is no following it either way from here - so it is called honest, which lets somebody past rather than accusing them.";
  arguments_assert(arguments, 1);
  let ast = await function_ast(f_name);
  let answer = qa_gate_answer_node_try(ast);
  let names = [];
  let unreadable_is = equal(answer, null);
  if (unreadable_is) {
    return names;
  }
  let recorded_is = js_node_type_is(answer, "ObjectExpression");
  if (not(recorded_is)) {
    return names;
  }
  let words = qa_gate_population_words();
  let asserted = qa_gate_judged_list_names(ast);
  let properties = property_get(answer, "properties");
  for (let property of properties) {
    let plain_is = js_node_type_is(property, "Property");
    if (not(plain_is)) {
      continue;
    }
    let key_node = property_get(property, "key");
    let key = js_identifier_name_try(key_node);
    let key_named_is = null_not_is(key);
    if (not(key_named_is)) {
      continue;
    }
    let promised_is = list_includes(words, key);
    if (not(promised_is)) {
      continue;
    }
    let value = property_get(property, "value");
    let written_is = js_node_type_is(value, "Literal");
    if (written_is) {
      let pair = text_combine_multiple([f_name, " ", key]);
      list_add(names, pair);
      continue;
    }
    let field = js_identifier_name_try(value);
    let field_named_is = null_not_is(field);
    if (field_named_is) {
      let refused_is = list_includes(asserted, field);
      if (refused_is) {
        let pair = text_combine_multiple([f_name, " ", key]);
        list_add(names, pair);
        continue;
      }
      value = js_ast_declarator_init_named(ast, field);
      let outside_is = equal(value, null);
      if (outside_is) {
        continue;
      }
    }
    let hollow_is = qa_gate_count_hollow_is(value, asserted);
    if (hollow_is) {
      let pair = text_combine_multiple([f_name, " ", key]);
      list_add(names, pair);
    }
  }
  return names;
}
