import React, { Component, Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import TimerMixin from 'react-timer-mixin';

const initialState = {
      initialRemainMsec: 30000,
      remainMsec: 30000,
      previousMsec: 0,
      paused: true,
      finished: false,
      buttonChars: ['S', 'R']
};

export default Timer = React.createClass({

  mixins: [TimerMixin],

  getInitialState() {
    return Object.assign({}, initialState);
  },

  updateTimer() {
    const currentMsec = (+new Date());
    const diff = currentMsec - this.state.previousMsec;
    const remainMsec = this.state.remainMsec - diff;
    const finished = remainMsec < 0;

    if (!finished) {
      this.setState({
        remainMsec: remainMsec,
        finished: finished,
        previousMsec: currentMsec
      });
    } else {
      this.setState({
        remainMsec: remainMsec,
        remainMsec: 0,
        finished: finished,
        previousMsec: currentMsec
      });
    }

    if (!this.state.paused) {
      this.setTimeout(this.updateTimer, 1);
    }
  },

  onPressStartButton(e) {
    const currentMsec = (+new Date());
    const paused = !this.state.paused;

    if (!paused) {
      this.setState({
        currentMsec: currentMsec,
        previousMsec: currentMsec,
        buttonChars: ['P', 'R'],
        paused: paused
      });
      this.setTimeout(this.updateTimer, 1);
    } else {
      this.setState({
        paused: paused,
        buttonChars: ['S', 'R']
      });
    }
  },

  onPressResetButton(e) {
    this.setState(Object.assign({}, initialState));
  },

  render() {
    return (
      <View style={containerStyle.base}>
        <Text style={msecTextStyle.base}>{this.state.remainMsec}</Text>
        <TouchableHighlight onPress={this.onPressStartButton}>
          <View style={[buttonStyle.base, buttonStyle.normal]}><Text style={buttonTextStyle.base}>{this.state.buttonChars[0]}</Text></View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.onPressResetButton}>
          <View style={[buttonStyle.base, buttonStyle.normal]}><Text style={buttonTextStyle.base}>{this.state.buttonChars[1]}</Text></View>
        </TouchableHighlight>
      </View>
    );
  }
});

const containerStyle = StyleSheet.create({
  base: {
    flexDirection: "column",
    alignItems: "center"
  }
});

const msecTextStyle = StyleSheet.create({
  base: {
    fontSize: 72,
    fontWeight: '600'
  }
});

const buttonStyle = StyleSheet.create({
  base: {
    width: 100,
    height: 100,
    marginVertical: 10,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  normal: {
    backgroundColor: '#559900',
    borderColor: '#000000',
    borderWidth: 1
  },
  active: {
    backgroundColor: '#550000'
  }
});

const buttonTextStyle = StyleSheet.create({
  base: {
    fontSize: 50,
    fontWeight: '800',
    textAlign: 'center',
    color: '#FFFFFF'
  }
});
