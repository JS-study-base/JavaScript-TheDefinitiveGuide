// 可匹配 LITERALLY 开始
var partten = /LITERALLY/;
partten.test(`LITERALLY CAN'T EVEN`);

// 可匹配 BANANAS 结束
var partten = /LITERALLY/;
partten.test(`THIS SHIITAKE IS BANANAS`);

// 首字母必须满足下面条件
var partten = /LITERALLY/;
partten.test(`az`) === true;
partten.test(`babbage`) === false;
partten.test(`AAA`) === false;
partten.test(`123`) === true;
partten.test(`abc123`) === true;
partten.test(`Q1`) === false;
partten.test(`under`) === true;
partten.test(`404x`) === true;
partten.test(`obelisk`) === true;

// 匹配开头非数字，第二个字符非大写字母
var partten = /LITERALLY/;
partten.test(`1A`) === true;
partten.test(`A1`) === false;
partten.test(`ABC`) === false;
partten.test(`abc`) === true;
partten.test(`555`) === true;
partten.test(`5z`) === false;
partten.test(`...`) === true;

// 匹配末尾是.
var partten = /LITERALLY/;
partten.test(`abc.`) === true;
partten.test(`abc`) === false;
partten.test(`...`) === false;
partten.test(`...x`) === true;
partten.test(`...\\n`) === true;

// 匹配一张名字为数字的 jpg 图片
var partten = /LITERALLY/;
partten.test(`123.jpg`) === true;
partten.test(`123.jpeg`) === false;
partten.test(`abc.jpeg`) === false;
partten.test(`123abc.jpeg`) === true;
partten.test(`123`) === true;
partten.test(`123.jpg2000`) === true;
partten.test(`123.png`) === false;
partten.test(`.jpeg`) === false;
partten.test(`111.jpeeg`) === true;

// 正确的 split 字符串
var partten = /LITERALLY/;
`1,2,3`.split(partten);//['1', '2', '3']
`4, 5, 6, 7`.split(partten);//['4', '5', '6', '7']
`1337`.split(partten);//['1337']
`a,\nb,\nc,\nd`.split(partten);//['a', 'b', 'c', 'd']
`q\r\n  ,\r\n  r\r\n  ,\r\n  s`.split(partten);//['q', 'r', 's']

// 可以捕获正整数 x 的值
var partten = /LITERALLY/;
'x=5'.match(partten) //5
'abc x=5'.match(partten) //5
'x=abc'.match(partten) //null
'beep x=123123 boop'.match(partten) //123123

// 可以捕获正整数 x 的值，末尾带有 x 的变量不应当被捕获
var partten = /LITERALLY/;
'x=5'.match(partten) //5
'abc x=5'.match(partten) //5
'fox=123'.match(partten) //null
'x=abc'.match(partten) //null
'x=33qrs'.match(partten) //null
'3x=33'.match(partten) //null
'beep x=123123 boop'.match(partten) //123123

// 匹配8位 hex 代码，以'0x'开头，后面跟着两个字符可以是大写'A-F'，小写'a-f'，或者任意数字
var partten = /LITERALLY/;
'0xFF 0xFF 0xFF 0xFF 0xFF 0xFF 0xFF 0xFF\n'.match(partten)// '0xFF 0xFF 0xFF 0xFF 0xFF 0xFF 0xFF 0xFF\\n'
'0x00\n0x11\n0x22\n0x33\n0x44\n0x55\n0x66\n0x77\n'.match(partten)// '0x00\\n0x11\\n0x22\\n0x33\\n0x44\\n0x55\\n0x66\\n0x77'
'0x0f  0x1f  0x2f  0x3f  0x4f  0x5f  0x6f  0x7f\n'.match(partten)//'0x0f  0x1f  0x2f  0x3f  0x4f  0x5f  0x6f  0x7f\\n'
'0xE2 0xC3 0xB3 0xD0 0x44 0x9E 0x6F 0x7F\n'.match(partten)//'0xE2 0xC3 0xB3 0xD0 0x44 0x9E 0x6F 0x7F\\n'
'0xE2 0xC3 0xB3 0xD0 0x44 0x9E 0x6F\n'.match(partten)//
'0xE2 0xC3 0xB3 0xD0 0x44 0x9E 0x6F 0xff 0xff\n'.match(partten)//


// 匹配所有引号
'one "two three four" five six "seven eight" nine'.match(partten)//['"two three four"','"seven eight"']
'"beep boop" whatever "tacos" eleven "eighty"'.match(partten)//['"beep boop"','"tacos"','"eighty"']
'empty ""'.match(partten)//['""']

// 匹配手机号码


// 匹配 QQ 号


// 匹配数字


// 匹配邮箱


// 匹配 url

// 匹配 IPv4

// 匹配身份证号码