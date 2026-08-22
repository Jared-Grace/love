import { less_than } from "./less_than.mjs";
import { list_filter_size } from "./list_filter_size.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export function bible_gospel_scenes_piece_kinds() {
  "Test the four piece kinds - shape, movement, count, word - against the nine Gospel scenes gathered from Matthew 14 and 15, and hand back which kinds each scene holds, the tally per kind, the scenes that hold only some, and the two candidates for a fifth kind that the test turned up.";
  "★ THIS IS AUTHORED JUDGEMENT AND NOT DERIVED, WHICH IS THE OPPOSITE OF HOW THE DREAM SURVEY ANSWERS THE SAME QUESTION. That one reads the need straight off a passage record that already says whether shapes are named and whether anything is spoken. No such record exists for the Gospels, and building one would mean reading the text off a device this code cannot reach. So every entry here was decided by a person reading the chapters, and it should be re-decided rather than trusted if the scenes change.";
  "★ THE HEADLINE IS THAT NO FIFTH KIND IS REQUIRED - ALL NINE SCENES DECOMPOSE INTO THE FOUR. The vocabulary was derived from twenty dream passages and had never met a crowd, a controversy or a healing, and it survived all three. That is the result the test was run for.";
  "★ BUT COVERAGE IS NOT SUSTAINABILITY, AND THAT DISTINCTION IS THE REAL FINDING. Two scenes are almost entirely discourse - the tradition of the elders runs twenty verses and the Canaanite woman is dialogue end to end - so the four kinds COVER them by handing everything to the word step. Twenty verses of one mechanic is a design problem, and it is not the same problem as a gap in the vocabulary. Nothing here is missing; something here would be tiring.";
  "★ TWO SCENES HOLD ONLY SHAPE AND MOVEMENT, WHICH IS WORTH KNOWING BEFORE ANYBODY ASSUMES EVERY SCENE IS PLAYED. Gennesaret and the healings on the mountain are summaries: nothing is counted and nothing is quoted. They are the natural watched scenes, and a design that requires all four kinds everywhere would have to invent something for them - which is exactly the invention the depiction brief forbids.";
  "★ COUNTING CONCENTRATES IN THE TWO FEEDINGS AND IS NOT DECORATION THERE. Five loaves, two fishes, five thousand, twelve baskets; seven loaves, four thousand, seven baskets, three days. MAT16:9-10 then has Jesus himself asking the disciples to recall those numbers, which is the passage treating the counts as the point rather than as detail. So a counting piece in a feeding is carrying what the text emphasises.";
  "★ FIRST CANDIDATE FOR A FIFTH KIND: CITATION. In the tradition of the elders Jesus argues by quoting - ISA29:13 at MAT15:8-9, and EXO20:12 with EXO21:17 at MAT15:4. Tracing a saying to where it comes from is a different act from carrying a sentence whole, and it is the marked-gloss discipline appearing inside the text rather than being imposed on it. It is also the mechanic the angel-combat idea already wants, where a temptation is answered with Scripture. Worth building as its own kind rather than folded into word.";
  "★ SECOND CANDIDATE: EXCHANGE. The word step is built for a message being DELIVERED - the words are heard, then put back in order under pictures, and a messenger never chooses. The Canaanite woman is not that shape. It is a statement and a reply and a reply to the reply, where the meaning lives in the turn rather than in any one sentence, and putting those in order is a different puzzle from carrying one. Whether that is a fifth kind or the word kind with two faces is not settled here.";
  "Both candidates would be additions rather than repairs. The four still cover everything; these two are places where one kind is being asked to do two jobs, which is a smell rather than a failure.";
  let scenes = [
    {
      title: "Herod hears of Jesus, and John the Baptist beheaded",
      kinds: ["shape", "movement", "word"],
      note: "a prison, a platter, a head; the daughter dances; Herod's oath and Herodias' instruction are quoted. Half a kingdom is offered but nothing is counted.",
    },
    {
      title: "Five thousand fed",
      kinds: ["shape", "movement", "count", "word"],
      note: "the richest counting scene in the two chapters, and the only one of the nine that four books carry.",
    },
    {
      title: "Walking on the sea",
      kinds: ["shape", "movement", "count", "word"],
      note: "the strongest movement piece anywhere here - Peter walks and then sinks - and it holds all four kinds in twelve verses.",
    },
    {
      title: "Gennesaret",
      kinds: ["shape", "movement"],
      note: "a summary. The sick are laid in the streets and touch the hem of his garment; nothing is counted and nobody is quoted.",
    },
    {
      title: "The tradition of the elders",
      kinds: ["shape", "movement", "word"],
      note: "twenty verses of controversy. The shapes are thin - washed hands, cups and pots - and almost everything is discourse. This is where citation shows up.",
    },
    {
      title: "The Canaanite woman",
      kinds: ["shape", "word"],
      note: "dialogue end to end, with one image carrying the whole scene: the children's bread, the dogs and the crumbs. This is where exchange shows up.",
    },
    {
      title: "The deaf man in the Decapolis",
      kinds: ["shape", "movement", "word"],
      note: "the most physical scene of the nine - fingers in the ears, spittle, the tongue touched, a look up and a sigh - and one spoken word, Ephphatha, glossed in the text itself.",
    },
    {
      title: "Many healed on the mountain",
      kinds: ["shape", "movement"],
      note: "a summary like Gennesaret. Great multitudes, but no number, and the crowd glorifies God without a line being quoted.",
    },
    {
      title: "Four thousand fed",
      kinds: ["shape", "movement", "count", "word"],
      note: "counts throughout, and MAT16:10 has Jesus recall them, which is what keeps this a separate event from the five thousand rather than one story told twice.",
    },
  ];
  function kind_tally(kind) {
    function scene_holds(scene) {
      let holds = list_includes(scene.kinds, kind);
      return holds;
    }
    let count = list_filter_size(scenes, scene_holds);
    return count;
  }
  let partial = [];
  function each_scene(scene) {
    if (less_than(scene.kinds.length, 4)) {
      list_add(partial, scene.title);
    }
  }
  each(scenes, each_scene);
  let answer = {
    scenes,
    shape: kind_tally("shape"),
    movement: kind_tally("movement"),
    count: kind_tally("count"),
    word: kind_tally("word"),
    partial,
    fifth_kind_candidates: ["citation", "exchange"],
    missing_kinds: [],
  };
  return answer;
}
