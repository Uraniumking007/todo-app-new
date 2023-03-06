export default function setAttributes(
  el: HTMLElement,
  attrs: Record<string, any>
) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}
