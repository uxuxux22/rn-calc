import { StyleSheet, Text, View } from "react-native";

const App = () => {
  return(
    <View style={styled.container}>
      <Text>글을 입력합니다. p태그 = Text</Text> 
    </View>
  );
}

const styled = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"pink",
    alignItems:'center',
    justifyContent:'center',
  },
})

export default App;