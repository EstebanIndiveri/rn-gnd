import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect, useDispatch } from 'react-redux';
import { fetchDataUser } from '../../stores/actions/user.action';
import {Button,Card,Title,Paragraph} from 'react-native-paper'
import axios from 'axios';

const DetailsProduct = ({ navigation,id }) => {
  const dispatch = useDispatch()
  const [publication,setPublication] = useState({});

  useEffect(()=>{
      console.log(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <>
      {/* <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} /> */}
      <StatusBar  backgroundColor="transparent" translucent barStyle="dark-content"/>
      {/* <SafeAreaView style={styles.SafeAreaView1} /> */}
      {/* <SafeAreaView style={styles.SafeAreaView2}> */}
        <View>
        <Title>Details Publication</Title>
        </View>     
      {/* </SafeAreaView> */}
    </>
  )
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.users
  }
}

export default connect(mapStateToProps, null)(DetailsProduct)
