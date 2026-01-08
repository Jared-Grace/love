import { performance_next } from "../../../love/public/src/performance_next.mjs";
export function performance_start() {
  const name = "start";
  const measurements = performance_next(name);
  return measurements;
}
