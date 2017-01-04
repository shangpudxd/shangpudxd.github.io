function setCookie(name,value,day){
	// 设置cookie => document.cookie进行赋值
	if(day){
		var date = new Date();
		date.setDate(date.getDate()+day);
		document.cookie = name + '=' +value+';path=/;expires='+date;
	}else{
		document.cookie = name + '=' +value+';path=/';
	}
}
function getCookie(name){
	// 格式  'key=value'
	// 多条 'key=value; key1=value1; ...'
	var arr = document.cookie.split('; ');
	// ['key=value','key1=value1'...]
	for (var i = 0; i < arr.length; i++) {
		var arr2 = arr[i].split('=');
		// ['key','value']
		if(arr2[0] == name){
			return arr2[1];
		}
	}
	return '';
}
function removeCookie(name){
	// 设置成之前的日子就相当于过期 然后浏览器会把这条记录清除
	// -1 昨天 => 之前的日子
	setCookie(name,'',-1)
}