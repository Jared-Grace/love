import { openai_off_responses_file } from "./openai_off_responses_file.mjs";
import { openai_generic } from "./openai_generic.mjs";
export async function openai_off_responses(system, user) {
  let fn = openai_off_responses_file;
  let data = await openai_generic(fn, system, user);
  return data;
}
