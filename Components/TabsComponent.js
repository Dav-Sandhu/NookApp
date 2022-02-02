import { StyleSheet, Text, View } from 'react-native';

const CustomTab = (props) => {
    return(
      <View style={styles.container}>
        <Text style={styles.text}>
          {props.name}
        </Text>
      </View>
    );
}

const styles =  StyleSheet.create({
    text: {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 30
    },
    container: {
      alignItems: "center",
      justifyContent: "center",
      flex: 1
    }
  });

  export default CustomTab;