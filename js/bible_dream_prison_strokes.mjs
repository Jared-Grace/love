import { list_add_multiple } from "./list_add_multiple.mjs";
import { subtract } from "./subtract.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export function bible_dream_prison_strokes() {
  "The strokes of the two dreams dreamt in the prison in GEN40:9-17: the cupbearer's vine with its three branches, its clusters, the cup and the hand that took it; and the baker's head with three baskets stacked on it, the baked goods in the top one, and the birds eating out of it.";
  "★ THE THREES ARE THREE FOR THE SAME REASON THE SEVENS ARE SEVEN. GEN40:12 and GEN40:18 both spend their whole sentence on the count - the three branches are three days, the three baskets are three days - so drawing two branches or four baskets would be drawing a different dream. This is the second passage to make a count carry the meaning, which is worth noticing: it was not a peculiarity of Pharaoh's dream.";
  "★ THE TWO DREAMS ARE ALMOST THE SAME DREAM, AND THAT IS THE POINT OF PUTTING THEM ON ONE PAGE. Three of a thing, on or above a man, standing for three days, ending at Pharaoh on the third. What separates them is one word: the cupbearer's own hands PLACE the cup, and the baker's baskets are eaten OUT OF by birds he cannot reach. One man gives and one man is taken from, and the tracing hand does the giving in the first and cannot stop the taking in the second.";
  "The counts that Scripture does NOT give are left unfixed on purpose. GEN40:17 says all sorts of baked goods and the birds, and neither is a number, so the baked goods are four plainly different shapes rather than a count of anything, and there are two birds because more than one is what the plural says and nothing more is said. Giving those a meaningful-looking number would put a meaning in the dream that the passage withheld.";
  "The budding, the blossoming and the ripening in GEN40:10 are three states of one vine over time, and only the last of them is drawn. Pharaoh's dream had no time in it at all - seven cows simply came up - so this is the first thing a second passage has asked for that the mechanic does not have. It is written down here rather than answered here; a stroke that grows as it is traced is a design decision and this is a file of shapes.";
  "★ THE SHAPES TOUCH, AND PHARAOH'S NEVER DID. A cluster hangs off the tip of its branch and shares a point with it, so a hand put down there is as near to one stroke as to the other and gets whichever is nearer by a hair. That is not wrong - a grape cluster that floated beside its branch would be the wrong drawing - but it is the first thing about this palette that a row of cows standing apart could not have shown, and it is left standing rather than dodged, because deciding what a press between two strokes should mean is a design decision and this is a file of shapes. Measured: every one of the nineteen completes when it is begun anywhere on itself, in either direction, with a hand wandering two units off; only a press on the shared point is ambiguous, and lifting and pressing again answers it.";
  "Each stroke is one unbroken path so that it can be traced in one drag, and it is placed by a translate rather than by being redrawn at its position, exactly as Pharaoh's are, because that sameness is what makes the two scenes interchangeable to everything downstream.";
  "The order of this list is the order they are laid out on screen and NOT an order to draw them in.";
  let strokes = [];
  let vine_said = "in my dream there was a vine before me";
  list_add(strokes, {
    symbol: "vine",
    said: vine_said,
    d: "M0,300 C-12,240 10,192 -2,132 C-10,90 8,48 0,8",
    x: 120,
    y: 180,
  });
  let branch_said = "and on the vine were three branches";
  let cluster_said =
    "as it budded, its blossoms opened and its clusters ripened into grapes";
  let branch_d = "M0,0 C24,-6 48,-16 62,-34";
  let cluster_d = "M0,0 Q-16,8 -12,24 Q-8,40 6,42 Q20,40 23,24 Q26,8 10,0 Z";
  let branches_at = [
    {
      x: 122,
      y: 410,
    },
    {
      x: 124,
      y: 330,
    },
    {
      x: 122,
      y: 250,
    },
  ];
  function each_branch(place) {
    list_add_multiple(strokes, [
      {
        symbol: "branch",
        said: branch_said,
        d: branch_d,
        x: place.x,
        y: place.y,
      },
      {
        symbol: "cluster",
        said: cluster_said,
        d: cluster_d,
        x: place.x + 62,
        y: subtract(place.y, 34),
      },
    ]);
  }
  each(branches_at, each_branch);
  list_add_multiple(strokes, [
    {
      symbol: "cup",
      said: "Pharaoh's cup was in my hand, and I took the grapes and squeezed them into his cup",
      d: "M0,0 L7,44 Q10,58 30,58 Q50,58 53,44 L60,0 Z",
      x: 280,
      y: 236,
    },
    {
      symbol: "hand",
      said: "and placed the cup in his hand",
      d: "M0,26 L36,26 L36,10 Q39,0 47,4 L64,14 L64,32 Q64,44 50,44 L8,44 Q0,44 0,26 Z",
      x: 278,
      y: 302,
    },
    {
      symbol: "head",
      said: "there were three baskets of white bread on my head",
      d: "M0,0 Q-28,0 -28,30 Q-28,60 0,60 Q28,60 28,30 Q28,0 0,0 Z",
      x: 700,
      y: 440,
    },
  ]);
  let basket_said = "three baskets of white bread on my head";
  let basket_d = "M0,0 L12,40 L88,40 L100,0 Z";
  let baskets_at = [398, 354, 310];
  function each_basket(basket_y) {
    list_add(strokes, {
      symbol: "basket",
      said: basket_said,
      d: basket_d,
      x: 650,
      y: basket_y,
    });
  }
  each(baskets_at, each_basket);
  let goods_said =
    "in the top basket were all sorts of baked goods for Pharaoh";
  let goods = [
    {
      symbol: "loaf_round",
      d: "M0,0 Q-10,0 -10,10 Q-10,20 0,20 Q10,20 10,10 Q10,0 0,0 Z",
      x: 674,
      y: 322,
    },
    {
      symbol: "loaf_long",
      d: "M0,0 L14,0 Q22,0 22,7 Q22,14 14,14 L0,14 Q-8,14 -8,7 Q-8,0 0,0 Z",
      x: 700,
      y: 326,
    },
    {
      symbol: "twist",
      d: "M0,0 Q12,7 0,14 Q-12,21 0,28",
      x: 730,
      y: 316,
    },
    {
      symbol: "bun",
      d: "M0,16 Q0,0 11,0 Q22,0 22,16 Z",
      x: 692,
      y: 344,
    },
  ];
  function each_good(good) {
    list_add(strokes, {
      symbol: good.symbol,
      said: goods_said,
      d: good.d,
      x: good.x,
      y: good.y,
    });
  }
  each(goods, each_good);
  let bird_said = "but the birds were eating them out of the basket on my head";
  let bird_d = "M0,16 Q12,0 24,16 Q36,0 48,16";
  let birds_at = [
    {
      x: 566,
      y: 296,
    },
    {
      x: 754,
      y: 268,
    },
  ];
  function each_bird(place) {
    list_add(strokes, {
      symbol: "bird",
      said: bird_said,
      d: bird_d,
      x: place.x,
      y: place.y,
    });
  }
  each(birds_at, each_bird);
  let scene = {
    reference: "GEN40:9-17",
    view_box: "0 0 1000 520",
    meaning:
      "Two men in one prison dreamt on one night, and each dream had its own meaning. The three branches are three days and the three baskets are three days; on the third day Pharaoh lifted up the head of the one and lifted off the head of the other. GEN40:8 - do not interpretations belong to God?",
    strokes,
  };
  return scene;
}
