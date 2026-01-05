import { ebible_versions_english_downloadable_cache } from "../../../love/public/src/ebible_versions_english_downloadable_cache.mjs";
import { string_only_or_space } from "../../../love/public/src/string_only_or_space.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox() {
  marker("1");
  const versions = await ebible_versions_english_downloadable_cache();
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
  let joined = string_only_or_space(s, symbols_split_non);
  return joined;
}
