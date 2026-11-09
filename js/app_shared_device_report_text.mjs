import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
import { emoji_mobile } from "./emoji_mobile.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_device_report_text() {
  "What the way to send a device report is called - said as exactly what the tap does and nothing more.";
  "Named once as the trouble a reader would tap it for, and changed on 2026-11-09 because that wording was a bug report, and a bug report promises somebody reads it - nothing here tells anyone a report arrived. 'User data' was turned down too: it reads as the reader's own notes and history, while what goes up is the screen, the browser and the names and sizes of what is saved, never the saved values.";
  let texts = {
    en: " Upload device info",
    ur: " ڈیوائس کی معلومات اپ لوڈ کریں",
    tgl: " I-upload ang impormasyon ng device",
    translated_from: {
      ur: " Upload device info",
      tgl: " Upload device info",
    },
  };
  let label = app_shared_text_reader_language(texts);
  let left = emoji_mobile();
  let text = text_combine(left, label);
  return text;
}
