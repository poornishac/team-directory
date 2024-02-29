export const debounce = (callBack: Function, delay: any) => {
  let timer: any;
  return function () {
    clearInterval(timer);
    timer = setTimeout(() => callBack(), delay);
  };
};

export const highlightSearchedMessage = (
  queryToMatch: string,
  searchQuery: string
) => {
  queryToMatch = queryToMatch?.substring(0, 150);
  const position = queryToMatch
    ?.toLowerCase()
    .indexOf(searchQuery.toLowerCase());
  let result = queryToMatch;
  if (position > -1) {
    const beforeHighlight = queryToMatch.substring(0, position);
    const highlightedPart = queryToMatch.substring(
      position,
      position + searchQuery.length
    );
    const afterHighlight = queryToMatch.substring(
      position + searchQuery.length,
      queryToMatch.length
    );

    result = `${beforeHighlight}<b><font color="red">${highlightedPart}</font></b>${afterHighlight}`;
  }

  return result;
};

