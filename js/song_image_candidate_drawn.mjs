import { song_image_drawn_url } from "./song_image_drawn_url.mjs";
export function song_image_candidate_drawn(number, attempt) {
  "one attempt at a couplet's drawn picture, dressed as one more candidate, so that it is looked at and decided on beside the found ones rather than in a place of its own";
  "it carries where to fetch it from, which is the one thing that tells it apart from a found candidate - those are named on Wikimedia Commons and their address is worked out from the name, and this one has an address of its own";
  "the licence says who made it because that is the question asked of every other row, and the honest answer for this one is that it was drawn for this song and belongs to it";
  "the attempt number is in the title because every attempt for a couplet is a row of its own now, and several rows all called drawn for this song would be a list nobody can point at";
  let candidate = {
    title: "drawn for this song, attempt " + String(attempt),
    licence: "made here",
    src: song_image_drawn_url(number, attempt),
  };
  return candidate;
}
