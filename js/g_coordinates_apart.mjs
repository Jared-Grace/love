import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
export function g_coordinates_apart(coordinates, coordinates_other) {
  "How far one place stands from another along each axis on its own, given back in the same shape a place has.";
  "Measured from the first place to the second, so a difference is negative when the second is further along that axis. Nobody asking this question has wanted the sign yet - one caller squares both numbers and the other takes their size - but the subtraction has to run one way round, and saying which way is cheaper than every caller working it out from the parameter order.";
  "The answer wears x and y rather than being two loose numbers, because a difference between two places is itself a place away from where you started, and handing it back in that shape lets it be read by whatever already reads a place.";
  let x = property_get(coordinates, "x");
  let y = property_get(coordinates, "y");
  let x_other = property_get(coordinates_other, "x");
  let y_other = property_get(coordinates_other, "y");
  let x_apart = subtract(x, x_other);
  let y_apart = subtract(y, y_other);
  let r = {
    x: x_apart,
    y: y_apart,
  };
  return r;
}
