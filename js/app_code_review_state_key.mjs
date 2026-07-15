import { text_combine } from "./text_combine.mjs";
import { text_to } from "./text_to.mjs";
export function app_code_review_state_key(number) {
  "the local-storage key holding an in-progress review's seed queue and passed count — one slot per review checkpoint number, so each review resumes independently";
  let suffix = text_to(number);
  let key = text_combine("review_state_", suffix);
  return key;
}
