import { object_property_names } from "./object_property_names.mjs";
import { bible_glyph_grammar_features } from "./bible_glyph_grammar_features.mjs";
import { bible_interlinear_chapter_words } from "./bible_interlinear_chapter_words.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
export async function bible_glyph_grammar_survey(chapter_code) {
  "$plain chapter_code";
  "the code names one chapter to survey. It names a chapter to read and nothing that runs.";
  "How much grammar one chapter actually contains, counted two ways: how many whole parsings appear in it, and how many separate grammatical facts those parsings are built from.";
  "The two numbers are the fork this survey exists to settle. A picture Bible that draws grammar has to draw it with SOMETHING, and the size of the thing a reader must learn is the whole question - a reader who has to learn a hundred marks will not, and a reader who has to learn fifteen might. Whole parsings give the first number and separate facts give the second, and the gap between them is how much a mark per fact buys over a mark per parsing.";
  "This is a MEASUREMENT and it decides nothing by itself. It says how big the alphabet would be; it does not say whether the marks can be drawn so that a person meeting them for the first time can read them, which is a question only a person looking at a page can answer.";
  let chapters = await bible_interlinear_chapter_words(chapter_code);
  let parsings = {};
  let features = {};
  let words_total = 0;
  for (let chapter of chapters) {
    for (let word of chapter.words) {
      words_total = words_total + 1;
      let parsing = word.parsing_long;
      let counted = property_exists(parsings, parsing);
      let before = 0;
      if (counted) {
        before = property_get(parsings, parsing);
      }
      property_set(parsings, parsing, before + 1);
      let named = bible_glyph_grammar_features(parsing);
      for (let feature of named) {
        let seen = property_exists(features, feature);
        let before_feature = 0;
        if (seen) {
          before_feature = property_get(features, feature);
        }
        property_set(features, feature, before_feature + 1);
      }
    }
  }
  let r = {
    chapter_code,
    words_total,
    parsings_distinct: object_property_names(parsings).length,
    features_distinct: object_property_names(features).length,
    features,
  };
  return r;
}
