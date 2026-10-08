import { arguments_assert } from "./arguments_assert.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { app_shared_description } from "./app_shared_description.mjs";
import { app_supper_tl_languages_chosen } from "./app_supper_tl_languages_chosen.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { list_size } from "./list_size.mjs";
import { ebible_language_english } from "./ebible_language_english.mjs";
import { property_get } from "./property_get.mjs";
import { text_index_of_try } from "./text_index_of_try.mjs";
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
import { bible_folder_key } from "./bible_folder_key.mjs";
import { list_flat } from "./list_flat.mjs";
import { list_map } from "./list_map.mjs";
import { ebible_languages } from "./ebible_languages.mjs";
import { ebible_language_bible_folders } from "./ebible_language_bible_folders.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { add } from "./add.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { list_includes } from "./list_includes.mjs";
import { json_equal } from "./json_equal.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_imports } from "./function_imports.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function app_supper_tl_languages_gate_run() {
  "Checks the half of the Tagalog Lord's Supper card that nothing else checks: in Tagalog with English beside it. How many passages there are is already guarded next door, but which languages the page opens in, and which of the two comes first, was only ever written inside the page.";
  "IT NEEDS NO BIBLE AND NO NETWORK, WHICH IS THE WHOLE REASON IT CAN BE A GATE. Which languages a page opens in is a decision written down, so it can be read on a machine with nothing switched on. What it cannot check is that the two translations really say what they should; it checks that the page asks for the two it promises, in the order it promises them.";
  "THE CARD IS CHECKED AGAINST THE PAGE IN BOTH DIRECTIONS, because this promise is an order and an order can be broken from either end. The card naming Tagalog first while the page lays English out first would read as a mistranslation to somebody who came for the Tagalog, and nothing in either half alone would look wrong.";
  "THE FOLDERS ARE CHECKED AGAINST WHAT THE REPO ACTUALLY OFFERS, so that a page cannot go on promising a language whose translation has been dropped - the page would open, and the side that should hold Tagalog would simply be empty.";
  arguments_assert(arguments, 0);
  let wrong = [];
  let s = app_shared_description("supper_tl");
  let said = text_lower_to(s);
  let chosen = app_supper_tl_languages_chosen();
  let left = list_size(chosen);
  let b = equal(left, 2);
  if (not(b)) {
    wrong.push(
      "the page opens in " +
        list_size(chosen) +
        " languages rather than the two the card promises",
    );
  }
  ("The two languages in the order the card names them, each paired with the entry the rest of the repo means by it where there is one. Tagalog has no entry of its own, which is why the page spells it out.");
  let wanted = [
    {
      said_as: "tagalog",
      name: "Tagalog",
      language: null,
    },
    {
      said_as: "english",
      name: "English",
      language: ebible_language_english(),
    },
  ];
  let said_at = [];
  for (let one of wanted) {
    let said_as = property_get(one, "said_as");
    let at = text_index_of_try(said, said_as);
    if (less_than(at, 0)) {
      wrong.push("the card no longer names " + said_as + ": " + said);
    }
    list_add(said_at, at);
  }
  let a = property_get(said_at, 0);
  let b2 = property_get(said_at, 1);
  let b3 = less_than(a, b2);
  if (not(b3)) {
    wrong.push(
      "the card names english before tagalog, while the page lays tagalog out first: " +
        said,
    );
  }
  let folder_key = bible_folder_key();
  ("Every folder any language this repo offers may be read from, so that a page cannot promise a translation that has since been dropped.");
  let list = ebible_languages();
  let nested = list_map(list, ebible_language_bible_folders);
  let offered = list_flat(nested);
  let at_index = 0;
  for (let one of wanted) {
    let wanted_name = property_get(one, "name");
    let language = property_get_or_null(chosen, at_index);
    at_index = add(at_index, 1);
    if (equal(language, null)) {
      wrong.push(
        "the page names no language where it should open in " + wanted_name,
      );
      continue;
    }
    let name = property_get_or(language, "name", "");
    let b4 = equal(name, wanted_name);
    if (not(b4)) {
      wrong.push(
        "the page opens in " + name + " where the card promises " + wanted_name,
      );
    }
    let folder = property_get_or(language, folder_key, "");
    if (text_empty_is(folder)) {
      wrong.push(
        wanted_name +
          " names no folder under " +
          folder_key +
          ", which is the one word the page is read by",
      );
      continue;
    }
    let b5 = list_includes(offered, folder);
    if (not(b5)) {
      wrong.push(
        wanted_name +
          " is read from " +
          folder +
          ", which is not a folder any language this repo offers may be read from",
      );
    }
    let whole = property_get(one, "language");
    let b6 = equal(whole, null);
    if (not(b6)) {
      let b7 = json_equal(language, whole);
      if (not(b7)) {
        wrong.push(
          wanted_name +
            " is no longer the entry the rest of the repo means by it - the page asks for " +
            name +
            " out of " +
            folder,
        );
      }
    }
  }
  ("Reading the two languages back correctly proves nothing if the page has stopped asking, and the one word the folders are read by has to be the word they are written under.");
  let doors = [
    {
      page: fn_name("app_supper_tl"),
      door: fn_name("app_supper_tl_languages_chosen"),
    },
    {
      page: fn_name("app_supper_folders_get"),
      door: fn_name("bible_folder_key"),
    },
  ];
  for (let one of doors) {
    let page = property_get(one, "page");
    let door = property_get(one, "door");
    let imports = await function_imports(page);
    let b8 = list_includes(imports, door);
    if (not(b8)) {
      wrong.push(page + " no longer goes through " + door);
    }
  }
  list_empty_is_assert_json(wrong, {
    hint:
      "The Tagalog Lord's Supper page no longer opens in the two languages its card promises a stranger, or no longer opens in them in that order. The two, and the order, are in " +
      fn_name("app_supper_tl_languages_chosen") +
      "; how many passages there are is guarded separately by " +
      fn_name("app_supper_passages_count_gate_run") +
      ".",
    wrong,
  });
  let r = {
    app_name: "supper_tl",
    languages: list_size(chosen),
    folders_offered: list_size(offered),
    doors: list_size(doors),
  };
  return r;
}
