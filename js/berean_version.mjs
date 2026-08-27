import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_folder_berean } from "./ebible_folder_berean.mjs";
import { ebible_licence_public_domain } from "./ebible_licence_public_domain.mjs";
export function berean_version() {
  arguments_assert(arguments, 0);
  ("The Berean Standard Bible as this repo holds it - what it calls itself, which printing was read, the terms it is offered on, and where it came from.");
  ("Written by hand, in the same shape the other hand-written catalogue here uses, so that whatever credits a translation or reads its terms never has to ask which of the three places a text came from. A source is a way of getting a text and not a different kind of duty owed for it.");
  ("The printing is written down because the address cannot carry it. The publisher replaces the file in place at one unchanging link, so nothing in the link says which text came back, and the only honest record of what is on this disk is a note of what was fetched and when.");
  ("There is no copyright page to read this off, the way a bible from the archive has. That is not a gap peculiar to this one - the other catalogue here has none either, and both are answered the same way, from a record kept beside the text.");
  ("The language is named twice, in the three-letter code the archive would use and in the plain English name a reader is shown, because every list here that asks which languages are covered joins a folder to a language through an archive copyright page. Without these two words this bible would drop out of those joins and English would be reported as a language nobody had covered.");
  ("The credit is what the publisher asks be shown, not what the licence compels. It compels nothing at all: this text was placed into the public domain outright, and the publisher's own terms say licensing is not required for any use. Showing the credit anyway is courtesy owed to a gift, and costs a reader nothing.");
  let bible_folder = ebible_folder_berean();
  let licence = ebible_licence_public_domain();
  let version = {
    bible_folder,
    printing: "3rd printing",
    fetched: "2026-07-31",
    books_count: 66,
    name: "Berean Standard Bible",
    description: "English Berean Standard Bible",
    language_code: "eng",
    language_name: "English",
    credit: [
      "The Holy Bible, Berean Standard Bible, BSB",
      "Produced by Bible Hub and Berean.Bible",
      "Placed into the public domain on April 30, 2023.",
    ],
    licence,
    url: "https://berean.bible/",
  };
  return version;
}
