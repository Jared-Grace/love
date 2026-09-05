import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { qa_shard_peak_printed } from "./qa_shard_peak_printed.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_size } from "./list_size.mjs";
import { divide_round } from "./divide_round.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function qa_shares_taken_text(
  results,
  solo_ms,
  load_before,
  load_after,
) {
  arguments_assert(arguments, 4);
  ("How long each share of the gates took, said as a block of text, along with the numbers that say whether that was the work or the waiting.");
  ("It hands the text back rather than printing it, and that is not a preference. The half of the run that asks this machine's own gates puts a silent printer in place of the real one while it works, and it works at the same time as this, so anything printed from here during that window is thrown away. The text goes out with everything else the frozen copy said, once both halves are finished and the real printer is back.");
  ("The whole run's gate half is the slowest share and nothing else, so a single number for it hides the only thing worth knowing: whether every share took about that long, in which case the machine was busy, or one share took it alone, in which case the work was divided badly.");
  ("Every gate on its own added up is printed beside them because it is what the shares are trying to divide. That total divided by the number of shares is the best an even division could do, and the distance between it and the slowest share is the whole of what is left to win. Measured on the run that prompted this: the slowest share was three hundred and twenty eight seconds against an even division of sixty six, and until that was printed the four and a half times had nowhere to be seen.");
  ("The load is read before and after rather than once, because the question it answers is what the machine was doing throughout, and one reading taken at either end is a reading of a moment that may be the quietest or the busiest of the run.");
  ("What each share held at its highest is said beside how long it took, because that pair is what decides the next run. How many shares to take is the room on this machine divided by what one share holds, and until now the second half of that division was a figure measured by hand on one afternoon and left standing. A share that says its own size every time turns the divisor into a reading, and a divisor that is too large by half is a run taking half the shares it could.");
  ("A share that never said is passed over in silence rather than shown as nothing. The number is missing when the machine will not say, which is a fact about the machine and not about the share, and a nought printed there would be read as the share having held nothing at all.");
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
    let printed = property_get(one, "printed");
    let peak = qa_shard_peak_printed(printed);
    if (null_not_is(peak)) {
      lines.push(", held up to ");
      lines.push(peak);
      lines.push(" bytes");
    }
  }
  let count = list_size(ordered);
  let even = divide_round(solo_ms, count);
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
  return line;
}
