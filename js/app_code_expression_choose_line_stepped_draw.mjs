import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_replaced_settle } from "./app_code_expression_replaced_settle.mjs";
import { app_code_expression_solved } from "./app_code_expression_solved.mjs";
import { app_code_expression_choose_line_draw } from "./app_code_expression_choose_line_draw.mjs";
import { app_code_expression_chips_rise } from "./app_code_expression_chips_rise.mjs";
import { app_code_expression_node_is } from "./app_code_expression_node_is.mjs";
export async function app_code_expression_choose_line_stepped_draw(
  line,
  node_span,
  node_value,
  current,
  node,
  on_wrong,
  on_chosen,
  on_finished,
  on_change,
) {
  "Everything the line does after its answer has been shown: the blue block is let go, the shorter line goes up in its place, and the whole thing is called finished if there is nothing left to press.";
  "THE SETTLING IS THE SAME WHATEVER ANSWERED THE PRESS, so nothing is asked of the answerer about what it showed - the front page flies the value down and the quiz simply writes it, and either way what is left to do is let the blue go and close the line up.";
  "THE SHORTER LINE GOES UP PLAIN AND ITS CHIPS ARE PUT ON AFTERWARDS, so what the learner watches is the next operator opening its room and only then becoming something to press.";
  "Drawn chipped, the shorter line arrives with every operator already wider than the plain one that stood there a frame earlier - so the whole line jumps sideways in the frame it is drawn, and it jumps at the same moment the colour lands. The learner is shown a move they cannot follow and a change they did not ask about, together, at the one moment they are looking for what to press next.";
  "THE FINISHING IS ONLY REACHED WHEN THE SHORTER LINE IS NO LONGER A SUM AT ALL. While anything is still there to work out, the line simply stands and waits for the next press.";
  arguments_assert(arguments, 9);
  await app_code_expression_replaced_settle(line, node_span, node_value);
  let stepped = app_code_expression_solved(current, node);
  let risen = app_code_expression_choose_line_draw(
    stepped,
    node,
    node_value,
    line,
    on_wrong,
    on_chosen,
    on_finished,
    on_change,
  );
  await app_code_expression_chips_rise(line, risen);
  let more = app_code_expression_node_is(stepped);
  if (more) {
    return;
  }
  await on_finished(stepped);
}
