import { arguments_assert } from "./arguments_assert.mjs";
import { list_includes } from "./list_includes.mjs";
export function g_direction_across(direction) {
  arguments_assert(arguments, 1);
  ("Given the way somebody is crossing, the way the traffic runs: cross south or north and");
  ("the lane runs west and east.");
  ("A road is crossed at right angles to itself, so the direction of the crossing already");
  ("says which way to look - and looking was the one thing that had been told outright");
  ("instead of worked out. The walker looked WEST first because every road in the game so");
  ("far runs that way, which is true of the streets that exist and not of the idea of a");
  ("street, and it would have gone wrong silently the day somebody laid a road the other");
  ("way: a walker checking the lane she is walking ALONG rather than the one she is walking");
  ("INTO, doing it carefully, and being right by accident until then.");
  ("Only one of the two is given back. The other is its opposite and the caller already asks");
  ("for that, because a crossing is two looks and the second is the turnabout of the first.");
  let upright = ["north", "south"];
  let crossing_upright = list_includes(upright, direction);
  let across = "north";
  if (crossing_upright) {
    across = "west";
  }
  return across;
}
