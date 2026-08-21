import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export function bible_dream_pharaoh_strokes() {
  "The strokes of Pharaoh's two dreams, laid out as the shapes GEN41:1-7 says he saw: the Nile, the reeds, seven sleek cows, seven gaunt ones, seven plump heads of grain on one stalk, and seven thin ones scorched by the east wind.";
  "★ THE SEVENS ARE SEVEN AND NOT A HANDFUL. GEN41:26 turns the count itself into the meaning - the seven good cows are seven years - so a prototype that drew three of each to save effort would be showing a different dream. Nothing else here is exact: a cow is a blob with four legs, because whether tracing FEELS like anything can be answered by a blob and cannot be answered any faster by a good drawing.";
  "Each stroke is one unbroken path so that it can be traced in one drag, and it is placed by a translate rather than by being redrawn at its position, so the pointer only ever has to be moved by the offset to be compared against it.";
  "The order of this list is the order they are laid out on screen and NOT an order to draw them in. Which stroke goes first is the player's whole freedom, so nothing here may suggest one.";
  let cow_sleek =
    "M12,44 L12,24 Q12,16 22,16 L64,16 Q74,16 74,24 L74,28 L88,20 L88,36 L74,30 L74,44 L66,44 L66,56 L60,56 L60,44 L48,44 L48,56 L42,56 L42,44 L30,44 L30,56 L24,56 L24,44 L18,44 L18,56 L12,56 Z";
  let cow_gaunt =
    "M12,42 L12,30 Q12,26 20,26 L42,32 L64,26 Q72,26 72,30 L72,32 L86,26 L86,38 L72,34 L72,42 L66,42 L66,56 L63,56 L63,42 L48,42 L48,56 L45,56 L45,42 L30,42 L30,56 L27,56 L27,42 L17,42 L17,56 L14,56 Z";
  let grain_plump = "M24,58 L24,26 Q10,20 15,9 Q24,3 24,15 Q24,3 33,9 Q38,20 24,26";
  let grain_thin = "M24,58 L24,30 Q17,25 19,15 Q24,11 24,19 Q24,11 29,15 Q31,25 24,30";
  let strokes = [
    {
      symbol: "nile",
      said: "he was standing beside the Nile",
      d: "M20,50 C140,20 260,80 380,50 C500,20 620,80 740,50 C860,20 940,80 980,50",
      x: 0,
      y: 20,
    },
  ];
  let reeds_at = [40, 78, 116];
  function each_reed(reed_x) {
    list_add(strokes, {
      symbol: "reeds",
      said: "and began to graze among the reeds",
      d: "M6,60 C10,42 0,26 8,4",
      x: reed_x,
      y: 96,
    });
  }
  each(reeds_at, each_reed);
  let sevens = [
    {
      symbol: "cow_sleek",
      said: "seven cows, sleek and well-fed, came up from the river",
      d: cow_sleek,
      x_first: 20,
      x_step: 135,
      y: 150,
    },
    {
      symbol: "cow_gaunt",
      said: "seven other cows, sickly and thin, came up from the Nile",
      d: cow_gaunt,
      x_first: 20,
      x_step: 135,
      y: 230,
    },
    {
      symbol: "grain_plump",
      said: "seven heads of grain, plump and ripe, came up on one stalk",
      d: grain_plump,
      x_first: 40,
      x_step: 135,
      y: 320,
    },
    {
      symbol: "grain_thin",
      said: "seven other heads, thin and scorched by the east wind",
      d: grain_thin,
      x_first: 40,
      x_step: 135,
      y: 410,
    },
  ];
  let counts = [0, 1, 2, 3, 4, 5, 6];
  function each_seven(seven) {
    function each_index(index) {
      list_add(strokes, {
        symbol: seven.symbol,
        said: seven.said,
        d: seven.d,
        x: seven.x_first + seven.x_step * index,
        y: seven.y,
      });
    }
    each(counts, each_index);
  }
  each(sevens, each_seven);
  let scene = {
    reference: "GEN41:1-7",
    view_box: "0 0 1000 490",
    meaning:
      "Seven years of great abundance are coming, and after them seven years of famine. GEN41:32 - because the dream was given to Pharaoh in two versions, the matter has been decreed by God, and He will carry it out shortly.",
    strokes,
  };
  return scene;
}
