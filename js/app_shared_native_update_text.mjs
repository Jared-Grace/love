import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
import { emoji_sync } from "./emoji_sync.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_native_update_text() {
  "What the way to update the app is called. It wears the two turning arrows phones use for bringing something up to date, not the down arrow: that one already means keeping a bible on the device, two entries up (human 2026-11-23: update app should have a good emoji).";
  let texts = {
    eng: " Update app",
    urd: " ایپ اپ ڈیٹ کریں",
    tgl: " I-update ang app",
    spa: " Actualizar la aplicación",
    por: " Atualizar o aplicativo",
    translated_from: {
      urd: " Update app",
      tgl: " Update app",
      spa: " Update app",
      por: " Update app",
    },
  };
  let label = app_shared_text_reader_language(texts);
  let left = emoji_sync();
  let text = text_combine(left, label);
  return text;
}
