### 范围选择器：
#### 1. A > B 表示把所有A中的B选择出来。
如：
```
div > p
{
	background-color:red;
}
```
表示 div下的所有的p 的背景色设置为红色。

* A 和 B 可以是标签名， 也可以是类名：
```
  .div1 > .p1 {
    color: red;
  }
```
对应 html :
```
  <div class="div1">
    <p class="p1">text </p>
  </div>
```

#### 2. A ~ B 表示和A同层级的B选择出来
如：
```
p~ul
{
  background-color:red;
}

```
p后的ul被选择出来
```
<p>The first paragraph.</p>
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```



状态选择器
:link	a:link	选择所有未访问链接	1
:visited	a:visited	选择所有访问过的链接	1
:active	a:active	选择活动链接	1
:hover	a:hover	选择鼠标在链接上面时
