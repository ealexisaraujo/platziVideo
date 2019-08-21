import { storiesOf } from '@storybook/html';

storiesOf('Button', module)
  .add('with text', () => '<button class="btn">Hello World</button>')
  .add('with emoji', () => {
    const button = document.createElement('button');
    button.innerText = '😀 😎 👍 💯';
    return button})
  .add('with emoji and text', () => {
    const button = document.createElement('button');
    button.innerText = 'Hola estudiantes 🍫';
    return button})
