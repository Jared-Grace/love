import { fn_name } from "../../../love/public/src/fn_name.mjs";
export function app_index_main_fns() {
  let r = [
    {
      app_fn: fn_name("app_reply"),
      text: "Allows you to choose languages, multiple encouraging bible verses and responses to copy and paste as messages",
    },
    {
      app_fn: fn_name("app_search"),
      text: "Allows search across multiple versions of the Bible in English and copying results in multiple languages",
    },
    {
      app_fn: fn_name("app_bible"),
      text: "Allows reading the Bible",
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
      app_fn: fn_name("app_g"),
      text: "Gospel sharing game",
    },
    {
      app_fn: fn_name("app_replace"),
      text: "Teaches computer programming basics using substitution rules",
    },
    {
      app_fn: fn_name("app_designs_universal"),
      text: "Displays different possible designs",
    },
  ];
  return r;
}
