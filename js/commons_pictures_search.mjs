import { arguments_assert } from "./arguments_assert.mjs";
import { commons_user_agent } from "./commons_user_agent.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { equal } from "./equal.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
export async function commons_pictures_search(words, count) {
  "$plain words";
  "$plain count";
  "The pictures Wikimedia Commons offers when asked for some words, each one named by its own file title and carrying what Commons says about who made it, when, and under what terms - or null when Commons will not answer.";
  "★ IT ASKS FOR THE TERMS IN THE SAME BREATH AS THE NAME, BECAUSE A NAME ALONE CANNOT BE USED. A picture is only reusable here if it is genuinely out of copyright, and that fact lives in the file's own metadata rather than in its title; a search that answered with titles would be a search whose every answer needed a second round trip before anybody could judge it, and the judging is the slow part.";
  "★ IT IS THE FILE NAMESPACE AND NOTHING ELSE. Commons holds categories, galleries and talk pages under the same search, and a category is not a picture; asking for namespace six is what makes every row something that can actually be fetched and cropped.";
  "THE COUNT IS HANDED IN RATHER THAN FIXED, because a scene with an obvious famous painting behind it wants three candidates and a scene nobody has ever painted wants thirty before it is fair to say there is nothing.";
  "★ IT NAMES ITSELF, AND THE OLDER BELIEF THAT THE SEARCH HALF DID NOT NEED IT HAS EXPIRED. It was once true that only the picture host refused an unnamed ask while the search answered one happily, and both halves of this house said so in writing. Measured 2026-09-25 the search refuses too - four hundred and three with no name on the request, four hundred and twenty nine with a generic one - and because the refusal is a body without a query in it rather than a thrown error, every search came back null and looked exactly like a Commons that simply held nothing.";
  "It answers null rather than throwing when the far end will not talk, so a walk over many scenes is not ended by one bad minute on somebody else's server. That is also the trap the naming above was found through: a null here cannot tell a refusal from an empty shelf, so a run of nulls over queries that certainly have answers means the far end is turning this house away rather than that the paintings are missing.";
  arguments_assert(arguments, 2);
  async function get() {
    let query = new URLSearchParams({
      action: "query",
      format: "json",
      origin: "*",
      generator: "search",
      gsrsearch: words,
      gsrnamespace: "6",
      gsrlimit: String(count),
      prop: "imageinfo",
      iiprop: "url|size|extmetadata",
      iiextmetadatafilter:
        "LicenseShortName|Artist|DateTimeOriginal|ObjectName",
    });
    let address = "https://commons.wikimedia.org/w/api.php?" + query;
    let headers = {
      "User-Agent": commons_user_agent(),
    };
    let response = await fetch(address, {
      headers,
    });
    let body = await response.json();
    let pages = body.query.pages;
    let keys = object_property_names(pages);
    let rows = [];
    for (let key of keys) {
      let page = pages[key];
      let information = page.imageinfo[0];
      let extra = information.extmetadata;
      function said(name) {
        let held = extra[name];
        if (equal(held, undefined)) {
          return null;
        }
        let r2 = String(held.value)
          .replace(/<[^>]*>/g, "")
          .trim();
        return r2;
      }
      let row = {
        title: page.title.slice("File:".length),
        width: information.width,
        height: information.height,
        licence: said("LicenseShortName"),
        artist: said("Artist"),
        made: said("DateTimeOriginal"),
        called: said("ObjectName"),
        page: information.descriptionurl,
      };
      rows.push(row);
    }
    return rows;
  }
  let r = await catch_null_async(get);
  return r;
}
