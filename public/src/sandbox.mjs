import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { ebible_book_video_generate } from "../../../love/public/src/ebible_book_video_generate.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox() {
  marker("1");
  let list = [
    {
      book_code: "TOB",
      text: "Tobit",
      href: "TOB01.htm",
    },
    {
      book_code: "JDT",
      text: "Judith",
      href: "JDT01.htm",
    },
    {
      book_code: "ESG",
      text: "Esther (Greek)",
      href: "ESG01.htm",
    },
    {
      book_code: "DAG",
      text: "Daniel (Greek)",
      href: "DAG01.htm",
    },
    {
      book_code: "WIS",
      text: "Wisdom",
      href: "WIS01.htm",
    },
    {
      book_code: "SIR",
      text: "Sirach",
      href: "SIR01.htm",
    },
    {
      book_code: "BAR",
      text: "Baruch",
      href: "BAR01.htm",
    },
    {
      book_code: "1MA",
      text: "1 Maccabees",
      href: "1MA01.htm",
    },
    {
      book_code: "2MA",
      text: "2 Maccabees",
      href: "2MA01.htm",
    },
  ];
  const bible_folder = "engwebu";
  async function lambda(item) {
    let book_code = object_property_get(item, "book_code");
    await ebible_book_video_generate(bible_folder, book_code);
  }
  await each_async(list, lambda);
}
