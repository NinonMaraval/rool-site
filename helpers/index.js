import React, { Fragment, cloneElement } from 'react';
import { get } from 'lodash';

export function geTranslation(traductions, key) {
  return get(traductions, key);
}

function getElements(parts) {
  if (!parts.length) return [];
  const _a = parts.slice(0, 4);
  const paired = _a[0];
  const children = _a[1];
  const unpaired = _a[2];
  const after = _a[3];
  return [
    [(paired || unpaired), children || '', after],
  ].concat(getElements(parts.slice(4, parts.length)));
}

export function formatElements(value = '', elements = []) {
  const tagRe = /<(\w+)>(.*?)<\/\1>|<(\w+)\/>/;
  const nlRe = /(?:\r\n|\r|\n)/g;
  const parts = value.replace(nlRe, '').split(tagRe);

  if (parts.length === 1) return value;
  const tree = [];
  const before = parts.shift();
  if (before) tree.push(before);
  getElements(parts).forEach((_a, realIndex) => {
    const key = _a[0];
    const children = _a[1];
    const after = _a[2];
    const element = elements[key] || React.createElement(Fragment, null);
    tree.push(cloneElement(
      element,
      { key: realIndex },
      children ? formatElements(children, elements) : element.props.children,
    ));
    if (after) tree.push(after);
  });
  return tree;
}
