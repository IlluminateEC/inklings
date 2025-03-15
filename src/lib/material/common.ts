export type Color = 'primary'|'secondary'|'tertiary';

export function get_offset(element: HTMLElement): {y: number; x: number} {
  var x = 0;
  var y = 0;

  while (element && !isNaN(element.offsetLeft) && !isNaN(element.offsetTop)) {
    x += element.offsetLeft - element.scrollLeft;
    y += element.offsetTop - element.scrollTop;
    element = element.offsetParent as HTMLElement;
  }

  return {y: y, x: x};
}