import { invoke_cache_file } from "./invoke_cache_file.mjs";
import { openai_responses_cache_args } from "./openai_responses_cache_args.mjs";
import { openai_responses } from "./openai_responses.mjs";
export async function openai_responses_cache(system, user) {
  let args = openai_responses_cache_args(system, user);
  let fn = openai_responses;
  let r = await invoke_cache_file(fn, args);
  return r;
}
