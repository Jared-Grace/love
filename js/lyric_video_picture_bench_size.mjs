import { arguments_assert } from "./arguments_assert.mjs";
export function lyric_video_picture_bench_size(size) {
  "$plain size";
  "Answers how wide and how tall to draw a bench picture, given one plain word naming a rung on a ladder of sizes that runs from a little over the video's own frame down to a sixteenth of its area.";
  "★ THE SIZE IS THE PRICE, BECAUSE EVERY HOUSE THAT DRAWS CHARGES BY THE AREA AND NOT BY THE PICTURE. A picture drawn at a quarter of the width and a quarter of the height costs a sixteenth as much, and nothing else about the ask changes at all. So the size is the one dial that moves the bill for the whole Bible between hundreds of dollars and tens of them, and it has to be a dial rather than a number written into the run, because the only way to learn what the cheap end looks like is to draw the same accepted scenes at every rung and look.";
  "★ EVERY RUNG IS EXACTLY NINE WIDE BY SIXTEEN HIGH, WHICH IS THE FRAME THESE GROUNDS ARE LAID INTO. A rung of another shape would be measuring the crop as well as the size, and a set that has to be cut to fit is a set where part of every picture was paid for and thrown away.";
  "★ THE CHEAP END IS NOT SAFE UNTIL IT HAS BEEN DRAWN, AND THE REASON IS ARITHMETIC RATHER THAN TASTE. A model taught near one megapixel drawn far under that starts losing hold of the whole, so the share of pictures that come back usable falls - and price per usable picture is the list price divided by that share. A rung at a sixteenth of the price that is clean a tenth as often is dearer than the rung above it. Which is exactly how a half-price fast model turned out to cost more than the full one, so the ladder is climbed downward with a count taken at each rung and never skipped to the bottom.";
  "A word is asked for rather than two numbers because a run is started from a command line, where every argument arrives as text and a size handed over as text is not a number any house will accept. Naming the rungs also puts them in one place where they can be read against each other, which is what makes the ladder a ladder.";
  arguments_assert(arguments, 1);
  let sizes = {
    full: {
      width: 1152,
      height: 2048,
    },
    frame: {
      width: 1080,
      height: 1920,
    },
    high: {
      width: 864,
      height: 1536,
    },
    half: {
      width: 576,
      height: 1024,
    },
    low: {
      width: 432,
      height: 768,
    },
    floor: {
      width: 288,
      height: 512,
    },
  };
  let one = sizes[size];
  if (!one) {
    throw new Error("lyric_video_picture_bench_size: unknown size " + size);
  }
  return one;
}
