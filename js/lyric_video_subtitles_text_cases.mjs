import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
export function lyric_video_subtitles_text_cases() {
  arguments_assert(arguments, 0);
  ("Authored documents handed to the subtitle writer, and the sung-line events each one has to come back with.");
  ("ONLY THE SUNG LINES ARE PINNED HERE, NOT THE WHOLE FILE. The head of a subtitle file is lettering sizes, colours and margins, and every one of those is a decision somebody is meant to be able to change by looking at the video and disagreeing with it. Holding the whole file down would turn each of those changes into a failing gate with nothing wrong behind it, and a gate that fails for reasons nobody believes is one that gets edited to agree rather than read. The lines are different: where a line stands is heard, and no later opinion can move it.");
  ("THE FAULT THESE HOLD DOWN SHIPPED A FINISHED VIDEO. A line the person never tapped had no time, and no time multiplied out to zero rather than to nothing, so the closing word of the psalm was written as a card beginning at the first frame and ending two and a half minutes later - standing over the middle of every other line for the whole song. It was reported as two of something and as everything being late, and it was one card.");
  ("Second zero is written down as an ordinary answer in its own case, because the repair is one character away from the wrong repair. A line genuinely sung from the first frame has a start of zero, and a guard written against the number rather than against the absence would throw that line away every time.");
  ("A LINE TIMED AT ONE END ONLY IS LEFT OUT TOO, AND EACH END HAS A CASE OF ITS OWN. A beginning with no end is what a person leaves behind by stopping halfway through a line rather than between two. An end with no beginning is what a hand-corrected document leaves behind, because the two moments of a line are settled one at a time and either one of them can be the one that is missing. Half a time is not a moment whichever half it is, and one case cannot stand in for the other: a reader that asks only whether a line ends agrees with every other case here and still throws a line into the video with nothing to begin at.");
  ("THE SECOND OF THOSE TWO CASES IS HERE BECAUSE NINE WRONG READERS WERE WRITTEN OUT AND RUN AGAINST THIS CORPUS, AND ONE OF THEM WAS REFUSED BY NOTHING. It kept a line whenever the line had an end, never once asking about its beginning, and it agreed with all five cases that were here before. That is the failure a corpus cannot see from the inside: every case passed, so the corpus looked finished, while the one sentence above it claiming both ends are checked was never true of the cases themselves. A case that refuses no wrong reader is describing the code back to itself, and a claim in the prose that no case tests is an untested claim.");
  ("WHERE THE CARD IS PUT IS WRITTEN INTO EVERY EVENT HERE, WHICH IS THE ONE THING IN AN EVENT THAT IS NOT A MOMENT. It is pinned all the same, because moving a card is a change to where a line stands, and where a line stands is the whole of what this corpus refuses arguments about. It has already been changed once: the point in the middle of the frame is now stated outright instead of being asked for by naming an alignment, and this corpus went red because the events here still said what the writer used to say. That redness is the gate working - a change to placement is meant to be read by somebody rather than to slip through - but it also means these strings have to be brought forward deliberately whenever the placement is argued about again, and the reason for the change belongs in the writer's own prose rather than here.");
  ("THE MOMENTS IN THESE EVENTS ARE NOT THE MOMENTS IN THESE DOCUMENTS, AND THE GAP IS THE SAME EVERYWHERE. A card is put up a fixed moment before the line it holds is sung, so every time here is the heard time less that lead - which is why the second case, whose line is sung from the first frame, still begins at the first frame rather than before it. It is the same kind of pinning as the placement above: one number for every card, argued about in one place, and moving it turns this corpus red on purpose so that somebody reads the change rather than watching for it in a finished video.");
  ("ONE EVENT HERE PINS A LETTERING SIZE, WHICH THE PARAGRAPH ABOUT NOT PINNING THE HEAD DOES NOT COVER, AND THE EXCEPTION IS DELIBERATE. Every other size in a document is an opinion about how a video should look; this one is a consequence, worked out from the size in the head and the length of the card so that a card too long for the frame still stands inside it. Pinning it means the size in this corpus's own head can no longer be changed without this case going red, and that is the right cost - the card was made long on purpose to reach the working out, and a corpus that let the head move underneath it would stop reaching it and say nothing.");
  ("THE WRONG READERS ARE NO LONGER A PARAGRAPH ABOUT THE PAST. All nine are written out in data/given/red_proofs/",
    fn_name("lyric_video_subtitles_text"),
    ".mjs, and ",
    fn_name("red_proofs_gate_run"),
    " asks every one of them of every case here on each run - so a case removed later, or a reader that stops being wrong, is said out loud rather than leaving this account describing a check nobody is doing any more. The end-only reader named above is refused now, by the case that was added for it.");
  let head = {
    passage: "Psalm 148",
    credit: "Berean Standard Bible",
    duration: 30,
    width: 1080,
    height: 1920,
    font_size: 150,
    passage_font_size: 96,
    credit_font_size: 64,
  };
  function document_of(lines) {
    let document = {
      passage: head.passage,
      credit: head.credit,
      duration: head.duration,
      width: head.width,
      height: head.height,
      font_size: head.font_size,
      passage_font_size: head.passage_font_size,
      credit_font_size: head.credit_font_size,
      lines,
    };
    return document;
  }
  let cases = [
    {
      document: document_of([
        {
          start: 2.69,
          end: 5.93,
          text: "Hallelujah!",
        },
        {
          start: null,
          end: null,
          text: "Hallelujah!",
        },
      ]),
      events: [
        "Dialogue: 0,0:00:02.29,0:00:05.53,Lyric,,0,0,0,,{\\pos(540,829)\\fad(260,320)}Hallelujah!",
      ],
      why: "the psalm that shipped wrong: the closing line nobody tapped is left out of the video altogether rather than written as a card standing over the whole song from the first frame",
    },
    {
      document: document_of([
        {
          start: 0,
          end: 2.45,
          text: "Praise the LORD",
        },
        {
          start: 2.5,
          end: 10,
          text: "from the heavens",
        },
      ]),
      events: [
        "Dialogue: 0,0:00:00.00,0:00:02.05,Lyric,,0,0,0,,{\\pos(540,829)\\fad(260,320)}Praise the LORD",
        "Dialogue: 0,0:00:02.10,0:00:09.60,Lyric,,0,0,0,,{\\pos(540,829)\\fad(260,320)}from the heavens",
      ],
      why: "a line genuinely sung from the first frame starts at zero and is kept, so the guard above cannot be written against the number - which is the repair one character away from the right one",
    },
    {
      document: document_of([
        {
          start: 1,
          end: 4.95,
          text: "one",
        },
        {
          start: null,
          end: null,
          text: "two",
        },
        {
          start: 5,
          end: 20,
          text: "three",
        },
      ]),
      events: [
        "Dialogue: 0,0:00:00.60,0:00:04.55,Lyric,,0,0,0,,{\\pos(540,829)\\fad(260,320)}one",
        "Dialogue: 0,0:00:04.60,0:00:19.60,Lyric,,0,0,0,,{\\pos(540,829)\\fad(260,320)}three",
      ],
      why: "a line missed in the middle leaves a silence where it was rather than a placeholder, and the lines on either side keep the moments they were heard at",
    },
    {
      document: document_of([
        {
          start: 3,
          end: null,
          text: "held",
        },
        {
          start: 5,
          end: 9,
          text: "sung",
        },
      ]),
      events: [
        "Dialogue: 0,0:00:04.60,0:00:08.60,Lyric,,0,0,0,,{\\pos(540,829)\\fad(260,320)}sung",
      ],
      why: "a line with a beginning and no end is left out as well, because half a time is not a moment - this is what somebody leaves behind by stopping partway through a line rather than between two",
    },
    {
      document: document_of([
        {
          start: null,
          end: 4.2,
          text: "loosed",
        },
        {
          start: 6,
          end: 9,
          text: "sung",
        },
      ]),
      events: [
        "Dialogue: 0,0:00:05.60,0:00:08.60,Lyric,,0,0,0,,{\\pos(540,829)\\fad(260,320)}sung",
      ],
      why: "an end with no beginning is left out as well, which the case above cannot show: a reader asking only whether a line ends agrees with every other case here and still writes this line into the video with no moment to begin at",
    },
    {
      document: document_of([
        {
          start: null,
          end: null,
          text: "one",
        },
        {
          start: null,
          end: null,
          text: "two",
        },
      ]),
      events: [],
      why: "a passage opened and never tapped writes a video with no words in it at all, which is visibly nothing rather than quietly wrong, and is the honest answer to having heard none of it",
    },
    {
      document: document_of([
        {
          start: 4,
          end: 21.5,
          text: "The sons of Judah: Er, Onan, and Shelah; these three were born to him by Shua's daughter, the Canaanitess. Er, Judah's firstborn, was wicked in the LORD's sight, so he killed him.",
        },
      ]),
      events: [
        "Dialogue: 0,0:00:03.60,0:00:21.10,Lyric,,0,0,0,,{\\pos(540,829)\\fad(260,320)\\fs144}The sons of Judah: Er, Onan, and Shelah; these three were born to him by Shua's daughter, the Canaanitess. Er, Judah's firstborn, was wicked in the LORD's sight, so he killed him.",
      ],
      why: "a card too long for the frame comes back as one card in smaller lettering rather than as two cards, because dividing it would need a moment nobody heard - the sound of a spoken piece arrives with no times inside it, so the join could only be reasoned from how long the words are, and a run of names is exactly where that reasoning is worst. Every other case here is short and carries no size at all, which is what says the smaller lettering is written only where it is needed",
    },
  ];
  return cases;
}
