import { multiply } from "./multiply.mjs";
export function date_hours_to_mins(hours) {
  let v = multiply(hours, 60);
  return v;
}
