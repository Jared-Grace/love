import { gloss_parsing_phrases } from "./gloss_parsing_phrases.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_last_remaining } from "./list_last_remaining.mjs";
import { list_join } from "./list_join.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { list_add } from "./list_add.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_size } from "./list_size.mjs";
import { text_articled } from "./text_articled.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function gloss_parsing_sentence(parsing_long) {
  "One word's spelled-out parsing said as a plain English sentence, and nothing when the parsing holds a word the phrase table has no entry for.";
  "$plain parsing_long";
  "the parsing is the interlinear's own spelling of it, the grammarians' shorthand as the table hands it over. It is words to read and nothing that runs.";
  "The sentence is composed rather than looked up. A parsing is a kind followed by the features it carries, so the words are gathered by what dimension each belongs to and then said in the order a reader can follow - what the word is, then when, then how it stands, then what part it plays, then who and how many. The grammarian's order and the reader's order are not the same order, and only the dimension knows which word goes where.";
  "Nothing comes back rather than a sentence with a hole in it. A word with no entry cannot be said, and a sentence that quietly left it out would read as though the parsing had never carried it - a claim about the word that happens to be false, which is worse than no claim at all.";
  "The participle and the infinitive take the place of the kind instead of standing beside it. A reader meets them as what a word is, so a sentence saying this is a verb and then this is a participle would say the same thing twice and name the second as though it were an afterthought.";
  "Two names in one dimension mean the source did not decide, and the sentence says so rather than choosing. Middle or Passive is what the table knows, and a sentence naming one of them would be inventing the half the source withheld.";
  let phrases = gloss_parsing_phrases();
  let words = text_split_space(parsing_long);
  let entries = [];
  for (let word of words) {
    let entry = list_find_property(phrases, "word", word);
    if (not(entry)) {
      return null;
    }
    let phrase = property_get(entry, "phrase");
    if (not(phrase)) {
      continue;
    }
    list_add(entries, entry);
  }
  let kinds = list_filter_property(entries, "dimension", "kind");
  let sorts = list_filter_property(entries, "dimension", "sort");
  let mood_heads = list_filter_property(entries, "dimension", "mood_head");
  let head_entries = kinds;
  let any_sorts = list_size(sorts);
  if (any_sorts) {
    head_entries = sorts;
  }
  let head_words = [];
  let items = list_map_property(sorts, "phrase");
  list_add_multiple(head_words, items);
  let head_named = list_join(head_words, " or ");
  let head_parts = [];
  if (head_named) {
    list_add(head_parts, head_named);
  }
  let items2 = list_map_property(kinds, "phrase");
  list_add_multiple(head_parts, items2);
  let any_mood_heads = list_size(mood_heads);
  if (any_mood_heads) {
    head_entries = mood_heads;
    head_parts = list_map_property(mood_heads, "phrase");
  }
  let head_text = list_join(head_parts, " ");
  if (not(head_text)) {
    return null;
  }
  let clauses = [];
  let head_glosses = [];
  for (let entry of head_entries) {
    let gloss = property_get(entry, "gloss");
    if (gloss) {
      list_add(head_glosses, gloss);
    }
  }
  let articled = text_articled(head_text);
  let head_clause_parts = [articled];
  let head_gloss_text = list_join_comma_space(head_glosses);
  if (head_gloss_text) {
    list_add_multiple(head_clause_parts, [", ", head_gloss_text]);
  }
  let item = text_combine_multiple(head_clause_parts);
  list_add(clauses, item);
  let dimensions = ["tense", "mood", "voice", "case", "degree"];
  for (let dimension of dimensions) {
    let found = list_filter_property(entries, "dimension", dimension);
    let named = list_map_property(found, "phrase");
    let count = list_size(named);
    if (not(count)) {
      continue;
    }
    let glosses = [];
    for (let entry of found) {
      let gloss = property_get(entry, "gloss");
      if (gloss) {
        list_add(glosses, gloss);
      }
    }
    let name_text = list_join(named, " or ");
    let gloss_text = list_join_comma_space(glosses);
    let undecided = equal(count, 2);
    if (undecided) {
      name_text = list_join(named, " or the ");
      gloss_text = "which the parsing does not decide between";
    }
    let clause_parts = ["in the ", name_text];
    if (gloss_text) {
      list_add_multiple(clause_parts, [", ", gloss_text]);
    }
    let item2 = text_combine_multiple(clause_parts);
    list_add(clauses, item2);
  }
  let tail_words = [];
  let tail_dimensions = ["person", "gender", "number"];
  for (let dimension of tail_dimensions) {
    let found = list_filter_property(entries, "dimension", dimension);
    let items3 = list_map_property(found, "phrase");
    list_add_multiple(tail_words, items3);
  }
  let tail_count = list_size(tail_words);
  let tail_text = list_join_comma_space(tail_words);
  let tail_single = equal(tail_count, 1);
  if (tail_count) {
    if (not(tail_single)) {
      let split = list_last_remaining(tail_words);
      let last = property_get(split, "last");
      let remaining = property_get(split, "remaining");
      let leading = list_join_comma_space(remaining);
      tail_text = text_combine_multiple([leading, " and ", last]);
    }
    list_add(clauses, tail_text);
  }
  let body = list_join_comma_space(clauses);
  let sentence = text_combine_multiple(["This is ", body, "."]);
  return sentence;
}
