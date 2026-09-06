import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
export default function Applications() {
  const [company, setCompany] = useState(''); const [apps, setApps] = useState<string[]>([]);
  const addApp = () => { if(company) setApps([...apps, company + " - Applied"]); setCompany(''); }
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Applications Tracker</Text>
      <TextInput style={styles.input} placeholder="Company Name" value={company} onChangeText={setCompany} />
      <TouchableOpacity style={styles.btn} onPress={addApp}><Text style={styles.btnText}>Add Application</Text></TouchableOpacity>
      {apps.map((app, i) => <Text key={i} style={styles.app}>• {app}</Text>)}
    </ScrollView>
  );
}
const styles = StyleSheet.create({container:{flex:1,padding:20,backgroundColor:'#fff'},title:{fontSize:24,fontWeight:'bold',marginBottom:20},input:{borderWidth:1,borderColor:'#ddd',padding:12,borderRadius:8,marginBottom:15},btn:{backgroundColor:'#FF9500',padding:15,borderRadius:10,alignItems:'center',marginBottom:20},btnText:{color:'#fff',fontWeight:'bold'},app:{fontSize:16,padding:10,backgroundColor:'#F2F2F2',borderRadius:8,marginBottom:8}});
