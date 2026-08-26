export function ffmpeg_stats_numbers_cases() {
  "small stretches of what ffmpeg prints while it is comparing two pictures, and the numbers that should be got out of each one";
  "THE EXPECTATIONS ARE WRITTEN AS WORDS RATHER THAN AS NUMBERS, and that is not tidiness. The most important answer this reader ever gives is boundlessness, which is what two identical frames measure, and boundlessness has no way of being written down when an answer is turned into text for comparing - it arrives as nothing at all, on both sides at once, so a case expecting it would agree with a reader that had stopped recognising it. Compared as writing, the word is there or it is not.";
  "THE FIRST CASE IS THE SHAPE THE STATISTICS ACTUALLY ARRIVE IN - every name this measurement has, on one line, one line per frame. It is here because a name sits beside other names rather than alone on its line, which is the one thing about this format that a reader written for the other one gets wrong.";
  "THE SECOND CASE ASKS FOR A NAME THAT IS THE BEGINNING OF ANOTHER NAME. Asked for the average and matched on the bare word, a reader also takes the error figure - and answers a list of the right length holding numbers of the right sort, which nothing downstream questions.";
  "THE THIRD CASE IS TWO IDENTICAL FRAMES, and it is the reason this exists. Read as an ordinary number the word for boundless becomes not-a-number, which loses every comparison it is put into - so a perfect match is reported as the worst result there is, and a check for whether anything was lost concludes that everything was.";
  "THE FOURTH CASE EXPECTS NOTHING BACK. Handed something with no statistics in it, which is what a changed print format looks like, the honest answer is an empty list rather than a number invented to cover it.";
  let cases = [
    {
      printed_text:
        "n:1 mse_avg:0.09 mse_y:0.10 mse_u:0.04 mse_v:0.05 psnr_avg:58.80 psnr_y:57.94 psnr_u:61.69 psnr_v:60.97 \nn:2 mse_avg:0.07 mse_y:0.10 mse_u:0.01 mse_v:0.01 psnr_avg:59.96 psnr_y:58.34 psnr_u:70.43 psnr_v:69.82 \n",
      stats_key: "psnr_avg",
      numbers_written: ["58.8", "59.96"],
      why: "every name is on one line beside the others, one line per frame, so a reader that expects a name alone on its line finds nothing here at all",
    },
    {
      printed_text: "n:1 mse_avg:0.09 psnr_avg:58.80 \n",
      stats_key: "psnr_a",
      numbers_written: [],
      why: "a name that is only the beginning of a real name matches nothing, because the colon is part of what is looked for and a reader without it would take the error figure as well as the average",
    },
    {
      printed_text:
        "n:1 mse_avg:0.00 mse_y:0.00 psnr_avg:inf psnr_y:inf \nn:2 mse_avg:0.00 mse_y:0.00 psnr_avg:inf psnr_y:inf \n",
      stats_key: "psnr_avg",
      numbers_written: ["Infinity", "Infinity"],
      why: "two frames that match exactly have no difference to express as a ratio, so the figure arrives as a word, and read as an ordinary number it would become not-a-number and report the best possible result as the worst",
    },
    {
      printed_text: "Input #0, mov, from something\nStream #0:0 Video: h264\n",
      stats_key: "psnr_avg",
      numbers_written: [],
      why: "nothing measured is answered as nothing measured rather than as a number, so a caller that cannot use an empty answer is the one that has to refuse it",
    },
  ];
  return cases;
}
