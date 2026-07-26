import { literal_duplicates } from "./literal_duplicates.mjs";
import { list_add } from "./list_add.mjs";
export async function literal_duplicates_unambiguous() {
  "The repeated literals that are safe to route through their getter, without the ones that only look repeated";
  "Two getters holding the same spelling means there is no single right getter to route a site through, so picking either one is a coin flip that reads as tidying";
  "A site outside the getter's own family almost always spells the same word meaning something else, so it is dropped rather than rewritten";
  let found = await literal_duplicates();
  let claims = {};
  for (let entry of found) {
    let seen = claims[entry.literal];
    if (seen === undefined) {
      claims[entry.literal] = 1;
    } else {
      claims[entry.literal] = seen + 1;
    }
  }
  let safe = [];
  for (let entry of found) {
    if (claims[entry.literal] > 1) {
      continue;
    }
    let family = entry.f_name.split("_")[0] + "_";
    let files = [];
    for (let f_name of entry.files) {
      if (f_name.startsWith(family)) {
        list_add(files, f_name);
      }
    }
    if (files.length > 0) {
      list_add(safe, {
        f_name: entry.f_name,
        literal: entry.literal,
        family,
        files,
      });
    }
  }
  safe.sort(function lambda(a, b) {
    return b.files.length - a.files.length;
  });
  return safe;
}
