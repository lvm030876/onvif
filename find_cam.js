const onvif = require('node-onvif')

console.log('Start the discovery process.')
onvif.startProbe()
    .then(device_info_list => {
        console.log(`${device_info_list.length} devices were found.`)
        device_info_list.forEach(info => {
            for (const key in info) 
                if (info.hasOwnProperty(key))
                    console.log(key, info[key])
        })
    })
    .catch((error) => console.error(error));