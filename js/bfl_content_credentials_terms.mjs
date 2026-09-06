export function bfl_content_credentials_terms() {
  "the words of the licence the drawn pictures in this repo are held under, quoted rather than paraphrased, so that a question about what is allowed is settled from the text and not from somebody's memory of it";
  "IT EXISTS BECAUSE A PARAPHRASE WAS ALREADY LOAD-BEARING AND A PARAPHRASE CANNOT BE REASONED FROM. The whole obligation was carried in one line of prose saying the terms forbid removing what they embed. That line was true, and it was enough to settle the one question it had been written for - a crop that overwrites the picture it read is a removal - and it was not enough to settle the next question asked, which was whether a picture placed inside a video or inside a larger picture still owes the same thing. A paraphrase keeps the conclusion and throws away the words the next conclusion has to come from.";
  "THE PROHIBITED ACTS ARE ALL DONE TO THE CREDENTIALS THEMSELVES. Remove, disable, alter, obscure; circumvent, suppress, otherwise interfere with. Every one of them takes the credentials as its object, and none of them is a duty to carry them anywhere. There is no clause requiring them to be preserved through a transformation, which was checked for rather than assumed.";
  "SO A NEW WORK IN A FORMAT THAT CANNOT HOLD THEM IS NOT A REMOVAL, PROVIDED THE CREDENTIALED FILE SURVIVES. A video has no place to put a PNG chunk, so nothing was taken out of anything by making one; the picture still exists and still carries what it arrived with. The same rewrite where the delivered file was overwritten is a removal wearing a different name, and that is the only difference that matters. It is not the video that decides it. It is what happened to the file behind the video.";
  "THE LIMB THAT DOES REACH EVERY MEDIUM IS THE ONE ABOUT REPRESENTATION, and it is the one worth remembering, because it is easier to break by accident. Saying an output is free of provenance metadata, or letting it be taken for something a person made by hand, is forbidden in its own right and is forbidden whatever the file format is. A video that carries no credentials breaks nothing. A video presented as hand-drawn does.";
  "the wording of the two documents is not the same and the broader one governs. The developer terms name four acts and the usage policy names five, adding suppress and otherwise interfere with, and it reaches signals otherwise associated with an output rather than only ones embedded in it. Where they differ, reason from the usage policy.";
  "read on 2026-09-06 from bfl.ai, at legal/developer-terms-of-service and legal/usage-policy. It is quoted at the length that keeps each clause able to be reasoned from on its own, and dated because a licence is a thing that changes and a quotation with no date cannot be told from a current one.";
  let clauses = [
    {
      source: "developer terms of service, section 1(c)",
      words:
        "Content Credentials means machine-readable content provenance metadata or digital watermarks embedded in or attached to Outputs pursuant to the C2PA or similar technical standard(s)",
    },
    {
      source: "developer terms of service, section 3(b)",
      words:
        "we may embed Content Credentials or other provenance data in any Output, and we reserve the right to modify the manner and form of such credentials at any time",
    },
    {
      source: "developer terms of service, section 6(i)",
      words:
        "Remove, disable, alter, obscure, any Content Credentials or represent to End Users or third parties that (i) Outputs are free of content provenance metadata",
    },
    {
      source: "usage policy",
      words:
        "circumvent, remove, alter, suppress, or otherwise interfere with any C2PA Credentials, digital watermarks, or other content provenance signals attached to, embedded in, or otherwise associated with Outputs, or develop or distribute any tool designed to facilitate such interference",
    },
  ];
  return clauses;
}
