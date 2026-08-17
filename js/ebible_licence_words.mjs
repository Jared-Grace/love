import { ebible_licence_cc_by } from "./ebible_licence_cc_by.mjs";
import { ebible_licence_cc_by_sa } from "./ebible_licence_cc_by_sa.mjs";
import { ebible_licence_gfdl } from "./ebible_licence_gfdl.mjs";
import { ebible_licence_public_domain } from "./ebible_licence_public_domain.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export function ebible_licence_words(licence) {
  "$plain licence";
  "The name a reader would recognise for the terms a translation is offered on.";
  "The names are given as their holders write them rather than explained in easier words, because these are the names somebody would search for or check against, and a friendlier wording would send them looking for something nobody calls that.";
  "Terms nothing here has a name for are said to be unread rather than guessed at, which is the same direction the reading of them errs in.";
  let named = [
    {
      licence: ebible_licence_public_domain(),
      words: "Public domain",
    },
    {
      licence: ebible_licence_cc_by(),
      words: "Creative Commons Attribution",
    },
    {
      licence: ebible_licence_cc_by_sa(),
      words: "Creative Commons Attribution Share-Alike",
    },
    {
      licence: "cc_by_nd",
      words: "Creative Commons Attribution No-Derivatives",
    },
    {
      licence: "cc_by_nc",
      words: "Creative Commons Attribution Non-Commercial",
    },
    {
      licence: "cc_by_nc_nd",
      words: "Creative Commons Attribution Non-Commercial No-Derivatives",
    },
    {
      licence: ebible_licence_gfdl(),
      words: "GNU Free Documentation License",
    },
    {
      licence: "all_rights_reserved",
      words: "All rights reserved",
    },
  ];
  let found = list_find_property(named, "licence", licence);
  let missing = null_is(found);
  if (missing) {
    let r = "Terms not read";
    return r;
  }
  let words = property_get(found, "words");
  return words;
}
