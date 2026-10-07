import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_roots_unseated_common } from "./bible_glyph_roots_unseated_common.mjs";
import { ebible_testament_old_name } from "./ebible_testament_old_name.mjs";
import { equal } from "./equal.mjs";
import { strongs_hebrew_dictionary } from "./strongs_hebrew_dictionary.mjs";
import { bible_glyph_reference_tables } from "./bible_glyph_reference_tables.mjs";
import { bible_glyph_strong_evidence } from "./bible_glyph_strong_evidence.mjs";
import { list_add } from "./list_add.mjs";
export async function bible_glyph_words_root_candidates(
  testament_name,
  wanted,
) {
  arguments_assert(arguments, 2);
  ("$plain testament_name");
  ("the name is a testament's own, spelled the way the book divisions spell it. It names a stretch of text to read and nothing that runs.");
  ("$plain wanted");
  ("the number says how many of the ranked words to hand back. It sizes the answer and nothing that runs.");
  ("Every word one testament uses that no glyph seats yet and that is not a name, commonest first, each with the wordings the interlinear gives it, what Strong's says it is and comes from, and the picture of every number that entry cites.");
  ("IT PROPOSES NOTHING, for the same reason the names list beside it proposes nothing. Most words come from a root that is already drawn, and seeing that root's picture beside the word is most of the work of drawing it, but whether the word still means what its root means, and which mark says how it differs, is a reading.");
  let ranked = await bible_glyph_roots_unseated_common(testament_name, wanted);
  let right = ebible_testament_old_name();
  let older = equal(testament_name, right);
  let hebrew_dictionary = older ? await strongs_hebrew_dictionary() : null;
  let tables = bible_glyph_reference_tables();
  let candidates = [];
  for (let row of ranked.shown) {
    let evidence = await bible_glyph_strong_evidence(
      row.strong,
      hebrew_dictionary,
      tables,
    );
    list_add(candidates, {
      ...row,
      ...evidence,
    });
  }
  return candidates;
}
