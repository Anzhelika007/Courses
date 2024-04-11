const CssClasses = {
  FOOTER: 'footer',
};
const TEXT = 'SPA example app';

export default class FooterView {
  constructor() {

  }

  createView() {
    const element = document.createElement('footer');
    element.textContent = TEXT;
    element.classList.add(CssClasses.FOOTER);


    return element;
  }
}