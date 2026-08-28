export function bible_usfm_versions() {
  "Every bible this repo holds as usfm files on the disk, under the short word each is asked for by, beside the name it is called in print and the terms it is given under.";
  "THE SHORT WORD IS NOT THE FOLDER, AND THAT IS DELIBERATE. A folder is named by whoever published the download and changes when they repackage it; bsb and ult and ust are what a person actually says. Keeping the two apart means a republished download is one line changed here rather than every caller renamed.";
  "THE TERMS ARE CARRIED BESIDE THE NAME BECAUSE THEY DECIDE WHAT MAY BE SHOWN, NOT MERELY WHAT MAY BE READ. Words put on a video and published are a copy handed to strangers, which is exactly the act a licence speaks about, and the shelves here do not say the same thing: the Berean and the World English Bible were both placed in the public domain and ask for nothing, while the unfoldingWord texts are given under a share-alike licence that asks to be named wherever their words go. A reader that had only the name would have to guess, and the guess that costs nothing to make is the wrong one.";
  "Only the shelves already unpacked on this disk are listed. A bible that has not been fetched is not a choice, and offering it would fail at the moment somebody tried to use it rather than at the moment they chose it.";
  let versions = {
    bsb: {
      name: "Berean Standard Bible",
      shelf: "berean",
      folder: "bsb_usfm",
      licence: "",
    },
    webu: {
      name: "World English Bible, updated",
      shelf: "ebible",
      folder: "engwebu",
      licence: "",
    },
    ult: {
      name: "unfoldingWord Literal Text",
      shelf: "door43",
      folder: "en_ult",
      licence: "CC BY-SA 4.0",
    },
    ust: {
      name: "unfoldingWord Simplified Text",
      shelf: "door43",
      folder: "en_ust",
      licence: "CC BY-SA 4.0",
    },
    asv: {
      name: "American Standard Version (1901)",
      shelf: "ebible",
      folder: "eng-asv",
      licence: "",
    },
    asvbt: {
      name: "American Standard Version Byzantine Text",
      shelf: "ebible",
      folder: "engasvbt",
      licence: "",
    },
    bbe: {
      name: "Bible in Basic English",
      shelf: "ebible",
      folder: "engBBE",
      licence: "",
    },
    dby: {
      name: "Darby Translation",
      shelf: "ebible",
      folder: "engDBY",
      licence: "",
    },
    dra: {
      name: "Douay-Rheims 1899",
      shelf: "ebible",
      folder: "engDRA",
      licence: "",
    },
    gnv: {
      name: "Geneva Bible 1599",
      shelf: "ebible",
      folder: "enggnv",
      licence: "",
    },
    kjv: {
      name: "King James Version + Apocrypha",
      shelf: "ebible",
      folder: "eng-kjv",
      licence: "",
    },
    kjv2006: {
      name: "King James (Authorized) Version",
      shelf: "ebible",
      folder: "eng-kjv2006",
      licence: "",
    },
    kjvcpb: {
      name: "KJV Cambridge Paragraph Bible",
      shelf: "ebible",
      folder: "engkjvcpb",
      licence: "",
    },
    msb: {
      name: "Majority Standard Bible",
      shelf: "ebible",
      folder: "engmsb",
      licence: "",
    },
    rv: {
      name: "Revised Version with Apocrypha (1895)",
      shelf: "ebible",
      folder: "eng-rv",
      licence: "",
    },
    webster: {
      name: "Noah Webster Bible",
      shelf: "ebible",
      folder: "engwebster",
      licence: "",
    },
    wmb: {
      name: "The World Messianic Bible",
      shelf: "ebible",
      folder: "engwmb",
      licence: "",
    },
    wmbb: {
      name: "The World Messianic Bible British Edition",
      shelf: "ebible",
      folder: "engwmbb",
      licence: "",
    },
    ylt: {
      name: "Young's Literal Translation",
      shelf: "ebible",
      folder: "engylt",
      licence: "",
    },
  };
  return versions;
}
