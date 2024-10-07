import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Modal,Image } from 'react-native';
import PostCard from './PostCardScreen';
import EventCard from './EventCard';
import PostForm from './PostForm';
import EventForm from './EventForm';
import { Icon } from 'react-native-elements';

const DailyUpdatesScreen = () => {
  const [activeTab, setActiveTab] = useState('Posts');
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState('Post');

  const posts = [
    {
      id: '1',
      type: 'Anniversary',
      comment: 'Happy Anniversary!',
      commentedBy: 'John Doe',
      date: '2024-09-01',
      image: 'https://via.placeholder.com/400x200.png?text=Anniversary+Post+1',

      // image: <Image source={require('./Assets/Anniversary.png')} />     
      // image:  require('./Assets/Anniversary.png'),

    },
    {
      id: '2',
      type: 'Comment',
      comment: 'Great job on the project!',
      commentedBy: 'Jane Smith',
      date: '2024-09-02',
      image: 'https://via.placeholder.com/400x200.png?text=Anniversary+Post+1',
    },
  ];

  const events = [
    {
      id: '1',
      type: 'Open House',
      duration: '30 Min',
      description: 'Join us for an open house!',
      createdBy: 'HR Team',
      date: '2024-09-10',
      image: 'https://via.placeholder.com/400x200.png?text=Anniversary+Post+1',
    },
  ];

  const renderContent = () => {
    if (activeTab === 'Posts') {
      return (
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <PostCard post={item} />}
        />
      );
    } else {
      return (
        <FlatList
          data={events}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <EventCard event={item} />}
        />
      );
    }
  };

  return (
    <>
    <Text style={{ fontSize: 20, color: "#edac15",marginTop:10,marginLeft:10,fontWeight:"semi bold",marginBottom:10 }}>Daily Updates</Text>

    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => setActiveTab('Posts')} style={[styles.tab, activeTab === 'Posts' && styles.activeTab]}>
          <Text style={styles.tabText}>Posts</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Events')} style={[styles.tab, activeTab === 'Events' && styles.activeTab]}>
          <Text style={styles.tabText}>Events</Text>
        </TouchableOpacity>
      </View>
      {renderContent()}
      
      <TouchableOpacity style={styles.addButton} onPress={() => { setShowForm(true); setFormType('Post'); }}>
        <Icon name="pluscircle" size={30} type="antdesign" />
      </TouchableOpacity>

      {/* Full-Screen Modal for the Form */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={showForm}
        onRequestClose={() => setShowForm(false)}
      >
        <View style={styles.modalContainer}>
          {formType === 'Post' ? (
            <PostForm onClose={() => setShowForm(false)} />
          ) : (
            <EventForm onClose={() => setShowForm(false)} />
          )}
        </View>
      </Modal>
    </View>
    </>
  );
};

export default DailyUpdatesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  tab: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    width:150,
    justifyContent:"center",
    alignItems:"center"
  },
  activeTab: {
    backgroundColor: '#edac15',
  },
  tabText: {
    fontWeight: 'bold',
    color: '#fff',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#edac15', 
    borderRadius: 30, 
    padding: 10, 
    elevation: 5, 
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff', // Full-screen white background for the form
  },
});

