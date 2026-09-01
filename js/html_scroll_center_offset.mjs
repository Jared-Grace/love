import { arguments_assert } from "./arguments_assert.mjs";
import { subtract } from "./subtract.mjs";
import { add } from "./add.mjs";
import { divide } from "./divide.mjs";
export function html_scroll_center_offset(
  scrolled,
  near,
  container_near,
  extent,
  size,
) {
  arguments_assert(arguments, 5);
  ("$plain scrolled");
  ("how far the box has already been scrolled along this one direction.");
  ("$plain near");
  ("where the thing to be centred begins, as the screen sees it.");
  ("$plain container_near");
  ("where the box begins, as the screen sees it.");
  ("$plain extent");
  ("how much of the box the reader can see along this direction.");
  ("$plain size");
  ("how big the thing to be centred is along this direction.");
  ("How far a box has to be scrolled along one direction for something inside it to sit in the middle.");
  ("★ THE SAME SIX LINES OF ARITHMETIC STOOD IN THREE PLACES. Twice inside the one that centres in both directions at once, and once again in the one that centres a page of settled text - and the three were the same sum with the words across and down swapped through them. Three copies of a sum do not go wrong together; the day the middle of a box stops being half of what can be seen, two of them learn it.");
  ("IT KNOWS NOTHING OF ACROSS OR DOWN, which is what lets one of it serve both. Everything it is told is a number already measured along whichever direction the caller means, and the caller names the direction by choosing which numbers to hand in.");
  ("WHERE THE THING BEGINS IS TAKEN AS THE SCREEN SEES IT, and so is where the box begins, because the difference of the two is what the box has scrolled past plus what still stands between them. That is why how far it has already scrolled is added back: the screen has forgotten it and the answer is owed in the box's own reckoning.");
  ("IT WORKS OUT A PLACE AND GOES NOWHERE. A caller that wants a smooth glide and a caller that wants to arrive at once want the same number, and telling them apart is not arithmetic.");
  let towards = subtract(near, container_near);
  let along = add(scrolled, towards);
  let half_extent = divide(extent, 2);
  let middled = subtract(along, half_extent);
  let half_size = divide(size, 2);
  let r = add(middled, half_size);
  return r;
}
