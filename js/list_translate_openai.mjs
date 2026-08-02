import { json_from_property_get } from "./json_from_property_get.mjs";
import { openai_responses_cache } from "./openai_responses_cache.mjs";
import { json_to } from "./json_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function list_translate_openai(list, language) {
  let json = json_to({
    value: list,
  });
  let r = await openai_responses_cache(
    text_combine_multiple([
      "Translate the text inside the JSON object to ",
      language,
      ". Do not change any object keys.",
    ]),
    json,
  );
  let translated = json_from_property_get(r, "value");
  return translated;
}
