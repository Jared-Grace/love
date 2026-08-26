import { less_than } from "./less_than.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function audio_balance_volume_expression(
  seconds,
  decibels,
  step_seconds,
) {
  "$plain seconds";
  "$plain decibels";
  "$plain step_seconds";
  "write the gain shape for one side as an expression the player can evaluate on every frame, so the correction slides between its sampling points instead of stepping between them";
  "IT IS BUILT OUT OF TENTS AND THAT IS WHAT MAKES IT SLIDE. Each sampling point contributes a triangle that stands at its own second and falls to nothing by its neighbours, so the sum is the straight line between one point and the next and is exactly the sampled value at each point. Written as a list of steps instead, every boundary would be an audible jump in level.";
  "THE COMMAS INSIDE THE EXPRESSION ARE ESCAPED AND HAVE TO BE. A comma is how the filter graph separates one filter from the next, so an unescaped comma inside an expression ends the filter early and everything after it is read as a new one - which fails as a graph error about a filter nobody wrote, a long way from the expression that caused it.";
  "The gain is written in decibels and converted at the end, because decibels are what the measurement is in and what a person reasons in, while the player wants a plain multiplier.";
  let expression_parts = [];
  for (
    let index_place = 0;
    less_than(index_place, seconds.length);
    index_place++
  ) {
    let v = decibels[index_place].toFixed(4);
    let v2 = seconds[index_place].toFixed(1);
    let v3 = step_seconds.toFixed(1);
    let one_part = text_combine_multiple([
      v,
      "*max(0\\,1-abs(t-",
      v2,
      ")/",
      v3,
      ")",
    ]);
    expression_parts.push(one_part);
  }
  let v4 = expression_parts.join("+");
  let expression_text = text_combine_multiple(["pow(10\\,(", v4, ")/20)"]);
  return expression_text;
}
