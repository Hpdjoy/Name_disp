import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [username, setUsername] = useState('');
  const [greet, showGreet] = useState(false);

  const showName = () => {
    console.log("Submit button pressed");
    showGreet(true);
    console.log("greet status:",greet);
  };

  const resetgreet = () =>{
    setUsername('');
    showGreet(false);

  }
  return (
    <View style={styles.container}>
      <View>
        {!greet ? (
          <Text style={styles.greetText}>नमस्ते</Text>
        ) : (
          <Text style={styles.greetText}>previat! {username}</Text>
        )}
      </View>

      <Text style={styles.greetText}>     
        welcome to the app
      </Text>

      <TextInput
        style={styles.username}
        placeholder="Enter your name"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />

      <TouchableOpacity style={styles.button} onPress={showName}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={resetgreet}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F19ED2',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  username: {
    backgroundColor: '#F7F9F2',
    height: 50,
    width: 350,
    borderRadius: 8,
    alignContent: 'center',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  greetText: {
    backgroundColor: '#91DDCF',
    height: 150,
    width: 384,
    fontSize: 30,
    fontStyle: 'italic',
    fontWeight: '700',
    textAlign: 'center',
    textAlignVertical: 'center',
    lineHeight: 50,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#E8C5E5',
    height: 40,
    width: 100,
    margin: 10,
    textAlign: 'center',
    borderRadius: 8,
    justifyContent: 'center', // Ensure the text is centered vertically
    alignItems: 'center', // Ensure the text is centered horizontally
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
  },
});
