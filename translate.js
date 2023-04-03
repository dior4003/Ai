const { default: axios } = require("axios");

module.exports = async function getTranslation(target, source, text) {
  let data = await axios.get(
    `https://translate.google.com/translate_a/single?client=gtx&sl=${target}&tl=${source}&dt=t&q=${encodeURI(
      text
    )}`
  );
  return data.data;
};
