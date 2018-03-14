var Query={
    query:function(s){
        return Query.map.filter(function(item){
            return item.name.toLowerCase().has(s.toLowerCase());
        })
    },
    map:[{
        name:'Jet简介',
        url:'/intro',
        intro:'Jet是一个前端的轻量级的js框架，不依赖任何第三方库。Jet采用数据双向绑定，以数据驱动视图。',
        des:''
    },{
        name:'安装使用',
        url:'/intro/install',
        intro:'以script标签引入或者在lite-server中使用',

    },{
        name:'目录结构',
        url:'/intro/contents',
        intro:'介绍Jet项目的目录结构。',
        des:''
    },{
        name:'HTML模板',
        url:'/intro/html',
        intro:'Jet的HTML模板使用的html后缀的文件，语法与普通的html一样。',
        des:''
    },{
        name:'Jet语法',
        url:'/intro/grammer',
        intro:'Jet 使用 new Jet() 来创建一个Jet组件',
        des:''
    },{
        name:'局部渲染',
        url:'/intro/grammer',
        intro:'通过给 new Jet() 参数增加一个 ele 属性（值是一个id值或者是一个dom元素）。可以局部渲染html元素',
        des:'part'
    },{
        name:'ondatachange',
        url:'/intro/grammer',
        intro:'ondatachange 属性用于为Jet数据添加一个数据变化的监听事件',
        des:'ondatachange'
    },{
        name:'生命周期函数',
        url:'/intro/grammer',
        intro:'Jet 有7个生命周期函数',
        des:'life'
    },{
        name:'数据绑定',
        url:'/bind',
        intro:'Jet中的UI是由数据驱动，所有动态的html内容都与Jet的数据绑定，当数据改变时，对应的UI内容会自动更新',
    },{
        name:'属性J',
        url:'/bind/j',
        intro:'Jet中使用属性J将Jet中的数据和UI绑定',
        des:''
    },{
        name:'绑定的分类',
        url:'/bind/type',
        intro:'bind,for,text和input',
        des:''
    },{
        name:'bind',
        url:'/bind/grammer',
        intro:'当绑定的数据是json时，就会使用 new Jet.Bind() 生成一个bind类型的Jet元素。',
        des:'bind'
    },{
        name:'for',
        url:'/bind/grammer',
        intro:'当绑定的数据是数组时，就会使用 new Jet.For() 生成一个for类型的Jet元素。',
        des:'for'
    },{
        name:'text',
        url:'/bind/grammer',
        intro:'当绑定的数据是boolean，number，string类型（值类型）时，并且对应的html元素不是输入元素',
        des:'text'
    },{
        name:'input',
        url:'/bind/grammer',
        intro:'当绑定的数据是boolean，number，string类型（值类型）时，并且对应的html元素是输入元素',
        des:'input'
    },{
        name:'数组方法',
        url:'/bind/array',
        intro:'循环类型的for元素的绑定值是一个数组，Jet 对for元素的数组定义了一些操作方法，来代替原生js的数组操作方法。',
        des:''
    },{
        name:'$push方法',
        url:'/bind/array',
        intro:'使用 .$push() 向数组尾部插入一个元素',
        des:'push'
    },{
        name:'$pushArray方法',
        url:'/bind/array',
        intro:'使用 .$pushArray() 向数组尾部插入多个元素',
        des:'pushArray'
    },{
        name:'$prep方法',
        url:'/bind/array',
        intro:'使用 .$prep() 向数组头部插入一个元素',
        des:'prep'
    },{
        name:'$prepArray方法',
        url:'/bind/array',
        intro:'使用 .$pushArray() 向数组头部插入多个元素',
        des:'prepArray'
    },{
        name:'$prepArray方法',
        url:'/bind/array',
        intro:'使用 .$pushArray() 向数组头部插入多个元素',
        des:'prepArray'
    },{
        name:'$insert方法',
        url:'/bind/array',
        intro:'使用 .$insert() 向数组任意位置插入一个元素',
        des:'insert'
    },{
        name:'$insertArray方法',
        url:'/bind/array',
        intro:'使用 .$insertArray() 向数组任意位置插入多个元素',
        des:'insertArray'
    },{
        name:'$remove方法',
        url:'/bind/array',
        intro:'使用 .$remove() 删除数组中的一个或多个元素',
        des:'remove'
    },{
        name:'$clear方法',
        url:'/bind/array',
        intro:'使用 .$clear() 可以清空一个数组',
        des:'clear'
    },{
        name:'$replace方法',
        url:'/bind/array',
        intro:'使用 .$replace() 可以对当前数组赋一个新的值',
        des:'replace'
    },{
        name:'属性样式事件',
        url:'/attr',
        intro:'本章中将介绍Jet中的属性，样式和事件的绑定',
    },{
        name:'jif',
        url:'/attr/if',
        intro:'可以根据给定的布尔值或布尔表达式的结果对元素进行两种不同的操作',
    },{
        name:'jshow',
        url:'/attr/show',
        intro:'可以根据一个布尔值或者布尔表达式来显示或者隐藏绑定的html元素',
    },{
        name:'jattr',
        url:'/attr/attr',
        intro:'可以给html元素绑定属性',
    },{
        name:'Jstyle',
        url:'/attr/style',
        intro:'可以给html元素绑定样式',
    },{
        name:'Jrun',
        url:'/attr/run',
        intro:'可以给html元素添加一个或者多个加载之后的回调函数',
    },{
        name:'Jon',
        url:'/attr/on',
        intro:'可以给html元素添加一个加载之后的回调函数',
    },{
        name:'Jload',
        url:'/attr/load',
        intro:'可以在某个元素之内加载其他的html模板',
    },{
        name:'Jroot',
        url:'/attr/root',
        intro:'可以将html元素绑定到Jet根元素上',
    },{
        name:'Jdom',
        url:'/attr/dom',
        intro:'生成一个可以使用Jet特殊语法操作的类dom元素',
    },{
        name:'Jhtml',
        url:'/attr/html',
        intro:'将绑定的内容设置成为innerHTML',
    },{
        name:'表单验证',
        url:'/valid',
        intro:'Jet中的自带一套表单验证的方案',
    },{
        name:'Jvalid',
        url:'/valid/valid',
        intro:'对输入元素设置验证的规则',
    },{
        name:'预定义的验证规则',
        url:'/valid/valid',
        intro:'Jet中预定义的验证规则有以下几种',
        des:'regExp'
    },{
        name:'Jform',
        url:'/valid/form',
        intro:'使用 Jform 属性来指定一个表单',
    },{
        name:'Jet.valid',
        url:'/valid/method',
        intro:'valid对象中含有很多可以定制的属性',
    },{
        name:'Jet.valid.language',
        url:'/valid/method',
        intro:'设置验证提示信息语言',
        des:'language'
    },{
        name:'Jet.valid.useDefaultStyle',
        url:'/valid/method',
        intro:'设置使用默认的错误提示样式',
        des:'useDefaultStyle'
    },{
        name:'Jet.valid.showInPlaceHolder',
        url:'/valid/method',
        intro:'设置是否将格式要求使用 placeholder 显示',
        des:'showInPlaceHolder'
    },{
        name:'Jet.valid.useAlert',
        url:'/valid/method',
        intro:'设置是否使用alert方法打印出验证失败信息',
        des:'useAlert'
    },{
        name:'Jet.valid.init',
        url:'/valid/method',
        intro:'初始化验证元素',
        des:'init'
    },{
        name:'Jet.valid.validate',
        url:'/valid/method',
        intro:'代码调用验证表单',
        des:'validate'
    },{
        name:'Jet.valid.validInput',
        url:'/valid/method',
        intro:'代码调用验证单个输入元素',
        des:'validInput'
    },{
        name:'Jet.valid.addRegExp',
        url:'/valid/method',
        intro:'修改或者添加验证的正则表达式',
        des:'addRegExp'
    },{
        name:'Jet.valid.addValidText',
        url:'/valid/method',
        intro:'修改或者添加验证的错误提示文字',
        des:'addValidText'
    },{
        name:'Jet.valid.onOnePass',
        url:'/valid/method',
        intro:'设置单个输入元素验证成功的回调函数',
        des:'onOnePass'
    },{
        name:'Jet.valid.onOneFail',
        url:'/valid/method',
        intro:'设置单个输入元素验证失败的回调函数',
        des:'onOneFail'
    },{
        name:'自定义验证样式',
        url:'/valid/custom',
        intro:'定制验证成功或者失败的提示信息',
    },{
        name:'国际化语言',
        url:'/lang',
        intro:'支持国际化语言',
    },{
        name:'Jet.lang.use',
        url:'/lang/use',
        intro:'启用国际化语言，设置支持的语种',
    },{
        name:'静态国际化语言',
        url:'/lang/static',
        intro:'渲染静态的dom元素',
    },{
        name:'动态国际化语言',
        url:'/lang/dynamic',
        intro:'支持国际化语言的动态的Jet数据',
    },{
        name:'Jet.lang.list',
        url:'/lang/list',
        intro:'查看可用的语言列表',
    },{
        name:'Jet.lang.type',
        url:'/lang/type',
        intro:'获取当前的语言，设置语言',
    },{
        name:'Jet.lang.init',
        url:'/lang/init',
        intro:'动态初始化新增的需要国际化的静态html元素',
    },{
        name:'路由',
        url:'/router/',
        intro:'开发单页web应用',
    },{
        name:'Jet.router.use',
        url:'/router/use',
        intro:'启用路由模块',
    },{
        name:'jrouter&jout',
        url:'/router/ele',
        intro:'指定路由的点击元素和出口',
    },{
        name:'路由事件',
        url:'/router/on',
        intro:'路由事件有onroute和onrouted',
    },{
        name:'Jet.router.route',
        url:'/router/route',
        intro:'使用代码进行路由跳转',
    },{
        name:'路由属性',
        url:'/router/prop',
        intro:'许多与路由相关的属性',
    },{
        name:'工具方法',
        url:'/tool/',
        intro:'封装了一些常用的函数以及操作dom元素的方法',
    },{
        name:'Jet.$',
        url:'/tool/tool',
        intro:'常用的功能的函数以及对dom操作的方法',
    },{
        name:'prototype扩展',
        url:'/tool/prototype',
        intro:'dom元素，数组和字符串的prototype进行了扩展',
    },{
        name:'JUI',
        url:'/jui/',
        intro:'JUI 是针对 Jet 开发的一套前端 UI 框架',
    },{
        name:'jui-bind',
        url:'/jui/',
        intro:'与Jet数据进行绑定',
        des:'jui-bind'
    },{
        name:'jui-change',
        url:'/jui/',
        intro:'指定一个数据改变以后的回调函数',
        des:'jui-change'
    },{
        name:'$jui',
        url:'/jui/',
        intro:'获取JUI对象',
        des:'$jui'
    },{
        name:'基础样式类',
        url:'/jui/base',
        intro:'一套基础样式类',
    },{
        name:'图标icon',
        url:'/jui/icon',
        intro:'JUI采用开源web图标字体 Font Awesome',
    },{
        name:'栅格grid',
        url:'/jui/grid',
        intro:'最多将一行分为24列',
    },{
        name:'按钮btn',
        url:'/jui/btn',
        intro:'定义一个按钮',
    },{
        name:'输入框input',
        url:'/jui/input',
        intro:'定义一个输入框',
    },{
        name:'单选框radio',
        url:'/jui/radio',
        intro:'定义一个单选框',
    },{
        name:'单选框组radioGroup',
        url:'/jui/radio',
        intro:'定义一个单选框组',
        des:'radioGroup'
    },{
        name:'复选框与复选框组check',
        url:'/jui/check',
        intro:'定义复选框和复选框组',
    },{
        name:'下拉框select',
        url:'/jui/select',
        intro:'定义一个下拉框',
    },{
        name:'切换按钮switch',
        url:'/jui/switch',
        intro:'定义一个切换按钮',
    },{
        name:'时间选择器date',
        url:'/jui/date',
        intro:'时间选择器',
    },{
        name:'颜色选择器color',
        url:'/jui/color',
        intro:'颜色选择器',
    },{
        name:'滑动选择器slider',
        url:'/jui/slider',
        intro:'滑动选择器',
    },{
        name:'提示框msg',
        url:'/jui/msg',
        intro:'弹出一个消息提示框',
    },{
        name:'确认框confirm',
        url:'/jui/confirm',
        intro:'弹出一个确认框',
    },{
        name:'对话框dialog',
        url:'/jui/dialog',
        intro:'弹出一个对话框',
    }],
}