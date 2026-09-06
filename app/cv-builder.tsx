import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
export default function CVBuilder() {
  const [name, setName] = useState(''); const [skills, setSkills] = useState(''); const [exp, setExp] = useState('');
  const generateCV = () => Alert.alert("CV Ready!", `Name: ${name}\nExp: ${exp}\nSkills: ${skills}`);
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>CV Builder</Text>
      <TextInput style={styles.input} placeholder="Full Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Work Experience" value={exp} onChangeText={setExp} multiline />
      <TextInput style={styles.input} placeholder="Skills" value={skills} onChangeText={setSkills} multiline />
      <TouchableOpacity style={styles.btn} onPress={generateCV}><Text style={styles.btnText}>Generate CV</Text></TouchableOpacity>
    </ScrollView>
  );
}
const styles = StyleSheet.create({container:{flex:1,padding:20,backgroundColor:'#fff'},title:{fontSize:24,fontWeight:'bold',marginBottom:20},input:{borderWidth:1,borderColor:'#ddd',padding:12,borderRadius:8,marginBottom:15,height:50},btn:{backgroundColor:'#007AFF',padding:15,borderRadius:10,alignItems:'center'},btnText:{color:'#fff',fontWeight:'bold'}});
