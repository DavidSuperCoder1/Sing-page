
        function changeImage() {
            var image = document.getElementById('desk_profile');
            if (window.innerWidth < 667) {
                image.src = 'assets/images/image-profile-mobile.webp';
            }else if(window.innerWidth < 1024){
                image.src = 'assets/images/image-profile-tablet.webp';
            }else{
                image.src='assets/images/image-profile-desktop.webp';
            }
        }
     
        
        // Listen for an input event to trigger the autofill background removal
     
        function submitForm(){
        /***************************For Name Input***********************/
            let name = document.querySelector('#text_name');
            if(name.value==""){
             name.placeholder='This field is Required';
             name.classList.add('error');
            }else{
                name.classList.remove('error');
            }
          /***************************For Email Input***********************/

            let checkPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
           
            let place_hold = document.querySelector('#email');
            let email = place_hold.value;

            if(email===""){                   
                place_hold.placeholder='This field is Required';
                place_hold.classList.add('error');
            }else if(email!=="" && !checkPattern.test(email)){
               // email="";
                place_hold.value = ""; //ဒီနေရာမှာ email ကိုထည့်ရင်တူသလိုရှိပေမယ့် empty 
                                        //ပြောင်းမပေးဘဲ မှားတဲ့မေးလ်ကိုinputမှာ ပြနေမှာဖြစ်တယ်။
            
                place_hold.placeholder= "The email format is not correct";
                place_hold.classList.add('error');
                   }else{
                place_hold.classList.remove('error');
            }
            
            /***************************For Message Input***********************/
            let message = document.querySelector('#message');
            if(message.value==""){
              
                message.placeholder='This field is Required';
                message.classList.add('error');
            }else{
                message.classList.remove('error');
            }

            if(name.value!=="" && email!=="" && checkPattern.test(email)  && message.value!==""){
                name.value='';
                place_hold.value='';
                message.value='';
                name.placeholder="NAME";
                place_hold.placeholder="EMAIL";
                message.placeholder="MESSAGE";
          }

        }

       
            
        
