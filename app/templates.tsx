import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function Templates() {
  const [image, setImage] = useState<string | null>(null);
  const templates = ["Modern", "Professional", "Simple", "Creative", "Executive", "Student", "Tech", "Corporate"];
  
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({allowsEditing: true, aspect: [1, 1]});
    if (!result.canceled) setImage(result.assets[0].uri);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>8 CV Templates</Text>
      {templates.map((t, i) => <TouchableOpacity key={i} style={styles.template}><Text>Template {i+1}: {t}</Text></TouchableOpacity>)}
      
      <TouchableOpacity style={styles.btn} onPress={pickImage}><Text style={styles.btnText}>Upload Photo for CV</Text></TouchableOpacity>
      {image && <Image source={{ uri: image }} style={styles.image} />}
    </View>
  );
}
const styles = StyleSheet.create({
  container:{flex:1,padding:20,backgroundColor:'#fff'},title:{fontSize:24,fontWeight:'bold',marginBottom:20},
  template:{padding:15,backgroundColor:'#F2F2F2',borderRadius:10,marginBottom:8,alignItems:'center'},
  btn:{backgroundColor:'#AF52DE',padding:15,borderRadius:10,alignItems:'center',marginTop:10},
  btnText:{color:'#fff',fontWeight:'bold'},image:{width:100,height:100,borderRadius:50,marginTop:15,alignSelf:'center'}
});
