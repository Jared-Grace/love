import { arguments_assert } from "./arguments_assert.mjs";
import { reply_typo_budget } from "./reply_typo_budget.mjs";
import { reply_typo_ends } from "./reply_typo_ends.mjs";
export function reply_cities_distress_readings(names, phrases) {
  arguments_assert(arguments, 2);
  ("Every phrase that one of these town names would read whole, with the same typing mistakes a name is forgiven in a real message, and the name that read it.");
  let readings = [];
  for (let phrase of phrases) {
    let tokens = phrase.split("");
    for (let name of names) {
      let budget = reply_typo_budget(name);
      let ends = reply_typo_ends(name, tokens, 0, budget);
      if (ends.has(tokens.length)) {
        readings.push({
          phrase,
          name,
        });
      }
    }
  }
  return readings;
}
