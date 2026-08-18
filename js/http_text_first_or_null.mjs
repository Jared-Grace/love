import { arguments_assert } from "./arguments_assert.mjs";
import { http_text_or_null } from "./http_text_or_null.mjs";
import { null_is } from "./null_is.mjs";
export async function http_text_first_or_null(urls) {
  "Ask a few addresses for the same thing, one after another, and answer with the first one that answers - or nothing at all when none of them does.";
  "$plain urls";
  "IT IS FOR ONE THING KEPT IN MORE THAN ONE SHAPE, where the caller knows the shapes but not which one this particular thing is in. Asking is cheaper and truer than keeping a list of which things are in which shape, because the list would be a second copy of a fact the far end already holds.";
  "ASKING STOPS AT THE FIRST ANSWER, so the ordinary shape put first costs one request and only the unusual one costs two.";
  arguments_assert(arguments, 1);
  for (let url of urls) {
    let text = await http_text_or_null(url);
    let absent = null_is(text);
    if (absent) {
      continue;
    }
    return text;
  }
  let none = null;
  return none;
}
