import { arguments_assert } from "./arguments_assert.mjs";
import { tiles_sides } from "./tiles_sides.mjs";
import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
import { add } from "./add.mjs";
import { range_map } from "./range_map.mjs";
export function tiles_rows(tiles) {
  arguments_assert(arguments, 1);
  ("The rows of the smallest box that holds a patch of ground, top one first, each row given");
  ("as the line it runs along and how far it reaches to either side.");
  ("A ROW is the unit two different readings of a patch both work in. One walks the rows to");
  ("cut rectangles out of them; another walks the rows to lay a lane of traffic along each.");
  ("Neither wants the four edges of a box - each wants the rows the box is made of - and both");
  ("were building those rows out of the four edges by hand, which is the same short piece of");
  ("counting written twice and two chances for it to be written differently.");
  ("EVERY ROW OF THE BOX, INCLUDING THE ONES WITH NOTHING ON THEM. The box is the smallest");
  ("one that holds the patch, so its top and bottom rows are certainly occupied, but a patch");
  ("with a hole through the middle of it has a row here that no square sits on. That is the");
  ("honest answer for a box: a reading that wants only the rows that are lived on can ask the");
  ("squares, and a reading that walks a shape row by row wants the gap to come past it rather");
  ("than to be skipped silently.");
  ("The count is worked out rather than asked for, because the two edges are the only record");
  ("kept and the number of rows between them is one subtraction away. Counting BOTH ends in -");
  ("a box whose top and bottom are the same line is one row deep and not none.");
  ("The left and right of every row are the left and right of the whole box, which is what a");
  ("box means. Carried on each row anyway rather than handed back once beside them, so a");
  ("reading of one row is complete on its own and nothing has to reach back out to a pair of");
  ("numbers held somewhere else.");
  let sides = tiles_sides(tiles);
  let left = property_get(sides, "left");
  let right = property_get(sides, "right");
  let top = property_get(sides, "top");
  let bottom = property_get(sides, "bottom");
  let rows_below = subtract(bottom, top);
  let count = add(rows_below, 1);
  function row_at(index) {
    let y = add(top, index);
    let row = {
      y: y,
      left: left,
      right: right,
    };
    return row;
  }
  let rows = range_map(count, row_at);
  return rows;
}
