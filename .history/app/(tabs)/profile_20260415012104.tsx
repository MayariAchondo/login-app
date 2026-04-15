import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen() {
  const { email } = useLocalSearchParams<{ email: string }>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <Text style={styles.label}>Correo electrónico:</Text>
      <Text style={styles.email}>{email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 24 },
  label: { fontSize: 16, color: '#666', marginBottom: 8 },
  email: { fontSize: 18, fontWeight: 'bold', color: '#007AFF' },
});