type ClassParam = string | boolean | null;
const classnames = (...classes: ClassParam[]): string =>
  classes.filter(Boolean).join(' ');

export { classnames };
