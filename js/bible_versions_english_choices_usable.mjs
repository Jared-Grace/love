import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_versions_english_choices_licences } from "./ebible_versions_english_choices_licences.mjs";
import { door43_versions_english_choices } from "./door43_versions_english_choices.mjs";
import { sword_versions_english_choices } from "./sword_versions_english_choices.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { bible_versions_english_choices_withheld } from "./bible_versions_english_choices_withheld.mjs";
import { bible_folder_key } from "./bible_folder_key.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { property_in_list_not } from "./property_in_list_not.mjs";
import { list_filter } from "./list_filter.mjs";
export async function bible_versions_english_choices_usable() {
  arguments_assert(arguments, 0);
  ("Every English translation this repo may lawfully ship and earn from, from each of the shelves it fetches from, each against what it calls itself and the terms it is offered on.");
  ("THE ONE ANSWER TO WHICH ENGLISH TRANSLATIONS MAY BE PUT IN FRONT OF A READER. It was being worked out in two places from one of the shelves, and adding a second shelf to one of them left the other quietly refusing what the first had just started offering - a wording could be chosen from a comparison and then rejected as unshippable by the gate that checks what the page quotes. Both readings are this reading now, so a shelf added here is added to both at once.");
  ("Whether the terms allow it is asked here rather than left to each caller, because a caller that forgets is not wrong in any visible way: it simply offers more than it may, and every wording it offers looks exactly like one that was allowed.");
  ("THE TERMS ARE NOT THE ONLY WAY TO BE UNFIT, so a second and shorter list is taken out here as well. A translation can be complete, free to ship and correctly named and still hand back a different passage than the one it was asked for, which the licence cannot see and neither can any question about whether it answered. That list is named next door with the reason beside each entry.");
  ("A SHELF IS JOINED ON ONLY ONCE ITS WORDS CAN BE READ, which is a rule this repo already gates rather than a caution. The sword shelf was joined on here once while its text was in storage one file to a verse - which is the road the reading-aloud pages take - and the road a comparison takes asks for a whole chapter in one file. Every sword translation was on the list and read as nothing: named, offered, and silently empty. The gate that asks each shelf for a passage caught it, and it is the only thing that would have. So the order is upload first, prove one chapter comes back, then add the shelf here.");
  ("The eBible ones come first and keep the order that list is in, so a comparison reading top to bottom is not reshuffled by a shelf being added.");
  let licences = await ebible_versions_english_choices_licences();
  let door = door43_versions_english_choices();
  let sword = sword_versions_english_choices();
  let both = list_concat(licences, door);
  let every = list_concat(both, sword);
  let allowed = list_filter_property(every, "commercial", true);
  let withheld = bible_versions_english_choices_withheld();
  let property_name = bible_folder_key();
  let withheld_folders = list_map_property(withheld, property_name);
  function offered_is(version) {
    let property_name2 = bible_folder_key();
    let outside = property_in_list_not(
      version,
      property_name2,
      withheld_folders,
    );
    return outside;
  }
  let usable = list_filter(allowed, offered_is);
  return usable;
}
