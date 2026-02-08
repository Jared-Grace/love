import { openai_responses } from "../../../love/public/src/openai_responses.mjs";
import { generate_openai_generic } from "../../../love/public/src/generate_openai_generic.mjs";
export async function g_generate_openai_responses(system, user) {
  let fn = openai_responses;
  let data = await generate_openai_generic(fn, system, user);
  return data;
}
