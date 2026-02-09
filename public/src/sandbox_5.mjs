import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { openai_responses_cache } from "../../../love/public/src/openai_responses_cache.mjs";
import { ebible_chapter_text } from "./ebible_chapter_text.mjs";
export async function sandbox_5() {
  let t = await ebible_chapter_text("engbsb", "GEN01");
  let text = object_property_get(t, "text");
  let r = await openai_responses_cache("", text);
  return r;
}
