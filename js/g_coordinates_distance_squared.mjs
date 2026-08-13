import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
import { multiply } from "./multiply.mjs";
import { add } from "./add.mjs";
export function g_coordinates_distance_squared(coordinates, coordinates_other) {
  "how far apart two tiles are, as a straight line, left squared.";
  "The squaring is not left off on the way to somewhere better - it is the answer. Everything asked of a distance here is a COMPARISON, near or nearer or within so far, and squaring keeps every one of those orders exactly as they were while costing no root at all. It also takes the sign off both differences on its own, which is the whole of why no separate way of asking for a number without its sign is needed.";
  "It is a straight line and not a walk, so it says nothing about whether anybody could get there. Asked for how near two things are, never for how long the way between them is.";
  let x = property_get(coordinates, "x");
  let y = property_get(coordinates, "y");
  let x_other = property_get(coordinates_other, "x");
  let y_other = property_get(coordinates_other, "y");
  let x_apart = subtract(x, x_other);
  let y_apart = subtract(y, y_other);
  let x_squared = multiply(x_apart, x_apart);
  let y_squared = multiply(y_apart, y_apart);
  let r = add(x_squared, y_squared);
  return r;
}
