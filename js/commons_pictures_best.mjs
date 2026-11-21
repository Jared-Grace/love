import { arguments_assert } from "./arguments_assert.mjs";
import { greater_than } from "./greater_than.mjs";
import { equal } from "./equal.mjs";
import { math_max } from "./math_max.mjs";
import { not } from "./not.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { multiply } from "./multiply.mjs";
export function commons_pictures_best(found, query) {
  arguments_assert(arguments, 2);
  ("$plain query");
  ("Of the pictures a Wikimedia Commons search handed back, the one most likely to be the whole painting the query named and free to use in a video with no credit line - or null when none is.");
  ("★ COMMONS HANDS ITS ANSWERS BACK IN PAGE ORDER, NOT BEST MATCH FIRST, so the first answer free to use is merely the oldest upload - measured on Romans 1, taking the first chose a 148-pixel detail and a 500-pixel copy over the whole painting. So a title saying detail and a picture under 1200 pixels on its long side are passed over, the one whose title and name hold the most words of the query wins, and the larger picture breaks a tie.");
  ("★ WHAT IS NOT A PAINTING IS PASSED OVER BY ITS NAME OR ITS MAKER'S: an engraving, etching or lithograph (spelled engraved and engraver too - Romans 2 lost a row to a Thomas Cole painting engraved by James Smillie, whose title said engraved and whose artist said engraver), a museum print number (RP-P-, DP followed by digits), one tile of a scan too big to serve whole (-x1-y0), and anything not a picture file - a search for a painting also finds the scanned BOOK about its painter, a pdf. Measured on Romans 1, each of these won a row before it was named here. An engraving zoomed in to fill a screen also shimmers.");
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
    let said = (
      candidate.title +
      " " +
      String(candidate.called) +
      " " +
      String(candidate.artist)
    ).toLowerCase();
    let side = math_max(candidate.width, candidate.height);
    let fits =
      usable.includes(candidate.licence) &&
      not(said.includes("detail")) &&
      not(/engrav|etching|lithograph/.test(said)) &&
      not(/ dp\d|rp-p-|-x\d+-y\d+/.test(said)) &&
      /\.(jpe?g|png|tiff?)$/.test(candidate.title.toLowerCase()) &&
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
