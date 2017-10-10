const handleClick = () => window.alert('Woof');

export default {
  props: {
    type: 'submit',
    onClick: handleClick,
    text: 'Click me'
  }
}
