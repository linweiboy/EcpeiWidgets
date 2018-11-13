# 右侧抽屉

+ 此组件自定制，使用动画，做出右侧弹出效果。

##### 属性：

|属性|默认值|参数|描述|
|---|---|---|---|
|isDefualtHeader|-|boolean|是否存在默认导航栏|
|title|“Hello”|string|默认导航栏标题|
|style|-|any|右侧抽屉视图样式|


###### 代码语法：

```
import React, { Component } from 'react';
import { Container, DrawerRight, Button } from 'react-native-ecpei-widgets';
export default class DrawerRightExample extends Component {
  render() {
    return (
      <Container>
        <DrawerRight ref="drawer"  isDefualtHeader>
                    <Button onPress={() => { this.close()}} style={{
                        backgroundColor: '#000fff', marginTop: scaleSize(26), width: 90,
                        height: scaleSize(80)
                    }} title="关闭">
                    </Button>
         </DrawerRight>
         <Button onPress={() => { this.click() }} title={"Show"} style={{ marginTop: 100, marginLeft: 20 }} />
      </Container>
    );
  }
  
   click() {
        this.refs.drawer.show();
    }
    close(){
        this.refs.drawer.close();
    }
}
```
