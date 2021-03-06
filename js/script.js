const app = new Vue ({
  el: '#app',

  data: {
    profiles: [
          {
              name: 'Michele',
              avatar: '_1',
              visible: true,
              messages: [
                  {
                      date: '10/01/2020 15:30:55',
                      message: 'Hai portato a spasso il cane?',
                      status: 'sent',
                      menuVisible: false
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Ricordati di stendere i panni',
                      status: 'sent',
                      menuVisible: false
                  },
                  {
                      date: '10/01/2020 16:15:22',
                      message: 'Tutto fatto!',
                      status: 'received',
                      menuVisible: false
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
                      status: 'sent',
                      menuVisible: false
                  },
                  {
                      date: '20/03/2020 16:30:55',
                      message: 'Bene grazie! Stasera ci vediamo?',
                      status: 'received',
                      menuVisible: false
                  },
                  {
                      date: '20/03/2020 16:35:00',
                      message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                      status: 'sent',
                      menuVisible: false
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
                      status: 'received',
                      menuVisible: false
                  },
                  {
                      date: '28/03/2020 10:20:10',
                      message: 'Sicuro di non aver sbagliato chat?',
                      status: 'sent',
                      menuVisible: false
                  },
                  {
                      date: '28/03/2020 16:15:22',
                      message: 'Ah scusa!',
                      status: 'received',
                      menuVisible: false
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
                      status: 'sent',
                      menuVisible: false
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Si, ma preferirei andare al cinema',
                      status: 'received',
                      menuVisible: false
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
                      status: 'sent',
                      menuVisible: false
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Va bene, stasera la sento',
                      status: 'received',menuVisible: false
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
                      message: 'Ciao Claudia, hai novit???',
                      status: 'sent',
                      menuVisible: false
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Non ancora',
                      status: 'received',
                      menuVisible: false
                  },
                  {
                      date: '10/01/2020 15:51:00',
                      message: 'Nessuna nuova, buona nuova',
                      status: 'sent',
                      menuVisible: false
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
                      message: 'Fai gli auguri a Martina che ?? il suo compleanno!',
                      status: 'sent',
                      menuVisible: false
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Grazie per avermelo ricordato, le scrivo subito!',
                      status: 'received',
                      menuVisible: false
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
                      status: 'received',
                      menuVisible: false
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'No, l\'ho gi?? mangiata ieri, ordiniamo sushi!',
                      status: 'sent',
                      menuVisible: false
                  },
                  {
                      date: '10/01/2020 15:51:00',
                      message: 'OK!!',
                      status: 'received',
                      menuVisible: false,
                      
                  }
              ],
      
          }
      
      ],

      myavatar: {
        name: 'Sofia',
        avatar: '_io',
        visible: true,
      },

      randomAnswers: [
          'ok',
          'assolutamente si!',
          'ti faccio sapere',
          'penso di no',
          'mi spiace',
          '?? andato bene',
          'forse sono riuscita a farlo'
      ],

      
      messageActive: 0,
      inputMessage: '',
      searchFriend: '',
    //   menuVisible: false,
      indexMessage: 0,


  },

  methods:{

    //Assegnare all'indice un variabile

    selectCurrentMessage(index){
      this.messageActive = index;
    },



    // Aggiungere un nuovo messaggio all'array

    addNewMessage(){

      if (this.inputMessage.length > 0)
      {

      const addMessageToSend = 
              {
                  date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                  message: this.inputMessage,
                  status: 'sent'
              }     
          
      
      this.profiles[this.messageActive].messages.push(addMessageToSend);
  

      //All'inserimeto del messaggio dopo un secondo apparir?? una risposta
      
      setTimeout(this.addAutoMessage, 1000);

      this.inputMessage = '';      

      }

  },

  //Genereare una risposta auto

  addAutoMessage(){

    const addMessageToSendAuto = 
    {
        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
        message: this.randomAnswers[this.getRandomAnswers(0, this.randomAnswers.length - 1)],
        status: 'received'
    };
    
    this.profiles[this.messageActive].messages.push(addMessageToSendAuto);    

  },

  deleteCurrentMessage(index){
        this.profiles[this.messageActive].messages.splice(index, 1);   
   
    //Devi controllare ----> di cancellare anche l'ultimo elemento

  },
  

  getRandomAnswers(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  },

})



