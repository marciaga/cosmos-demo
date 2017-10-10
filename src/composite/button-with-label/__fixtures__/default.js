const handleClick = () => window.alert('Slammed');

export default {
  props: {
    buttonText: 'Slam it',
    label: 'Click to slam',
    onClick: handleClick
  }
}
