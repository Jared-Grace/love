import { openai_responses_cache } from "../../../love/public/src/openai_responses_cache.mjs";
import { ebible_chapter_text } from "./ebible_chapter_text.mjs";
export async function sandbox_5() {
  let t = await ebible_chapter_text("engbsb", "GEN01");
  let r = await openai_responses_cache(system, user);
}
