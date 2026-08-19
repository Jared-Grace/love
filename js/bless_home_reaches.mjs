import { arguments_assert } from "./arguments_assert.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { list_map } from "./list_map.mjs";
import { list_min } from "./list_min.mjs";
import { g_distance_taxicab } from "./g_distance_taxicab.mjs";
export function bless_home_reaches(home, roam, tile) {
  arguments_assert(arguments, 3);
  ("Whether a tile is somewhere this person would go - near enough to home, home being");
  ("wherever they belong and roam being how far from it they are willing to be.");
  ("Home is a LIST of tiles rather than one, and that single choice is what lets the two");
  ("kinds of person share this one question. Somebody at home has a home of one tile, their");
  ("own doorstep, and a roam of a few paces; somebody out walking has the whole pavement as");
  ("their home and a roam of nothing at all, which says they may be anywhere on it and");
  ("nowhere off it. Written as two rules - a circle for one kind and a line for the other -");
  ("the walking itself would have had to know which kind it was moving.");
  ("Distance is measured to the NEAREST tile of home, which is what makes a home made of");
  ("many tiles behave as one place. Measured to the middle of the pavement instead, a walker");
  ("would be held near its centre and the ends of the street would never be walked at all.");
  ("It is counted in steps along the grid, not across the diagonal, because that is how");
  ("walking here is actually done - so a roam of four means four steps and not a distance");
  ("that takes five.");
  function distance_to(home_tile) {
    let distance = g_distance_taxicab(home_tile, tile);
    return distance;
  }
  let distances = list_map(home, distance_to);
  let nearest = list_min(distances);
  let within = less_than_equal(nearest, roam);
  return within;
}
