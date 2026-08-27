import { ebible_licence_public_domain } from "./ebible_licence_public_domain.mjs";
export function sword_versions() {
  "Every bible this app carries as a Sword module rather than from eBible or from Door43, each with the release it was read at and the credit its licence asks for.";
  "Written by hand and pinned to a release, for the same reason the Door43 list is: a translation is chosen by reading it, so what was read, judged and licensed is one particular release, and a shelf that has moved on since is a different text nobody here has looked at.";
  "A Sword module carries its own terms inside itself, in the small settings file packed beside the text. The words copied here are the words that file says, so the terms shown are the terms that came with the very copy on disk rather than a page fetched later that could have changed under it.";
  "Each entry names its language twice, in the three-letter code eBible would use and in the plain English name a reader is shown, because a bible from this source has no eBible copyright page for the lists here to join a folder to a language through.";
  "THIS SOURCE EXISTS FOR ONE TRANSLATION THE OTHER TWO SHELVES DO NOT HAVE. Rotherham sets out to show what the Hebrew and Greek emphasise, marking with accents and word order what a plain English sentence has no way of saying, and it is complete, old enough to be nobody's property, and absent from eBible. A line of a song compared against it is compared against a reading that is trying to answer a different question from every other translation here.";
  let rotherham = {
    bible_folder: "engroth",
    sword_folder: "rotherham",
    module: "Rotherham",
    tag: "1.7",
    zip_url:
      "https://crosswire.org/ftpmirror/pub/sword/packages/rawzip/Rotherham.zip",
    books_count: 66,
    name: "The Emphasised Bible",
    description: "The Emphasised Bible by J. B. Rotherham",
    language_code: "eng",
    language_name: "English",
    credit: [
      "The Emphasised Bible by J. B. Rotherham, version 1.7",
      "Originally published by Samuel Bagster and Sons in 1902; electronic text by Larry Nelson, compared against the printed edition at the Internet Archive.",
      "Public domain.",
    ],
    licence: ebible_licence_public_domain(),
    url: "https://crosswire.org/sword/modules/ModInfo.jsp?modName=Rotherham",
  };
  let versions = [rotherham];
  return versions;
}
