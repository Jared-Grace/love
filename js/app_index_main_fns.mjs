import { fn_name } from "./fn_name.mjs";
export function app_index_main_fns() {
  "The apps the front page offers, each with the sentence shown under it.";
  "THIS IS A FRONT PAGE, NOT A REGISTER OF WHAT IS NEEDED, and the difference has already misled one reading. Fourteen apps are named here; thirty-three exist. The nineteen left out are not leftovers - checked 2026-08-25, every one of them is wanted. Some are infrastructure nobody browses to, some are tools for the person building this, and one is a kept address that only forwards. What they have in common is that none of them is what a visitor arriving for the first time should be shown, which is the only question this list answers.";
  "So an app being absent here says nothing at all about whether it may go. Counting references does not help either and looks as though it does: an app named here picks up references BECAUSE it is named here, so few references and not on the front page are one fact wearing two faces, not two findings agreeing. There is no reading in the repo that separates an app somebody still uses from one nobody does - that answer is held by the person who uses them, and asking is cheaper than any measurement of it.";
  let r = [
    {
      app_fn: fn_name("app_bible"),
      text: "Allows reading the Bible",
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
      app_fn: fn_name("app_g_bless"),
      text: "Praying game - walk a street and pray for the people you can see",
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
      text: "Allows learning the ancient Greek of the Bible by reading the Bible in ancient Greek (with word defintions and explanations) - Only John 1 and 1 Peter 4 at this time",
    },
    {
      app_fn: fn_name("app_ceb_bible"),
      text: "Allows learning the language Cebuano by reading the Bible in Cebuano (with word defintions and explanations) - Only Song of Solomon, James and John 1 at this time",
    },
    {
      app_fn: fn_name("app_supper"),
      text: "Bible verses and prayers for Lord's Supper",
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
