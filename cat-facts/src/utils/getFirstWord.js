const getFirstWord = (paragraph) => {
  const wholeText = paragraph;
  const firstWord = wholeText.split(" ", 1);
  return firstWord;
};

export default getFirstWord;
