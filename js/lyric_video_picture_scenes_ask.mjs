import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_picture_style_refused_words } from "./lyric_video_picture_style_refused_words.mjs";
import { lyric_video_picture_scene_people_words } from "./lyric_video_picture_scene_people_words.mjs";
import { lyric_video_picture_style } from "./lyric_video_picture_style.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function lyric_video_picture_scenes_ask(lines_text, count) {
  "$plain lines_text";
  "$plain count";
  "The whole instruction to hand a writing model so that it answers with the authored scenes of one passage - what each picture behind the words shows, in the form the document holding them expects.";
  "★ THIS IS THE HALF OF THE BILL NOTHING NAMED COULD DO. The drawing has been priced and measured; the scenes had always been written by whoever happened to be reading the psalm, in a conversation, which is why forty-two of the forty-five passages have none. A whole Bible is about thirty-one thousand of them and no conversation reaches that, so the writing has to become a command before the drawing bill is worth paying at all.";
  ("★ THE SUNG LINES ARE HANDED TO A WRITER AND STILL NEVER TO A DRAWER, WHICH IS WHY THIS DOES NOT BREAK THE RULE BESIDE IT. `$fn ",
    fn_name("lyric_video_picture_prompt"),
    "` says the lines are never passed on, for two reasons: words in a drawing prompt come back painted into the picture, and a psalm speaks to God directly so a line handed over asks for a figure of Him. Neither reason touches a writer. What a writer produces is the authored sentence, and that sentence is what the drawer sees - so the working stays on this side of the wall exactly as before, and the only change is who does the reading.");
  ("★ EVERY RULE IN IT IS READ OFF THE LISTS THAT WILL JUDGE THE ANSWER, NEVER WRITTEN DOWN AGAIN HERE. The refusals come from `$fn ",
    fn_name("lyric_video_picture_style_refused_words"),
    "`, which reads them off the look itself, and the words meaning a person come from `$fn ",
    fn_name("lyric_video_picture_scene_people_words"),
    "`, which is what `$fn ",
    fn_name("lyric_video_picture_scene_alternative_missing"),
    "` matches on. So a scene written to this instruction cannot fail those two gates for a reason the instruction never mentioned, and a clause added to the look tomorrow reaches the writer the same day without anybody remembering to come here. A prompt that restated the rules in its own words would be a third copy, and the copy nobody diffs.");
  ("★ TWO RULES HERE ARE NOT READ OFF ANY LIST, AND BOTH WERE PUT IN BY WATCHING FIVE WRITERS ANSWER THE SAME PSALM. The first is that a scene may not ask for a thing with writing on it. The refused words are a check on the words of the scene, and a writer can ask for lettering without ever spelling a refused word - one asked for a basin carved with a single word worn almost smooth, which passed every gate and would have come back as the garble a drawing model makes of text. The second is the length, and it was first written down wrong. Watching one writer answer in thirty-word sentences of three and four clauses, a bound of twenty words went in - and the three psalms already drawn and approved hold twenty-nine scenes averaging forty-three words, of which three are under twenty. So the bound would have refused the work it was meant to describe. The fault was never the length; it was a sentence asking for several separate things at once, and that is what is written here now, with the measured length given as a guide rather than a bound. Both are written here rather than in a list because no gate matches on them yet, and an instruction ahead of its gates is the safe direction - the unsafe one is a gate refusing what the instruction never mentioned.");
  ("★ IT ASKS FOR THE SCENE ONLY AND NEVER THE LOOK, because `$fn ",
    fn_name("lyric_video_picture_prompt"),
    "` appends the look to whatever it is given. A writer told to include it would have it twice in the sentence handed over, and the second telling is what a drawing weighs heaviest.");
  ("★ IT ASKS FOR THE PEOPLE-FREE SECOND WORDING IN THE SAME BREATH AS THE FIRST, on the reasoning that function already gives: written while the line is in front of the author it is a minute, and written months later by somebody reading the psalm cold it is the whole video again. A writer costs the same either way, so there is no argument for waiting.");
  ("THE ANSWER IS ASKED FOR AS JSON AND NOTHING ELSE, because whatever comes back has to be put into a document without a person reading it. A model that explains itself first is a model whose answer needs a person, which is the cost this exists to remove.");
  ("THE NAME IS ASKED FOR SEPARATELY FROM THE SCENE because it becomes the picture's own file name, and a file name taken from the first few words of a sentence collides the moment two psalms both open on water.");
  arguments_assert(arguments, 2);
  let refused = lyric_video_picture_style_refused_words();
  let people = lyric_video_picture_scene_people_words();
  let style = lyric_video_picture_style();
  let rules = [
    "You are writing the scenes for the still pictures that stand behind the words of a sung psalm.",
    "",
    "Here are the sung lines, in order:",
    "",
    lines_text,
    "",
    "Write exactly " +
      count +
      " scenes, covering the passage in order from its first line to its last.",
    "",
    "A scene is one plain sentence saying what the picture shows. It is read as a whole and never as a list, so let it hold one still moment - one subject, the place it is in, and where its light falls. Around forty words is the length of the scenes already drawn from this instruction. The fault to avoid is not a long sentence but a sentence asking for three or four separate things at once, because the picture then comes back holding none of them.",
    "",
    "What a scene must do:",
    "- name a created thing the lines call on - what they say is made, given, laid down, gone through or waited for - and never the act of praising itself",
    "- show one subject, large and simple, and not several small things arranged together",
    "- carry its light and its detail low down and out at the edges, leaving the middle of the frame deep and quiet, because white lettering is laid across the middle",
    "- be something a painter could act on without knowing the psalm",
    "",
    "What a scene must never do:",
    "- put anything at all in the place the psalm is speaking to. Nothing may stand for God, no angels as figures, and no faces. Where a line would make a single figure be read as the LORD, write the flock, the fold, the road, the crown laid down instead.",
    "- ask for anything that has writing on it. No inscription, no carved or painted words, no open book or scroll or tablet with anything readable on it, and nothing named or titled or labelled. What is drawn is drawn, not read, and a picture asked to hold words comes back holding the shapes of letters that spell nothing. A blank tablet or a closed book is the way to say it.",
    "- use any of these words, whatever the sense of them, because the shared look refuses each one and the two halves are joined into a single sentence that would then contradict itself: " +
      list_join_comma_space(refused),
    "- describe the way it is painted. That is added afterwards and is the same for every picture. These clauses are already appended, so do not repeat any of them: " +
      list_join_comma_space(style),
    "",
    "People may be shown, but only far off and small, low down or out at the edges. A person is the first thing a reader's eye goes to, so a figure in the middle of the frame competes with the psalm on the psalm's own ground.",
    "",
    "Any scene of yours holding one of these words has asked for a person: " +
      list_join_comma_space(people),
    "",
    "For every such scene, write a second wording beside it that shows the same moment with nobody in it - the place they stand in, or the thing they lay down. Some who will watch these hold that the LORD should not be drawn, and that second wording is the answer to such a letter without redrawing the video.",
    "",
    "Answer with JSON and nothing else: a list of objects, each holding",
    '  "name" - two or three lower case words joined by underscores, saying what the picture is of',
    '  "scene" - the sentence',
    '  "scene_no_people" - the second wording, present only where the scene names a person',
  ];
  let ask = list_join_newline(rules);
  return ask;
}
