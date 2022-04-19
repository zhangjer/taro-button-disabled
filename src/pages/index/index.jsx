import { Component } from 'react'
import { View, Text, Button,Input } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {
  constructor(props){
    super(props)
    this.state={
      buttonDisabled: false,
      buttonText: 'init'
    }
  }

  componentDidMount () {
    // logRaw()
    console.log(1111111);
  }


  renderSendButton({btnText}) {
    const disabled = btnText==='111'
    return (
        <Button disabled={disabled}>
            {btnText}
        </Button>
    );
}


  disabledChange=()=>{
    const {buttonDisabled} = this.state;
    this.setState({
      buttonDisabled: !buttonDisabled,
      buttonText: !buttonDisabled?'禁用':"可用"
    })
  }

  render () {
    const {buttonDisabled,buttonText} = this.state;
    return (
      <View className='index'>


        <Button disabled={buttonDisabled}>按钮状态11</Button>
        <View style={{padding: '20px 0'}}>按钮当前状态：{buttonText}</View>

        <View onClick={this.disabledChange} style={{margin: '20px 0'}} >更改按钮状态</View>
      </View>
    )
  }
}
