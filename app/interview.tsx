import { ScrollView, Text, View, StyleSheet } from 'react-native';
const questions = [
  {q: "Tell me about yourself", a: "I am a hardworking person with experience in... Skilled in..."},
  {q: "Why should we hire you?", a: "I bring results. At my last job I increased sales by..."},
  {q: "What is your weakness?", a: "I used to be a perfectionist. Now I use planners to manage time."},
  {q: "Where do you see yourself in 5 years?", a: "Growing with this company and leading a team."},
  {q: "Why do you want this job?", a: "Because my skills match perfectly and I admire your company."}
];
export default function Interview() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Interview Q&A</Text>
      {questions.map((item, i) => (
        <View key={i} style={styles.card}><Text style={styles.q}>Q: {item.q}</Text><Text style={styles.a}>A: {item.a}</Text></View>
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({container:{flex:1,padding:20,backgroundColor:'#fff'},title:{fontSize:24,fontWeight:'bold',marginBottom:20},card:{backgroundColor:'#F2F2F2',padding:15,borderRadius:10,marginBottom:15},q:{fontWeight:'bold',fontSize:16,marginBottom:5},a:{fontSize:14,color:'#333'}});
