import { property_get } from "../../../love/public/src/property_get.mjs";
import { json_from } from "../../../love/public/src/json_from.mjs";
import { openai_responses_cache } from "../../../love/public/src/openai_responses_cache.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
export async function list_translate_openai(list, language) {
  let json = json_to({
    value: list,
  });
  let r3 = await openai_responses_cache(
    "Translate the text inside the JSON object to " +
      language +
      ". Do not change any object keys.",
    json,
  );
  let v = json_from(r3);
  let value2 = property_get(v, "value");
  return value2;
}
