import { app_designs_universal } from "../../../love/public/src/app_designs_universal.mjs";
import { app_replace } from "../../../love/public/src/app_replace.mjs";
import { app_g } from "../../../love/public/src/app_g.mjs";
import { app_supper } from "../../../love/public/src/app_supper.mjs";
import { app_ceb_bible } from "../../../love/public/src/app_ceb_bible.mjs";
import { app_original_bible } from "../../../love/public/src/app_original_bible.mjs";
import { app_bible } from "../../../love/public/src/app_bible.mjs";
import { app_search } from "../../../love/public/src/app_search.mjs";
import { app_reply } from "../../../love/public/src/app_reply.mjs";
export function app_index_main_fns() {
  let r = [
    {
      app_fn: app_reply,
      text: "Allows you to choose languages, multiple encouraging bible verses and responses to copy and paste as messages",
    },
    {
      app_fn: app_search,
      text: "Allows search across multiple versions of the Bible in English and copying results in multiple languages",
    },
    {
      app_fn: app_bible,
      text: "Allows reading the Bible",
    },
    {
      app_fn: app_original_bible,
      text: "Allows learning the ancient Greek of the Bible by reading the Bible in ancient Greek (with word defintions and explanations) - Only John 1 and 1 Peter 4 at this time",
    },
    {
      app_fn: app_ceb_bible,
      text: "Allows learning the language Cebuano by reading the Bible in Cebuano (with word defintions and explanations) - Only Song of Solomon, James and John 1 at this time",
    },
    {
      app_fn: app_supper,
      text: "Bible verses and prayers for Lord's Supper",
    },
    {
      app_fn: app_g,
      text: "Gospel sharing game",
    },
    {
      app_fn: app_replace,
      text: "Teaches computer programming basics using substitution rules",
    },
    {
      app_fn: app_designs_universal,
      text: "Displays different possible designs",
    },
  ];
  return r;
}
