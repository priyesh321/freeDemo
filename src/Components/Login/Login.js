import React, { Component } from 'react';
import { View, Button, StyleSheet } from "react-native";
import t from 'tcomb-form-native';

const Form = t.form.Form;
const User = t.struct({
  email: t.String,
  password: t.String,
});


class Login extends Component {

  handleLogin = () => {
    this.props.navigation.navigate('Dashboard')
  }


  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Form
          ref={c => this._form = c}
          type={User} />
        <Button
          onPress={this.handleLogin}
          title="Login"
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

export default Login;