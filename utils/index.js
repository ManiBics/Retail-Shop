export const getLocale = (slug, url = "/") => {
  let locale = undefined;
  const newSlug = [];
  (slug ?? [""]).forEach((name) => {
    const localePattern = /^[a-z]{2}(-[A-Z]{2})?$/;
    const isValidLocale = localePattern.test(name);
    if (name === "index") return;
    if (isValidLocale) {
      locale = name;
      const newUrl = url.replace("/", "");
      if (newUrl) {
        newSlug.push(newUrl);
      }
      return;
    }
    newSlug.push(name);
  });
  return { locale, newSlug };
};
