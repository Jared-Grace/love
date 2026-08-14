import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { gloss_parsing_words_unphrased } from "./gloss_parsing_words_unphrased.mjs";
import { gloss_parsing_sentences_ranked } from "./gloss_parsing_sentences_ranked.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { list_size } from "./list_size.mjs";
import { assert_json } from "./assert_json.mjs";
import { not } from "./not.mjs";
export async function gloss_parsing_sentence_gate_run() {
  "QA gate: prove every spelled-out parsing in the Greek New Testament still composes into a plain English sentence, so a parsing the source starts using - or a word dropped out of the phrase table - fails here instead of leaving that word with no explanation at all";
  "The two checks are one gate because they fail the same way and only one of them can say why. A word with no entry is the failure that actually happens, and it names the word to write a phrase for; a parsing that composes to nothing names the parsing, which is what you need when the hole is anywhere else. Either alone would report a gap it could not describe.";
  "It is checked against the text rather than against a list somebody keeps. The phrase table is written by hand and the interlinear is not, so the two drift in exactly one direction, and nothing about composing a sentence fails loudly when they do - the word simply goes unsaid and the sentence reads as though the parsing had never carried it.";
  let testament_name = "New Testament";
  let unphrased = await gloss_parsing_words_unphrased(testament_name);
  let unphrased_count = list_size(unphrased);
  let b = not(unphrased_count);
  assert_json(b, {
    unphrased,
    hint: text_combine_multiple([
      "every word the New Testament's parsings are built out of needs an entry in ",
      fn_name("gloss_parsing_phrases"),
      "; add one for each word listed here",
    ]),
  });
  let ranked = await gloss_parsing_sentences_ranked(testament_name);
  let unsaid = list_filter_property(ranked, "sentence", null);
  let unsaid_count = list_size(unsaid);
  let b2 = not(unsaid_count);
  assert_json(b2, {
    unsaid,
    hint: text_combine_multiple([
      "every parsing in the New Testament must compose into a sentence; these composed into nothing, which means ",
      fn_name("gloss_parsing_sentence"),
      " found no kind to build a head out of",
    ]),
  });
}
