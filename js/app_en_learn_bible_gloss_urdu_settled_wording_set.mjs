import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { equal } from "./equal.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_en_learn_bible_gloss_urdu_word_explains } from "./app_en_learn_bible_gloss_urdu_word_explains.mjs";
import { app_en_learn_bible_gloss_urdu_noun_explains } from "./app_en_learn_bible_gloss_urdu_noun_explains.mjs";
import { app_en_learn_bible_gloss_urdu_name_explains } from "./app_en_learn_bible_gloss_urdu_name_explains.mjs";
import { app_en_learn_bible_gloss_urdu_verb_explains } from "./app_en_learn_bible_gloss_urdu_verb_explains.mjs";
import { app_en_learn_bible_gloss_urdu_plural_noun_explains } from "./app_en_learn_bible_gloss_urdu_plural_noun_explains.mjs";
import { app_en_learn_bible_gloss_urdu_adjective_explains } from "./app_en_learn_bible_gloss_urdu_adjective_explains.mjs";
import { app_en_learn_bible_gloss_urdu_adverb_conjunction_explains } from "./app_en_learn_bible_gloss_urdu_adverb_conjunction_explains.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { app_en_learn_bible_gloss_urdu_action_verb_explains } from "./app_en_learn_bible_gloss_urdu_action_verb_explains.mjs";
import { assert_json } from "./assert_json.mjs";
import { js_object_property_text_set } from "./js_object_property_text_set.mjs";
import { function_transform } from "./function_transform.mjs";
export async function app_en_learn_bible_gloss_urdu_settled_wording_set(
  word,
  wording,
) {
  "$plain word";
  "$plain wording";
  "Write a new settled wording for one English word into whichever gloss table already holds it, in place of the sentence it has now.";
  "IT FINDS THE TABLE RATHER THAN BEING TOLD WHICH ONE. A word belongs to exactly one table, so asking the caller to name it is asking them to know something the tables already say - and to be wrong about it quietly, because a wording written into the wrong file does not replace the old entry, it adds a second one. The merge that joins the tables refuses a word written down twice, so that fault would surface far from here and long after the change that caused it.";
  "ONE TABLE IS BUILT RATHER THAN WRITTEN AND SO CANNOT BE WRITTEN INTO. The action verb wordings are made from each verb's own spelling by a template, which is why correcting one of them means correcting the template and every verb it covers together. A word that lives only there is refused by name, saying so, rather than reported as a word nobody has heard of - the two are the same answer to a caller and completely different work.";
  "THIS IS THE EDIT THAT KEEPS HAPPENING. Each round of reading the store against the tables ends in changing a settled sentence, and doing that by hand is a commit nothing names and a chance to put the sentence in the wrong file. Named, the change is one command whose arguments are the word and the sentence themselves, which is what the commit log wants and what a hand edit can never give it.";
  let tables = {};
  tables[fn_name("app_en_learn_bible_gloss_urdu_word_explains")] =
    app_en_learn_bible_gloss_urdu_word_explains();
  tables[fn_name("app_en_learn_bible_gloss_urdu_noun_explains")] =
    app_en_learn_bible_gloss_urdu_noun_explains();
  tables[fn_name("app_en_learn_bible_gloss_urdu_name_explains")] =
    app_en_learn_bible_gloss_urdu_name_explains();
  tables[fn_name("app_en_learn_bible_gloss_urdu_verb_explains")] =
    app_en_learn_bible_gloss_urdu_verb_explains();
  tables[fn_name("app_en_learn_bible_gloss_urdu_plural_noun_explains")] =
    app_en_learn_bible_gloss_urdu_plural_noun_explains();
  tables[fn_name("app_en_learn_bible_gloss_urdu_adjective_explains")] =
    app_en_learn_bible_gloss_urdu_adjective_explains();
  tables[fn_name("app_en_learn_bible_gloss_urdu_adverb_conjunction_explains")] =
    app_en_learn_bible_gloss_urdu_adverb_conjunction_explains();
  let holders = [];
  for (let table_name of object_property_names(tables)) {
    let table = tables[table_name];
    let holds = object_property_names(table).includes(word);
    if (holds) {
      holders.push(table_name);
    }
  }
  let built = app_en_learn_bible_gloss_urdu_action_verb_explains();
  let made = object_property_names(built).includes(word);
  let advice =
    "exactly one table has to hold the word already: none means no settled sentence has been written for it yet, and two means the tables disagree about which kind of word it is";
  if (made) {
    advice = text_combine_multiple([
      "this word's sentence is built from its own spelling by the action verb template rather than written down, so it changes by changing ",
      fn_name("app_en_learn_bible_gloss_urdu_action_verb_explains"),
      " and every verb the template covers at once",
    ]);
  }
  let one_is = equal(holders.length, 1);
  assert_json(one_is, {
    hint: advice,
    word: word,
    holders: holders,
    built_by_template: made,
  });
  let holder = holders[0];
  async function lambda(ast) {
    js_object_property_text_set(ast, word, wording);
  }
  await function_transform(holder, lambda);
  let r = {
    word: word,
    table: holder,
    wording: wording,
  };
  return r;
}
