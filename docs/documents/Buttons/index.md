# Button
<p>
Button 是一个基于NativeBase组件上，符合自定义一套主题的按钮组件。它们用于各种目的，例如，提交或重置表单，导航，执行交互式操作，例如在点击按钮时在应用中显示或隐藏某些内容等。<br />
<b>注意：</b>在NativeBase中Button是与Text一起导入使用的，而我们的组件经过导入，在使用的时候直接传入文本参数即可
</p>

##### 内容
+ [Button Theme](ButtonTheme.md#)
+ [Transparent Button](ButtonTransparent.md#)
+ [Outline Button](ButtonOutline.md#)
+ [Rounded Button](ButtonRounded.md#)
+ [Block Button](ButtonBlock.md#)
+ [Full Button](ButtonFull.md#)
+ [Icon Button](ButtonIcon.md#)
+ [Button Size](ButtonSize.md#)
+ [Disabled Button](ButtonDisabled.md#)



###### Syntax

```
import React, { Component } from 'react';
import { Container, Header, Content, Button } from 'react-native-ecpei-widgets';
export default class ButtonExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Button title={"Click Me!"} />
        </Content>
      </Container>
    );
  }
}
```

- 支持iOS和Android设备上的React Native应用程序。
- 按钮组件接受输入，例如：文本，图标，带图标的文本。
- 基于NativeBase为您提供了自定义此组件的道具的权限。
示例：要为按钮设置自定义样式，请将它们包含在style按钮的支柱中。
- 输入用户定义的样式。
- 您可以在变量文件之后更改默认按钮文本大小写（在Android中）。
- NativeBase为其用户提供了props可与Button一起使用的大量列表。
- 更换组件：
 * React Native TouchableOpacity for iOS
 * React Native TouchableNativeFeedback for Android
 
 
##### Configurations

|Property|Default|Option|Description|
|---|---|---|---|
|active |-| boolean|按钮状态|
|transparent|	true|	boolean| 透明状态按钮|
|bordered	|-|-|边框线按钮|
|rounded |-|-	|呈现略微圆形边缘的按钮|
|block |-|-|	块级按钮|
|full |-|-|	全宽按钮|
|disabled|	true|	boolean|	禁用按钮的单击选项|
|small |-|-| 小尺寸按钮|
|large	|-|-|	大尺寸按钮|
|iconRight |-	|-| 右侧填充图标按钮|
|iconLeft |-|	-| 左侧填充图标按钮|
|light	|-|	boolean|	轻白色背景颜色按钮|
|primary |-|boolean|	蓝色背景颜色按钮|
|success	|-|boolean|	绿色背景颜色按钮|
|info	|-|boolean|	浅兰的背景颜色按钮|
|warning	|-|boolean|	黄色背景颜色按钮|
|danger |-|boolean| 红色背景颜色按钮|
|dark |-|boolean	| 黑背景颜色按钮|
|title |-|string| 按钮文本|
|textStyle |-|Text.style| 按钮文本样式|
