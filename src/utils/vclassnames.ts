type ClassParam = string | Boolean;
const classnames = (...classes: ClassParam[]): string =>
  classes.filter(Boolean).join(' ');

export { classnames };
