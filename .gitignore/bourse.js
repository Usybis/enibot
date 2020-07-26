module.exports = {
    name: 'bourse',
    description: 'Test Command.',
    execute(message) {
        var result = Math.floor((Math.random() * 100) + 1)
        message.channel.send("Voici le cour de la bourse en ce jour : " + result + " euros pour 1 MKNI");
    }
  }; 
