const onvif = require('node-onvif')

let device = new onvif.OnvifDevice({
    xaddr: 'http://192.168.1.125:8899/onvif/device_service',
    user : 'admin',
    pass : 'admin'
})

device.init()
    .then(() => console.log(device))
    // .then(() => console.log(device.getUdpStreamUrl()))
    .catch((error) => console.error(error))