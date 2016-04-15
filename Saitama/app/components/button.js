import React, {
  View,
  Text,
  PropTypes
} from 'react-native';

const Button = React.createClass({

  propTypes: {
    text: PropTypes.string.isRequired
  },

  render() {
    return (
      <View>
        <Text>{this.props.text}</Text>
      </View>
    );
  }
});

export default Button;
