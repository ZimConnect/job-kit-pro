import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();
  const menu = [
    {name: "1. CV Builder", route: "/cv-builder"},
    {name: "2. Cover Letters", route: "/cover-letter"},
    {name: "3. Interview Q&A", route: "/interview"},
    {name: "4. Applications Tracker", route: "/applications"},
    {name: "5. 8 CV Templates + Photo", route: "/templates"},
    {name: "6. Job Board - Post/Apply", route: "/jobs"},
  ]
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Job Kit Pro V3</Text>
      <Text style={styles.subtitle}>The Complete $3 Job Search Kit for ZW</Text>
      {menu.map((item, i) => (
        <TouchableOpacity key={i} style={styles.btn} onPress={() => router.push(item.route)}>
          <Text style={styles.btnText}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {flexGrow: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#fff'},
  title: {fontSize: 28, fontWeight: 'bold', marginBottom: 5},
  subtitle: {fontSize: 14, marginBottom: 30, color: 'gray', textAlign: 'center'},
  btn: {backgroundColor: '#007AFF', padding: 15, borderRadius: 10, width: '95%', alignItems: 'center', marginBottom: 10},
  btnText: {color: '#fff', fontWeight: 'bold', fontSize: 16}
});
