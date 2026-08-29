import { arguments_assert } from "./arguments_assert.mjs";
import { song_image_couplets } from "./song_image_couplets.mjs";
import { text_size } from "./text_size.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { list_get_end } from "./list_get_end.mjs";
import { subtract } from "./subtract.mjs";
import { list_size } from "./list_size.mjs";
import { list_map } from "./list_map.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
export function song_image_couplets_last_clause_depths() {
  arguments_assert(arguments, 0);
  ("How far into each couplet's symbol clause its last clause begins, the deepest first, so that the rules standing furthest out of reach can be read off this table instead of guessed at.");
  ("A RULE NEAR THE END IS NOT A WEAK RULE, IT IS AN UNREAD ONE, and that is measured in the couplets file three separate times rather than supposed here. What is new is only that the measuring was done by hand every time. Which couplets carry the fault was worked out once from how each clause opened rather than from what each clause said, and that hand list put two couplets on the wrong side of it - so the reading exists because the same question keeps being asked and keeps being answered by eye.");
  ("IT RANKS AND IT DOES NOT JUDGE, and the missing threshold is deliberate. Six hundred characters is what one drawing service did on some days it was asked, and a number like that written down here would sit unchanged while the thing it describes moved, with nothing going red to say so. An order survives that; a verdict does not. Whoever reads this compares the top of it against the pictures already on disk.");
  ("The last clause is taken at the last comma, because a comma is what separates one clause from the next everywhere in that table, and the count is of the letters standing in front of it rather than of the letters in it - what pushes a rule out of reach is everything written before it.");
  let couplets = song_image_couplets();
  function lambda$depth(couplet) {
    let symbol = couplet.symbol;
    let letters = text_size(symbol);
    let clauses = text_split_comma(symbol);
    let last = list_get_end(clauses, 0);
    let right = text_size(last);
    let before = subtract(letters, right);
    let depth = {
      n: couplet.n,
      letters: letters,
      clauses: list_size(clauses),
      before: before,
      last: last,
    };
    return depth;
  }
  let depths = list_map(couplets, lambda$depth);
  function lambda$before(depth) {
    let before = depth.before;
    return before;
  }
  let r = list_sort_number_mapper_reverse(depths, lambda$before);
  return r;
}
