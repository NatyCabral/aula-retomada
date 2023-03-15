import React,{useState, useEffect} from 'react';
import {View, Text, TextInput,TouchableOpacity, Image} from 'react-native'

const App = () => {
  return(
    <View>
     <Text>Digite seu nome:</Text>
  <TextInput />
     <Text>Digite seu sobrenome:</Text>
     <TextInput />
     <TouchableOpacity>
      <Text>BOTÃO</Text>
     </TouchableOpacity>
    </View>
     )
    }
    
    export default App;    
