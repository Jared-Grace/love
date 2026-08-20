import { emoji_bread } from "./emoji_bread.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_money_text() {
  "What the way into the money page is called - said as the question a reader actually has, rather than as the word policy";
  let texts = {
    en: " What happens with money here",
    ur: " یہاں پیسے کا کیا ہوتا ہے",
  };
  let label = app_shared_text_reader_language(texts);
  let left = emoji_bread();
  let text = text_combine(left, label);
  return text;
}
