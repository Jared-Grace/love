import { list_concat_if } from "./list_concat_if.mjs";
import { fn_name } from "./fn_name.mjs";
import { g_time_sky_sight } from "./g_time_sky_sight.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { null_is } from "./null_is.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function g_time_sky_remark(time, christian) {
  ("a whole sentence an NPC can say about what the sky is DOING — isn't that sunset beautiful — as opposed to ",
    fn_name("g_time_remark"),
    ", which is about the stretch of day you are having. answers null whenever there is no sight to name, so the caller can ask at any hour and simply get nothing back at noon. it carries its OWN punctuation, because the shapes are a question and an exclamation and neither can take a full stop from the caller. a believer gets one further ENDING that credits the Maker, which is the same word choice split the greeting words take");
  let sight = g_time_sky_sight(time);
  if (null_is(sight)) {
    return null;
  }
  let adjectives = ["beautiful", "lovely", "glorious", "wonderful"];
  let adjective = list_random_item(adjectives);
  ("every adjective below has to read after both an article and a bare noun, so a word like something — fine in isn't that sunset something — is left out rather than allowed to produce what a something sunset");
  let determiners = ["that ", "the "];
  let determiner = list_random_item(determiners);
  let asked = text_combine_multiple([
    "Isn't ",
    determiner,
    sight,
    " ",
    adjective,
    "?",
  ]);
  ("crediting the Maker is not a THIRD sentence, it is the same exclamation with a longer ending — what a wonderful sunset, and then who made it. so the ending is what varies and the sentence is written once: a believer draws from two endings where anyone else has one, and adding a further way to finish the thought needs no new shape");
  let endings = ["!"];
  let endings_faith = [" the Lord has made!"];
  let endings_all = list_concat_if(endings, endings_faith, christian);
  let ending = list_random_item(endings_all);
  let exclaimed = text_combine_multiple([
    "What a ",
    adjective,
    " ",
    sight,
    ending,
  ]);
  let shapes = [asked, exclaimed];
  let remark = list_random_item(shapes);
  return remark;
}
