export function path_outward_cases() {
  "Which words reach out of a folder and which stay inside it, written down, so the reading that decides can be shown to disagree.";
  "A LEAK DETECTOR THAT ANSWERS NO TO EVERYTHING PASSES EVERY HISTORY. The thing it watches for is absent from this repo's whole reading window, so a run over the real history cannot tell a working check from one that has stopped answering - and the check is the kind whose failure is silence. Both sides are therefore pinned here, and it is the inside cases that carry the weight: without them a reading that said yes to everything would look just as green.";
  "The words are invented. A real path, or a real function name inside one, would be rewritten by the canonicalizer into a reference and the case would quietly stop saying what it was written to say.";
  "No name of a person is written here either, which is the whole subject of the rule this serves: the drive case says somebody rather than naming them.";
  let cases = [
    {
      word: "/home/someone/a/repos/love/js/some_name.mjs",
      outward: true,
      why: "this machine's own root, the shape the rule was written for",
    },
    {
      word: "~/a/repos/love",
      outward: true,
      why: "a home written short, which says the layout without saying the account",
    },
    {
      word: "~someone/repos/love",
      outward: true,
      why: "a home written with the account in it - the spelling a tilde and a slash together would have missed, and the one that names a person",
    },
    {
      word: "C:/Users/someone/repos/love/.git/index.lock",
      outward: true,
      why: "a windows drive, which two messages in this repo's history really carry and the earlier reading called clean",
    },
    {
      word: "C:\\Users\\someone\\repos\\love",
      outward: true,
      why: "the same drive written the way that machine writes it, separators and all",
    },
    {
      word: "\\\\server\\share\\love",
      outward: true,
      why: "a path starting at a machine on the network, which names a host rather than a folder",
    },
    {
      word: "d:/love",
      outward: true,
      why: "a drive in lower case, because the letter is a letter either way round",
    },
    {
      word: "/",
      outward: true,
      why: "the shortest root there is, kept so the reading is not quietly asking for something after it",
    },
    {
      word: "js/some_name.mjs",
      outward: false,
      why: "how every file in this repo is really spelled, so a rule that failed this would fail on honest work and be switched off within the day",
    },
    {
      word: "data/given/some_folder/some_file.json",
      outward: false,
      why: "a deeper one, because the test is about where a word starts and never about how far it goes",
    },
    {
      word: "https://example.com/a",
      outward: false,
      why: "an address whose colon sits fourth, which passes because it was never a root and not because anything exempted it",
    },
    {
      word: "some_name_rename",
      outward: false,
      why: "a bare argument to a real command, which is most of what the log is made of",
    },
    {
      word: "18:07",
      outward: false,
      why: "a time: a colon on its own is not a drive, and the separator after it is what says so",
    },
    {
      word: "a:b",
      outward: false,
      why: "a colon in the drive's place with nothing a path could follow it with",
    },
    {
      word: "..",
      outward: false,
      why: "the gap this reading knowingly leaves: two dots do climb out, but they name no account and none appear in the window the rule reads",
    },
  ];
  return cases;
}
