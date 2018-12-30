export const defineAction = 
  (raiz, suffixes) => 
    suffixes.reduce((acc, suffixe) => 
      Object.assign({}, acc, { [`${suffixe}`]: `${raiz}::${suffixe}` }),
    {});

