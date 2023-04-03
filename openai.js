const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: `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`,
});
const openai = new OpenAIApi(configuration);

async function getResponseFromBigBrother(question) {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: question,
    max_tokens: 256,
  });
  return completion.data;
}

module.exports = getResponseFromBigBrother;
