import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
export default function CoverLetter() {
  const [company, setCompany] = useState(''); const [role, setRole] = useState('');
  const generateLetter = () => Alert.alert("Cover Letter Ready!", `Dear Hiring Manager at ${company},\n\nI am applying for ${role}...`);
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Cover Letter Generator</Text>
      <TextInput style={styles.input} placeholder="Company Name" value={company} onChangeText={setCompany} />
      <TextInput style={styles.input} placeholder="Job Role" value={role} onChangeText={setRole} />
      <TouchableOpacity style={styles.btn} onPress={generateLetter}><Text style={styles.btnText}>Generate Letter</Text></TouchableOpacity>
    </ScrollView>
  );
}
const styles = StyleSheet.create({container:{flex:1,padding:20,backgroundColor:'#fff'},title:{fontSize:24,fontWeight:'bold',marginBottom:20},input:{borderWidth:1,borderColor:'#ddd',padding:12,borderRadius:8,marginBottom:15},btn:{backgroundColor:'#34C759',padding:15,borderRadius:10,alignItems:'center'},btnText:{color:'#fff',fontWeight:'bold'}});
