import { gloss_parsing_entries } from "./gloss_parsing_entries.mjs";
import { gloss_parsing_head_named } from "./gloss_parsing_head_named.mjs";
import { gloss_parsing_head_clause } from "./gloss_parsing_head_clause.mjs";
import { gloss_parsing_tail_clause_add } from "./gloss_parsing_tail_clause_add.mjs";
import { gloss_parsing_dimension_clauses_add } from "./gloss_parsing_dimension_clauses_add.mjs";
import { gloss_parsing_phrases } from "./gloss_parsing_phrases.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_join } from "./list_join.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { list_add } from "./list_add.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_size } from "./list_size.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
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
  let entries = gloss_parsing_entries(phrases, words);
  if (not(entries)) {
    return null;
  }
  let kinds = list_filter_property(entries, "dimension", "kind");
  let sorts = list_filter_property(entries, "dimension", "sort");
  let mood_heads = list_filter_property(entries, "dimension", "mood_head");
  let head_entries = kinds;
  let any_sorts = list_size(sorts);
  if (any_sorts) {
    head_entries = sorts;
  }
  let head_named = gloss_parsing_head_named(sorts);
  let head_parts = [];
  if (head_named) {
    list_add(head_parts, head_named);
  }
  let items = list_map_property(kinds, "phrase");
  list_add_multiple(head_parts, items);
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
  let item = gloss_parsing_head_clause(head_entries, head_text);
  list_add(clauses, item);
  gloss_parsing_dimension_clauses_add(entries, clauses);
  gloss_parsing_tail_clause_add(entries, clauses);
  let body = list_join_comma_space(clauses);
  let sentence = text_combine_multiple(["This is ", body, "."]);
  return sentence;
}
