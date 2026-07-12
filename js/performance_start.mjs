import { performance_next } from "./performance_next.mjs";
export function performance_start(category) {
  let p = [];
  performance_next(p, category);
  return p;
}
