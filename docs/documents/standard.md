# 编码规范
<li>好的编码规范可以尽可能的减少一个软件的维护成本 , 并且几乎没有任何一个软件，在其整个生命周期中，均由最初的开发人员来维护；</li>
<li>好的编码规范可以改善软件的可读性，可以让开发人员尽快而彻底地理解新的代码；</li>
<li>好的编码规范可以最大限度的提高团队开发的合作效率；</li>
<li>长期的规范性编码还可以让开发人员养成好的编码习惯，甚至锻炼出更加严谨的思维；</li>

#### 1.命名规范
<b>驼峰式命名法介绍：驼峰式命名法由小(大)写字母开始，后续每个单词首字母都大写。</b><br />
按照第一个字母是否大写，分为：<br />
① Pascal Case 大驼峰式命名法：首字母大写。eg：StudentInfo、UserInfo、ProductInfo<br />
② Camel Case 小驼峰式命名法：首字母小写。eg：studentInfo、userInfo、productInfo

###### 1.1变量命名
<b>命名方法：</b>小驼峰式命名法。<br />
<b>命名规范：</b>前缀应当是名词。(函数的名字前缀为动词，以此区分变量和函数)<br />
<b>命名建议：</b>尽量在变量名字中体现所属类型，如:length、count等表示数字类型；而包含name、title表示为字符串类型。<br />
示例：

```
//好的命名方式
var maxCount = 10;
var tableTitle = 'LoginTable';

//不好的命名方式
var setCount = 10;
var getTile = 'LginTale';
```
###### 1.2函数命名
<b>命名方法：</b>小驼峰式命名法。<br />
<b>命名规范：</b>前缀应当为动词。<br />
<b>命名建议：</b>可使用常见动词约定。<br />
<table>
   <tr>
     <td>动词 </td>
     <td>含义 </td>
     <td>返回值</td>
   </tr>
   <tr>
     <td> can</td>
     <td> 判断是否可执行某个动作（权限）</td>
     <td>返回bool：true，false</td>
   </tr>
   <tr>
     <td> has</td>
     <td> 判断是否含有某个值</td>
     <td>返回bool：true，false</td>
   </tr>
   <tr>
     <td>is </td>
     <td>判断是否为某个值 </td>
     <td>返回bool：true，false</td>
   </tr>
   <tr>
     <td>get </td>
     <td> 获取某个值</td>
     <td>函数返回一个非bool值</td>
   </tr>
   <tr>
     <td> set</td>
     <td> 设置某个值</td>
     <td>无返回值，返回是否设置成功</td>
   </tr>
   <tr>
     <td>load </td>
     <td> 加载某些数据</td>
     <td>无返回值或返回是否加载完成</td>
   </tr>
</table>
示例：

```
//是否可阅读
function canRead() {
   return true;
}

//获取名称
function getName() {
   return this;
}
```

###### 1.3 常量命名
<b>命名方法：</b>名称全部大写。<br />
<b>命名规范：</b>使用大写字母和下划线来组合命名，下划线用以分割单词。<br />
<b>命名建议：</b>无。<br />