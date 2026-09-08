import { fn_name } from "./fn_name.mjs";
export function app_index_main_fns() {
  "The apps the front page offers, each with the sentence shown under it.";
  "THIS IS A FRONT PAGE, NOT A REGISTER OF WHAT IS NEEDED, and the difference has already misled one reading. Fifteen apps are named here; thirty-three existed when they were last counted, on 2026-08-25. The ones left out are not leftovers - at that count every one of them was wanted. Some are infrastructure nobody browses to, some are tools for the person building this, and one is a kept address that only forwards. What they have in common is that none of them is what a visitor arriving for the first time should be shown, which is the only question this list answers.";
  "So an app being absent here says nothing at all about whether it may go. Counting references does not help either and looks as though it does: an app named here picks up references BECAUSE it is named here, so few references and not on the front page are one fact wearing two faces, not two findings agreeing. There is no reading in the repo that separates an app somebody still uses from one nobody does - that answer is held by the person who uses them, and asking is cheaper than any measurement of it.";
  "The praying game came off this list on 2026-08-26, and it came off for a reason that says nothing about the game. Its page in the folder that gets sent had no bytes in it, so the card here was offering a first-time visitor a link that opened onto a blank screen, and had been for at least six days. A built copy of the game exists and works; only the sent one is empty. Put the line back the moment a real page is standing at that address.";
  "The songs went on the list on 2026-09-04, and the check the praying game failed is the one they were held to first: the page in the folder that gets sent has bytes in it and the live address answers with the same bytes. A card here is a promise to somebody who has never been to the site before, and the only way to keep it is to follow the link before writing it down.";
  "★ A CARD SAYS WHAT AN APP IS FOR AND NEVER HOW MUCH OF IT IS DONE, because how much is done is a number that changes without this file being told. Both language cards below once carried a chapter list. One said John 1 and 1 Peter 4 on a day the store held fifty-six chapters, the other said Song of Solomon, James and John 1 on a day it held four hundred and forty-eight - each written once, right for about a week, and thereafter understating the fullest thing on the site to exactly the visitor who has never seen it. The counts are now fetched from the same store a reader fetches chapters from and joined onto these cards elsewhere, so a chapter going up needs nothing edited here.";
  "The Greek card says Greek and Hebrew because the store says so. Fifty-four of its chapters are Greek and two are Genesis, and the card had claimed Greek alone since before either of those existed. A sentence naming a language while a count beside it counts another one is worse than either half was on its own, so the moment the count became real the language had to become real too.";
  let r = [
    {
      app_fn: fn_name("app_bible"),
      text: "Allows reading the Bible",
    },
    {
      app_fn: fn_name("app_emoji_bible"),
      text: "Shows the Bible drawn in pictures instead of words, so a chapter can be read without knowing the language it is written in",
    },
    {
      app_fn: fn_name("app_search"),
      text: "Allows search across multiple versions of the Bible in English and copying results in multiple languages",
    },
    {
      app_fn: fn_name("app_verses"),
      text: "Lets you choose languages and how many random encouraging Bible verses you would like, then generates and copies them for you to share",
    },
    {
      app_fn: fn_name("app_g"),
      text: "Gospel sharing game",
    },
    {
      app_fn: fn_name("app_code"),
      text: "Teaches the JavaScript programming language one small step at a time, by solving code",
    },
    {
      app_fn: fn_name("app_replace"),
      text: "Teaches computer programming basics using substitution rules",
    },
    {
      app_fn: fn_name("app_original_bible"),
      text: "Allows learning the original languages of the Bible by reading it in ancient Greek and Hebrew (with word definitions and explanations)",
    },
    {
      app_fn: fn_name("app_ceb_bible"),
      text: "Allows learning the language Cebuano by reading the Bible in Cebuano (with word definitions and explanations)",
    },
    {
      app_fn: fn_name("app_supper"),
      text: "Bible verses and prayers for Lord's Supper",
    },
    {
      app_fn: fn_name("app_music"),
      text: "The words of the songs written for this site, with every line opening onto the Scripture it rests on, and the pictures drawn for it",
    },
    {
      app_fn: fn_name("app_examples"),
      text: "Shows real code edits - the same code before and after each automatic change - the tools for building software by hand",
    },
    {
      app_fn: fn_name("app_designs_universal"),
      text: "Displays different possible designs",
    },
    {
      app_fn: fn_name("app_g_bible"),
      text: "App for me",
    },
    {
      app_fn: fn_name("app_reply"),
      text: "Allows you to choose languages, multiple encouraging bible verses and responses to copy and paste as messages",
    },
  ];
  return r;
}
