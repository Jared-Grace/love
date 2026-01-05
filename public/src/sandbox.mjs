import { ebible_versions_english_downloadable_symbols_unique } from "../../../love/public/src/ebible_versions_english_downloadable_symbols_unique.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox() {
  marker("1");
  let unique = await ebible_versions_english_downloadable_symbols_unique();
  let symbols_all =
    "._​ּׁׂ -–—,;:!?…·'‘’\"“”()[]{}¶*/&#%•`°+=|⌃⌞⌟►◄$01½¼23¾45   56789aAæÆbBcCdDeEéèëfFﬁﬂgGhHiIïjJkKlLmMnNoOöœpPqQrRsStTuUüvVʋwWxXyYzZʼΑΩאבגדהוזחטיכלמנסעפצקרשת\n";
  let symbols_whitespace = "   \n";
  let symbols_dash = "–—";
  let symbols_split_non =
    "1234556789aAæÆbBcCdDeEéèëfFﬁﬂgGhHiIïjJkKlLmMnNoOöœpPqQrRsStTuUüvVʋwWxXyYzZʼΑΩ";
  return unique;
}
