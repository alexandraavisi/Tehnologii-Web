const formatStringFunction = (s, ...format) => {
  let newString = s;
  for (let i = 0; i < format.length; i++) {
    if (newString.indexOf("{substantiv}") !== -1) {
      newString = newString.replace("{substantiv}", format[0]);
    } else if (newString.indexOf("{adjectiv}") !== -1) {
      newString = newString.replace("{adjectiv}", format[1]);
    }
  }
  return newString;
};

console.log(formatStringFunction("un {substantiv} este {adjectiv}", "calut", "dragut"));