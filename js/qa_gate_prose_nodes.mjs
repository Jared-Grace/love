import { not } from "./not.mjs";
import { js_statement_work_is } from "./js_statement_work_is.mjs";
import { function_ast_list_type_nodes } from "./function_ast_list_type_nodes.mjs";
import { list_add } from "./list_add.mjs";
export async function qa_gate_prose_nodes(f_name) {
  "Every line of one function's body that speaks to a reader rather than doing anything, handed back as the nodes themselves. Read-only.";
  "A function's own account of itself never reaches anybody. It is not printed and it is not thrown, so a name spelled inside it is not an accusation and cannot be one - and a gate whose only spelled names sit in its paragraphs is behaving perfectly.";
  "Two of them were being called leaks for exactly that: one explains what it checks by naming the thing it checks, and the other explains, in a paragraph, why it does not repair the fault itself. Both were doing the right thing and being blamed for saying so.";
  "Which lines are prose is asked next door rather than worked out here, because a paragraph wears three shapes in this repo and only one of them is a lone string. The other two are a sentence a comma has turned into a pair and a sentence with a name standing in a gap in it, and a reading that knows only the first is blind to the two that carry names - which is every line that could possibly matter here.";
  let statements = await function_ast_list_type_nodes(
    f_name,
    "ExpressionStatement",
  );
  let prose = [];
  for (let statement of statements) {
    let work_is = js_statement_work_is(statement);
    if (not(work_is)) {
      list_add(prose, statement);
    }
  }
  return prose;
}
