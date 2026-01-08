import { performance_next } from "../../../love/public/src/performance_next.mjs";
export function performance_end(p) {
  performance_next(p, "end");
}
