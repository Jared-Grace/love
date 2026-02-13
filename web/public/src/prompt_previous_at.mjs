import { prompt_previous } from "../../../love/public/src/prompt_previous.mjs";
export async function prompt_previous_at() {
  let r = await prompt_previous();
  return r;
}
