# 验证码输入框

+ 验证码输入框，已做数字正则校验；
+ 带有点击获取验证功能；
+ 输入字符数限制；
+ 特定需求，特定修改。

##### 属性：

|属性|默认值|参数|描述|
|---|---|---|---|
| style |-|any|样式|
| width |300|number|输入框的宽度，可以去自适应调整背景阴影的高度又不影响输入框高度|
| inputStyle |-|any|输入框样式|
| name |-|string|icon图标的名字|
| size |16|number|图标大小|
| keyboardType |-|-|键盘样式|
| returnKeyType |-|-|键盘返回键的类型|
| placeholder |“请输入手机号码”|-|输入框默认提示文字|
| maxLength |-|-|最大长度|
| value |-|-|输入框默认值|
| onChangeText |-|func|输入框文字改变时调用函数|
| onClearAway |-|func|一键清除输入框中的值|
| onEndEditingText |-|func|结束编辑时回调函数|
| onBlur |-|func|失去焦点时调用函数|
| onFocus |-|func|获取焦点时调用函数|
| timeCount |60（秒）|number|倒计时时间|
| callback |-|func|倒计时完成后的回调函数|
| normalBackColor |-|string|非计时状态下倒计时按钮背景色|
| countingBackColor |-|string|倒计时状态下按钮背景色|
| startOnPress |-|func|开始倒计时调用的函数|
| normalTitle | - |string|一般状态下文字|
| titleColor |-|-|一般状态下的文字颜色|
| countingTitle |-|-|倒计时显示的文字|
| countingTitleColor |-|-|倒计时显示的文字颜色|
| titleStyle |-|-|文字除颜色之外的|
| timerStyle |-|-|计时器背景样式|

###### 语法：

```
import React, { Component } from 'react';
import { Container, InputRoundIcon, InputSecretRound,
          InputVerifyCod } from 'react-native-ecpei-widgets';
export default class HeaderExample extends Component {
  render() {
    return (
      <Container>
        <InputVerifyCod style={styles.inputStyle} width={scaleSize(580)} 
                       keyboardType={"phone-pad"} returnKeyType={"done"}
                       ref='password' placeholder={"短信验证码"}
                       onClearAway={() => { this.onClearAway("", "password") }} 
                       startOnPress={() => { this.startOnPress() }}
                       normalBackColor={"#274DE7"}
                       onChangeText={(text) => 
                                   { this.onChangeText(text,"password") }} 
                        />
      </Container>
    );
  }
}

```
