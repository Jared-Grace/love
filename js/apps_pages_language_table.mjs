import { fn_name } from "./fn_name.mjs";
export function apps_pages_language_table() {
  ("Each app's language pages as plain data: the language code, the page title and the page description. Generated - do not edit; run ",
    fn_name("app_learn_eng_pages_language_table_write"),
    ".");
  let r = {
    learn_eng: [
      {
        code: "urd",
        title: "انگریزی سیکھیں",
        description:
          "بائبل کی ایک آیت پہلے اردو میں اور پھر انگریزی میں پڑھیں، انگریزی کے ہر لفظ کی وضاحت اردو میں۔",
      },
      {
        code: "tgl",
        title: "Matuto ng Ingles",
        description:
          "Basahin ang isang talata ng Bibliya sa Tagalog at pagkatapos sa Ingles na ipinaliliwanag sa Tagalog ang bawat salitang Ingles.",
      },
      {
        code: "spa",
        title: "Aprende inglés",
        description:
          "Lee un versículo de la Biblia en español y luego en inglés con cada palabra en inglés explicada en español.",
      },
    ],
  };
  return r;
}
