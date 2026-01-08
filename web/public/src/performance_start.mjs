import { performance_next } from "../../../love/public/src/performance_next.mjs";
export function performance_start() {
  const name = "start";
  const start = performance_next(name);
  return start;
}
