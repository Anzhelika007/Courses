@typedef{{
  tag: string,
  className: Array<string>,
  textContent: string,
  callback: function,
}} ElementParams


export default class ElementCreator {

  /**
   * @param {ElementParams} param
   */
  constructor(param) {
    this.element = null;
    this.param = param;
  }

  createElement(param) {
    const  element
  }
}