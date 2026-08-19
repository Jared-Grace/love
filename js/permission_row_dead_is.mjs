import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { path_real_or_null } from "./path_real_or_null.mjs";
import { not } from "./not.mjs";
export async function permission_row_dead_is(row) {
  "Whether a counted shape is one that cannot interrupt anybody again, because the folder its command steps into is not on the disk any more.";
  "A week of transcripts is a week of the past, and a repo that moved leaves every command naming the old spelling standing in the ranking, counted and ranked and unable ever to happen again. On 2026-08-19 two such shapes held a hundred and eight runs between them, above every live row but one, and the whole of what they measured was a folder that stopped existing on the fourteenth.";
  "Only a folder that is gone counts as dead, and only when the command names it outright - stepping into it, or spelling a dispatcher inside it. That is decidable and it is the whole test: anything softer would start guessing which commands still make sense, and a ranking that quietly drops what it doubts is worse than one carrying rows a reader can see through.";
  "Links are followed before the answer is given, so a second spelling of a folder that is still there reads as alive. A path that is merely a different way of saying the same place has not died.";
  arguments_assert(arguments, 1);
  let sample = property_get(row, "sample");
  let worded = equal(typeof sample, "string");
  if (not(worded)) {
    return false;
  }
  let named = [];
  let dispatcher = sample.match(/(\/[\w./-]*)\/scripts\/(?:ai|r|rl|g)\.mjs/);
  if (dispatcher) {
    list_add(named, dispatcher[1]);
  }
  let stepped = sample.match(/^cd\s+([^\s;&|]+)/);
  if (stepped) {
    list_add(named, stepped[1]);
  }
  for (let folder of named) {
    let real = await path_real_or_null(folder);
    let gone = equal(real, null);
    if (gone) {
      return true;
    }
  }
  return false;
}
