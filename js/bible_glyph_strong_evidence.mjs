import { null_is } from "./null_is.mjs";
import { strongs_greek_definition } from "./strongs_greek_definition.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { bible_glyph_derivation_references } from "./bible_glyph_derivation_references.mjs";
export async function bible_glyph_strong_evidence(
  strong,
  hebrew_dictionary,
  tables,
) {
  "What Strong's says one number is and comes from, with the picture and root of every number that entry cites.";
  "$plain strong";
  "the number of one word, read in the language the dictionary argument chooses.";
  "A NULL DICTIONARY MEANS GREEK. The Hebrew dictionary is one large file read once by the caller and handed in, while a Greek entry is asked for one number at a time, so the argument being absent is what says which language this number belongs to.";
  let entry = null_is(hebrew_dictionary)
    ? await strongs_greek_definition(strong)
    : property_get_or_null(hebrew_dictionary, "H" + strong);
  let derivation = entry?.derivation ?? "";
  let definition = entry?.strongs_def ?? "";
  let references = bible_glyph_derivation_references(
    derivation + " " + definition,
    tables,
  );
  let evidence = {
    word: entry?.xlit ?? entry?.translit ?? null,
    derivation,
    definition,
    references,
  };
  return evidence;
}
