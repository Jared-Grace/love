import { openai_responses_file } from "./openai_responses_file.mjs";
import { openai_generic } from "./openai_generic.mjs";
export async function openai_responses(system, user) {
  let fn = openai_responses_file;
  let data = await openai_generic(fn, system, user);
  return data;
}
