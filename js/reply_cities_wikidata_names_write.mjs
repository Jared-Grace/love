import { arguments_assert } from "./arguments_assert.mjs";
import { wikidata_city_names_population_at_least } from "./wikidata_city_names_population_at_least.mjs";
import { reply_cities_names } from "./reply_cities_names.mjs";
import { not } from "./not.mjs";
import { reply_cities_distress_phrases } from "./reply_cities_distress_phrases.mjs";
import { reply_cities_distress_readings } from "./reply_cities_distress_readings.mjs";
import { json_to } from "./json_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_source_formatted_overwrite } from "./function_source_formatted_overwrite.mjs";
import { function_auto_checked } from "./function_auto_checked.mjs";
import { subtract } from "./subtract.mjs";
export async function reply_cities_wikidata_names_write(population) {
  "$plain population";
  arguments_assert(arguments, 1);
  ("Asks Wikidata for every city of at least this many people and writes the ones the reply rules do not know yet into their own function, leaving out any name that would read a hardship as a town.");
  ("★ THE LIST IS WRITTEN BY THIS COMMAND AND NEVER BY HAND, so what it holds is a query and a filter and nobody's choice of towns. Nothing from a message reaches it.");
  ("It only writes. Whether the rules read the list is decided on the review page, by the change that makes them read it.");
  let fetched = await wikidata_city_names_population_at_least(population);
  let names = reply_cities_names();
  let known = new Set(names);
  function lambda(name) {
    let b = known.has(name);
    let n = not(b);
    return n;
  }
  let fresh = fetched.filter(lambda);
  let phrases = reply_cities_distress_phrases();
  let readings = reply_cities_distress_readings(fresh, phrases);
  function lambda2(reading) {
    let r = reading.name;
    return r;
  }
  let v = readings.map(lambda2);
  let left_out = new Set(v);
  function lambda3(name) {
    let b2 = left_out.has(name);
    let n2 = not(b2);
    return n2;
  }
  let kept = fresh.filter(lambda3);
  function lambda4(name) {
    let json = json_to(name);
    return json;
  }
  let lines = kept.map(lambda4).join(",\n");
  let json2 = json_to(
    "Every city Wikidata gives at least " +
      population +
      " people, in lower case with only the letters kept, apart from the ones the shorter list of capitals and big cities already holds.",
  );
  let json3 = json_to(
    "Written by a command from a public query, never by hand and never from a message. A name that would read a hardship as a town is left out when it is written. Wikidata only counts what somebody tagged as a city, so plenty of real towns are missing, and those still go to a human.",
  );
  let combined = text_combine_multiple([
    "  ",
    fn_name("arguments_assert"),
    "(arguments, 0);",
  ]);
  let source = [
    text_combine_multiple([
      "export function ",
      fn_name("reply_cities_wikidata_names"),
      "() {",
    ]),
    combined,
    json2,
    ";",
    json3,
    ";",
    "let names = [",
    lines,
    "];",
    "return names;",
    "}",
  ].join("\n");
  await function_source_formatted_overwrite(
    fn_name("reply_cities_wikidata_names"),
    source,
  );
  ("The file is put through the canonicalizing pass here, because the source above carries no imports and the list cannot run without them.");
  await function_auto_checked(fn_name("reply_cities_wikidata_names"));
  let r2 = {
    population,
    fetched: fetched.length,
    already_known: subtract(fetched.length, fresh.length),
    left_out: [...left_out],
    readings,
    written: kept.length,
  };
  return r2;
}
