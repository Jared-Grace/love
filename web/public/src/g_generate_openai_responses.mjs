import { openai_responses_file } from "../../../love/public/src/openai_responses_file.mjs";
import { openai_generic } from "../../../love/public/src/openai_generic.mjs";
export async function g_generate_openai_responses(system, user) {
  let fn = openai_responses_file;
  let data = await openai_generic(fn, system, user);
  return data;
}
