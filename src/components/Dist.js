import React, { Component } from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Styles, {AppColors, AppFonts} from './AppStyles';
import MapStyles from './MapStyles';
import MapViewDirections from 'react-native-maps-directions';
import firebase from 'react-native-firebase';
import s50 from './speed50.png';
import p50 from './pot50.png';
 
const GOOGLE_API_KEY = 'AIzaSyBwwSJUZkTjAm79_OwsIqMcN7wIPyxLdaA';
const USE_METHODS = false;
const DURATION = 10000;
const PATTERN = [1000, 2000, 3000];

// Android: vibrate for 10s
// iOS: duration is not configurable, vibrate for fixed time (about 500ms)

export default class App extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            origin: {latitude: 0, longitude: 0},
            destination: ' ',
            makArray: []
        }
    }

    distance(lat1, lon1, lat2, lon2) {
        if ((lat1 == lat2) && (lon1 == lon2)) {
            return 0;
        }
        else {
            var radlat1 = Math.PI * lat1/180;
            var radlat2 = Math.PI * lat2/180;
            var theta = lon1-lon2;
            var radtheta = Math.PI * theta/180;
            var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            if (dist > 1) {
                dist = 1;
            }
            dist = Math.acos(dist);
            dist = dist * 180/Math.PI;
            dist = dist * 60 * 1.1515;
            dist = dist * 1.609344;
            return dist;
        }
    }

    componentWillMount(){
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
            origin: {longitude: position.coords.longitude, latitude: position.coords.latitude}
            }); 
        });
        var markArray = new Array();
            c = 0;
            var lca = new Array();
            var dist = new Array();
            var data = firebase.database().ref('/markers/').once('value', (snapshot) => {
            var stores = snapshot.val();
            //console.log(stores['count']['c']);
            for(var i=8; i < stores['count']['c'];i++){
                loc = stores['m' + i ]['obj']['loc']
                p = stores['m' + i]['obj']['pothole']
                s = stores['m' + i]['obj']['speedbraker']
                lca.push(loc);
                if(p == true){
                    markArray.push(<Marker coordinate = {loc} image={p50} key={i}/>);
                }
                if(s == true){
                    markArray.push(<Marker coordinate = {loc} image={s50} key={i}/>);
                }
                lo = this.getCurrentLocation();
                var d=this.distance(parseFloat(lo.latitude),parseFloat(lo.longitude),parseFloat(loc.latitude),parseFloat(loc.longitude));
                dist.push(d); 
                if(d<=0.005){               
                    //Vibration.vibrate(DURATION);
                    //Vibration.vibrate(PATTERN);
                    console.log(d);
                    console.log("ARC");
                    Alert.alert("ARC");
                    //Vibration.cancel();
                }
            }
            //var set = new Set(lca);
            this.setState({makArray : markArray})
            this.setState({loca: lca})
            //this.setState({set1: set})
           // console.log(this.state.set1);
        })
        
    }

    getCurrentLocation(){
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
            origin: {longitude: position.coords.longitude, latitude: position.coords.latitude}
            }); 
        });
        return this.state.origin;
    }

    render()
    {
      return (
          <View style={Styles.appContainer}>
              {this.state.isNavigation ? null : (
                  <View style={Styles.appHeader}>
                      <Text style={Styles.inputLabel}>Where do you want to go?</Text>
                      <View style={Styles.inputContainer}>
                          <TextInput style={Styles.input} underlineColorAndroid="transparent" 
                          onChangeText={destination => {
                              this.setState({destination}); 
                              this.setState({displayPath:false})}} 
                              value={this.state.destination}/>  
                          <TouchableOpacity style={Styles.button} onPress={()=>{this.setState({displayPath:true})}}>
                              <Text style={Styles.buttonText}>{'\ue975'}</Text>
                          </TouchableOpacity>
                      </View>
                  </View>
                )}
                <View style={{flex:1}}>
                    <MapView
                        ref={ref => this.refMap = ref}
                        provider={PROVIDER_GOOGLE}
                        style={Styles.map}
                        customMapStyle={MapStyles}
                        initialRegion={{
                            latitude: this.state.origin.latitude,
                            longitude: this.state.origin.longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        showsUserLocation={true}
                        followUserLocation={true} 
                        
                        // onUserLocationChange={() => {for(var i=8;i<39;i++){
                        //     var d = this.distance(parseFloat(this.state.origin.latitude),parseFloat(this.state.origin.longitude),parseFloat(this.state.lca[i].latitude),parseFloat(this.state.lca[i].longitude))};
                        //     if(d<=0.009){
                        //         console.log(d);
                        //         Alert.alert("pothole");
                        //     }
                        // }}       
                    >
                        {this.state.displayPath ?<MapViewDirections
                            origin={this.getCurrentLocation()}
                            destination={this.state.destination}
                            strokeWidth={10}
                            strokeColor="royalblue"
                            apikey={"AIzaSyBwwSJUZkTjAm79_OwsIqMcN7wIPyxLdaA"}
                        />
                         : null }
                         {this.state.makArray}
                    </MapView>
                </View>
          </View>
        )
    }
}



