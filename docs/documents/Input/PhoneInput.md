# 手机号输入框

+ 手机号码类型输入框，已做数字正则校验；
+ 带有手机类型icon图标；
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
| onEndEditingText |-|func||
| onBlur |-|func||
| onFocus |-|func||

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
      </Container>
    );
  }
}

```

