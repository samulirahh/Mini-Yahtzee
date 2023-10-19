import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    marginTop: 40,
    marginBottom: 15,
    backgroundColor: 'red',
    flexDirection: 'row',
  },

  footer: {
    marginTop: 20,
    backgroundColor: 'red',
    flexDirection: 'row'
  },
  title: {
    fontFamily: "monospace",
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
  },
  author: {
    fontFamily: "monospace",
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  gameboard: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gameinfo: {
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    marginTop: 10
  },
  row: {
    marginTop: 20,
    padding: 10
  },
  flex: {
    flexDirection: "row"
  },
  button: {
    margin: 30,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#73CED6",
    width: 150,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color:"#2B2B52",
    fontSize: 20
  },

  //HOME

  info: {
    padding: 5
  },

  h1: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    padding: 2
  },

  gl: {
    fontWeight: "bold",
    padding: 5
  },

  startButton: {
    padding: 5,
    margin: 10,
    marginLeft: 70,
    marginRight: 70,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
    backgroundColor: "#fff",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "black"
  },

  icon: {
    padding: 5,
    textAlign: "center",
  },
  
  input: {
    backgroundColor: "#e8e6e6",
    padding: 1
  },

//Gameboard

  gameBoardText: {
    padding: 7
  },

  throwDiceButton: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: 'center',
    borderWidth: 2,
    borderColor: "black",
    marginRight: 120,
    marginLeft: 120,
    margin: 10,
    padding: 5,
  },

  //Scoreboard

  scoreBoardText: {
    padding: 2
  },

  clearButton: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: 'center',
    borderWidth: 2,
    borderColor: "black",
    marginRight: 120,
    marginLeft: 120,
    margin: 10,
    padding: 5,
  }

});