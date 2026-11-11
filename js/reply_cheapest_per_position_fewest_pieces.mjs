import { list_group_by_property } from "./list_group_by_property.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_map } from "./list_map.mjs";
import { reply_cheapest_fewest_pieces } from "./reply_cheapest_fewest_pieces.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_clear } from "./list_clear.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { reply_on_match } from "./reply_on_match.mjs";
export function reply_cheapest_per_position_fewest_pieces(rule) {
  "A rule that reads what the given rule reads, and of the readings that stopped at the same place in the message keeps only the cheapest, a tie going to the one in fewer pieces.";
  "Two readings at the same place can only go on to read the same things, so the one kept here stays ahead to the end: anything added to one could be added to the other at the same cost and the same number of pieces.";
  "★ PUT AROUND THE WHOLE READING TOO, NOT ONLY EACH PIECE. Every whole reading stops at the same place, the end, so this one step leaves the single best reading for the final choice, and the final choice no longer needs to know about pieces.";
  function keep_cheapest(possibilities) {
    let grouped = list_group_by_property(possibilities, "index");
    let items = list_map_property(grouped, "items");
    let kept = list_map(items, reply_cheapest_fewest_pieces);
    function lambda(possibility) {
      let included = list_includes(kept, possibility);
      return included;
    }
    let filtered = list_filter(possibilities, lambda);
    list_clear(possibilities);
    list_add_multiple(possibilities, filtered);
  }
  let r = reply_on_match(rule, [keep_cheapest]);
  return r;
}
