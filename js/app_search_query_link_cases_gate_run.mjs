import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_description } from "./app_shared_description.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_includes } from "./text_includes.mjs";
import { not } from "./not.mjs";
import { app_search_query_hash_key } from "./app_search_query_hash_key.mjs";
import { app_search_query_link_cases } from "./app_search_query_link_cases.mjs";
import { property_get } from "./property_get.mjs";
import { app_search_query_link_written } from "./app_search_query_link_written.mjs";
import { hash_to_url } from "./hash_to_url.mjs";
import { hash_text_object } from "./hash_text_object.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { equal } from "./equal.mjs";
import { app_search_query_link_words } from "./app_search_query_link_words.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_imports } from "./function_imports.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_size } from "./list_size.mjs";
export async function app_search_query_link_cases_gate_run() {
  "Checks that a search really does survive being sent as a link, which is the half of the search card a stranger is most likely to test: a search can be sent as a link, so whoever opens it sees the same verses you did.";
  "IT NEEDS NO BIBLE AND NO NETWORK, WHICH IS THE WHOLE REASON IT CAN BE A GATE. Putting a search into an address and reading it back out is arithmetic on text, so the one thing the card promises can be checked on a machine with nothing switched on. What it cannot check is that the verses found are the right verses; it checks that the words arrive, and the words arriving is where the promise was being broken.";
  "THE BROWSER IS THE ONE PART NOT RUN HERE, and it is left out because it does nothing: the characters a search can hold are all ones a browser carries through the end of an address exactly as given, and hands back exactly as stored. So writing the address and then reading that same text is the real round trip and not a stand-in for it.";
  "THE REACH HALF IS WHY THIS IS NOT ONLY A CORPUS. Reading a search back correctly proves nothing if the page has stopped asking these two doors to do it, so the last check is that the page that sends a search and the page that opens one both still go through them. A page that grew its own copy would pass every case above while being broken.";
  "THE OLD ADDRESSES ARE CHECKED TOO, because this was a repair and a repair that quietly stops old links opening has traded one silence for another. Every link anybody has already sent was written the previous way, and those are read here exactly as they always were.";
  arguments_assert(arguments, 0);
  let wrong = [];
  let s = app_shared_description("search");
  let said = text_lower_to(s);
  ("The claim this gate stands behind, in the card's own words, so that a reworded card cannot leave a check guarding a promise nobody is making any more.");
  let promise = "sent as a link";
  let b = text_includes(said, promise);
  if (not(b)) {
    wrong.push("the card no longer says " + promise + ": " + said);
  }
  let key = app_search_query_hash_key();
  let cases = app_search_query_link_cases();
  for (let one of cases) {
    let query = property_get(one, "query");
    let hash = {};
    hash[key] = app_search_query_link_written(query);
    let url = hash_to_url(hash);
    let read = hash_text_object(url);
    let carried = property_get_or_null(read, key);
    if (equal(carried, null)) {
      wrong.push("nothing came back for " + query + " sent as " + url);
      continue;
    }
    let words = app_search_query_link_words(carried);
    let b2 = equal(words, query);
    if (not(b2)) {
      wrong.push(
        "sent " +
          query +
          " as " +
          url +
          " and it opened as " +
          words +
          " - " +
          property_get(one, "why"),
      );
    }
  }
  ("Addresses written the way this app used to write them, with the words they have always opened as. A plus is a gap and everything else is itself, which is exactly what the reading side still does with them.");
  let old_links = [
    {
      url: "#" + key + "=faith",
      words: "faith",
    },
    {
      url: "#" + key + "=faith+hope+love",
      words: "faith hope love",
    },
    {
      url: "#" + key + "=%D8%AE%D8%AF%D8%A7",
      words: "خدا",
    },
  ];
  for (let one of old_links) {
    let url = property_get(one, "url");
    let read = hash_text_object(url);
    let carried = property_get_or_null(read, key);
    if (equal(carried, null)) {
      wrong.push("an address sent before now carries nothing: " + url);
      continue;
    }
    let words = app_search_query_link_words(carried);
    let wanted = property_get(one, "words");
    let b3 = equal(words, wanted);
    if (not(b3)) {
      wrong.push(
        "an address sent before now opens as " +
          words +
          " rather than " +
          wanted +
          ": " +
          url,
      );
    }
  }
  let doors = [
    {
      page: fn_name("app_search_home_search"),
      door: fn_name("app_search_query_link_written"),
      what: "send a search as a link",
    },
    {
      page: fn_name("app_search_hash_query_apply"),
      door: fn_name("app_search_query_link_words"),
      what: "open a search somebody sent",
    },
  ];
  for (let one of doors) {
    let page = property_get(one, "page");
    let door = property_get(one, "door");
    let imports = await function_imports(page);
    let b4 = list_includes(imports, door);
    if (not(b4)) {
      wrong.push(
        page +
          " no longer goes through " +
          door +
          " to " +
          property_get(one, "what"),
      );
    }
  }
  list_empty_is_assert_json(wrong, {
    hint:
      "A search no longer survives being sent as a link, which is what the search card promises a stranger. The writing side is " +
      fn_name("app_search_query_link_written") +
      " and the reading side is " +
      fn_name("app_search_query_link_words") +
      "; the searches that have to survive, and why each one is there, are in " +
      fn_name("app_search_query_link_cases") +
      ".",
    wrong,
  });
  let r = {
    app_name: "search",
    queries: list_size(cases),
    old_links: list_size(old_links),
    doors: list_size(doors),
  };
  return r;
}
