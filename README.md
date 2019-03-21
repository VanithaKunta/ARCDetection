## ARCDetection

A simple, modular and cost effective solution for real time mapping of adverse road conditions on a maps based User Interface which has navigational capabilities. 
The solution consists of a mobile application and a physical gadget that can be connected to any Bluetooth enabled device through the provided app. 
Adverse road conditions are detected using Arduino-Uno, accelerometer and gyro sensors, HC05 module.

**Built on:**
  - React Native
  - Firebase

#### The system’s architecture consists of the following components:

**Hardware:**
  The below described sensors are connected to an arduino uno. The whole setup is presented to the user as a gadget which can connect to the application running on a smartphone.

**Sensors:**
- Accelerometer and Gyro sensor
- Bluetooth Module(HC05)
- Arduino Uno

***The packages used were:*** 
- react-native-router-flux
- react-native-firebase
- react-native-maps
- react-native-maps-directions
- react-native-bluetooth-serial
- react-native-swiper

 **Architecture:**
 
 <img src="https://github.com/VanithaKunta/ARCDetection/blob/master/src/outputs/arc1.jpg" width="320" height="430">          <img src="https://github.com/VanithaKunta/ARCDetection/blob/master/src/outputs/arc2.jpg" width="320" height="430">

**Software:**
  The proposed software to address the problem in hand is a combination of an algorithm running on the Arduino and a Mobile Application which runs in two modes. Initially the user is presented with a landing screen with a logo. Then the user can select one of the modes by swiping left or right.
  
   <img src="https://github.com/VanithaKunta/ARCDetection/blob/master/src/outputs/navMode.jpg" width="280" height="480">   <img src="https://github.com/VanithaKunta/ARCDetection/blob/master/src/outputs/main.jpg" width="280" height="480">   <img src="https://github.com/VanithaKunta/ARCDetection/blob/master/src/outputs/mapMode.jpg" width="280" height="480">
   

1) [Mapper Mode](https://github.com/VanithaKunta/ARCDetection/blob/master/docs/Mapper.md)

2) [Navigation Mode](https://github.com/VanithaKunta/ARCDetection/blob/master/docs/Mapper.md)































