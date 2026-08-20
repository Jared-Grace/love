import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_node_left_operator_first } from "./app_code_expression_node_left_operator_first.mjs";
import { app_code_expression_node_left_operator_first_bracketed } from "./app_code_expression_node_left_operator_first_bracketed.mjs";
import { app_code_expression_node_right_operator_first } from "./app_code_expression_node_right_operator_first.mjs";
import { app_code_expression_node_right_operator_first_bracketed } from "./app_code_expression_node_right_operator_first_bracketed.mjs";
import { app_code_operator_truths_wanted_nested } from "./app_code_operator_truths_wanted_nested.mjs";
import { list_get } from "./list_get.mjs";
import { ternary } from "./ternary.mjs";
export function app_code_expression_node_truths_wanted(
  first_symbol,
  second_symbol,
  want_true,
  gathered_left,
  bracketed,
) {
  arguments_assert(arguments, 5);
  ("the shape of a two-operator line whose three trues and falses make it come to what was wanted, with one of the two operators gathering its sides first");
  ("Both operators are handed in the order they are read on the line, which is the order the builders underneath want them in and the order the trues and falses come back in, so nothing here has to be turned round on the way through.");
  ("Which of the two gathers first is handed in as a side rather than worked out, because a line saying so with a pair of brackets and a line saying so by which operator is the stronger are the same shape and are told apart nowhere but here.");
  ("The operator standing alone is whichever one the gathered pair is not on, because the pair is solved first and reaches the other one as a single answer. That is the whole of what the chooser underneath needs, so it is worked out here instead of being asked for.");
  ("Whether the brackets are written is handed in too. A lesson asking what a line means wants them left to the printer, which writes them only where they change something; a lesson about the marks themselves wants both ends of its pair written whether they change anything or not, or it loses one of the two lines it is about.");
  ("Two lessons built this same run by hand and neither said it by name: the same call for the trues and falses, the same three of them pulled out in the same order, the same five pieces hung on a builder chosen the same way.");
  let alone_symbol = ternary(gathered_left, second_symbol, first_symbol);
  let gathered_symbol = ternary(gathered_left, first_symbol, second_symbol);
  let truths = app_code_operator_truths_wanted_nested(
    alone_symbol,
    gathered_symbol,
    want_true,
    gathered_left,
  );
  let first_truth = list_get(truths, 0);
  let second_truth = list_get(truths, 1);
  let last_truth = list_get(truths, 2);
  let build_left = ternary(
    bracketed,
    app_code_expression_node_left_operator_first_bracketed,
    app_code_expression_node_left_operator_first,
  );
  let build_right = ternary(
    bracketed,
    app_code_expression_node_right_operator_first_bracketed,
    app_code_expression_node_right_operator_first,
  );
  let build = ternary(gathered_left, build_left, build_right);
  let tree = build(
    first_truth,
    first_symbol,
    second_truth,
    second_symbol,
    last_truth,
  );
  return tree;
}
