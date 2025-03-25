import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";

const sportsList = [
  { id: "1", name: "Weightlifting" },
  { id: "2", name: "Running" },
  { id: "3", name: "Football" },
  { id: "4", name: "Basketball" },
  { id: "5", name: "Tennis" },
  { id: "6", name: "Golf" },
  { id: "7", name: "Yoga" },
  { id: "8", name: "Dancing" },
  { id: "9", name: "Cycling" },
];

const SportsSelectionScreen = ({ navigation }) => {
  const [selectedSport, setSelectedSport] = useState<string | null>(null);

  const handleSelectSport = (sport: string) => {
    setSelectedSport(sport);
    // Navigate to the next screen (could be training setup or form analysis page)
    navigation.navigate("TrainingSetup", { sport });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Sport</Text>

      <FlatList
        data={sportsList}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.sportButton,
              selectedSport === item.name && styles.selectedSport,
            ]}
            onPress={() => handleSelectSport(item.name)}
          >
            <Text style={styles.sportText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  sportButton: {
    backgroundColor: "#ccc",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    margin: 10,
    alignItems: "center",
    width: "40%",
  },
  selectedSport: {
    backgroundColor: "#008F6A",
  },
  sportText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SportsSelectionScreen;
