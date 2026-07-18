import { js_format } from "./js_format.mjs";
export async function js_format_trim(code) {
  let formatted = await js_format(code);
  let trimmed = formatted.trim();
  return trimmed;
}
