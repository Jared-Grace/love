import { g_coordinates_axes_generic } from "./g_coordinates_axes_generic.mjs";
import { subtract } from "./subtract.mjs";
export function g_coordinates_apart(coordinates, coordinates_other) {
  "How far one place stands from another along each axis on its own, given back in the same shape a place has.";
  "Measured from the first place to the second, so a difference is negative when the second is further along that axis. Nobody asking this question has wanted the sign yet - one caller squares both numbers and the other takes their size - but the subtraction has to run one way round, and saying which way is cheaper than every caller working it out from the parameter order.";
  "The answer wears x and y rather than being two loose numbers, because a difference between two places is itself a place away from where you started, and handing it back in that shape lets it be read by whatever already reads a place.";
  let r = g_coordinates_axes_generic(coordinates, coordinates_other, subtract);
  return r;
}
