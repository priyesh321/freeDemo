import React, { Component } from 'react';
import { View, Button, StyleSheet } from "react-native";
import t from 'tcomb-form-native';

const Form = t.form.Form;
const User = t.struct({
  username: t.String,
  email: t.String,
  password: t.String,
});


class Signup extends Component {

  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    console.log('value: ', value);
    this.props.navigation.navigate('Login')
  }


  render() {
    return (
      <View style={styles.container}>
        <Form
          ref={c => this._form = c}
          type={User} />
        <Button
         onPress={this.handleSubmit}
          title="Sign Up"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});

export default Signup;