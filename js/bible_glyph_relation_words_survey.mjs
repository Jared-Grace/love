import { bible_interlinear_chapter_words } from "./bible_interlinear_chapter_words.mjs";
import { bible_glyph_grammar_features } from "./bible_glyph_grammar_features.mjs";
import { list_includes } from "./list_includes.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_set } from "./property_set.mjs";
import { property_get } from "./property_get.mjs";
import { object_values } from "./object_values.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { not } from "./not.mjs";
export async function bible_glyph_relation_words_survey(chapter_code) {
  "$plain chapter_code";
  "the code names one chapter to survey. It names a chapter to read and nothing that runs.";
  "The relation words of one chapter - its conjunctions and its prepositions - gathered by root and ranked by how often each is used, so the size of the second alphabet a picture Bible needs can be read off rather than guessed at.";
  "A picture Bible has TWO grammar problems and they are not the same problem. The first is what a word is doing in its own clause - accusative, plural, aorist - and those are marks that ride ON a picture, because they say something about the thing already drawn. The second is how one clause stands to the next - because, if, in, from, through - and no mark riding on a picture can say that, because it is not about any one thing. Those need pictures of their own, standing where the word stands.";
  "This survey measures the second kind, and it is the one that decides whether the lane is walkable at all. Marks that ride are bounded by the language's own grammar and cannot run away - Greek has five cases whatever anybody writes. Standing pictures are bounded by nothing except how many joining words the writers happened to use, and if that number runs to hundreds then a reader must learn hundreds of pictures before reading a sentence, which no reader will do.";
  "Articles and pronouns are left out on purpose although they are grammar too. An article is drawn by drawing nothing - a picture of a heart is already the heart - and a pronoun is drawn by drawing its thing again, which a picture Bible can do for free and a written language cannot.";
  let chapters = await bible_interlinear_chapter_words(chapter_code);
  let kinds = ["Conjunction", "Preposition"];
  let words = {};
  let occurrences = 0;
  let total = 0;
  for (let chapter of chapters) {
    for (let word of chapter.words) {
      total = total + 1;
      let features = bible_glyph_grammar_features(word.parsing_long);
      let kind = features[0];
      let wanted = list_includes(kinds, kind);
      if (not(wanted)) {
        continue;
      }
      occurrences = occurrences + 1;
      let key = kind + " " + word.strong;
      let seen = property_exists(words, key);
      if (not(seen)) {
        property_set(words, key, {
          kind,
          strong: word.strong,
          original: word.original,
          gloss: word.gloss,
          count: 0,
        });
      }
      let entry = property_get(words, key);
      entry.count = entry.count + 1;
    }
  }
  let ranked = object_values(words);
  function lambda(entry) {
    let r2 = entry.count;
    return r2;
  }
  list_sort_number_mapper_reverse(ranked, lambda);
  let r = {
    chapter_code,
    words_total: total,
    relation_words_total: occurrences,
    relation_roots_distinct: ranked.length,
    ranked,
  };
  return r;
}
