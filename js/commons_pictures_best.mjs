import { math_max } from "./math_max.mjs";
import { greater_than } from "./greater_than.mjs";
import { equal } from "./equal.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { multiply } from "./multiply.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function commons_pictures_best(found, query) {
  arguments_assert(arguments, 2);
  ("$plain query");
  ("Of the pictures a Wikimedia Commons search handed back, the one most likely to be the whole painting the query named and free to use in a video with no credit line - or null when none is.");
  ("★ COMMONS HANDS ITS ANSWERS BACK IN PAGE ORDER, NOT BEST MATCH FIRST, so the first answer free to use is merely the oldest upload - measured on Romans 1, taking the first chose a 148-pixel detail and a 500-pixel copy over the whole painting. So a title saying detail and a picture under 1200 pixels on its long side are passed over, the one whose title and name hold the most words of the query wins, and the larger picture breaks a tie.");
  ("★ ONLY FOUR LICENCES ARE TAKEN - Public domain, CC0, No restrictions, PDM-owner. Every CC BY and CC BY-SA asks for a credit line a video cannot carry, and a famous painting's search brings back photographs of the gallery wall under the photographer's own CC BY-SA.");
  ("found may be null, which is what the search answers when Commons will not talk, and then so is this.");
  let usable = ["Public domain", "CC0", "No restrictions", "PDM-owner"];
  function lambda(word) {
    let g = greater_than(word.length, 2);
    return g;
  }
  let words = query
    .toLowerCase()
    .split(/[^a-z0-9à-ÿ]+/)
    .filter(lambda);
  let chosen = null;
  let chosen_score = -1;
  let chosen_area = -1;
  if (equal(found, null)) {
    return chosen;
  }
  for (let candidate of found) {
    let said = (candidate.title + " " + String(candidate.called)).toLowerCase();
    let side = math_max(candidate.width, candidate.height);
    let fits =
      usable.includes(candidate.licence) &&
      not(said.includes("detail")) &&
      greater_than_equal(side, 1200);
    if (fits) {
      function lambda2(word) {
        let r = said.includes(word);
        return r;
      }
      let score = words.filter(lambda2).length;
      let area = multiply(candidate.width, candidate.height);
      let better =
        greater_than(score, chosen_score) ||
        (equal(score, chosen_score) && greater_than(area, chosen_area));
      if (better) {
        chosen = candidate;
        chosen_score = score;
        chosen_area = area;
      }
    }
  }
  return chosen;
}
