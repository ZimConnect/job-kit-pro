import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

export default function Jobs() {
  const [jobTitle, setJobTitle] = useState(''); const [jobs, setJobs] = useState<string[]>([]);
  const postJob = () => { if(jobTitle) setJobs([...jobs, jobTitle]); setJobTitle(''); Alert.alert("Job Posted!") }
  const uploadCV = async () => { let result = await DocumentPicker.getDocumentAsync(); if (result.assets) Alert.alert("CV Uploaded!", result.assets[0].name) }
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Job Board</Text>
      <Text style={styles.subtitle}>For Employers: Post Job</Text>
      <TextInput style={styles.input} placeholder="Job Title" value={jobTitle} onChangeText={setJobTitle} />
      <TouchableOpacity style={styles.btn} onPress={postJob}><Text style={styles.btnText}>Post Vacancy</Text></TouchableOpacity>
      
      <Text style={styles.subtitle}>For Job Seekers: Upload CV</Text>
      <TouchableOpacity style={styles.btn2} onPress={uploadCV}><Text style={styles.btnText}>Upload Your CV PDF</Text></TouchableOpacity>
      {jobs.map((job, i) => <Text key={i} style={styles.job}>• {job} - Hiring Now</Text>)}
    </ScrollView>
  );
}
const styles = StyleSheet.create({container:{flex:1,padding:20,backgroundColor:'#fff'},title:{fontSize:24,fontWeight:'bold',marginBottom:10},subtitle:{fontSize:16,fontWeight:'bold',marginTop:15,marginBottom:5},input:{borderWidth:1,borderColor:'#ddd',padding:12,borderRadius:8,marginBottom:10},btn:{backgroundColor:'#FF3B30',padding:15,borderRadius:10,alignItems:'center',marginBottom:20},btn2:{backgroundColor:'#007AFF',padding:15,borderRadius:10,alignItems:'center',marginBottom:20},btnText:{color:'#fff',fontWeight:'bold'},job:{fontSize:16,padding:10,backgroundColor:'#F2F2F2',borderRadius:8,marginBottom:8}});
