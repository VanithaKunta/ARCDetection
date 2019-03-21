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


 **Architecture:**
 
 <img src="https://github.com/VanithaKunta/ARCDetection/blob/master/src/outputs/arc1.jpg" width="320" height="430">          <img src="https://github.com/VanithaKunta/ARCDetection/blob/master/src/outputs/arc2.jpg" width="320" height="430">

**Software:**
  The proposed software to address the problem in hand is a combination of an algorithm running on the Arduino and a Mobile Application which runs in two modes. Initially the user is presented with a landing screen with a logo. Then the user can select one of the modes by swiping left or right.
  
   <img src="https://github.com/VanithaKunta/ARCDetection/blob/master/src/outputs/navMode.jpg" width="280" height="480">   <img src="https://github.com/VanithaKunta/ARCDetection/blob/master/src/outputs/main.jpg" width="280" height="480">   <img src="https://github.com/VanithaKunta/ARCDetection/blob/master/src/outputs/mapMode.jpg" width="280" height="480">

***The packages used were:*** 
- react-native-router-flux
- react-native-firebase
- react-native-maps
- react-native-maps-directions
- react-native-bluetooth-serial
- react-native-swiper

***Mapper Mode:***
- Initially  the user is presented with an interface to connect to gadget.
- As soon as the phone is connected to the gadget the user is automatically redirected to a maps based interface.
- The user can enter his destination, then a route to the destination is computed and displayed on the screen.
- Once user presses the collect data button, the phone keeps listening for abnormality data from the arduino.
- The algorithm running on the Arduino board continuously keeps monitoring the sensors data and performs analysis for abnormalities.
- Whenever an abnormality is detected the arduino board sends a message which describes the abnormality to the mobile application via the bluetooth module.
- Once a message is received by the smartphone via bluetooth it tags the message with its current location and uploads this information to a centralised database.
- This location is tagged on the map interface along with the type of abnormality.
[Mapper Mode](https://pages.github.com/)

***Navigation Mode:***
- In this mode, the user is presented with a maps based interface. 
- The database is scrapped for locations and type of abnormalities by the mobile application, then this scrapped information is tagged on a map interface.
- The user can enter his destination, then a route to the destination is computed and displayed on the screen.
- The above tagged map interface is presented to the users in this mode around his current location.
- The abnormalities tagged on map interface are represented with different icons.
- The user is alerted whenever he is in the vicinity of an abnormality.
































