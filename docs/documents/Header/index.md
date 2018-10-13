# Header

+ 基于NativeBase组件，二次定制的标题（导航栏）。
+ 在Container容器中可以有一个Header组件。
+ 要为您的屏幕设置标题，请Header在其中包含组件Container。
+ 其中定义的组件Header将按照您定义的顺序呈现。
+ 标题为您提供样式表。
+ 用户可以Header在应用程序中定义时添加自定义样式。

#### 内容：

* [只有标题导航栏](OnlyTitle.md#)
* [图标按钮导航栏](IconButton.md#)
* [文字按钮导航栏](TextButton.md#)
* [图文按钮导航栏](IconTextButton.md#)
* [图标文字同侧按钮导航栏](IconAndTextButton.md#)
* [右侧多图标按钮导航栏](RightMultipleIcon.md#)

###### 语法：

```
import React, { Component } from 'react';
import { Container, Header } from 'react-native-ecpei-widgets';
export default class HeaderExample extends Component {
  render() {
    return (
      <Container>
        <Header leftIcon leftIconProps={name:"return",color:"#000",size:16} 
        			title={"Header"}
        			style={{backgroundColor:"transparent"}} 
        			noShadow
        			rightContents={[{
        			   rightIcon: true,
        				onPress: () => { },
        				iconData: {
            				color: "#000",
            				name: "return",
            				size: 16,
            				},
            		    }
            		    ]}
        >
        </Header>
      </Container>
    );
  }
}
```

##### 属性：

|属性|默认值|参数|描述|
|---|---|---|---|
|iosBarStyle| - |light-content,<br />dark-content,<br />default|设置iOS状态栏风格样式|
| androidStatusBarColor |transparent|-|设置android状态栏背景颜色|
| noShadow |-|boolean|移除Android状态栏阴影|
| searchBar |待定| boolean ||
| rounded |待定| boolean ||
| hasSubtitle |待定| boolean ||
| hasSegment |待定| boolean ||
| hasTabs |待定| boolean ||
| hasText |待定| boolean ||
| noLeft |待定| boolean ||
| span |-| boolean |双倍导航栏高度|
|leftIcon|-| boolean |显示左侧图标（不能与leftTitle属性共用）|
|leftTitle|-| boolean |显示左侧文字（不能与leftIcon属性共用）|
|leftTextStyle|-|Text.style|左侧文字样式|
|leftOnPress|-|func|左侧按钮点击function|
|title|-|string|标题|
|leftText|-|string|左侧文字|
|leftIconProps|{name:"return",<br />color:"#000000",<br />size:16<br />}|object|左侧图标相关属性（name，color，size）|
|rightContents|-|array|右侧图标文字相关属性（数据格式如下，图标与文本数据二选一即可）：<br /> [{ <br />rightIcon:true,//显示图标的数据<br />onPress: () => { },<br />iconData: {<br />color: "#000",<br /> name: "return",<br />size: 16,<br /> }, <br />rightTitle: true,//显示文本的数据 <br />titleData: {<br />title: "右侧", <br />style: { //按钮文本样式<br />color: '#000',<br />fontSize: 14,<br />}},<br />}]|
