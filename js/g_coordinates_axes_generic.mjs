import { property_get } from "./property_get.mjs";
export function g_coordinates_axes_generic(
  coordinates,
  coordinates_other,
  lambda_axis,
) {
  "Two places worked against each other one axis at a time, answering with a place - the caller says what to do with a pair of numbers.";
  "The x of each goes together and the y of each goes together, and never across. That is the whole of what this holds, and it is worth holding once: two callers had written it out and they differed by the single word in the middle, one taking the axes apart and the other adding them together.";
  "The answer wears x and y because everything on this grid does, so whatever comes back can be read by whatever already reads a place.";
  let x = property_get(coordinates, "x");
  let y = property_get(coordinates, "y");
  let x_other = property_get(coordinates_other, "x");
  let y_other = property_get(coordinates_other, "y");
  let x_worked = lambda_axis(x, x_other);
  let y_worked = lambda_axis(y, y_other);
  let r = {
    x: x_worked,
    y: y_worked,
  };
  return r;
}
