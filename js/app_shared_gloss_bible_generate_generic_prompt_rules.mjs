export function app_shared_gloss_bible_generate_generic_prompt_rules() {
  "The rules a machine is given for writing one word's explanation, in the words it is given them in.";
  "These are the answer to what an audit of the finished work actually found, rather than to what anyone expected it to find. Over a hundred and ninety chapters, eleven hundred and forty-three explanations named an origin the dictionary disagrees with; a read of a spread sample put the wrong ones at about five in six. Three shapes came up again and again and each has a line here written against it: an origin invented outright, a word handed back as its own origin, and a part put before the root called a part put inside it.";
  "The line about being certain is the one that matters most and it is the hardest to obey, because nothing in a made-up origin looks made up. So it is paired with permission to say nothing, which is what an instruction to always include an origin took away - asked for something on every word, the only way to comply is to invent on the words it does not know.";
  "This says nothing about any one language, so every language's prompt takes the same copy. A rule that held for one and not another would belong beside that language and not here.";
  let r =
    "Rules for the explanation:\n" +
    "Name what kind of word it is, then what it means, then what its grammar is doing in this particular clause.\n" +
    "When the word visibly breaks into parts, say so, and use these words correctly: a prefix is added before the root, a suffix is added after the root, and an infix is inserted inside the root itself. Do not call a prefix an infix.\n" +
    "Give the word's origin only when you are certain of it. When you are not certain, say nothing at all about its origin. A wrong origin is worse than no origin, because the reader will remember it.\n" +
    "Never give a word as its own origin. When a word is simply itself, with nothing added before, after or inside it, say that it is a simple word - do not write that it comes from itself.\n" +
    "Never point at another entry. Do not write 'same as above' or 'see the earlier explanation'. Every entry stands on its own, including a repeated word: a repeat is doing a different job in a different clause, so say that job.\n" +
    "Write an entry for every word of the passage, in the order the passage has them, repeats included.\n" +
    "Plain text only. No markdown, and no line breaks inside a field.";
  return r;
}
