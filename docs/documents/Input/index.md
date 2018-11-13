# Input

+ 输入框组件是应用于项目中所需需求而定制的组件，此组件没有应用native-base中的Input；
+ 为了使输入框阴影在iOS和Android上效果颜色达到一致（android上阴影设置只有灰色效果），因此采用了图片做背景，而带有特色阴影效果；


#### 内容：
* [手机号输入框](PhoneInput.md#)
* [密码输入框](SecretInput.md#)
* [验证码输入框](VerifyCodeInput.md#)

###### 语法：

```
import React, { Component } from 'react';
import { Container, InputRoundIcon, InputSecretRound,
          InputVerifyCod } from 'react-native-ecpei-widgets';
export default class HeaderExample extends Component {
  render() {
    return (
      <Container>
        <InputRoundIcon style={styles.inputStyle} width={scaleSize(580)
                        keyboardType={"phone-pad"} 
                        returnKeyType={"done"}
                        maxLength={11} ref='account' value={mobile}
                        onClearAway={() => { this.onClearAway("", "account") }}
                        onChangeText={(text)=>{ this.onChangeText(text,"account") }} 
                        />
         <InputSecretRound style={styles.inputStyle} width={scaleSize(580)} 
                           keyboardType={"name-phone-pad"} returnKeyType={"done"}
                           ref='password' placeholder={"请输入密码"}
                           onClearAway={() => { this.onClearAway("", "password") }}
                       onChangeText={(text)=>{ this.onChangeText(text,"password") }} 
                       />
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
| placeholder |-|“请输入手机号码”|输入框默认提示文字|


