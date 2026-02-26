export function app_gloss_bible_generate_generic_prompt_system(
  language,
  word,
  last,
) {
  let r = `You will be given a Bible passage and its context in ${language}.
For each ${language} word, output an English gloss.
Also output a full explanation of each ${language} word, explaining its meaning and grammar (including prefixes and suffixes), written for an English speaker with no background in grammar. 
Explanations should include any etymology.
Explanations should be easy to understand. Explain as simply as possible.

Output format:
[{"${word}":"${language} word","gloss":"English gloss","explain":"full explanation"}, ...]

The ${last} provided as a reference.`;
  return r;
}
