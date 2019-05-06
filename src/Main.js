import React from 'react';
import './style.css';

export default class Main extends React.Component {
  constructor(){
    super();
    this.state={first:0.1,second:0.1,sum:'',error:false};
  }
  
  onClick(){
    //получаем input-ы
    let first=document.querySelector('#first');
    let second=document.querySelector('#second');
    let res={sum:0,error:false};
    //пытаемся преобразовать содержимое input-ов в числа и суммировать
    res.sum=+(first.value)+ +(second.value);
    res.error=isNaN(res.sum);//сохраняем информацию о возможной ошибке при преобразовании
    if(!res.error){ //если все без ошибок, то при необходимости преобразуем данные input-ов в более человеческий вид
        res.first=+first.value;
        res.second=+second.value;
        }
    this.setState(res); 
  }
  onChange(){
    let first=document.querySelector('#first');
    let second=document.querySelector('#second');
    //здесь сохраняем в state значения input-ов и очищаем поле вывода результата
    this.setState({first:first.value,second:second.value,sum:'',error:false});
  }
  render(){
    return <div className="main" >
              Первое число:<br/>
              <input id="first" value={this.state.first} onChange={this.onChange.bind(this)}/>
              <br/><br/>
              Второе число:<br/>
              <input id="second" value={this.state.second} onChange={this.onChange.bind(this)}/>
              <br/><br/>
              <input type="button" value="Сложить" onClick={this.onClick.bind(this)} />
              <br/>
              <div>{this.state.error===true?'Ошибка':(this.state.sum!==''?'Сумма : '+this.state.sum:'')}</div>
      </div>
  
  }
}


