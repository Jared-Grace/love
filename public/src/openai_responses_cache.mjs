import { json_to } from "../../../love/public/src/json_to.mjs";
import { invoke_cache_text_to_uuid } from "../../../love/public/src/invoke_cache_text_to_uuid.mjs";
import { openai_responses } from "../../../love/public/src/openai_responses.mjs";
export async function openai_responses_cache(system, user) {
  let object = {
    system,
    user,
  };
  let json = json_to(object);
  await invoke_cache_text_to_uuid(text);
  let r = await openai_responses(system, user);
  return r;
}
