import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
import { emoji_mobile } from "./emoji_mobile.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_device_report_text() {
  "What the way to send a device report is called - said as the trouble a reader would tap it for, because nobody looks for a button by what it measures.";
  let texts = {
    en: " Something looks wrong on my screen",
    ur: " میری اسکرین پر کچھ غلط دکھائی دے رہا ہے",
    tgl: " May mukhang mali sa screen ko",
    translated_from: {
      ur: " Something looks wrong on my screen",
      tgl: " Something looks wrong on my screen",
    },
  };
  let label = app_shared_text_reader_language(texts);
  let left = emoji_mobile();
  let text = text_combine(left, label);
  return text;
}
