# Layout

`Layout`是一个必不可少的概念，需要掌握才能创建出色的布局和UI。React Native使用Flexbox创建布局，这在我们需要适应不同屏幕尺寸甚至不同设备的组件和视图时非常有用。

基于`NativeBase`，这里是Easy Grid of NativeBase，Flexbox的包装器。NativeBase中的布局系统非常强大且灵活。不再担心Flexbox的道具，如alignItems，flexDirection，justifyContent，margin，padding, position, width等。您可以使用我们拥有的所有可用选项创建任何布局。为了构建自定义布局和组件，了解布局在NativeBase中的工作方式并不像Flexbox那么难。

Flexbox使它看起来像百分比，但实际发生的只是比率。在更容易的部分，比率比百分比/小数更容易表示。因此，Easy Grid采用比率代替百分比。

性能方面，Easy Grid值得注意，并且与Flexbox一样好用，计算量不大。

###### Syntax

```
import React, { Component } from 'react';
import { Container, Header } from 'react-native-ecpei-widgets';
import { Col, Row, Grid } from 'react-native-ecpei-widgets';
export default class LayoutExample extends Component {
  render() {
    return (
      <Container>
        <Header />
          <Grid>
            <Col style={{ backgroundColor: '#635DB7', height: 200 }}></Col>
            <Col style={{ backgroundColor: '#00CE9F', height: 200 }}></Col>
          </Grid>
      </Container>
    );
  }
}
```

##### 示例：
<br />

<div align=center >
<img src="images/Layout-android.png" />
<img src="images/Layout-ios.png" /> 
</div>