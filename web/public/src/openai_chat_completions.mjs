import { openai_generic } from "../../../love/public/src/openai_generic.mjs";
import { openai_chat_completions_file } from "../../../love/public/src/openai_chat_completions_file.mjs";
export async function openai_chat_completions(system, user) {
  let fn = openai_chat_completions_file;
  let data = await openai_generic(fn, system, user);
  return data;
}
