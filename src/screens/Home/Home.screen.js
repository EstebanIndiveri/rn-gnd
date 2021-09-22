import React,{useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styles from './Home.style';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect, useDispatch } from 'react-redux';
import { fetchDataUser } from '../../stores/actions/user.action';
import {Button,Card,Title,Paragraph} from 'react-native-paper'
import axios from 'axios';

const Home = ({ navigation, user }) => {
  const dispatch = useDispatch()
  const [offers, setOffers] = useState([]);
  const [charge,setCharge]=useState(false);

  const handlePress=async()=>{
    try{
      setCharge(true);
      const res =await axios.get('https://api.xercana.com/publication/offer');
      setOffers(res.data);
      console.log(offers)
    }catch(error){
      console.log(error);
    }
    setCharge(false);
  };

  function ListUser() {
    return user.map(data => {
      return (
        <View
          key={data.id}
          style={{
            borderBottomWidth: 1,
            borderColor: '#eee',
            padding: 1,
            marginTop: 10
          }}>
          <Text style={{ fontSize: 15 }}>
            {data.id}. {data.name}
          </Text>
        </View>
      )
    })
  }
  return (
    <>
      {/* <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} /> */}
      <StatusBar  backgroundColor="transparent" translucent barStyle="dark-content"/>
      <SafeAreaView style={styles.SafeAreaView1} />
      <SafeAreaView style={styles.SafeAreaView2}>
      {offers.length===0?(

        <View style={styles.outerWrapper}>
          

          <Icon name={'ios-home'} size={100} color={'purple'} />
          <View>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => dispatch(fetchDataUser())}>
              <Text style={styles.text}>Click here to show User data:</Text>
            </TouchableOpacity>
            <ListUser />
          </View>
        </View>
          ):charge?(<Text>Cargando</Text>):
          (
            <View style={{display:'flex',flex:1}}>
              <FlatList 
              showsVerticalScrollIndicator={false}
              style={{marginHorizontal:15}}
              columnWrapperStyle={{justifyContent: 'space-between'}}
              numColumns={2}
              data={offers}
              keyExtractor={item=>item.id}
              renderItem={({item})=>
              
              <Card style={{marginHorizontal:5, maxHeight:300,display:'flex',width:'45%',borderWidth:0,marginVertical:30, elevation:7}} onPress={()=>navigation.navigate('DetailsProduct',item.id)}>
               
                <Card.Title title={item.title} subtitle={item.subtitle}/>
                <Card.Content>
                  <Paragraph>{item.detail.count}</Paragraph>
                  <Paragraph>{item.detail.weight}</Paragraph>
                  <Paragraph>{item.detail.province}</Paragraph>
                
                </Card.Content>

                <Card.Cover source={{uri:item.photo}}/>
              </Card>
              }
              />

            </View>  
          )
          }
        <View>
          <Button uppercase={false} mode="outlined" onPress={()=>handlePress()} >
            Hola
          </Button>
        </View>
      </SafeAreaView>
    </>
  )
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.users
  }
}

export default connect(mapStateToProps, null)(Home)
