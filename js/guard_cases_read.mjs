import { file_read } from "./file_read.mjs";
import { json_from } from "./json_from.mjs";
import { property_get } from "./property_get.mjs";
export async function guard_cases_read() {
  let contents = await file_read("data/guard_cases.json");
  let parsed = json_from(contents);
  let cases = property_get(parsed, "cases");
  return cases;
}
