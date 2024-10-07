import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const verticals = [
  { id: '1', name: 'DE', employeeCount: 150, logo: 'https://example.com/de-logo.png', color: 'white' },
  { id: '2', name: 'CDE', employeeCount: 120, logo: 'https://example.com/cde-logo.png',color: 'white' },
  { id: '3', name: 'Heritage', employeeCount: 80, logo: 'https://example.com/heritage-logo.png',  color: 'white' },
  { id: '4', name: 'HR', employeeCount: 50, logo: 'https://example.com/hr-logo.png', color: 'white' },
  { id: '5', name: 'Talent Acquisition', employeeCount: 60, logo: 'https://example.com/ta-logo.png', color: 'white' },
];

const DashboardScreen = ({ navigation }) => {
  const renderVerticalItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.verticalCard, { backgroundColor: item.color }]}
      onPress={() => navigation.navigate('VerticalDetailsScreen', { vertical: item })}
      
    >
      
      <Image source={{ uri: item.logo }} style={styles.verticalLogo} />
      <View style={styles.verticalInfo}>
        <Text style={styles.verticalName}>{item.name}</Text>
        <Text style={styles.verticalCount}>Employees: {item.employeeCount}</Text>
      </View>
      
    </TouchableOpacity>
  );

  return (
    <>
    <Text style={{ fontSize: 20, color: "#edac15",marginTop:10,marginLeft:10,fontWeight:"semi bold",marginBottom:10 }}>Verticals Dashboard</Text>

    <View style={styles.container}>
<FlatList
        data={verticals}
        keyExtractor={item => item.id}
        renderItem={renderVerticalItem}
        contentContainerStyle={styles.verticalList}

      />
    </View>
    </>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  cardView: { width: '48%', height: 108, backgroundColor: 'white', marginTop: 20 },
  wrapView: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 1,
    marginLeft: 1
},
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F7F9FC', // Light background color for the screen
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', // Darker color for the title
  },
  verticalList: {
    paddingBottom: 20,
  },
  verticalCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 2,
  },
  verticalLogo: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 25, // Make logo circular
  },
  verticalInfo: {
    flex: 1,
  },
  verticalName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333', // Darker text color for better readability
  },
  verticalCount: {
    fontSize: 14,
    color: '#555', // Slightly lighter color for employee count
  },
});
