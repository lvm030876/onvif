const onvif = require('node-onvif')

console.log('Start the discovery process.')
onvif.startProbe()
    .then(device_info_list => {
        console.log(`${device_info_list.length} +  devices were found.`)
        device_info_list.forEach(info => {
            for (const key in info) 
                if (info.hasOwnProperty(key))
                    console.log(key, info[key])
        })
    })
    .catch((error) => console.error(error));

// const onvif = require('node-onvif')

// let device = new onvif.OnvifDevice({
//     xaddr: 'http://192.168.1.121:8899/onvif/device_service',
//     user : 'admin',
//     pass : 'admin'
// })

// device.init()
//     .then(() => console.log(device))
//     // .then(() => console.log(device.getUdpStreamUrl()))
//     .catch((error) => console.error(error))