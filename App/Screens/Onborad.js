import React from 'react';
import {View,StyleSheet,ImageBackground,StatusBar,Text,TouchableOpacity, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import colors from '../Assets/Config/colors';
import Login from './Login';
const Onboard = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground
        style={{flex: 1}}
        source={require('../Assets/Images/android.png')}>
          {/* <View style={{alignSelf:'center',backgroundColor:"white",height:"30%",width:"90%",marginTop:"15%",borderRadius:30}}> */}
            <Swiper
            loop
            autoplay
            autoplayTimeout={3}
            dot={
              <View style={{width:8,height:8,borderRadius:4,margin:5, backgroundColor:'#dddedd'}}></View>
            }
            activeDot={
              <View style={{width:12,height:12,borderRadius:6,margin:5,backgroundColor:'#ffffff'}}></View>
            }
            >
        <View>
          <Image
          style={{height:"70%",width:"100%",elevation:5,alignSelf:"center",marginTop:50,borderRadius:25}}
          source={require('../Assets/Images/Vector.png')}/>
        </View>
        <View>
          <Image
          style={{width:"100%",height:"70%",alignSelf:"center",borderRadius:25,marginTop:50,elevation:5}}
          source={require('../Assets/Images/Vector1.png')}/>
        </View>
        <View>
          <Image
          style={{width:"100%",height:"70%",alignSelf:"center",borderRadius:25,marginTop:50,elevation:5}}
          source={require('../Assets/Images/Vector2.png')}/>
        </View>
        <View>
          <Image
          style={{width:"100%",height:"70%",alignSelf:"center",borderRadius:25,marginTop:50,elevation:5}}
          source={require('../Assets/Images/Vector3.png')}/>
        </View>
        <View>
          <Image
          style={{width:"100%",height:"70%",alignSelf:"center",borderRadius:25,marginTop:60,elevation:5}}
          source={require('../Assets/Images/Vector4.png')}/>
        </View>
            </Swiper>
            {/* </View> */}
          {/* <Swiper style={{}}>
        
        <View >
        <Image 
          source={require('../Assets/Images/bag4.png')}/>
        </View>
        <View >
        <Image 
          source={require('../Assets/Images/bag5.png')}/>
        </View>
          </Swiper> */}
          
        {/* <View style={{width:190,height:190,backgroundColor:'white',marginLeft:100,marginTop:70,borderRadius:100,borderColor:'#186DEE',borderWidth:3}}>
        <Image 
         style={{width:180,height:180,marginLeft:3,marginTop:3,borderRadius:100}}
         source={require('../Assets/Images/bag2.png')}>
        </Image>
        </View> */}
        <View style={style.details}>
          <Text style={{color: colors.white,fontFamily:'Merriweather-Bold', fontSize: 45, fontWeight: 'bold',marginTop:30,marginLeft:-10}}>
            Online Shop
          </Text>
          <Text style={{color: colors.white, fontSize: 45, fontWeight: 'bold',marginLeft:-10}}>
             with Queens
          </Text>
          <Text style={{color: colors.white, lineHeight: 25, marginTop: 15,marginLeft:-8,fontSize:25,fontFamily:'Merriweather-Bold'}}>
                let's enjoy to shopping online with Queens
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}
            activeOpacity={0.8}
            >
            <View style={style.btn}>
              <Text style={{fontWeight: 'bold',color:colors.Google1,fontSize:18}}>Get Started</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  details: {
    height: '50%',
    bottom: 0,
    position: 'absolute',
    paddingHorizontal: 40,
  },
  btn: {
    height: 60,
    width: 140,
    backgroundColor: colors.white,
    marginTop: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:colors.white,
    borderWidth:5
  },
});
export default Onboard;