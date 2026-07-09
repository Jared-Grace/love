import { property_get } from "../../../love/public/src/property_get.mjs";
import { json_from } from "../../../love/public/src/json_from.mjs";
import { openai_responses_cache } from "../../../love/public/src/openai_responses_cache.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export async function list_translate_openai(list, language) {
  let json = json_to({
    value: list,
  });
  let r3 = await openai_responses_cache(
    text_combine_multiple([
      "Translate the text inside the JSON object to ",
      language,
      ". Do not change any object keys.",
    ]),
    json,
  );
  let v = json_from(r3);
  let translated = property_get(v, "value");
  return translated;
}
