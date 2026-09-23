import { emoji_information } from "./emoji_information.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_index_label_generic } from "./app_index_label_generic.mjs";
export function app_index_main_fns(about_opened) {
  "The apps the front page offers, each with the sentence shown under it.";
  "What the about card opens is handed in, because it is drawn over the front page and comes back by drawing the front page again, which only the front page knows how to do.";
  "About went from the working cards to every visitor on 2026-09-23, asked for by name, beside the privacy policy. They are two different pages: about says why everything here is free and what happens with a gift, the policy says what is done with anything a person gives.";
  "THIS IS A FRONT PAGE, NOT A REGISTER OF WHAT IS NEEDED, and the difference has already misled one reading. Fifteen apps are named here; thirty-three existed when they were last counted, on 2026-08-25. The ones left out are not leftovers - at that count every one of them was wanted. Some are infrastructure nobody browses to, some are tools for the person building this, and one is a kept address that only forwards. What they have in common is that none of them is what a visitor arriving for the first time should be shown, which is the only question this list answers.";
  "So an app being absent here says nothing at all about whether it may go. Counting references does not help either and looks as though it does: an app named here picks up references BECAUSE it is named here, so few references and not on the front page are one fact wearing two faces, not two findings agreeing. There is no reading in the repo that separates an app somebody still uses from one nobody does - that answer is held by the person who uses them, and asking is cheaper than any measurement of it.";
  "The praying game came off this list on 2026-08-26, and it came off for a reason that says nothing about the game. Its page in the folder that gets sent had no bytes in it, so the card here was offering a first-time visitor a link that opened onto a blank screen, and had been for at least six days. A built copy of the game exists and works; only the sent one is empty. Put the line back the moment a real page is standing at that address.";
  "It went back on 2026-09-23, asked for by name together with a group of games to hold it. On that day its page was built and working but not yet sent, at either live address, so this card only keeps its promise once the game is sent together with this page.";
  "The code is offered as ONE card to this site's own repository, chosen on 2026-09-23 over two others. A page listing every repository was rejected because the account's list mixes in repositories that have nothing to do with this site. A card per repository was rejected because the only other one this site uses holds the game's content, which a visitor reaches through the game. A second card is one line here if that changes.";
  "A card may lead off the site. The songs' three video channels come first in their group, because a visitor looking for the music is most likely looking for something to listen to.";
  "The songs went on the list on 2026-09-04, and the check the praying game failed is the one they were held to first: the page in the folder that gets sent has bytes in it and the live address answers with the same bytes. A card here is a promise to somebody who has never been to the site before, and the only way to keep it is to follow the link before writing it down.";
  "★ A CARD SAYS WHAT AN APP IS FOR AND NEVER HOW MUCH OF IT IS DONE, because how much is done is a number that changes without this file being told. Both language cards below once carried a chapter list. One said John 1 and 1 Peter 4 on a day the store held fifty-six chapters, the other said Song of Solomon, James and John 1 on a day it held four hundred and forty-eight - each written once, right for about a week, and thereafter understating the fullest thing on the site to exactly the visitor who has never seen it. The counts are now fetched from the same store a reader fetches chapters from and joined onto these cards elsewhere, so a chapter going up needs nothing edited here.";
  "The Greek card says Greek and Hebrew because the store says so. Fifty-four of its chapters are Greek and two are Genesis, and the card had claimed Greek alone since before either of those existed. A sentence naming a language while a count beside it counts another one is worse than either half was on its own, so the moment the count became real the language had to become real too.";
  "★ EVERY APP NAMES THE GROUP IT IS FOUND UNDER, and the groups are drawn in the order they are first named here. The group is written on the app rather than in a list of groups beside this one, so an app can never be offered without a group or appear under two: adding a line here is the whole of adding an app, and it lands in a group because it cannot be written without one. The group names are what a visitor is looking FOR - reading, learning, sharing - not what the apps are made of.";
  let reading = "📖 Read the Bible";
  let languages = "🌍 Learn a language through the Bible";
  let sharing = "💌 Share encouragement";
  let games = "🎮 Games";
  let worship = "🙌 Worship";
  let programming = "💻 Learn computer programming";
  let more = "➕ More";
  let emoji = emoji_information();
  let r = [
    {
      app_fn: fn_name("app_bible"),
      text: "Allows reading the Bible",
      category: reading,
    },
    {
      app_fn: fn_name("app_emoji_bible"),
      text: "Shows the Bible drawn in pictures instead of words, so a chapter can be read without knowing the language it is written in",
      category: reading,
    },
    {
      app_fn: fn_name("app_search"),
      text: "Allows search across multiple versions of the Bible in English and copying results in multiple languages",
      category: reading,
    },
    {
      app_fn: fn_name("app_original_bible"),
      text: "Allows learning the original languages of the Bible by reading it in ancient Greek and Hebrew (with word definitions and explanations)",
      category: languages,
    },
    {
      app_fn: fn_name("app_ceb_bible"),
      text: "Allows learning the language Cebuano by reading the Bible in Cebuano (with word definitions and explanations)",
      category: languages,
    },
    {
      app_fn: fn_name("app_en_learn_bible"),
      text: "Allows learning English by reading the Bible, with every word explained in Urdu",
      category: languages,
    },
    {
      app_fn: fn_name("app_verses"),
      text: "Lets you choose languages and how many random encouraging Bible verses you would like, then generates and copies them for you to share",
      category: sharing,
    },
    {
      app_fn: fn_name("app_reply"),
      text: "Allows you to choose languages, multiple encouraging bible verses and responses to copy and paste as messages",
      category: sharing,
    },
    {
      app_fn: fn_name("app_next"),
      text: "Opens a Bible passage and copies it, ready to send to someone as a message",
      category: sharing,
    },
    {
      app_fn: fn_name("app_g"),
      text: "(In progress) Gospel sharing game",
      category: games,
    },
    {
      app_fn: fn_name("app_g_bless"),
      text: "(In progress) Praying game: walk down a street, see who is there, and pray for them",
      category: games,
    },
    {
      url: "https://www.youtube.com/@CHRISTrosetolifesinging",
      label: "📖🎤 Bible singing",
      text: "Bible verses put to music, and songs of praise and worship, on YouTube",
      category: worship,
    },
    {
      url: "https://www.youtube.com/@CHRISTrosetolifemusiclearn",
      label: "🎵🧑‍🏫 Music learn",
      text: "Videos on YouTube teaching how to write Christian songs",
      category: worship,
    },
    {
      url: "https://www.youtube.com/@CHRISTrosetolifemusicai",
      label: "📖🎵🤖 Music: AI",
      text: "Bible verses put to music using AI, on YouTube",
      category: worship,
    },
    {
      app_fn: fn_name("app_music"),
      text: "The words of the songs written for this site, with every line opening onto the Scripture it rests on, and the pictures drawn for it",
      category: worship,
    },
    {
      app_fn: fn_name("app_supper"),
      text: "Bible verses and prayers for Lord's Supper",
      category: worship,
    },
    {
      app_fn: fn_name("app_autopray"),
      text: "Prays through the whole Bible one verse at a time, asking the Lord to lead all creation to hear, believe and obey each verse",
      category: worship,
    },
    {
      app_fn: fn_name("app_code"),
      text: "Teaches the JavaScript programming language one small step at a time, by solving code",
      category: programming,
    },
    {
      app_fn: fn_name("app_replace"),
      text: "Teaches computer programming basics using substitution rules",
      category: programming,
    },
    {
      app_fn: fn_name("app_examples"),
      text: "Shows how the code of this very site is built: real changes made to it, the same code before and after each one",
      category: programming,
    },
    {
      url: "https://github.com/Jared-Grace/love",
      label: "💻 Source code",
      text: "All of this site's code on GitHub, free for anyone to read, copy and use",
      category: programming,
    },
    {
      app_fn: fn_name("app_designs_universal"),
      text: "Displays different possible designs",
      category: more,
    },
    {
      label: app_index_label_generic(emoji, "About"),
      text: "Why everything here is free, and what happens with a gift",
      opened: about_opened,
      category: more,
    },
    {
      app_fn: fn_name("app_privacy_policy"),
      text: "What these apps do with anything you give them",
      category: more,
    },
  ];
  return r;
}
