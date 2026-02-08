import { openai_responses } from "../../../love/public/src/openai_responses.mjs";
import { openai_generic } from "../../../love/public/src/openai_generic.mjs";
export async function g_generate_openai_responses(system, user) {
  let fn = openai_responses;
  let data = await openai_generic(fn, system, user);
  return data;
}
