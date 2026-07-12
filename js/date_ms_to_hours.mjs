import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
export function date_ms_to_hours(ms) {
  let v = divide(ms, multiply(multiply(1000, 60), 60));
  return v;
}
