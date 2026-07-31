import { process_ai_seam_is } from "./process_ai_seam_is.mjs";
import { not } from "./not.mjs";
export function process_human_seam_is() {
  "is this call coming from the human's own terminal rather than from Claude's seam";
  "the seam fences all ask it the same way round - the human's terminal accepts every name, because the call was typed by the person who will see what it does - and four of them worked it out by negating the other seam's answer, so the reason for the negation was written out four times and the answer had no name of its own.";
  let seam = process_ai_seam_is();
  let human = not(seam);
  return human;
}
