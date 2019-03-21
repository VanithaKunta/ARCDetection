## ARCDetection

***Mapper Mode:***

- Initially  the user is presented with an interface to connect to gadget.
- As soon as the phone is connected to the gadget the user is automatically redirected to a maps based interface.
- The user can enter his destination, then a route to the destination is computed and displayed on the screen.
- Once user presses the collect data button, the phone keeps listening for abnormality data from the arduino.
- The algorithm running on the Arduino board continuously keeps monitoring the sensors data and performs analysis for abnormalities.
- Whenever an abnormality is detected the arduino board sends a message which describes the abnormality to the mobile application via the bluetooth module.
- Once a message is received by the smartphone via bluetooth it tags the message with its current location and uploads this information to a centralised database.
- This location is tagged on the map interface along with the type of abnormality.

<img src="https://github.com/VanithaKunta/ARCDetection/blob/master/src/outputs/map1.jpg" width="280" height="480">   <img src="https://github.com/VanithaKunta/ARCDetection/blob/master/src/outputs/map2.jpg" width="280" height="480">

<img src="https://github.com/VanithaKunta/ARCDetection/blob/master/src/outputs/map4.jpg" width="280" height="480">   <img src="https://github.com/VanithaKunta/ARCDetection/blob/master/src/outputs/map5.jpg" width="280" height="480">
