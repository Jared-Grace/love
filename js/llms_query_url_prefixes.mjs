export function llms_query_url_prefixes() {
  "The AI chat sites that take a question in their address, the way a search site takes q=, each with the name a reader knows it by and the start of the address the question is added to.";
  "Each one opens its chat with the question already written in, so asking takes one tap. A site whose address cannot carry a question is not listed, because a button that opens an empty chat would leave the reader to type the word again.";
  "The names are shown to the reader, so a reader always knows which company's AI is being asked.";
  let r = [
    {
      name: "ChatGPT",
      prefix: "https://chatgpt.com/?q=",
    },
    {
      name: "Claude",
      prefix: "https://claude.ai/new?q=",
    },
    {
      name: "Perplexity",
      prefix: "https://www.perplexity.ai/search?q=",
    },
    {
      name: "Copilot",
      prefix: "https://copilot.microsoft.com/?q=",
    },
    {
      name: "Grok",
      prefix: "https://grok.com/?q=",
    },
  ];
  return r;
}
