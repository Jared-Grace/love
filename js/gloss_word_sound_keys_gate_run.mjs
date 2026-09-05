import { list_size_greater_than } from "./list_size_greater_than.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_gloss_urdu_words } from "./app_en_learn_bible_gloss_urdu_words.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_word_sound_key } from "./gloss_word_sound_key.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { list_add } from "./list_add.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
import { object_filter } from "./object_filter.mjs";
import { properties_get } from "./properties_get.mjs";
import { not } from "./not.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { assert_json } from "./assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function gloss_word_sound_keys_gate_run() {
  "Gate: no two English words the Urdu gloss store explains may be filed under the same name for their recordings. Throws so the dispatcher seam exits nonzero.";
  ("★ THE RULE THAT MAKES THE NAME IS NOT ONE-TO-ONE, SO THIS IS THE PART THAT MAKES IT SAFE. `",
    fn_name("gloss_word_sound_key"),
    "` writes anything that is not a letter, a digit or a hyphen as an underline, which two different words could in principle survive as one. What happens then is that a reader taps one word and hears another, in an app whose whole purpose is teaching a person how a word sounds - and nothing anywhere reports it, because both recordings are real recordings and both words are real words.");
  ("★ IT IS ASKED OVER THE STORE RATHER THAN OVER A LIST, WHICH IS WHY IT KEEPS ANSWERING. Words arrive here by somebody authoring a chapter, so a list of words checked once is a list about the chapters that existed the day it was written. Reading the store means the chapter authored tomorrow is inside the question from the moment it is stored, and nobody has to remember this gate exists.");
  ("How many words were read travels out with the verdict, because finding no clash and reading no words at all are otherwise the same answer - and this store sits outside the repo, which is the ordinary way a sweep here stops reaching anything.");
  arguments_assert(arguments, 0);
  let found = await app_en_learn_bible_gloss_urdu_words();
  let words = property_get(found, "words");
  let by_key = {};
  function word_each(word) {
    let key = gloss_word_sound_key(word);
    let held = property_get_or_null(by_key, key);
    if (held) {
      list_add(held, word);
      return;
    }
    property_set(by_key, key, [word]);
  }
  each(words, word_each);
  function shared_is(sharers) {
    let shared = list_size_greater_than(sharers, 1);
    return shared;
  }
  let clashes = object_filter(by_key, shared_is);
  let names = properties_get(clashes);
  let count = list_size(names);
  let any = greater_than(count, 0);
  let listed = [];
  if (any) {
    list_add(listed, "en_learn_bible");
  }
  let none = not(any);
  let shown = json_format_to(clashes);
  assert_json(none, {
    list: listed,
    json: {
      hint: text_combine_multiple([
        "en_learn_bible sounds: ",
        count,
        " recording names are wanted by more than one word, so a reader would tap one word and hear another - ",
        shown,
      ]),
    },
  });
  let r = {
    words: list_size(words),
    clashes: 0,
  };
  return r;
}
