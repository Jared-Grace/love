import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_to } from "../../../love/public/src/list_to.mjs";
import { string_replace } from "../../../love/public/src/string_replace.mjs";
import { ebible_versions_english_downloadable_symbols_unique } from "../../../love/public/src/ebible_versions_english_downloadable_symbols_unique.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox() {
  marker("1");
  let unique = await ebible_versions_english_downloadable_symbols_unique();
  let symbols_all =
    "._​ּׁׂ -–—,;:!?…·'‘’\"“”()[]{}¶*/&#%•`°+=|⌃⌞⌟►◄$01½¼23¾456789aAæÆbBcCdDeEéèëfFﬁﬂgGhHiIïjJkKlLmMnNoOöœpPqQrRsStTuUüvVʋwWxXyYzZʼΑΩאבגדהוזחטיכלמנסעפצקרשת";
  let normalize = {
    ﬁ: "fi",
    ﬂ: "fl",
    æ: "ae",
    Æ: "AE",
    é: "e",
    è: "e",
    ë: "e",
    ï: "i",
    ö: "o",
    ü: "u",
    ʋ: "v",
    Α: "A",
    Ω: "O",
    "½": "1/2",
    "¼": "1/4",
    "¾": "3/4",
  };
  let symbols_split_non =
    "01½¼23¾4556789aAæÆbBcCdDeEéèëfFﬁﬂgGhHiIïjJkKlLmMnNoOöœpPqQrRsStTuUüvVʋwWxXyYzZΑΩ";
  let s = null;
  let l = list_to(s);
  function lambda(item) {}
  let mapped = list_map(list, lambda);
  let replaced = string_replace(s, from, to);
  return unique;
}
