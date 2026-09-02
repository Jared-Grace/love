import { arguments_assert } from "./arguments_assert.mjs";
export function qa_promoted_public_pieces_served_is_cases() {
  arguments_assert(arguments, 0);
  ("Folders made up for the asking, each one written beside what is being served at the time, and whether the pieces waiting in it can be sent without putting anything new on the internet.");
  ("THE FIRST CASE IS THE WHOLE REASON ANY OF THIS EXISTS. An app put back to what it is being served keeps its page and the scripts that page sends for, and loses the leftover scripts of an older build that nothing sends for. What is left is fewer pieces than are public and every one of them identical to a public one, and the older reading refused exactly that shape - so five apps sat unable to give any account of themselves while the account was sitting there in the folder.");
  ("The short words standing in for what a file came out as are made up and short on purpose. What they are is never looked at, only whether two of them are the same word, so a real one would be forty letters of noise saying nothing a reader of these cases needs.");
  ("ONE CASE HAS TWO WORDS THAT BEGIN ALIKE AND END DIFFERENTLY. Every other case here can be answered by a version comparing only the first few letters, because made-up words tend to differ from the first letter onward, and a version that compares them cheaply would then be refused by nothing at all. Files whose short words agree for a while and then part is what actually happens, so one case is written that way.");
  ("The page's own bytes changing and a script's bytes changing are two cases rather than one. They are the same question asked of two files, and they are kept apart because a version can single the page out - reading it as the thing that says which build this is, and so either the only piece worth comparing or the one piece to be forgiven - and either way it answers one of these two rightly and the other wrongly.");
  let cases = [
    {
      app: "music",
      disk: {
        "music.html": "page_one",
        "music.js": "script_one",
      },
      live: {
        "music.html": "page_one",
        "music.js": "script_one",
        "158.music.js": "left_over_one",
        "605.music.js": "left_over_two",
      },
      served_is: true,
      why: "the app put back to what it is being served, with the leftover scripts nothing sends for taken away. Every piece standing there is a piece that is already public, and there are fewer of them - which is the shape the older reading had no way to accept",
    },
    {
      app: "music",
      disk: {
        "music.html": "page_one",
        "music.js": "script_one",
      },
      live: {
        "music.html": "page_one",
        "music.js": "script_one",
      },
      served_is: true,
      why: "the same pieces, all of them, unchanged. Sending this changes nothing at all, so a reading that only accepted a folder holding fewer pieces than are public would be refusing the plainest case there is",
    },
    {
      app: "music",
      disk: {
        "music.html": "page_two",
        "music.js": "script_one",
      },
      live: {
        "music.html": "page_one",
        "music.js": "script_one",
      },
      served_is: false,
      why: "the page itself has been rebuilt. The names are all still names of public files, so anything comparing names alone lets this out onto the internet - and a new page is the one piece every visitor is handed",
    },
    {
      app: "music",
      disk: {
        "music.html": "page_one",
        "music.js": "script_two",
      },
      live: {
        "music.html": "page_one",
        "music.js": "script_one",
      },
      served_is: false,
      why: "the script has been rebuilt while the page still comes out the same, which is what happens when only the code changed. A version treating the page as the thing that says which build this is would ask about the page, find it unchanged, and send a script nobody has seen",
    },
    {
      app: "music",
      disk: {
        "music.html": "page_one",
        "music.js": "script_one",
        "742.music.js": "piece_nobody_serves",
      },
      live: {
        "music.html": "page_one",
        "music.js": "script_one",
      },
      served_is: false,
      why: "a piece standing there that is not being served under any name. That is the ordinary shape of a fresh build waiting to go out, and it is exactly what has to be argued about rather than waved through",
    },
    {
      app: "music",
      disk: {},
      live: {
        "music.html": "page_one",
        "music.js": "script_one",
      },
      served_is: false,
      why: "nothing waiting at all. Every piece here is public is true of no pieces, so a reading said that way lets it through - and what the sending would do is take the whole app off the internet",
    },
    {
      app: "music",
      disk: {
        "music.js": "script_one",
      },
      live: {
        "music.html": "page_one",
        "music.js": "script_one",
      },
      served_is: false,
      why: "the script standing there and the page gone. Every piece present is public and identical, so this is the case that says the reading cannot be about the pieces present alone - the sending takes off what is missing, and what is missing is the page every link anybody was given points at",
    },
    {
      app: "music",
      disk: {
        "music.html": "page_one",
      },
      live: {},
      served_is: false,
      why: "nothing being served under this name. There is nothing public for these pieces to be a copy of, so the account cannot be given - and a reading that walks what is served rather than what is waiting finds nothing to disagree with and says yes",
    },
    {
      app: "music",
      disk: {
        "music.html": "abc_page_one",
        "music.js": "abc_script_two",
      },
      live: {
        "music.html": "abc_page_one",
        "music.js": "abc_script_one",
      },
      served_is: false,
      why: "two short words that begin alike and part at the end. Nothing else here would catch a version comparing only the beginning of them, and files whose short words agree for a while is the ordinary case rather than an odd one",
    },
  ];
  return cases;
}
