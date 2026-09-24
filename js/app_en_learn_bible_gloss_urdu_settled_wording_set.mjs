import { fn_name } from "./fn_name.mjs";
import { app_en_learn_bible_gloss_urdu_word_explains } from "./app_en_learn_bible_gloss_urdu_word_explains.mjs";
import { app_en_learn_bible_gloss_urdu_noun_explains } from "./app_en_learn_bible_gloss_urdu_noun_explains.mjs";
import { app_en_learn_bible_gloss_urdu_name_explains } from "./app_en_learn_bible_gloss_urdu_name_explains.mjs";
import { app_en_learn_bible_gloss_urdu_verb_explains } from "./app_en_learn_bible_gloss_urdu_verb_explains.mjs";
import { app_en_learn_bible_gloss_urdu_plural_noun_explains } from "./app_en_learn_bible_gloss_urdu_plural_noun_explains.mjs";
import { app_en_learn_bible_gloss_urdu_adjective_explains } from "./app_en_learn_bible_gloss_urdu_adjective_explains.mjs";
import { app_en_learn_bible_gloss_urdu_adverb_conjunction_explains } from "./app_en_learn_bible_gloss_urdu_adverb_conjunction_explains.mjs";
import { app_en_learn_bible_gloss_urdu_action_verb_explains } from "./app_en_learn_bible_gloss_urdu_action_verb_explains.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { equal } from "./equal.mjs";
import { assert_json } from "./assert_json.mjs";
import { function_ast } from "./function_ast.mjs";
import { js_object_property_text_is } from "./js_object_property_text_is.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
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
  "SOME SENTENCES ARE BUILT RATHER THAN WRITTEN, AND THOSE CANNOT BE WRITTEN OVER. The action verb table and the plural noun table make each sentence out of the word's own spelling by a template, and the other tables build some of their entries too, so which kind a word is cannot be read off which file it is in. Asked of the file rather than of the list of files, the answer is right for every word without anybody keeping a list up to date.";
  "A BUILT SENTENCE IS A DIFFERENT PIECE OF WORK, WHICH IS WHY IT IS WORTH SAYING SO. Changing one means changing the template and every word it covers together, and the reader who hears only that a word cannot be written over will go looking for the word. So the refusal names the table that builds it.";
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
  tables[fn_name("app_en_learn_bible_gloss_urdu_action_verb_explains")] =
    app_en_learn_bible_gloss_urdu_action_verb_explains();
  let holders = [];
  for (let table_name of object_property_names(tables)) {
    let table = tables[table_name];
    let holds = object_property_names(table).includes(word);
    if (holds) {
      holders.push(table_name);
    }
  }
  let one_is = equal(holders.length, 1);
  assert_json(one_is, {
    hint: "exactly one table has to hold the word already: none means no settled sentence has been written for it yet, and two means the tables disagree about which kind of word it is",
    word: word,
    holders: holders,
  });
  let holder = holders[0];
  let ast = await function_ast(holder);
  let written_is = js_object_property_text_is(ast, word);
  assert_json(written_is, {
    hint: text_combine_multiple([
      "this word's sentence is built out of the word rather than written down, so it changes by changing the template in ",
      holder,
      " and every word that template covers at once",
    ]),
    word: word,
    table: holder,
  });
  async function lambda(ast_in) {
    js_object_property_text_set(ast_in, word, wording);
  }
  await function_transform(holder, lambda);
  let r = {
    word: word,
    table: holder,
    wording: wording,
  };
  return r;
}
