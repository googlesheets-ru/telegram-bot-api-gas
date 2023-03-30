{
  const downloadAsfile = (data, filename) => {
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/plain;charset=utf-8,' + encodeURI(data);
    hiddenElement.target = '_blank';
    hiddenElement.download = filename;
    hiddenElement.click();
  };

  const prefix = 'TelegramBot.';
  const getType = (str) => {
    const [t, a1, a2] = str
      .split('Array of ')
      .reverse()
      .map((s) => s || '[]');
    const type =
      ({
        True: '"true"',
        String: 'string',
        Boolean: 'boolean',
        Integer: 'number',
        'Float number': 'number',
        Float: 'number',
      }[t] || `${prefix}${t}`) +
      (a1 || '') +
      (a2 || '');
    return type;
  };

  const objToJSDocForGAS = (obj, className) => {
    const _ = [];
    _.push('/**');
    _.push(' * @typedef {{');
    Object.keys(obj).forEach((key) => {
      _.push(` *   ${key}: ${obj[key].type};`);
    });
    _.push(` * }} ${prefix}${className}`);
    _.push(' */');
    return _;
  };

  (async () => {
    const els = document.querySelectorAll('h3, h4, tr, td');
    const res = [];
    let switcher = false;
    let className = '';
    let newRowIndex = -1;
    els.forEach((el) => {
      if (el.tagName === 'H3') switcher = el.textContent === 'Available types' || el.textContent === 'Getting updates';
      if (!switcher) return;
      if (el.tagName === 'H4') {
        className = el.textContent;
        return;
      }
      if (el.tagName === 'TR') {
        newRowIndex = res.push([className]) - 1;
        return;
      }
      if (el.tagName === 'TD') {
        res[newRowIndex].push(el.textContent);
        return;
      }
    });

    // const types = {}; // Types list debug and checking

    const jsdoc = res
      .filter((item) => item.length === 4)
      .reduce((a, c) => {
        const [className, field, type_, description] = c;
        const type = type_.split(' or ').map(getType).join(' | ');
        // types[type] = 1 + (types[type] || 0);
        if (!a[className]) a[className] = {};
        const optional = /^Optional\./.test(description) ? '?' : '';
        a[className][`${field}${optional}`] = {
          type,
          description,
        };
        return a;
      }, {});

    const out = Object.keys(jsdoc)
      .map((key) => objToJSDocForGAS(jsdoc[key], key).join('\n'))
      .join('\n\n');

    downloadAsfile(out, 'types.js');
  })();
}
