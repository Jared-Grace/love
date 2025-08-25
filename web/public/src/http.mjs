import { error } from "./error.mjs";
import { not } from "./not.mjs";
export async function http(url) {
  const response = await fetch(url);
  if (not(response.ok)) {
    error("Failed to fetch file");
  }
  const text = await response.text();
  return text;
}
