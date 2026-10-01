import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { date_now_iso } from "./date_now_iso.mjs";
export function qa_shares_taken_row(results, solo_ms, load_before, load_after) {
  "$plain results";
  "$plain solo_ms";
  "$plain load_before";
  "$plain load_after";
  arguments_assert(arguments, 4);
  ("What one run of the gates cost, said as numbers that can be kept and compared, from exactly the same four readings its sibling says as a block of text for a person to look at once.");
  ("★ IT IS THE SAME FOUR READINGS AND NOT A SECOND MEASUREMENT, WHICH IS WHY IT TAKES THE SAME FOUR ARGUMENTS IN THE SAME ORDER. Anything that measured the run again would be measuring a different run. The text sibling is what a person reads at the end of a run and the row is what the next run gets to compare itself against, so the two are one reading said twice for two audiences rather than two readings that could disagree.");
  ("★ THE LOAD AT BOTH ENDS IS THE WHOLE REASON A ROW IS WORTH KEEPING, BECAUSE THE DURATION ALONE MOVES TWENTYFOLD AND MEANS NOTHING WITHOUT IT. The same set of questions over the same frozen copy has been measured at about two and a half minutes split across a quiet machine, sixteen minutes taken alone, and fifty three when three runs contend for the memory. A reader handed only the minutes cannot tell which of those three it is holding, and will read an ordinary contended run as evidence that every stated figure is wrong. That happened, on the day this was written.");
  ("★ WHAT IS DERIVABLE IS LEFT OUT RATHER THAN STORED. The slowest share, the best an even division could have done, and how far apart those two are, are all arithmetic over what is here, so storing them would be storing an answer that a later reader can work out and a later correction could not reach. What cannot be worked out afterwards is kept: when the run happened, how many shares it took, what each share took, what every gate on its own adds up to, and what the machine was doing at either end.");
  ("The time is the one reading here that is not about the run at all. It is what turns a pile of rows into a history, since two rows are only comparable once it is known which came first and how far apart they were.");
  ("A share is counted by its own entry rather than by any number handed in, so a run that lost a share part way through says so by being short one. One vanishing is not a failure in itself - a run has filed its verdict with a share missing - but it is exactly the thing that makes a duration unlike its neighbours, so it must be visible in the row rather than smoothed over.");
  let shards = list_size(results);
  let shares_ms = [];
  for (let one of results) {
    let ms = property_get(one, "milliseconds");
    list_add(shares_ms, ms);
  }
  let at = date_now_iso();
  let row = {
    at,
    shards,
    shares_ms,
    solo_ms,
    load_before,
    load_after,
  };
  return row;
}
