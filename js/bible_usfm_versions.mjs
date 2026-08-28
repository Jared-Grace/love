export function bible_usfm_versions() {
  "Every bible this repo holds as usfm files on the disk, under the short word each is asked for by, beside the name it is called in print and the terms it is given under.";
  "THE SHORT WORD IS NOT THE FOLDER, AND THAT IS DELIBERATE. A folder is named by whoever published the download and changes when they repackage it; bsb and ult and ust are what a person actually says. Keeping the two apart means a republished download is one line changed here rather than every caller renamed.";
  "THE TERMS ARE CARRIED BESIDE THE NAME BECAUSE THEY DECIDE WHAT MAY BE SHOWN, NOT MERELY WHAT MAY BE READ. Words put on a video and published are a copy handed to strangers, which is exactly the act a licence speaks about, and the two shelves here do not say the same thing: the Berean was placed in the public domain and asks for nothing, while the unfoldingWord texts are given under a share-alike licence that asks to be named wherever their words go. A reader that had only the name would have to guess, and the guess that costs nothing to make is the wrong one.";
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
  };
  return versions;
}
