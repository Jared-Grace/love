import { openai_responses_cache_args } from "../../../love/public/src/openai_responses_cache_args.mjs";
import { invoke_cache_file } from "../../../love/public/src/invoke_cache_file.mjs";
import { openai_responses } from "../../../love/public/src/openai_responses.mjs";
export async function openai_responses_cache(system, user) {
  let args = openai_responses_cache_args(system, user);
  let r = await invoke_cache_file(openai_responses, args);
  return r;
}
