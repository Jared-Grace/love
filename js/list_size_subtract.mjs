import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
import { subtract } from "./subtract.mjs";
export function list_size_subtract(list, count) {
  arguments_assert(arguments, 2);
  ("How many a list holds once this many of them are set aside.");
  ("Where the last few of a list begin, how far along a run of lines can still");
  ("start and have room to finish, how many were left unlooked-at. Each counts the");
  ("whole and then takes off the part already accounted for, and the whole on its");
  ("own is never the answer.");
  ("Taking a number off, not comparing against one - the siblings that ask whether");
  ("a list is shorter than something are their own names.");
  let size = list_size(list);
  let left = subtract(size, count);
  return left;
}
