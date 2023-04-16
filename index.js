function countDown() {
  let num =10;
    while (num >= 0) {
      console.log(num);
      num--;
    }
  }
  function writeCards(name, eventsName) {
    const names = ["Guadalupe", "Ollie", "Aki"];
    const eventName =  "surprise";
    const messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return messages;
  
  }
  