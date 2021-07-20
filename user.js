
    async function API(){
        const baseurl = "https://api.punkapi.com/v2/beers/random";
        const response = await fetch(baseurl);
        const data = await response.json();
        return data;
    }

    
        API().then((data)=>{
            const nam = document.getElementById("description")
         nam.textContent = JSON.stringify(data[0].name)
         nam.style.color ="red"
         return response.json

                })
               
                API().then((user)=>{
                    const des = document.getElementById("raj")
                 des.textContent = JSON.stringify(data[0].description)
                 des.style.color ="red"
                 
        
                        })
                    

            
    
/*         API()
    .then
    (data=>{
        console.log(data);
  
        const button = document.getElementById('button')
        button.addEventListener('click', function () {
            const raj = document.getElementById("description")
            raj.textContent = JSON.stringify(data[0].name)
        })
 */
        /*  const name =data[0].name;
        console.log(name);
        const description=data[0].description;
        const{volume} = data[0];
        const volumevalue=volume.value;
        const volumeunit=volume.unit;
        console.log(volumevalue);
        console.log(volumeunit); */

    




