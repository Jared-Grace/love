import { performance_next } from "../../../love/public/src/performance_next.mjs";
export function performance_start() {
  const name = "start";
  const p = performance_next(name);
  return p;
}
