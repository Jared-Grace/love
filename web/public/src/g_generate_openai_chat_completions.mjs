import { openai_generic } from "../../../love/public/src/openai_generic.mjs";
import { openai_chat_completions } from "../../../love/public/src/openai_chat_completions.mjs";
export async function g_generate_openai_chat_completions(system, user) {
  let fn = openai_chat_completions;
  let data = await openai_generic(fn, system, user);
  return data;
}
