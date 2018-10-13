# Full Button
将按钮添加占据其父宽度的100％。但是，它也会删除左右边框，在显示器的整个宽度上伸展时。

###### Styntax

```
import React, { Component } from 'react';
import { Container, Header, Content, Button } from 'react-native-ecpei-widgets';
export default class ButtonThemeExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Button full light title="Light" />
          <Button full title="Primary" />
          <Button full success title="Success" />
          <Button full info title="Info" />
          <Button full warning title="Warning" />
          <Button full danger title="Danger" />
          <Button full dark title="Dark" />
        </Content>
      </Container>
    );
  }
}
```

##### 示例：
<br />

<div align=center >
<img src="images/ButtonFull-android.png" />
<img src="images/ButtonFull-ios.png" /> 
</div>