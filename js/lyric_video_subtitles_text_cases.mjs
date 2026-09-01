import { arguments_assert } from "./arguments_assert.mjs";
export function lyric_video_subtitles_text_cases() {
  arguments_assert(arguments, 0);
  ("Authored documents handed to the subtitle writer, and the sung-line events each one has to come back with.");
  ("ONLY THE SUNG LINES ARE PINNED HERE, NOT THE WHOLE FILE. The head of a subtitle file is lettering sizes, colours and margins, and every one of those is a decision somebody is meant to be able to change by looking at the video and disagreeing with it. Holding the whole file down would turn each of those changes into a failing gate with nothing wrong behind it, and a gate that fails for reasons nobody believes is one that gets edited to agree rather than read. The lines are different: where a line stands is heard, and no later opinion can move it.");
  ("THE FAULT THESE HOLD DOWN SHIPPED A FINISHED VIDEO. A line the person never tapped had no time, and no time multiplied out to zero rather than to nothing, so the closing word of the psalm was written as a card beginning at the first frame and ending two and a half minutes later - standing over the middle of every other line for the whole song. It was reported as two of something and as everything being late, and it was one card.");
  ("Second zero is written down as an ordinary answer in its own case, because the repair is one character away from the wrong repair. A line genuinely sung from the first frame has a start of zero, and a guard written against the number rather than against the absence would throw that line away every time.");
  ("A line timed at one end only is left out too, and it has its own case because it is the shape a person leaves behind by stopping halfway through a line rather than between two. Half a time is not a moment.");
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
        "Dialogue: 0,0:00:02.69,0:00:05.93,Lyric,,0,0,0,,{\\fad(260,320)}Hallelujah!",
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
        "Dialogue: 0,0:00:00.00,0:00:02.45,Lyric,,0,0,0,,{\\fad(260,320)}Praise the LORD",
        "Dialogue: 0,0:00:02.50,0:00:10.00,Lyric,,0,0,0,,{\\fad(260,320)}from the heavens",
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
        "Dialogue: 0,0:00:01.00,0:00:04.95,Lyric,,0,0,0,,{\\fad(260,320)}one",
        "Dialogue: 0,0:00:05.00,0:00:20.00,Lyric,,0,0,0,,{\\fad(260,320)}three",
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
        "Dialogue: 0,0:00:05.00,0:00:09.00,Lyric,,0,0,0,,{\\fad(260,320)}sung",
      ],
      why: "a line with a beginning and no end is left out as well, because half a time is not a moment - this is what somebody leaves behind by stopping partway through a line rather than between two",
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
  ];
  return cases;
}
