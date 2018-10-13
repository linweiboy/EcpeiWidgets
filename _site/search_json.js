window.ydoc_plugin_search_json = {
  "组件文档": [
    {
      "title": "快速了解",
      "content": "",
      "url": "/documents/index.html",
      "children": [
        {
          "title": "React Native开发使用的UI组件",
          "url": "/documents/index.html#react-native开发使用的ui组件",
          "content": "React Native开发使用的UI组件     react-antive-ecpei-widgets组件是深圳前海容易配电子商务有限公司旗下技术开发针对公司需求基于NativeBase二次开发的UI组件库，用于React Native 为iOS和Android平台构建本机移动应用程序。 (后面统一用EcpeiWidgets代替组件名) \n    EcpeiWidgets本就基于NativeBase开发，所以许多语法同NativeBase相似，通过对组件本身进行非常少的更改来轻松对组件进行主题化。\nEcpeiWidgets基本语法import React, { Component } from 'react';import { Container, Button, Text } from 'react-native-ecpei-widgets';\nexport default class GeneralExample extends Component {\n  render() {\n\t return (\n\t    \n\t      \n\t        \n\t           Button\n\t        \n\t      \n\t    \n\t );\n  }\n}\n"
        }
      ]
    },
    {
      "title": "快速设置使用React Native进行设置",
      "content": "EcpeiWidgets组件要添加到你的应用程序中去，需要自己去添加react-native-ecpei-widgets到你的项目中，自行使用npm安装。系统要求Node版本[节点](https://nodejs.org/en/ \"node\") >= 6.0 ;全局安装[npm](https://www.npmjs.com/ \"npm\") >= 4.0 ;全局安装的[React Native CLI](https://facebook.github.io/react-native/docs/getting-started.html \"ReactNative\")，可让您轻松创建和初始化项目。react-native init EcpeiWidgestDemocd EcpeiWidgestDemo\n安装EcpeiWidgets组件在已创建好的React-native项目EcpeiWidgestDemo中添加react-native-ecpei-widgets组件npm install react-native-ecpei-widgets --save安装组件dependencies:安装对等依赖关系任何npm包中包含的对等依赖关系都不会自动安装。您的应用程序将不会明确依赖它。\nreact-native link",
      "url": "/documents/installation.html",
      "children": []
    },
    {
      "title": "NativeBase兼容模式EcpeiWidgets更新记录",
      "content": "\n\nNativeBase\nReact Native\n\n\n\n\nv2.3.0 and above\nv0.46.0 and above (does not support React 16.0.0-alpha.13)\n\n\n---\n---\n\n\n\n\n更新版本号\n更新记录\n\n\n\n\n1.0.482\n---\n\n\n",
      "url": "/documents/Compatibility.html",
      "children": []
    },
    {
      "title": "Button",
      "content": "Button 是一个基于NativeBase组件上，符合自定义一套主题的按钮组件。它们用于各种目的，例如，提交或重置表单，导航，执行交互式操作，例如在点击按钮时在应用中显示或隐藏某些内容等。\n注意：在NativeBase中Button是与Text一起导入使用的，而我们的组件经过导入，在使用的时候直接传入文本参数即可\n内容Button Theme\nTransparent Button\nOutline Button\nRounded Button\nBlock Button\nFull Button\nIcon Button\nButton Size\nDisabled Button\nSyntaximport React, { Component } from 'react';import { Container, Header, Content, Button } from 'react-native-ecpei-widgets';\nexport default class ButtonExample extends Component {\n  render() {\n    return (\n      \n        \n        \n          \n        \n      \n    );\n  }\n}\n支持iOS和Android设备上的React Native应用程序。\n按钮组件接受输入，例如：文本，图标，带图标的文本。\n基于NativeBase为您提供了自定义此组件的道具的权限。\n示例：要为按钮设置自定义样式，请将它们包含在style按钮的支柱中。\n输入用户定义的样式。\n您可以在变量文件之后更改默认按钮文本大小写（在Android中）。\nNativeBase为其用户提供了props可与Button一起使用的大量列表。\n更换组件：\nReact Native TouchableOpacity for iOS\nReact Native TouchableNativeFeedback for Android\nConfigurations\n\nProperty\nDefault\nOption\nDescription\n\n\n\n\nactive\n-\nboolean\n按钮状态\n\n\ntransparent\ntrue\nboolean\n透明状态按钮\n\n\nbordered\n-\n-\n边框线按钮\n\n\nrounded\n-\n-\n呈现略微圆形边缘的按钮\n\n\nblock\n-\n-\n块级按钮\n\n\nfull\n-\n-\n全宽按钮\n\n\ndisabled\ntrue\nboolean\n禁用按钮的单击选项\n\n\nsmall\n-\n-\n小尺寸按钮\n\n\nlarge\n-\n-\n大尺寸按钮\n\n\niconRight\n-\n-\n右侧填充图标按钮\n\n\niconLeft\n-\n-\n左侧填充图标按钮\n\n\nlight\n-\nboolean\n轻白色背景颜色按钮\n\n\nprimary\n-\nboolean\n蓝色背景颜色按钮\n\n\nsuccess\n-\nboolean\n绿色背景颜色按钮\n\n\ninfo\n-\nboolean\n浅兰的背景颜色按钮\n\n\nwarning\n-\nboolean\n黄色背景颜色按钮\n\n\ndanger\n-\nboolean\n红色背景颜色按钮\n\n\ndark\n-\nboolean\n黑背景颜色按钮\n\n\ntitle\n-\nstring\n按钮文本\n\n\ntextStyle\n-\nText.style\n按钮文本样式\n\n\n",
      "url": "/documents/Buttons/index.html",
      "children": []
    },
    {
      "title": "Button Theme",
      "content": "NativeBase提供多种颜色的按钮。NativeBase提供以下颜色主题：Primary (default)\nSuccess\nInfo\nWarning\nDanger\nLight\nDark\nSynatximport React, { Component } from 'react';import { Container, Header, Content, Button } from 'react-native-ecpei-widgets';\nexport default class ButtonThemeExample extends Component {\n  render() {\n    return (\n      \n        \n        \n          \n          \n          \n          \n          \n          \n          \n        \n      \n    );\n  }\n}\n示例：\n       \n \n",
      "url": "/documents/Buttons/ButtonTheme.html",
      "children": []
    },
    {
      "title": "Transparent Button",
      "content": "transparent 为Button组件的属性，这将呈现没有边框且没有背景颜色的按钮。Syntaximport React, { Component } from 'react';import { Container, Header, Content, Button } from 'react-native-ecpei-widgets';\nexport default class ButtonThemeExample extends Component {\n  render() {\n    return (\n      \n        \n        \n          \n          \n          \n          \n          \n          \n          \n        \n      \n    );\n  }\n}\n\n示例：\n       \n \n",
      "url": "/documents/Buttons/ButtonTransparent.html",
      "children": []
    },
    {
      "title": "Outline Button",
      "content": "bordered  Button属性，边框样式。Styntaximport React, { Component } from 'react';import { Container, Header, Content, Button } from 'react-native-ecpei-widgets';\nexport default class ButtonThemeExample extends Component {\n  render() {\n    return (\n      \n        \n        \n          \n          \n          \n          \n          \n          \n          \n        \n      \n    );\n  }\n}\n\n示例：\n       \n \n",
      "url": "/documents/Buttons/ButtonOutline.html",
      "children": []
    },
    {
      "title": "Rounded Button",
      "content": "rounded  Button属性，Button设计带有略微圆形边缘的按钮。Styntaximport React, { Component } from 'react';import { Container, Header, Content, Button } from 'react-native-ecpei-widgets';\nexport default class ButtonThemeExample extends Component {\n  render() {\n    return (\n      \n        \n        \n          \n          \n          \n          \n          \n          \n          \n        \n      \n    );\n  }\n}\n示例：\n \n",
      "url": "/documents/Buttons/ButtonRounded.html",
      "children": []
    },
    {
      "title": "Block Button",
      "content": "块级按钮，跨越父元素的整个宽度。通过添加block prop来创建块级按钮ButtonStyntaximport React, { Component } from 'react';import { Container, Header, Content, Button } from 'react-native-ecpei-widgets';\nexport default class ButtonThemeExample extends Component {\n  render() {\n    return (\n      \n        \n        \n          \n          \n          \n          \n          \n          \n          \n        \n      \n    );\n  }\n}\n示例：\n \n",
      "url": "/documents/Buttons/ButtonBlock.html",
      "children": []
    },
    {
      "title": "Full Button",
      "content": "将按钮添加占据其父宽度的100％。但是，它也会删除左右边框，在显示器的整个宽度上伸展时。Styntaximport React, { Component } from 'react';import { Container, Header, Content, Button } from 'react-native-ecpei-widgets';\nexport default class ButtonThemeExample extends Component {\n  render() {\n    return (\n      \n        \n        \n          \n          \n          \n          \n          \n          \n          \n        \n      \n    );\n  }\n}\n示例：\n \n",
      "url": "/documents/Buttons/ButtonFull.html",
      "children": []
    },
    {
      "title": "Icon Button",
      "content": "iconLeft iconRight 分别为Icon Button属性，区分Icon图标左右位置，Icon图标使用的是EcpeiWidgets定制的Icon，抛弃了NativeBase中使用的Icon。Styntaximport React, { Component } from 'react';import { Container, Header, Content, Button } from 'react-native-ecpei-widgets';\nexport default class ButtonThemeExample extends Component {\n  render() {\n    return (\n      \n        \n        \n          \n          \n          \n          \n        \n      \n    );\n  }\n}\n示例：\n \n",
      "url": "/documents/Buttons/ButtonIcon.html",
      "children": []
    },
    {
      "title": "Button Size",
      "content": "按钮尺寸大小，在没有使用以下两属性时，按钮大小为默认尺寸。small：适用于小尺寸按钮\nlarge：适用于大尺寸按钮\nStyntaximport React, { Component } from 'react';import { Container, Header, Content, Button } from 'react-native-ecpei-widgets';\nexport default class ButtonThemeExample extends Component {\n  render() {\n    return (\n      \n        \n        \n          \n          \n          \n        \n      \n    );\n  }\n}\n示例：\n \n",
      "url": "/documents/Buttons/ButtonSize.html",
      "children": []
    },
    {
      "title": "Disabled Button",
      "content": "禁用的按钮无法使用且无法点击。NativeBase Button的disabled prop是boolean类型。如果存在，则指定应禁用该按钮。可以将禁用的道具设置为阻止用户点击按钮，直到满足某些其他条件（例如选择复选框等）。然后，条件代码可以删除禁用的值，并使按钮可用。Styntaximport React, { Component } from 'react';import { Container, Header, Content, Button } from 'react-native-ecpei-widgets';\nexport default class ButtonThemeExample extends Component {\n  render() {\n    return (\n      \n        \n        \n          \n          \n          \n          \n          \n          \n          \n        \n      \n    );\n  }\n}\n示例：\n \n",
      "url": "/documents/Buttons/ButtonDisabled.html",
      "children": []
    },
    {
      "title": "Layout",
      "content": "Layout是一个必不可少的概念，需要掌握才能创建出色的布局和UI。React Native使用Flexbox创建布局，这在我们需要适应不同屏幕尺寸甚至不同设备的组件和视图时非常有用。基于NativeBase，这里是Easy Grid of NativeBase，Flexbox的包装器。NativeBase中的布局系统非常强大且灵活。不再担心Flexbox的道具，如alignItems，flexDirection，justifyContent，margin，padding, position, width等。您可以使用我们拥有的所有可用选项创建任何布局。为了构建自定义布局和组件，了解布局在NativeBase中的工作方式并不像Flexbox那么难。Flexbox使它看起来像百分比，但实际发生的只是比率。在更容易的部分，比率比百分比/小数更容易表示。因此，Easy Grid采用比率代替百分比。性能方面，Easy Grid值得注意，并且与Flexbox一样好用，计算量不大。Syntaximport React, { Component } from 'react';import { Container, Header } from 'react-native-ecpei-widgets';\nimport { Col, Row, Grid } from 'react-native-ecpei-widgets';\nexport default class LayoutExample extends Component {\n  render() {\n    return (\n      \n        \n          \n            \n            \n          \n      \n    );\n  }\n}\n示例：\n \n",
      "url": "/documents/Layout.html",
      "children": []
    },
    {
      "title": "Header",
      "content": "基于NativeBase组件，二次定制的标题（导航栏）。\n在Container容器中可以有一个Header组件。\n要为您的屏幕设置标题，请Header在其中包含组件Container。\n其中定义的组件Header将按照您定义的顺序呈现。\n标题为您提供样式表。\n用户可以Header在应用程序中定义时添加自定义样式。\n内容：只有标题导航栏\n图标按钮导航栏\n文字按钮导航栏\n图文按钮导航栏\n图标文字同侧按钮导航栏\n右侧多图标按钮导航栏\n语法：import React, { Component } from 'react';import { Container, Header } from 'react-native-ecpei-widgets';\nexport default class HeaderExample extends Component {\n  render() {\n    return (\n      \n         { },\n        \t\t\t\ticonData: {\n            \t\t\t\tcolor: \"#000\",\n            \t\t\t\tname: \"return\",\n            \t\t\t\tsize: 16,\n            \t\t\t\t},\n            \t\t    }\n            \t\t    ]}\n        >\n        \n      \n    );\n  }\n}\n属性：\n\n属性\n默认值\n参数\n描述\n\n\n\n\niosBarStyle\n-\nlight-content,dark-content,default\n设置iOS状态栏风格样式\n\n\nandroidStatusBarColor\n-\n-\n设置android状态栏背景颜色\n\n\nnoShadow\n-\nboolean\n移除Android状态栏阴影\n\n\nsearchBar\n-\nboolean\n\n\n\nrounded\n-\nboolean\n\n\n\nhasSubtitle\n-\nboolean\n\n\n\nhasSegment\n-\nboolean\n\n\n\nhasTabs\n-\nboolean\n\n\n\nhasText\n-\nboolean\n\n\n\nnoLeft\n-\nboolean\n\n\n\nspan\n-\nboolean\n\n\n\n",
      "url": "/documents/Header/index.html",
      "children": []
    },
    {
      "title": "只有标题的导航栏",
      "content": "",
      "url": "/documents/Header/OnlyTitle.html",
      "children": []
    },
    {
      "title": "图标按钮导航栏",
      "content": "",
      "url": "/documents/Header/IconButton.html",
      "children": []
    },
    {
      "title": "文字按钮导航栏",
      "content": "",
      "url": "/documents/Header/TextButton.html",
      "children": []
    },
    {
      "title": "图标文字导航栏",
      "content": "",
      "url": "/documents/Header/IconTextButton.html",
      "children": []
    },
    {
      "title": "图标文字同侧按钮导航栏",
      "content": "",
      "url": "/documents/Header/IconAndTextButton.html",
      "children": []
    },
    {
      "title": "右侧多图标按钮导航栏",
      "content": "",
      "url": "/documents/Header/RightMultipleIcon.html",
      "children": []
    }
  ],
  "框架文档": [
    {
      "title": "快速了解安装",
      "content": "",
      "url": "/frameWork/index.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/frameWork/frameworkDesign.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/frameWork/ModuleDesignSpecification.html",
      "children": []
    },
    {
      "title": "编码规范",
      "content": "好的编码规范可以尽可能的减少一个软件的维护成本 , 并且几乎没有任何一个软件，在其整个生命周期中，均由最初的开发人员来维护；好的编码规范可以改善软件的可读性，可以让开发人员尽快而彻底地理解新的代码；好的编码规范可以最大限度的提高团队开发的合作效率；长期的规范性编码还可以让开发人员养成好的编码习惯，甚至锻炼出更加严谨的思维；1.命名规范驼峰式命名法介绍：驼峰式命名法由小(大)写字母开始，后续每个单词首字母都大写。按照第一个字母是否大写，分为：\n① Pascal Case 大驼峰式命名法：首字母大写。eg：StudentInfo、UserInfo、ProductInfo\n② Camel Case 小驼峰式命名法：首字母小写。eg：studentInfo、userInfo、productInfo1.1变量命名命名方法：小驼峰式命名法。命名规范：前缀应当是名词。(函数的名字前缀为动词，以此区分变量和函数)\n命名建议：尽量在变量名字中体现所属类型，如:length、count等表示数字类型；而包含name、title表示为字符串类型。\n示例：//好的命名方式var maxCount = 10;\nvar tableTitle = 'LoginTable';\n\n//不好的命名方式\nvar setCount = 10;\nvar getTile = 'LginTale';\n1.2函数命名命名方法：小驼峰式命名法。命名规范：前缀应当为动词。\n命名建议：可使用常见动词约定。   \n     动词 \n     含义 \n     返回值\n   \n   \n      can\n      判断是否可执行某个动作（权限）\n     返回bool：true，false\n   \n   \n      has\n      判断是否含有某个值\n     返回bool：true，false\n   \n   \n     is \n     判断是否为某个值 \n     返回bool：true，false\n   \n   \n     get \n      获取某个值\n     函数返回一个非bool值\n   \n   \n      set\n      设置某个值\n     无返回值，返回是否设置成功\n   \n   \n     load \n      加载某些数据\n     无返回值或返回是否加载完成\n   \n示例：\n//是否可阅读function canRead() {\n   return true;\n}\n\n//获取名称\nfunction getName() {\n   return this;\n}\n1.3 常量命名命名方法：名称全部大写或首字母大写。命名规范：使用大写字母和下划线来组合命名，下划线用以分割单词。\n命名建议：无。\n示例：let MAX_COUNT = 10;//Max_Countlet URL = 'http://www.baidu.com';\n1.4 构造函数命名介绍：构造函数也属于函数的一种，只不过采用new 运算符创建对象。命名方法：大驼峰式命名法，首字母大写。\n命名规范：前缀为名称。\n命名建议：无。\n示例：function Student(name) {   this.name = name;\n}\nlet st = new Student('tom');\n1.5 类成员命名类的成员包含：① 公共属性和方法：跟变量和函数的命名一样。\n② 私有属性和方法：前缀为_(下划线)，后面跟公共属性和方法一样的命名方式。\n示例：function Student(name) {   var _name = name;//私有成员\n   //公共方式\n   this.setName = function () {\n     _name = value;\n   }\n}\n\nvar st = new Student('tom');\nst.setName('jerry');\nconsole.log(st.getname()); // =>jerry:输出_name私有变量的值\n \n2. 注释规范2.1 单行注释使用方式：      ① 单独一行：//(双斜线)与注释文字之间保留一个空格。\n      ② 在代码后面添加注释：//(双斜线)与代码之间保留一个空格，并且//(双斜线)与注释文字之间保留一个空格。\n      ③ 注释代码：//(双斜线)与代码之间保留一个空格。\n使用场景：      \n① 声明变量、常量、方法名时，在其上方一行进行注释     \n② 注释代码2.2多行注释及函数注释注释要尽量简单，清晰明了。着重注释的意思，对不太直观的部分进行注解：使用方法：\n      ① 若开始(/*)和结束(*/)都在一行，推荐采用单行注释。\n      ② 若至少三行注释时，第一行为/*，最后行为*/，其他行以开始，并且注释文字与保留一个空格。注释名\t语法\t含义\t示例:\n\t@param 参数名 {参数类型}  描述信息\t描述参数的信息\t@param name {String} 传入名称\n\t@return {返回类型} 描述信息\t描述返回值的信息\t@return {Boolean} true:可执行;false:不可执行\n\t@author 作者信息 [附属信息：如邮箱、日期]\t描述此函数作者的信息\t@author 张三 2015/07/21\n\t@version XX.XX.XX\t描述此函数的版本号\t@version 1.0.3\n\t@example 示例代码\t演示函数的使用\t@example setTitle('测试') \n3. 布局规范3.1空格a）var与变量名之间留一个空格，变量名与等号之间留一个空格，等号与初始值之间留一个空格，初始值与分号之间不留空格。如：var i = 10;b）使用字面量方式声明引用类型变量时，各个属性与冒号之间不留空格，冒号与初始值之间留一个空格。如：var Person = {age: 16,\nname: \"Sam\"\n};c）function与函数名之间留一个空格，函数名与()之间不留空格，()与{之间留一个空格。d）函数的各个参数之间留一个空格。e）if、while、for与左括号之间留一个空格，以强调关键字；switch、with与左括号之间不留空格。f) 二元操作符与左右两个操作数之间留一个空格。当某行代码较长时，也可不留空格。3.2换行a）每行语句占用一行，不要多个语句一行。b）if、while、for等块级作用域后的大括号{不要另起一行，就放在关键字同一行。3.3缩进a）缩进使用4个空格，不要使用tab。b）作用域不一样时就应当进行缩进，以显示出其层次关系。4. 有关ES6代码规范(1）ES6提出了两个新的声明变量的命令：let 和 const 。 建议不再使用var，而使用let 和const 。优先使用const。//badvar a = 1, b =2 , c = 3;\n// good\nconst [a,b,c] = [1,2,3];\n（2）静态字符串一律使用单引号或反引号，不建议使用双引号。动态字符使用反引号。//bad  const a = \"foobar\";\n const b = 'foo'+a+'bb';\n\n// good \nconst a = 'foobar';\nconst b = `foo${a}bar`;\n（3）优先使用结构体赋值; 函数的参数如果是对象的成员，优先使用解构赋值。const arr = [1, 2, 3, 4];\n// bad\nconst first = arr[0];\nconst second = arr[1];\n\n// good\nconst [first, second] = arr;\n// badfunction getFullName(user) {\n  const firstName = user.firstName;\n  const lastName = user.lastName;\n}\n\n// good\nfunction getFullName(obj) {\n  const { firstName, lastName } = obj;\n}\n\n// best\nfunction getFullName({ firstName, lastName }) {\n}\n4）如果函数返回多个值，优先使用对象的解构赋值，而不是数组的解构赋值。这样便于以后添加返回值，以及更改返回值的顺序。// badfunction processInput(input) {\n  return [left, right, top, bottom];\n}\n\n// good\nfunction processInput(input) {\n  return { left, right, top, bottom };\n}\n\nconst { left, right } = processInput(input);\n（5）对象的属性和方法尽量采用简洁表达法，这样易于描述和书写// bad var ref = 'some value';\nconst atom = {\n  ref:ref,\n  value:1,\n  addValue:function(value){\n    return atom.value + value;\n  },\n}\n\n//  good \nconst atom = {\n  ref,\n  value:1,\n  addValue(value){\n    return atom.value + value;\n  }\n}\n5. 项目中基本要求（1）项目中列表页，刚进入时默认使用空白页，待数据加载完时，再区分无数据还是有数据页面；（2）使用一些加载数据时，使用前先判断是否有数据，避免数据延迟或错误出现不知名崩溃问题；（3）项目中创建.js文件时，可以使用注释说明此文件用途及创建人，列如：在文件最上面添加注释：/** * Created by XXX\n *\n * Description: xxx组件\n */\n（4）项目中，无用代码要删除，特殊地方做好注释",
      "url": "/frameWork/standard.html",
      "children": []
    }
  ]
}