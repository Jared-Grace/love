import { invoke_cache_file } from "../../../love/public/src/invoke_cache_file.mjs";
import { openai_responses } from "../../../love/public/src/openai_responses.mjs";
export async function openai_responses_cache(system, user) {
  return await invoke_cache_file(openai_responses, [system, user]);
}
