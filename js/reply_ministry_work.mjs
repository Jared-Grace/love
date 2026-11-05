import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { prayer_blessing } from "./prayer_blessing.mjs";
import { reply_country_shown_words } from "./reply_country_shown_words.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_sequence_output } from "./reply_sequence_output.mjs";
import { reply_countries_shown } from "./reply_countries_shown.mjs";
import { list_map } from "./list_map.mjs";
import { list_squash } from "./list_squash.mjs";
import { reply_countries_words } from "./reply_countries_words.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_add } from "./list_add.mjs";
import { reply_word_in } from "./reply_word_in.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
export function reply_ministry_work() {
  "Somebody saying they do ministry work in a country. It gets the blessing on their ministry, and on the people of that country when the country has a name a reply may say.";
  "★ ONE RULE PER COUNTRY, SO THE NAME SAID BACK IS ALWAYS THE LISTED ONE AND NEVER THE LETTERS TYPED. Kenia is blessed as Kenya. A spelling with no listed name still gets the blessing on the ministry, without a name in it. The rejected reading was reading the typed word back out of the message, which would repeat a misspelling.";
  "★ THESE ARE THE WORDS A REAL MESSAGE USED AND NO OTHERS, WITH ONLY THE COUNTRY OPEN. Other ways of saying this are added when somebody really says them.";
  function country_rule(country) {
    let blessed = text_combine_multiple([
      "your ministry and the people of ",
      country,
    ]);
    let country_blessing = prayer_blessing(blessed);
    let country_words = reply_country_shown_words(country);
    let country_choice = reply_choice(country_words);
    let rule = reply_sequence_output([country_choice], country_blessing);
    return rule;
  }
  let shown = reply_countries_shown();
  let shown_words = list_map(shown, reply_country_shown_words);
  let covered = list_squash(shown_words);
  let spellings = reply_countries_words();
  let unnamed = list_difference(spellings, covered);
  let unnamed_choice = reply_choice(unnamed);
  let blessing = prayer_blessing("your ministry");
  let unnamed_rule = reply_sequence_output([unnamed_choice], blessing);
  let rules = list_map(shown, country_rule);
  list_add(rules, unnamed_rule);
  let countries = reply_choice(rules);
  let n = reply_word_in();
  let work = reply_sequence(["i", "do", "ministry", "work", n, countries]);
  return work;
}
