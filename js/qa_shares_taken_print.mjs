import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { list_size } from "./list_size.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { divide } from "./divide.mjs";
import { round } from "./round.mjs";
export function qa_shares_taken_print(
  results,
  solo_ms,
  load_before,
  load_after,
) {
  arguments_assert(arguments, 4);
  ("Prints how long each share of the gates took, and the two numbers that say whether that was the work or the waiting.");
  ("The whole run's gate half is the slowest share and nothing else, so a single number for it hides the only thing worth knowing: whether every share took about that long, in which case the machine was busy, or one share took it alone, in which case the work was divided badly.");
  ("Every gate on its own added up is printed beside them because it is what the shares are trying to divide. That total divided by the number of shares is the best an even division could do, and the distance between it and the slowest share is the whole of what is left to win. Measured on the run that prompted this: the slowest share was three hundred and twenty eight seconds against an even division of sixty six, and until that was printed the four and a half times had nowhere to be seen.");
  ("The load is read before and after rather than once, because the question it answers is what the machine was doing throughout, and one reading taken at either end is a reading of a moment that may be the quietest or the busiest of the run.");
  let ordered = [...results];
  function taken_of(one) {
    let ms = property_get(one, "milliseconds");
    return ms;
  }
  list_sort_number_mapper_reverse(ordered, taken_of);
  let lines = ["\n=== how long each share took ==="];
  for (let one of ordered) {
    let share = property_get(one, "share");
    let ms = taken_of(one);
    lines.push("\n  share ");
    lines.push(share);
    lines.push("   ");
    lines.push(ms);
    lines.push(" ms");
  }
  let count = list_size(ordered);
  let n = divide(solo_ms, count);
  let even = round(n);
  lines.push("\n  every gate on its own, added up   ");
  lines.push(solo_ms);
  lines.push(" ms");
  lines.push("\n  that divided evenly by ");
  lines.push(count);
  lines.push(" shares    ");
  lines.push(even);
  lines.push(" ms");
  lines.push("\n  load over the last minute, before ");
  lines.push(load_before);
  lines.push("\n  load over the last minute, after  ");
  lines.push(load_after);
  let line = text_combine_multiple(lines);
  console.log(line);
}
