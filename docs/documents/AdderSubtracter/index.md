# 加减器组件

+ 此组件基于NativeBase的按钮、输入框而定制的符合业务需求的组件；
+ 可自定义输入框样式，及整个加减器的背景样式。

##### 属性：

|属性|默认值|参数|描述|
|---|---|---|---|
|maxNumber|-|number|可加到的最大值|
|minNumber|-|number|最小值|
|value|“1”|string|默认值，也可看作可输入的最小值|
|onChangeText|-|func|当输入框的值发生改变时，所调用的函数（加减按钮发生值的改变也会调用，但此时传出来的值会比最大值或最小值大1或小1，以便外部判断处理去做提示使用）|
|onEndEditing|-|func|输入框结束编辑回调函数|
|onLowerTips|-|func|达到低于最小时回调函数|
|onExceedTips|-|func|达到高于最大时回调函数|
|style|-|any|样式|
|inputStyle|-|any|输入框样式|


###### 代码语法：

```
import React, { Component } from 'react';
import { Container, AdderSubtracter } from 'react-native-ecpei-widgets';
export default class LayoutExample extends Component {
  render() {
    return (
      <Container>
        <AdderSubtracter onChangeText={(text)=>{}} maxNumber={3} value ={"1"}/>
      </Container>
    );
  }
}
```
