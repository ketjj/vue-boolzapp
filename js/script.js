const app = new Vue ({
  el: '#app',

  data: {
      messageList: [
          {
              name: 'Michele',
              avatar: '_1',
              visible: true,
              messages: [
                  {
                      date: '10/01/2020 15:30:55',
                      message: 'Hai portato a spasso il cane?',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Ricordati di stendere i panni',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 16:15:22',
                      message: 'Tutto fatto!',
                      status: 'received'
                  }
              ],
          },
          {
              name: 'Fabio',
              avatar: '_2',
              visible: true,
              messages: [
                  {
                      date: '20/03/2020 16:30:00',
                      message: 'Ciao come stai?',
                      status: 'sent'
                  },
                  {
                      date: '20/03/2020 16:30:55',
                      message: 'Bene grazie! Stasera ci vediamo?',
                      status: 'received'
                  },
                  {
                      date: '20/03/2020 16:35:00',
                      message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                      status: 'sent'
                  }
              ],
          },
          {
              name: 'Samuele',
              avatar: '_3',
              visible: true,
              messages: [
                  {
                      date: '28/03/2020 10:10:40',
                      message: 'La Marianna va in campagna',
                      status: 'received'
                  },
                  {
                      date: '28/03/2020 10:20:10',
                      message: 'Sicuro di non aver sbagliato chat?',
                      status: 'sent'
                  },
                  {
                      date: '28/03/2020 16:15:22',
                      message: 'Ah scusa!',
                      status: 'received'
                  }
              ],
          },
          {
              name: 'Alessandro B.',
              avatar: '_4',
              visible: true,
              messages: [
                  {
                      date: '10/01/2020 15:30:55',
                      message: 'Lo sai che ha aperto una nuova pizzeria?',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Si, ma preferirei andare al cinema',
                      status: 'received'
                  }
              ],
          },
          {
              name: 'Alessandro L.',
              avatar: '_5',
              visible: true,
              messages: [
                  {
                      date: '10/01/2020 15:30:55',
                      message: 'Ricordati di chiamare la nonna',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Va bene, stasera la sento',
                      status: 'received'
                  }
              ],
          },
          {
              name: 'Claudia',
              avatar: '_6',
              visible: true,
              messages: [
                  {
                      date: '10/01/2020 15:30:55',
                      message: 'Ciao Claudia, hai novità?',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Non ancora',
                      status: 'received'
                  },
                  {
                      date: '10/01/2020 15:51:00',
                      message: 'Nessuna nuova, buona nuova',
                      status: 'sent'
                  }
              ],
          },
          {
              name: 'Federico',
              avatar: '_7',
              visible: true,
              messages: [
                  {
                      date: '10/01/2020 15:30:55',
                      message: 'Fai gli auguri a Martina che è il suo compleanno!',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Grazie per avermelo ricordato, le scrivo subito!',
                      status: 'received'
                  }
              ],
          },
          {
              name: 'Davide',
              avatar: '_8',
              visible: true,
              messages: [
                  {
                      date: '10/01/2020 15:30:55',
                      message: 'Ciao, andiamo a mangiare la pizza stasera?',
                      status: 'received'
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 15:51:00',
                      message: 'OK!!',
                      status: 'received'
                  }
              ],
      
          }
      
      ],

      myavatar: {
        name: 'Sofia',
        avatar: '_io',
        visible: true,
      },

      
      messageActive: 0,
      inputMessage: '',
      searchFriend: '',


  },

  methods:{

    //Assegnare all'indice un variabile

    selectCurrentMessage(index){
      this.messageActive = index;
    },



    // Aggiungere un nuovo messaggio all'array

    addNewMessage(){

      const currentDayTime = this.getDateTime();

      if (this.inputMessage.length > 0)
      {

      const addMessageToSend = 
              {
                  date: currentDayTime,
                  message: this.inputMessage,
                  status: 'sent'
              }     
          
      
      this.messageList[this.messageActive].messages.push(addMessageToSend);
  

      //All'inserimeto del messaggio dopo un secondo apparirà una risposta
      
      setTimeout(this.addAutoMessage, 1000);

      this.inputMessage = '';      

      }


  },

  //Genereare una risposta auto

  addAutoMessage(){

    const currentDayTime = this.getDateTime();

    const addMessageToSendAuto = 
    {
        date: currentDayTime,
        message: 'ok',
        status: 'received'
    }     

    this.messageList[this.messageActive].messages.push(addMessageToSendAuto); 
    

  },
   
  //Date Function

  getDateTime() {
    let today = new Date();
    
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    let hours = String(today.getHours()).padStart(2, '0');
    let minutes = String(today.getMinutes()).padStart(2, '0');
    let seconds = String(today.getSeconds()).padStart(2, '0');

    let time = hours + ":" + minutes + ":" + seconds; 
    let currentDateTime = mm + '/' + dd + '/' + yyyy +' '+ time;

    return currentDateTime;

}



//   searchSomeone() {
//     let input = this.searchFriend;
//     //console.log(input);
//     input = input.toLowerCase();

//     filteredList = this.messageList.filter((element) =>{
//         //console.log(element.name);
//         //console.log(element.name.includes(input));
//         return element.name.toLowerCase().includes(input);
//     });

//     console.log(filteredList);

//    //this.messageList=x;
    
//     }


  //Filtrare l'array con il Search
//   searchSomeone(){
//     this.messageList.filter((element) => {this.name}) 
//     console.log(this.searchFriend)
//    }

  },

  
  
})



