import { property_get } from "./property_get.mjs";
export function g_coordinates_orthogonal(coordinates) {
  let x = property_get(coordinates, "x");
  let y = property_get(coordinates, "y");
  let neighbors = [
    { x: x + 1, y },
    { x: x - 1, y },
    { x, y: y + 1 },
    { x, y: y - 1 },
  ];
  return neighbors;
}
