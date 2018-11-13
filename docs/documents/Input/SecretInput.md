# 密码输入框

+ 密码输入框，已做禁止中文及emjo表情正则校验；
+ 带有icon图标，并有密码是否可见功能；
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
| onChangeText |-|func|输入框文字改变时调用函数|
| onClearAway |-|func|一键清除输入框中的值|
| onEndEditingText |-|func|结束编辑时回调函数|
| onBlur |-|func|失去焦点|
| onFocus |-|func|获取焦点|

###### 语法：

```
import React, { Component } from 'react';
import { Container, InputRoundIcon, InputSecretRound,
          InputVerifyCod } from 'react-native-ecpei-widgets';
export default class HeaderExample extends Component {
  render() {
    return (
      <Container>
         <InputSecretRound style={styles.inputStyle} width={scaleSize(580)} 
                           keyboardType={"name-phone-pad"} returnKeyType={"done"}
                           ref='password' placeholder={"请输入密码"}
                           onClearAway={() => { this.onClearAway("", "password") }}
                       onChangeText={(text)=>{ this.onChangeText(text,"password") }} 
                       />
      </Container>
    );
  }
}

```
