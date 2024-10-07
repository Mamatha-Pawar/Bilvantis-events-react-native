import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const employees = [
  { id: '1', name: 'Aarav Sharma', designation: 'Software Engineer' },
  { id: '2', name: 'Priya Verma', designation: 'Project Manager' },
  { id: '3', name: 'Rahul Singh', designation: 'Data Analyst' },
  { id: '4', name: 'Ananya Iyer', designation: 'UX Designer' },
  { id: '5', name: 'Vikram Patel', designation: 'Marketing Specialist' },
  { id: '6', name: 'Kavya Rao', designation: 'HR Manager' },
  { id: '7', name: 'Rohan Mehta', designation: 'Backend Developer' },
  { id: '8', name: 'Sneha Gupta', designation: 'Frontend Developer' },
  { id: '9', name: 'Akash Nair', designation: 'DevOps Engineer' },
  { id: '10', name: 'Neha Deshmukh', designation: 'QA Engineer' }
];


const EmployeeListScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    
    <TouchableOpacity 
    
      style={styles.employeeCard} 
      onPress={() => navigation.navigate('EmployeeDetailsScreen', { employee: item })}
    >
      <Text style={styles.employeeName}>{item.name}</Text>
      <Text style={styles.employeeDesignation}>{item.designation}</Text>
    </TouchableOpacity>
  );

  return (
    <>
<Text style={{ fontSize: 20, color: "#edac15",marginTop:10,marginLeft:10,fontWeight:"semi bold",marginBottom:10 }}>Employee List</Text>

    <View style={styles.container}>
      <FlatList
        data={employees}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}

      />
    </View>
    </>
  );
};

export default EmployeeListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  employeeCard: {
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 4, // Applies shadow on Android
    borderColor: '#D1D9E6', // Optional border color
    borderWidth: 1, // Optional border width
  },
  employeeName: {
    fontSize: 18,
    fontWeight: '600',
    borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderColor: '#E5E5E5',
    height: 30,


  },
  employeeDesignation: {
    fontSize: 14,
    color: '#888',
  },
});

