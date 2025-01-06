import React, { useState } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';
import Tts from 'react-native-tts';
import axios from 'axios';
import Markdown from 'react-native-markdown-display';
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("");//Insert Api key here
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });



const AppPro = () => {
  const [inputText, setInputText] = useState<string>('');
  const [responseText, setResponseText] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

 
  const handleInputChange = (text: string) => {
    setInputText(text);
  };

  
  const processTextWithGemini = async () => {
    if (!inputText.trim()) {
      alert('Please enter some text.');
      return;
    }

    setIsProcessing(true);

    try {
      const res = await model.generateContent(inputText); 
      const responseData = res.response.text();
      setResponseText(responseData);
      speakText(responseData);
    } catch (error) {
      console.error('Error processing text with Gemini API:', error);
    } finally {
      setIsProcessing(false);
      
    }
  };

 
  const speakText = (text: string) => {
    // let final= text.replace('**','')
    // final=final.replace('***','')
    // console.log(text)
    // console.log(final)
    // Tts.speak(final);
    const charactersToIgnore = /[@#$%^&*()]/g; 
    let final= text.replace(charactersToIgnore, '');
    Tts.speak(final);
   
  };

    function cleartext(): void {
        setInputText("")
        setResponseText("")
        Tts.stop()
    }

  return (
    
      
    <View style={styles.container}>
     <Text style={styles.title}>VIRTUAL ASSISTANT</Text>

      
      <ScrollView>
      <Markdown >{responseText}</Markdown>
      
      </ScrollView>
      `${responseText?<Button title="Clear" onPress={cleartext}/>:<Text></Text>}`
      <Text style={styles.title}>Enter Text:</Text>
      <TextInput
        style={styles.input}
        placeholder="Type something..."
        value={inputText}
        onChangeText={handleInputChange}
      />

      <Button title="Process Text" onPress={processTextWithGemini} />

      {isProcessing && <ActivityIndicator size="large" color="#0000ff" />}
    </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
    display:'flex',
    backgroundColor:"#ffffff",
    padding:20,
    height:810,
    justifyContent:'center',
    alignItems:'center',
    
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
  },
  responseText: {
    fontSize: 16,
    marginVertical: 15,
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    width: '100%',
  },
});

export default AppPro;
function alert(arg0: string) {
    throw new Error('Function not implemented.');
}

