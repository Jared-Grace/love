import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { property_get } from "./property_get.mjs";
export function pool_ready() {
  let stale =
    equal(pool, null) ||
    not_equal(property_get(pool, "generation"), generation);
  if (stale) {
    pool_retire();
    let pool = pool_start();
  }
  return pool;
}
