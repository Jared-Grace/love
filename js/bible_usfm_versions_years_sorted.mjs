import { bible_usfm_version_withheld_why_or_null } from "./bible_usfm_version_withheld_why_or_null.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_usfm_versions } from "./bible_usfm_versions.mjs";
import { bible_usfm_versions_years } from "./bible_usfm_versions_years.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { assert_json } from "./assert_json.mjs";
import { not } from "./not.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { list_map } from "./list_map.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
export function bible_usfm_versions_years_sorted() {
  arguments_assert(arguments, 0);
  ("Every bible on the shelf as one list, oldest wording first: the short word it is asked for by, the name it is called in print, the year it was settled, the terms it is given under, a line saying what that year is the year of, and why it is held back from readers where it is.");
  ("THE LIST IS ORDERED BY YEAR BECAUSE THAT IS THE ONE THING SOMEBODY CHOOSING A WORDING IS ACTUALLY CHOOSING. The short words are meaningless as an order and the printed names sort four King James editions apart from each other; the year puts the whole shelf on the single ladder it really lies on, from the English of 1599 to the English of last year, so a line meant to be sung can be picked for how it will sound rather than for which name was recognised.");
  ("The terms are said in words rather than left as the blank the shelf writes them with. A blank there means nobody owns the text, which is the most important thing on the row for anything sung and the easiest thing in the world to read as missing.");
  ("EVERY ROW SAYS WHETHER THAT BIBLE IS HELD BACK FROM READERS, WHICH IS A DIFFERENT QUESTION FROM WHETHER IT MAY BE SHIPPED AND IS ANSWERED IN A DIFFERENT PLACE. A translation can be complete, public domain, correctly dated and still hand back the wrong passage, and that fault is the one nothing else here can see, because the words come back and they are good words. The reason is carried in rather than repeated, so the shelf cannot come to say something milder about a bible than the list that holds it back does.");
  ("A bible on the shelf with no year written down for it stops this rather than being quietly left out. A wording nobody has dated is exactly the one a reader would most want the sentence for, and dropping it would hide from the reader the only person who could fix it.");
  let versions = bible_usfm_versions();
  let years = bible_usfm_versions_years();
  let words = object_property_names(versions);
  function row(word) {
    let version_record = property_get(versions, word);
    let year_record = property_get_or_null(years, word);
    let undated = null_is(year_record);
    let b = not(undated);
    assert_json(b, {
      word,
      years_function: fn_name("bible_usfm_versions_years"),
    });
    let name = property_get(version_record, "name");
    let held = property_get(version_record, "licence");
    let licence = held;
    let unowned = text_empty_is(held);
    if (unowned) {
      licence = "public domain";
    }
    let year = property_get(year_record, "year");
    let said = property_get(year_record, "said");
    let withheld = bible_usfm_version_withheld_why_or_null(word);
    let made = {
      version: word,
      name,
      year,
      licence,
      said,
      withheld,
    };
    return made;
  }
  let rows = list_map(words, row);
  function row_year(made) {
    let year = property_get(made, "year");
    return year;
  }
  let sorted = list_sort_number_mapper(rows, row_year);
  return sorted;
}
