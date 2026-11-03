import { arguments_assert } from "./arguments_assert.mjs";
import { list_group_by_property } from "./list_group_by_property.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_map } from "./list_map.mjs";
import { reply_cheapest } from "./reply_cheapest.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_clear } from "./list_clear.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { reply_on_match } from "./reply_on_match.mjs";
export function reply_cheapest_per_position(rule) {
  arguments_assert(arguments, 1);
  ("A rule that reads what the given rule reads, and of the readings that stopped at the same place in the message keeps only the cheapest.");
  ("★ WITHOUT THIS THE READINGS MULTIPLY WITH EVERY AMBIGUITY IN A MESSAGE. Each please help between two asks can belong to either one, so five of them took two seconds and a few more ran out of memory. Two readings at the same place can only go on to read the same things, so the dearer one can never end up the winner and need not be carried along.");
  ("That holds because what a rule matches depends only on the letters and the place it is reading from. No rule decides what matches by looking at the lines already said, and the typo allowance is counted per word, so nothing a reading did earlier limits what it can do next.");
  ("The survivors keep their order, and a tie goes to the one listed first, the same as the choice made at the very end, so the reply picked does not change.");
  function keep_cheapest(possibilities) {
    let grouped = list_group_by_property(possibilities, "index");
    let items = list_map_property(grouped, "items");
    let kept = list_map(items, reply_cheapest);
    function lambda(possibility) {
      let r = list_includes(kept, possibility);
      return r;
    }
    let filtered = list_filter(possibilities, lambda);
    list_clear(possibilities);
    list_add_multiple(possibilities, filtered);
  }
  let r = reply_on_match(rule, [keep_cheapest]);
  return r;
}
