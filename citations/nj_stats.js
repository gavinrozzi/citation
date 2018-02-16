module.exports = {
  type: "regex",

  id: function(data) {
    return ["nj-statutes", data.title, data.section].join("/");
  },

  patterns: [

    // NJ Stat Ann. § 19.2-56.2 (2010)
    // NJ Stat Ann. § 19.2-56.2 (West 2010)
    // NJ Stat Ann. § 47:1A-1
    // NJ Stat Ann. § 39:4-98
    // NJ Stat Ann. § 63.2-300
    // NJ Stat Ann. § 66-25.1:1
    // Va. Code § 66-25.1:1
    // VA Code § 66-25.1:1
    {
      regex:
        "NJ\\.? Stat\\.?" +
        "(?:\\s+Ann\\.?)?\\s+" +
        "(?:§+\\s*)?" +
        "([\\d\\.]+)\\-([\\d\\.:]+)" +
        "(?:\\s+\\((?:West )?([12]\\d{3})\\))?",
      fields: ['title', 'section', 'year'],
      processor: function (captures) {
        return {
          title: captures.title,
          section: captures.section,
          year: captures.year
        };
      }
    }
  ]
};
