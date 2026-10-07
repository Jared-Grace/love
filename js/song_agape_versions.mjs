import { arguments_assert } from "./arguments_assert.mjs";
export function song_agape_versions() {
  "Which bible this song is read out of: the one its quiet passages take, and the passages whose own lines earned something else, each against the bible it is read out of and the name that bible is shown under.";
  "THE USUAL BIBLE IS THE BEREAN STANDARD, for the same reasons the other songs on the page use it: it renders the words of the original, it is free to hand to anybody, and a reader can understand it without help.";
  "ONLY A PASSAGE WHERE ANOTHER TRANSLATION SAYS THE LINE'S OWN WORD IS WRITTEN BELOW. The line sings scoffers reviled Him, and at both passages it rests on for that the Berean says heaped abuse while the King James says reviled. The next line sings scourges, and at John nineteen one the Berean says flogged while the King James says scourged.";
  arguments_assert(arguments, 0);
  let usual = {
    bible_folder: "engbsb",
    name: "Berean Standard Bible",
  };
  let exceptions = [
    {
      reference: "Matthew 27:39-40",
      bible_folder: "eng-kjv2006",
      name: "King James (Authorized) Version",
    },
    {
      reference: "1 Peter 2:23",
      bible_folder: "eng-kjv2006",
      name: "King James (Authorized) Version",
    },
    {
      reference: "John 19:1",
      bible_folder: "eng-kjv2006",
      name: "King James (Authorized) Version",
    },
  ];
  let versions = {
    usual: usual,
    exceptions: exceptions,
  };
  return versions;
}
