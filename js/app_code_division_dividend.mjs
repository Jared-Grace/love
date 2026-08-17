import { arguments_assert } from "./arguments_assert.mjs";
import { list_get } from "./list_get.mjs";
import { text_integers } from "./text_integers.mjs";
export function app_code_division_dividend(code) {
  arguments_assert(arguments, 1);
  ("the number being divided in a line of code that divides: 14 out of 14 / 4, and out of Math.floor(14 / 4) * 4 as well");
  ("Every one of these lessons is written about one division, and the number being divided is the first one written down whatever else the line goes on to say. A lesson that wants it takes the line apart to find it, and seven of them were taking it apart the same three lines at a time.");
  ("It is read out of the line rather than carried alongside it because the line is all a batch ever spells - the two numbers were only ever put there by a lesson that had them and then let them go.");
  let nums = text_integers(code);
  let r = list_get(nums, 0);
  return r;
}
