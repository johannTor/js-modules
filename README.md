# js-modules

First attempt at creating a javascript module where I created a custom alert feature that could be used in other apps. The demo site has 3 buttons that each call the customAlert function that is imported through the alertModule with different style properties to match the occation they are being used in.

The customAlert function should take in a message string along with an object with width, height, color, background color, border and border radius as properties. 

I encountered difficulties styling the alert module since the css file should be seperate from the module itself so I ended up using a style tag that the module appends to he document with the base style the custom alert needs. I'm sure there is a better way of handling css styles in modules so definitely something to check in the future.

I used Parcel to bundle this demo app and the module together with the Node Package Manager.