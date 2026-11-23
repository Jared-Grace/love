import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
import { emoji_bread } from "./emoji_bread.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_money_text() {
  "What the way into the money page is called - said as the question a reader actually has, rather than as the word policy";
  let texts = {
    eng: " What happens with money here",
    urd: " یہاں پیسے کا کیا ہوتا ہے",
    tgl: " Ano ang nangyayari sa pera rito",
    translated_from: {
      urd: " What happens with money here",
      tgl: " What happens with money here",
    },
  };
  let label = app_shared_text_reader_language(texts);
  let left = emoji_bread();
  let text = text_combine(left, label);
  return text;
}
