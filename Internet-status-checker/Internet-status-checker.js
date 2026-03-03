window.addEventListener('load', checkInternetConnection) 

function checkInternetConnection() {
    const status = document.getElementById('connection-status')
    const ip_address = document.getElementById('ip_address')
    const network_strength = document.getElementById('network_strength')
    
    status.textContent = "Checking...."
    if(navigator.onLine){
        fetch('https://api.ipify.org?format=json')
        .then(resp=>resp.json())
        .then(data=>{
            ip_address.textContent=data.ip
            status.textContent = 'Connected'

            const connection = navigator.connection
            if(connection&&connection.downlink){
                let speed = connection.downlink
                if(speed<1){
                    network_strength.textContent = (speed*1000).toFixed(2) +' kbps'
                }else{
                    network_strength.textContent = speed +' Mbps'
                }
            }else{
                network_strength.textContent = 'Unknown'
            }
        })
        .catch(err=>{
        status.textContent = 'Disconnected'
        ip_address.textContent = '-'
        network_strength.textContent = '-'
        })
    }else{
        status.textContent = 'Disconnected'
        ip_address.textContent = '-'
        network_strength.textContent = '-'
    }
}