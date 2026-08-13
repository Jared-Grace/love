import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
export function g_coordinates_turn(offset, turns) {
  "the same offset turned a given number of quarter turns.";
  "An arrangement of people is written down facing ONE way, east, because writing each of them out four times would be four chances to write one of them differently. Turning is what lets the one that was written stand whichever way there is room for it - the same shape, pointed elsewhere.";
  "All four are worked out and the wanted one taken, rather than turning again and again. There are only four and each is two subtractions, so the whole of it is cheaper than deciding how many times to go round, and every one of them is in front of the reader at once.";
  let x = property_get(offset, "x");
  let y = property_get(offset, "y");
  let x_back = subtract(0, x);
  let y_back = subtract(0, y);
  let quarters = [
    {
      x,
      y,
    },
    {
      x: y_back,
      y: x,
    },
    {
      x: x_back,
      y: y_back,
    },
    {
      x,
      y: x_back,
    },
  ];
  let r = quarters[turns];
  return r;
}
