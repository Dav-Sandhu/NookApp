import { useContext } from 'react';
import { JokeContext } from './../Contexts/JokeContext';
import { StyleSheet, Text, View } from 'react-native';

const JokeScreen = () => {
    const [curJoke] = useContext(JokeContext);
    let output;
    if (curJoke.type === 'single'){
        output = curJoke.joke;
    }else{
        output = curJoke.delivery;
    }
    return(
      <View style={styles.container}>
        <Text style={styles.text}>
            {output}
        </Text>
      </View>
    );
}

const styles =  StyleSheet.create({
    text: {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 25,
      color: "purple"
    },
    container: {
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
      backgroundColor: "yellow"
    }
  });

export default JokeScreen;