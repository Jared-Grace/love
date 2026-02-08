import { openai_responses } from "../../../love/public/src/openai_responses.mjs";
export async function openai_responses_cache(system, user) {
  let r = await openai_responses(system, user);
  return r;
}
