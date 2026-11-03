import { not } from "./not.mjs";
import { error_json } from "./error_json.mjs";
import { http_json } from "./http_json.mjs";
import { text_accent_marks_removed } from "./text_accent_marks_removed.mjs";
export async function wikidata_city_names_population_at_least(population) {
  "$plain population";
  "The English name of every place Wikidata calls a city and gives at least this many people, in lower case with accents, spaces and punctuation dropped, asked from this machine.";
  "The site and the shape of the request are fixed here and the population is the only thing a caller chooses, so it can hold a grant once. Anything but a whole number is refused before any request leaves, so no word from a message can ever reach the site through this.";
  let whole = /^\d+$/.test(population);
  if (not(whole)) {
    error_json({
      population,
      hint: "a population is written in digits and nothing else",
    });
  }
  let query =
    "SELECT DISTINCT ?label WHERE { ?c wdt:P31 wd:Q515; wdt:P1082 ?p; rdfs:label ?label. FILTER(?p >= " +
    population +
    ' && LANG(?label) = "en") }';
  let url =
    "https://query.wikidata.org/sparql?format=json&query=" +
    encodeURIComponent(query);
  let answer = await http_json(url, {
    headers: {
      "User-Agent": "love-reply-rules/1.0",
    },
  });
  function name_of(row) {
    let plain = text_accent_marks_removed(row.label.value).toLowerCase();
    let r = plain.replace(/[^a-z]/g, "");
    return r;
  }
  let names = answer.results.bindings.map(name_of).filter(Boolean);
  let r2 = [...new Set(names)].sort();
  return r2;
}
