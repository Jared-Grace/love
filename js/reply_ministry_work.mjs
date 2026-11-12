import { reply_on_match_blessings } from "./reply_on_match_blessings.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { reply_country_shown_words } from "./reply_country_shown_words.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_countries_shown } from "./reply_countries_shown.mjs";
import { reply_continents_shown } from "./reply_continents_shown.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_map } from "./list_map.mjs";
import { reply_word_in } from "./reply_word_in.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
export function reply_ministry_work() {
  "Somebody saying they do ministry work in a country. It gets the blessing on their ministry, and on the people of that country.";
  "★ ONE RULE PER COUNTRY, SO THE NAME SAID BACK IS ALWAYS THE LISTED ONE AND NEVER THE LETTERS TYPED. Kenia is blessed as Kenya. A spelling added to the country lists with no written name gets no reply here until it is given one, because a silence is safe and a prayer that drops the place was not wanted. The rejected reading was reading the typed word back out of the message, which would repeat a misspelling.";
  "★ THESE ARE THE WORDS A REAL MESSAGE USED AND NO OTHERS, WITH ONLY THE COUNTRY OPEN. Other ways of saying this are added when somebody really says them.";
  function country_rule(country) {
    let people = text_combine_multiple(["the people of ", country]);
    let blessed = ["your ministry", people];
    let country_words = reply_country_shown_words(country);
    let country_choice = reply_choice(country_words);
    let rule = reply_on_match_blessings(country_choice, blessed);
    return rule;
  }
  let countries_shown = reply_countries_shown();
  let continents = reply_continents_shown();
  let shown = list_concat(countries_shown, continents);
  let rules = list_map(shown, country_rule);
  let countries = reply_choice(rules);
  let n = reply_word_in();
  let work = reply_sequence(["i", "do", "ministry", "work", n, countries]);
  return work;
}
