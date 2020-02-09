import React , { Component } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

class Botao extends Component{

constructor(props){
  super(props);
  this.state = {};

  this.styles = StyleSheet.create({
    botao:{
      width: 230 ,
      height: 50 ,
      borderWidth: 2,
      borderColor: props.cor,
      borderRadius: 25,
    },

  btnAera:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center' ,
  },
  btnTexto:{
    fontSize: 19,
    fontWeight: 'bold',
    color: props.cor,
  },
  
  });
}
  
  render(){
    return(
      <TouchableOpacity style= {this.styles.botao} onPress={this.props.onPress} >
        <View style={this.styles.btnAera}>
          <Text style={this.styles.btnTexto}> {this.props.nome}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      textoFrase: ''
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = ['Os problemas são oportunidades para se mostrar o que sabe.', 
    'Nossos fracassos, às vezes, são mais frutíferos do que os êxitos.',
    'Tente de novo. Fracasse de novo. Mas fracasse melhor.',
    'É costume de um tolo, quando erra, queixar-se dos outros. É costume de um sábio queixar-se de si mesmo.', 
    'O verdadeiro heroísmo consiste em persistir por mais um momento, quando tudo parece perdido.', 
    'Cada cliente é como se fosse primeiro e único.', 'Mesmo que já tenhas feito uma longa caminhada, há sempre um novo caminho a fazer.', 
    'Vender é construir uma ponte entre você e seu cliente e fazê-lo atravessar para o seu lado.','Na prosperidade, nossos amigos nos conhecem; na adversidade, nós é que conhecemos nossos amigos.',
    'A felicidade não está em fazer o que a gente quer, e sim querer o que a gente faz.', 'Nada acontece a menos que sonhemos antes.', 
    'É sempre divertido fazer o impossível.',
    'A coisa mais cara é transformar um cliente insatisfeito em satisfeito.'];
  }

  quebraBiscoito(){

    let state = this.state;

    let numeroAletorio = Math.floor(Math.random() * this.frases.length);

    state.textoFrase = '"' + this.frases[numeroAletorio] + '"';

    this.setState(state);

  }

  render(){
    return(
      <View style= {styles.container} >

        <Image source={require('./src/biscoito.png')} style={styles.img}/>

        <Text style ={styles.textoFrase}> {this.state.textoFrase} </Text>

        <Botao cor="#dd7b22" nome = "Abrir Biscoito" onPress={this.quebraBiscoito} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  img:{
    width: 250,
    height: 250,
  },

  textoFrase:{
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    textAlign: 'center' ,
    fontStyle: 'italic',
  }
});


  