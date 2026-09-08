import { arguments_assert } from "./arguments_assert.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
export function bless_blocks_buildings(blocks) {
  arguments_assert(arguments, 1);
  ("Every BUILDING on the street, from every block, as one flat list.");
  ("Whoever draws something onto houses wants the houses, not the blocks. A block is where");
  ("a row of them was laid down together, and that grouping answers questions about a rung");
  ("being earned - it answers nothing at all about a door or a window, which belong to one");
  ("house each and are drawn one house at a time.");
  ("Without it every such drawing walks two levels itself: a loop over the blocks that pulls");
  ("the buildings out and a loop over those. That walk was written out twice already, once");
  ("for the doors and once for the windows, and it is the same walk both times - the only");
  ("thing that differed was what was done with a building once it was reached, which is the");
  ("part that should differ.");
  ("It is asked of the blocks each time rather than kept anywhere, because a block gains");
  ("buildings while the street is being laid and a list kept from before would be short by");
  ("however many arrived after it was taken.");
  let lists = list_map_property(blocks, "buildings");
  let buildings = list_concat_multiple(lists);
  return buildings;
}
