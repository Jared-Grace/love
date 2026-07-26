import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
export async function guard_cases_read() {
  let parsed = await file_read_json("data/guard_cases.json");
  let cases = property_get(parsed, "cases");
  return cases;
}
