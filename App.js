import * as React from 'react';
import { Text, View, StyleSheet, Button, TouchableWithoutFeedback, Alert } from 'react-native';
import { Constants } from 'expo';
import { RadioButtons, SegmentedControls } from 'react-native-radio-buttons';

import "prop-types";
//asdf
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {

constructor(props) {
    super(props);
    this.state = {
      selectedOption: "Thursday & Friday"
    };
  }

  render() {

    const options = ['Monday & Tuesday', 'Tuesday & Wednesday', 'Wednesday & Thursday', 'Thursday & Friday'];

    function setSelectedOption(selectedOption) {
      this.setState({
        selectedOption,
      });
    }

    function renderOption(option, selected, onSelect, index) {

      const style = selected ? {
        padding: 2,
        color: '',
        textAlign: 'center',
        fontWeight: 'bold'
      } : {
        padding: 2,
        //v0.3
        textAlign: 'center',
        fontStyle: "italic"
      };

      return (
        <TouchableWithoutFeedback onPress={onSelect} key={index}>
          <Text style={style}>{option}</Text>
        </TouchableWithoutFeedback>
      );
    }

    function renderContainer(optionNodes) {
      return <View>{optionNodes}</View>;
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Class Registration
        </Text>
        <Text style={styles.paragraph}>
          We are pre-registering for the next tutorial. The class will be two days long.  Please register for one of the following options:
        </Text>

        <RadioButtons
            options={options}
            onSelection={setSelectedOption.bind(this)}
            selectedOption={this.state.selectedOption}
            renderOption={renderOption}
            renderContainer={renderContainer}
        />

        <View style={{paddingTop: 30}}>
          <Button
            title="Submit"
            color="purple"
            accessibilityLabel="Submit your selection"
            onPress={

              () => {

                Alert.alert('Your response has been recorded!');

              }
            }
          />
        </View>

      </View>
    );

  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

  paragraph: {
    margin: 24,
    
    fontSize: 20,
    fontWeight: 'italics',
    textAlign: 'center',
  
  },

  title: {
    color: 'green',
    paddingBottom: 20,
    textDecorationLine: 'underline',
    margin: 24,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});