import { math_max } from "./math_max.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { wikidata_city_names_population_at_least } from "./wikidata_city_names_population_at_least.mjs";
import { reply_cities_names } from "./reply_cities_names.mjs";
import { app_shared_message_reply_choices } from "./app_shared_message_reply_choices.mjs";
import { reply_messages_inner_transform } from "./reply_messages_inner_transform.mjs";
import { reply_attempt } from "./reply_attempt.mjs";
import { app_message_private_records_replied } from "./app_message_private_records_replied.mjs";
import { reply_cases_no_reply_yet } from "./reply_cases_no_reply_yet.mjs";
export async function reply_cities_wikidata_trial_counts(population) {
  arguments_assert(arguments, 1);
  ("How many messages the rules cannot answer today would be answered if the city list also held every Wikidata city of at least this population, as counts and never as words.");
  ("★ NOTHING COMES BACK BUT COUNTS. A name that made a message answerable is very likely where that sender lives, so not even the names are told.");
  ("★ THE LIST IS NOT CHANGED TO ASK THIS. A listed city stands in for each added name found in the message, and the rules are asked about that, which needs no second rule set. Rules see letters with no gaps between words, so looking for a name among the letters finds what they would find. It leaves out spellings a rule would forgive, so it can only undercount.");
  ("★ THE MESSAGES NOBODY WANTS ANSWERED ARE ASKED THE SAME QUESTION, because a longer list that answers one of those is worse than the list it replaces.");
  let trial = await wikidata_city_names_population_at_least(population);
  let names = reply_cities_names();
  let today = new Set(names);
  function lambda(name) {
    let b = today.has(name);
    let n = not(b);
    return n;
  }
  let added = trial.filter(lambda);
  let start = app_shared_message_reply_choices();
  async function lines_when_listed(message) {
    let letters = reply_messages_inner_transform(message).join("");
    let best = null;
    for (let name of added) {
      let b2 = letters.includes(name);
      if (not(b2)) {
        continue;
      }
      let swapped = letters.replace(name, " accra ");
      let attempt = await reply_attempt(swapped, start);
      if (attempt.answered) {
        let lines = attempt.outputs.length;
        best = equal(best, null) ? lines : math_max(best, lines);
      }
    }
    return best;
  }
  let records = await app_message_private_records_replied();
  function lambda2(record) {
    let r2 = not(record.reply.answered) && not(record.reply.broke);
    return r2;
  }
  let unanswered = records.filter(lambda2);
  let said = new Map();
  for (let record of unanswered) {
    let group = said.get(record.message) || new Set();
    group.add(record.who);
    said.set(record.message, group);
  }
  let would_answer = 0;
  let one_line_only = 0;
  let senders = new Set();
  for (let [message, who] of said) {
    let lines = await lines_when_listed(message);
    if (equal(lines, null)) {
      continue;
    }
    would_answer++;
    if (equal(lines, 1)) {
      one_line_only++;
    }
    function lambda3(one) {
      let r3 = senders.add(one);
      return r3;
    }
    who.forEach(lambda3);
  }
  let no_reply_would_answer = 0;
  for (let message of reply_cases_no_reply_yet()) {
    let lines = await lines_when_listed(message);
    if (not_equal(lines, null)) {
      no_reply_would_answer++;
    }
  }
  let r = {
    names_added: added.length,
    messages: records.length,
    unanswered_messages: unanswered.length,
    unanswered_distinct: said.size,
    would_answer,
    would_answer_senders: senders.size,
    one_line_only,
    no_reply_would_answer,
  };
  return r;
}
