import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { reply_cities_names } from "./reply_cities_names.mjs";
import { reply_cities_wikidata_names } from "./reply_cities_wikidata_names.mjs";
import { reply_cities_distress_readings } from "./reply_cities_distress_readings.mjs";
import { error_json } from "./error_json.mjs";
import { reply_cities_names_all } from "./reply_cities_names_all.mjs";
import { reply_cities_distress_phrases } from "./reply_cities_distress_phrases.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export function reply_cities_distress_gate_run() {
  arguments_assert(arguments, 0);
  ("Fails if a hardship or a kind of place would read as a town, on the whole list the reply rules can read, whether they read it yet or not.");
  ("★ IT FIRST PROVES IT CAN SEE A TOWN AT ALL. A check that reads nothing would report no hardship forever, so one name from each list must read itself before the answer counts.");
  let controls = [reply_cities_names()[0], reply_cities_wikidata_names()[0]];
  let seen = reply_cities_distress_readings(controls, controls);
  if (less_than(seen.length, 2)) {
    error_json({
      controls,
      seen,
      hint: "a town name did not read itself, so this check is blind",
    });
  }
  let names = reply_cities_names_all();
  let phrases = reply_cities_distress_phrases();
  let readings = reply_cities_distress_readings(names, phrases);
  list_empty_is_assert_json(readings, {
    readings,
    hint: text_combine_multiple([
      "a word that is not a town reads as one. Remove the town from the list, or run ",
      fn_name("reply_cities_wikidata_names_write"),
      " again if it is on the longer list",
    ]),
  });
  let r = {
    names: names.length,
    phrases: phrases.length,
    readings: 0,
  };
  return r;
}
