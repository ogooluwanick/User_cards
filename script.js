
let url="https://random-data-api.com/api/users/random_user?size=10"
fetch(url).then(res=>res.json())
                .then(data=>{

                        

                        let box=document.getElementsByTagName("main")[0]
                        let child=document.createElement("div")
                        child.className="flip-card"
                        let child_flip_card_inner= document.createElement("div")
                        child_flip_card_inner.className="flip-card-inner"

                        let child_flip_card_front= document.createElement("div")
                        child_flip_card_front.className="flip-card-front"
                        let child_flip_card_back= document.createElement("div")
                        child_flip_card_back.className="flip-card-back"
                        
                        let front_img= document.createElement("img")
                        front_img.alt="Avatar" 
                        front_img.style.width="300px" 
                        front_img.style.height="300px" 
                        let front_h3= document.createElement("h3")
                        let front_p= document.createElement("p")

                        let back_h2= document.createElement("h2")
                        let back_p= document.createElement("p")




                        for (let x = 0; x < data.length; x++) {
                                console.log(data[x].avatar)

                                x==0?box.appendChild(child) : box.appendChild(child.cloneNode(true))
                                child.appendChild(child_flip_card_inner)
                                child_flip_card_inner.append(child_flip_card_front,child_flip_card_back)
                                child_flip_card_front.append(front_img,front_h3,front_p)
                                child_flip_card_back.append(back_h2,back_p)

                                front_img.src=data[x].avatar
                                front_h3.innerText=`${data[x].first_name} ${data[x].last_name}`
                                front_p.innerText=data[x].employment.title
                                back_h2.innerText="More Infomation here"
                                back_p.innerHTML=`You live at ${data[x].address.street_address} ${data[x].address.city}, ${data[x].address.state}, ${data[x].address.country}. 
                                                                        </br> 
                                                                        Your DOB is ${data[x].date_of_birth}.
                                                                        </br> 
                                                                        Your EMAIL is ${data[x].email}.
                                                                        </br> 
                                                                        Your SSN is ${data[x].social_insurance_number}.
                                                                        </br> 
                                                                        Your username is ${data[x].username}.`

                                
                        }

                        }
                        
                )
                .catch(err=>console.error("Error",err))