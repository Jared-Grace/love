export function numbers_up_to(count) {
  ("the whole numbers from 0 up to but not including count: ",
    numbers_up_to.name,
    "(3) is [0, 1, 2]; used to build fixed-length grids like the 48 half-hour pieces in a day");
  let v = Array(count).keys();
  let indices = Array.from(v);
  return indices;
}
