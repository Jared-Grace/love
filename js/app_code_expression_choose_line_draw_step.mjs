import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { app_code_expression_nodes_ready_first } from "./app_code_expression_nodes_ready_first.mjs";
import { app_code_expression_choose_line_draw_on_operator } from "./app_code_expression_choose_line_draw_on_operator.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_expression_paint } from "./app_code_expression_paint.mjs";
export function app_code_expression_choose_line_draw_step({
  stepped_from,
  current,
  on_wrong,
  line,
  on_chosen,
  on_finished,
  on_change,
  solved,
  value,
}) {
  arguments_assert(arguments, 1);
  let rising = not(stepped_from);
  ("the one operator JavaScript works out next, and not every operator that COULD be worked out. On a line of plain numbers more than one is often free to go with the line landing on the same value either way, but that is a fact about arithmetic rather than about the computer: JavaScript works out the left side of an operator all the way down before it touches the right, so the order is settled and the leftmost ready operator is the one it takes.");
  ("Everything that TELLS the learner what to press already named this one and only this one - the walkthrough's So first, choose and the refusal's cannot go before both read the first of the ready list. Judging a press against the whole list was the odd one out, and accepting a press the page had not asked for taught an order that stops being true the moment a line holds something that counts or prints.");
  let ready = app_code_expression_nodes_ready_first(current);
  ("one right press ends this drawing of the line, so every other operator in it stops answering the moment one of them is chosen - the working out is under way and a second press would start a second one on top of it");
  let r = app_code_expression_choose_line_draw_on_operator({
    rising,
    ready,
    on_wrong,
    line,
    on_chosen,
    current,
    on_finished,
    on_change,
  });
  let on_operator = property_get(r, "on_operator");
  let pressable = property_get(r, "pressable");
  app_code_expression_paint(line, current, on_operator);
  let step = {
    current,
    ready,
    solved,
    value,
  };
  let r2 = {
    pressable,
    step,
  };
  return r2;
}
