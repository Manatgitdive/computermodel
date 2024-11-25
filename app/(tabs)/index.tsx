import { Image, StyleSheet, Platform, Pressable } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const handlePress = () => {
    console.log('Button pressed!');
    // Add your button action here
  };

  return (
    <ParallaxScrollView>
      <ThemedView style={styles.container}>
        <HelloWave />
        <ThemedText style={styles.title}>Welcome Home</ThemedText>
        
        <Pressable 
          style={({ pressed }) => [
            styles.button,
            { opacity: pressed ? 0.8 : 1 }
          ]}
          onPress={handlePress}
        >
          <ThemedText style={styles.buttonText}>Click Me!</ThemedText>
        </Pressable>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});