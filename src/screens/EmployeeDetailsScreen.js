import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const EmployeeDetailsScreen = ({ route }) => {
  const { employee } = route.params;
  const [activeTab, setActiveTab] = useState('Projects');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Projects':
        const projects = [
          { id: '1', name: 'Project Alpha', description: 'A mobile app for e-commerce.' },
          { id: '2', name: 'Project Beta', description: 'A web portal for a healthcare system.' },
        ];

        return (
          <FlatList
            data={projects}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardDescription}>{item.description}</Text>
              </View>
            )}
          />
        );
      case 'Tech Stack Details':
        return (
          <View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Primary Skills</Text>
              <Text style={styles.cardDescription}>JavaScript, TypeScript</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Secondary Skills</Text>
              <Text style={styles.cardDescription}>React Native, Redux</Text>
            </View>
          </View>
        );
      case 'Org Structure':
        return (
          <View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>L1</Text>
              <Text style={styles.cardDescription}>John Doe</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>L2</Text>
              <Text style={styles.cardDescription}>Jane Smith</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Jr</Text>
              <Text style={styles.cardDescription}>Michael Lee</Text>
            </View>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => setActiveTab('Projects')} style={activeTab === 'Projects' ? styles.activeTab : styles.tab}>
          <Text style={activeTab === 'Projects' ? styles.activeTabText : styles.tabText}>Projects</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Tech Stack Details')} style={activeTab === 'Tech Stack Details' ? styles.activeTab : styles.tab}>
          <Text style={activeTab === 'Tech Stack Details' ? styles.activeTabText : styles.tabText}>Tech Stack</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Org Structure')} style={activeTab === 'Org Structure' ? styles.activeTab : styles.tab}>
          <Text style={activeTab === 'Org Structure' ? styles.activeTabText : styles.tabText}>Org Structure</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        {renderTabContent()}
      </View>
    </View>
  );
};

export default EmployeeDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  activeTab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#edac15',
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  tabText: {
    color: '#000',
    fontWeight: '600',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  contentContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 4, // Applies shadow on Android
    borderColor: '#D1D9E6', // Optional border color
    borderWidth: 1, // Optional border width
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
     borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderColor: '#E5E5E5',
     height: 30,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
  },
});
