"use strict";var App={data:function(){return{API_BOT_ID:"5248267262:AAGS92XigzCP4LToTDiE8rcdXUcKcFF7cSs",CHAT_ID:"-1001733809580",name:"",email:"",phone:"",subject:"",message:"",error:{name:"",email:"",phone:"",subject:"",message:""},answer:{success:null,text:""}}},methods:{checkAndSend:function(){var e,s=this,t=!0;""===this.name&&(t=!(this.error.name="Enter your name")),1===this.name.length&&(t=!(this.error.name="Minimal name length is two chars")),""===this.email?t=!(this.error.email="Enter your email"):!1===this.isValidEmail(this.email)&&(t=!(this.error.email="Enter valid email")),""===this.phone&&(t=!(this.error.phone="Enter your phone number")),""===this.subject&&(t=!(this.error.subject="Enter subject text")),""===this.message&&(t=!(this.error.message="Enter message text")),t&&(e="<i>Feedback data</i>%0a<b>Name: </b>"+this.name+"%0a<b>Email: </b>"+this.email+"%0a<b>Phone: </b>"+this.phone+"%0a<b>Subject: </b>"+this.subject+"%0a<b>Message: </b>"+this.message,fetch("https://api.telegram.org/bot".concat(this.API_BOT_ID,"/sendMessage?chat_id=").concat(this.CHAT_ID,"&text=").concat(e,"&parse_mode=HTML")).then(function(e){return e.json()}).then(function(e){e.ok?(s.answer.success=!0,s.answer.text="Message successfully send",s.name=s.email=s.phone=s.subject=s.message=""):(s.answer.success=!1,s.answer.text=e.description),setTimeout(function(){s.answer.success=null,s.answer.text=""},3e3)}).catch(function(){s.answer.success=!1,s.answer.text="Some error eccures. Please try again later"}))},resetError:function(e){this.error[e]=""},isValidEmail:function(e){return Boolean(e.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))}}};Vue.createApp(App).mount("#app");