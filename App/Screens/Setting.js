import React, { useState,useRef,useMemo,useCallback } from 'react';
import {StyleSheet,SafeAreaView,ScrollView, View,Text,Image,TouchableOpacity,Switch} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Arrowleft from 'react-native-vector-icons/Feather';
import RBSheet from 'react-native-raw-bottom-sheet';
const SECTIONS = [
  {
    header: 'Preferences',
    items: [
      { id: 'language', icon: 'globe', label: 'Language', type: 'select' },
      { id: 'darkMode', icon: 'moon', label: 'Dark Mode', type: 'toggle' },
      { id: 'wifi', icon: 'wifi', label: 'Use Wi-Fi', type: 'toggle' },
    ],
  },
  {
    header: 'Help',
    items: [
      { id: 'contact', icon: 'mail', label: 'Contact Us', type: 'link' },
    ],
  },
  {
    header: 'Content',
    items: [
      { id: 'save', icon: 'save', label: 'Saved', type: 'link' },
      { id: 'download', icon: 'download', label: 'Downloads', type: 'link' },
    ],
  },
];


export default function Setting({navigation}) {
  const [form, setForm] = useState({
    language: 'English',
    darkMode: true,
    wifi: false,
  });
  const snapPoints = useMemo( () => ['25%' , '40%'], []);

 // callbacks
  const handleSheetChange = useCallback( index => {
    console.log(index);
  }, []);
  const refRBSheet = useRef();
  return (
    <SafeAreaView style={{ backgroundColor: '#ffff' }}>
      <RBSheet 
        ref={refRBSheet}
        closeOnPressMask={false}
        closeOnDragDown={true}
        snapPoints={snapPoints}
        onChange={handleSheetChange}
        height={300}
        borderTopLeftRadius={30}
        borderTopRightRadius={30}
        customStyles={{
          wrapper: {
            // borderTopLeftRadius:30,
            // borderTopRightRadius:30,
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
        <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
       <TouchableOpacity style={styles.panelButton}>
         <Text style={styles.panelButtonTitle}>Take Photo</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.panelButton} >
         <Text style={styles.panelButtonTitle}>Choose From Library</Text>
       </TouchableOpacity>
       <TouchableOpacity  onPress={() => refRBSheet.current.close()}
         style={styles.panelButton}
         >
         <Text style={styles.panelButtonTitle}>Cancel</Text>
       </TouchableOpacity>

      </RBSheet>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={{marginTop:10,justifyContent:'center',alignItems:'center'}}>
        {/* <Arrowleft
                    onPress={()=>  navigation.goBack()} 
                    style={{marginTop:10,alignSelf:'center',marginLeft:-360}}
                    name="arrow-left-circle"
                    color={'black'}
                    size={30}
                /> */}
         
          <Text style={{fontSize: 32,fontWeight: '700',color:'#333',}}>Settings</Text>
         
        </View>

        <View style={styles.profile}>
          <Image
            alt=""
            source={require('../Assets/Images/man.png')}
            style={styles.profileAvatar}
          />

          <Text style={styles.profileName}>Hi John</Text>

          <Text style={styles.profileEmail}>john@mail.com</Text>

          <TouchableOpacity
            onPress={() => refRBSheet.current.open()}
           >
            <View style={styles.profileAction}>
              <Text style={styles.profileActionText}>Edit Profile</Text>

              <FeatherIcon color="#fff" name="edit" size={16} />
            </View>
          </TouchableOpacity>
        </View>

        {SECTIONS.map(({ header, items }) => (
          <View style={styles.section} key={header}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderText}>{header}</Text>
            </View>
            <View style={styles.sectionBody}>
              {items.map(({ id, label, icon, type, value }, index) => {
                return (
                  <View
                    key={id}
                    style={[
                      styles.rowWrapper,
                      index === 0 && { borderTopWidth: 0 },
                    ]}>
                    <TouchableOpacity
                      onPress={() => {
                        // handle onPress
                      }}>
                      <View style={styles.row}>
                        <FeatherIcon
                          color="#616161"
                          name={icon}
                          style={styles.rowIcon}
                          size={22}
                        />

                        <Text style={styles.rowLabel}>{label}</Text>

                        <View style={styles.rowSpacer} />

                        {type === 'select' && (
                          <Text style={styles.rowValue}>{form[id]}</Text>
                        )}

                        {type === 'toggle' && (
                          <Switch
                            onChange={val => setForm({ ...form, [id]: val })}
                            value={form[id]}
                          />
                        )}

                        {(type === 'select' || type === 'link') && (
                          <FeatherIcon
                            color="#ababab"
                            name="chevron-right"
                            size={22}
                          />
                        )}
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
  },
  section: {
    paddingTop: 12,
  },
  sectionHeader: {
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  sectionHeaderText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#a7a7a7',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  sectionBody: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
  },
  header: {
    paddingLeft: 24,
    //paddingRight: 24,
    //marginBottom: 12,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
  },
  profile: {
    padding: 16,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
  },
  profileAvatar: {
    width: 70,
    height: 70,
    borderRadius: 9999,
  },
  profileName: {
    marginTop: 12,
    fontSize: 20,
    fontWeight: '600',
    color: '#090909',
  },
  profileEmail: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: '400',
    color: '#848484',
  },
  profileAction: {
    marginTop: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff',
    borderRadius: 12,
  },
  profileActionText: {
    marginRight: 8,
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: 24,
    height: 50,
  },
  rowWrapper: {
    paddingLeft: 24,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#e3e3e3',
  },
  rowIcon: {
    marginRight: 12,
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: '500',
    color: '#000',
  },
  rowValue: {
    fontSize: 17,
    color: '#616161',
    marginRight: 4,
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
  },
  panelButtonTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop:10,
      color: 'white',
    },
    panelTitle: {
      fontSize: 27,
      height: 35,
    },
    panelSubtitle: {
      fontSize: 14,
      color: 'gray',
      height: 30,
      marginBottom: 10,
    },
    panelButton: {
      //padding: 13,
      width:'90%',
      height:50,
      marginLeft:20,
      borderRadius: 10,
      backgroundColor: '#186DEE',
      alignItems: 'center',
      marginVertical: 7,
    },
});