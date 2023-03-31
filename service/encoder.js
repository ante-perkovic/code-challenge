module.exports = function encoder(req, res) {
  const { text } = req.body;
  let num = 1;
  let code = "";
  for (var i = 1; i <= text.length; i++) {
    var currLetter = text.at(i);
    var prevLetter = text.at(i - 1);

    if (i < text.length && currLetter === prevLetter) {
      num += 1;
    } else {
      code += prevLetter + num;
      num = 1;
    }
  }
  return res.status(200).send({ text: code });
};
