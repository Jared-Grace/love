import { openai_responses } from "../../../love/public/src/openai_responses.mjs";
export async function openai_responses_cache(system, user) {
  return await openai_responses(system, user);
}
