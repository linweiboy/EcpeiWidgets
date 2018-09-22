# 快速了解

### React Native开发使用的UI组件

<p>&nbsp;&nbsp;&nbsp;&nbsp; react-antive-ecpei-widgets组件是深圳前海容易配电子商务有限公司旗下技术开发针对公司需求基于NativeBase二次开发的UI组件库，用于React Native 为iOS和Android平台构建本机移动应用程序。 (后面统一用EcpeiWidgets代替组件名) 
<br /><br />
&nbsp;&nbsp;&nbsp;&nbsp;EcpeiWidgets本就基于NativeBase开发，所以许多语法同NativeBase相似，通过对组件本身进行非常少的更改来轻松对组件进行主题化。
</p>

EcpeiWidgets基本语法

```
import React, { Component } from 'react';
import { Container, Button, Text } from 'react-native-ecpei-widgets';
export default class GeneralExample extends Component {
  render() {
	 return (
	    <Container>
	      <Button>
	        <Text>
	           Button
	        </Text>
	      </Button>
	    </Container>
	 );
  }
}
```

