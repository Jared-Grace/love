import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
export function selectors_probe_tmp(items) {
  "A throwaway for proving the new selectors reach what nothing reached before.";
  let size = list_size(items);
  let over = greater_than(size, 40);
  return over;
}
