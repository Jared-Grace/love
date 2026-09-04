import { openai_generic } from "./openai_generic.mjs";
import { openai_off_chat_completions_file } from "./openai_off_chat_completions_file.mjs";
export async function openai_off_chat_completions(system, user) {
  let fn = openai_off_chat_completions_file;
  let data = await openai_generic(fn, system, user);
  return data;
}
