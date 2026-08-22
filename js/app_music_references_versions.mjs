import { arguments_assert } from "./arguments_assert.mjs";
export function app_music_references_versions() {
  "The passages that are quoted from some translation other than the page's usual one, each against the bible it is read out of and the name that bible is shown under.";
  "A SONG IS NOT WRITTEN AGAINST ONE TRANSLATION, IT IS WRITTEN AGAINST A WORDING. Malachi three seventeen is the case that made this exist: the line sung is make up my jewels, which is the King James, and every other English bible on the list says treasured possession or own possession or peculiar treasure there. All of them are the same verse. Only one of them is the line.";
  "ONLY THE PASSAGES THAT DIFFER ARE WRITTEN HERE. Naming a translation for all hundred passages would mean maintaining all hundred, and ninety nine of the entries would say the same word. A passage absent from this list is not undecided - it is decided the ordinary way, next door.";
  "THE NAME IS WRITTEN BESIDE THE FOLDER RATHER THAN LOOKED UP. Showing a reader which translation they are reading has to cost the page nothing, and looking a name up means fetching the thing it is written on. It is kept honest by a gate instead of by care - a name that disagrees with what the translation calls itself fails the build rather than reaching a reader.";
  arguments_assert(arguments, 0);
  let versions = [
    {
      reference: "Malachi 3:17",
      bible_folder: "eng-kjv2006",
      name: "King James (Authorized) Version",
    },
  ];
  return versions;
}
