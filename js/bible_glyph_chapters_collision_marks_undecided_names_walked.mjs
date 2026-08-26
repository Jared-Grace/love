import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters_collision_marks_walked } from "./bible_glyph_chapters_collision_marks_walked.mjs";
import { bible_glyph_collision_mark_name } from "./bible_glyph_collision_mark_name.mjs";
import { list_add } from "./list_add.mjs";
export async function bible_glyph_chapters_collision_marks_undecided_names_walked() {
  "Every mark already drawn on a shared picture that neither the interlinear nor the order of the words can decide, named one to a line, together with how many marks were compared to find them.";
  "THE TWO KINDS ARE ONE LIST BECAUSE THEY ARE ONE COST. A mark where both roots stand in the verse and the counts will not pair off, and a mark where the interlinear seats neither root, are different faults with different repairs - but both are a mark that a person has to open the chapter and read before that picture can ever be split, and the ratchet is counting exactly that. Splitting them into two records would say the same total twice and let one grow while the other shrank.";
  "The count of how much was reached is carried through rather than worked out here. Nothing on this side of the walk knows how many marks were compared, and the two numbers reachable from here - the length of this list, the size of the record it is measured against - both stay exactly the same on the run where the walk went blind, which is the run they would be wanted for.";
  "The gate and the writer are both handed exactly this list, and neither derives it, because a ratchet whose two halves disagree about what they are counting refuses the wrong things.";
  arguments_assert(arguments, 0);
  let walk = await bible_glyph_chapters_collision_marks_walked();
  let names = [];
  for (let entry of walk.ambiguous) {
    let name = bible_glyph_collision_mark_name(entry);
    list_add(names, name);
  }
  for (let entry of walk.unseated) {
    let name = bible_glyph_collision_mark_name(entry);
    list_add(names, name);
  }
  let r = {
    walked: walk.walked,
    offenders: names,
  };
  return r;
}
