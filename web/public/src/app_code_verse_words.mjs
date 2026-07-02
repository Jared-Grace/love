import { text_split_space } from "../../../love/public/src/text_split_space.mjs";
export function app_code_verse_words() {
  let verse =
    "For God so loved the world that He gave His one and only Son, that everyone who believes in Him shall not perish but have eternal life";
  let split = text_split_space(verse);
  return split;
}
