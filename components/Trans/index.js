import { formatElements } from '../../helpers';

const Trans = ({ fnTranslate, transKey, components }) => (
  formatElements(fnTranslate(transKey), components)
);

export default Trans;
