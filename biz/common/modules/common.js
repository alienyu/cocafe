import React,{Component} from 'react';
import { hashHistory } from 'react-router';
import { floor } from 'lodash';
import { message } from 'antd';
import {Decimal} from 'decimal.js';
Decimal.set({precision: 32});
const common = {
    compare(arg1, arg2) {
        let x, y, result='';
        try{
            x = new Decimal(arg1);
        }catch(e){ 
        }
        try{
            y = new Decimal(arg2);
        }catch(e){
        }
        try{
            result = x.comparedTo(y);
        }catch(e){
            return;
        }
        return result;
    },

    accAdd(arg1, arg2) {
        // 相加
        let x, y, result='';
        try{
            x = new Decimal(arg1);
        }catch(e){ 
        }
        try{
            y = new Decimal(arg2);
        }catch(e){
        }
        try{
            result = x.plus(y);
        }catch(e){
            return;
        }
        return result.valueOf().toString();
    },

    accSub(arg1, arg2) {
        // 相减
		let x, y, result='';
        try{
            x = new Decimal(arg1);
        }catch(e){ 
        }
        try{
            y = new Decimal(arg2);
        }catch(e){
        }
        try{
            result = x.minus(y);
        }catch(e){
            return;
        }
        return result.valueOf().toString();
    },

    accMul(arg1, arg2) {
        //准确获得两个浮点数相乘
        let x, y, result='';
        try{
            x = new Decimal(arg1);
        }catch(e){ 
        }
        try{
            y = new Decimal(arg2);
        }catch(e){
        }
        try{
            result = x.times(y);
        }catch(e){
            return;
        }
        return result.valueOf().toString();
    },

    accDiv(arg1,arg2) {
        // 相除
        let x, y, result='';
        try{
            x = new Decimal(arg1);
        }catch(e){ 
        }
        try{
            y = new Decimal(arg2);
        }catch(e){
        }
        try{
            result = x.dividedBy(y);
        }catch(e){
            return;
        }
        return result.valueOf().toString();
    },

    getLS(key) {
        try {
            return JSON.parse(localStorage.getItem(key))
        } catch(e) {
            return localStorage.getItem(key);
        }
    },

    setLS(key, value) {
        if(typeof value == "object") {
            localStorage.setItem(key, JSON.stringify(value));
        } else {
            localStorage.setItem(key, value);
        }
    },

    rmLS(key) {
        localStorage.removeItem(key);
    },

    floorNumber(num, precise){
        let result, beforeDot = '', afterDot = '';
        try{
            num = this.scientificToNumber(num.valueOf().toString());
            if(num.split('.').length > 1){
                // 有小数点
                beforeDot = num.split('.')[0];
                if(num.split('.')[1].length > precise){
                    for(let i = 0; i < precise; i++ ){
                        afterDot += num.split('.')[1].charAt(i);
                    }
                }else{
                    for(let i = 0; i < num.split('.')[1].length; i++ ){
                        afterDot += num.split('.')[1].charAt(i);
                    }
                    for(let i = 0; i < precise - num.split('.')[1].length; i++ ){
                        afterDot += '0'; 
                    }
                }
                if(precise > 0){
                    result = beforeDot + '.' + afterDot;
                }else if(precise == 0){
                    result = beforeDot;
                }
                return result;
            }else{
                //整数
                beforeDot = num.split('.')[0];
                for(let i = 0; i < precise; i++){
                    afterDot += '0';
                }
                if(precise > 0){
                    result = beforeDot + '.' + afterDot;
                }else if(precise == 0){
                    result = beforeDot;
                }
                return result;
            }
        }catch(e){
            return;
        }
    },

    scientificToNumber(num){
        if (typeof num === 'undefined' || num === '') return '';
        var str = num.valueOf().toString().toLowerCase();
        var reg = /^(\d+(\.\d*)?|\.\d+)(e[-]?\d+)$/i;
        var arr, len, zero = '';
        if(!reg.test(str)){
            return str;
        }else{
            arr = reg.exec(str);
            if(Number(str) >= 1){
                len = Math.abs(arr[3].replace('e', ''));
                return this.accMul(arr[1], Math.pow(10, len));
            }else{
                len = Math.abs(arr[3].replace('e', '')) - 1;
                for(var i=0;i<len;i++){
                  zero +='0'
                }
                return '0.'+zero+arr[1].replace('.', '');
            }
        }
    },
    formatDateCurrent(date, fmt){
        // debugger
        if (typeof date == 'string' || typeof date == 'number') date = new Date(date);
        if (!date || date.toString() == 'Invalid Date') return '';
        var o = {
            "M+": date.getMonth() + 1, //月份
            "D+": date.getDate(), //日
            "H+": date.getHours(), //小时
            "m+": date.getMinutes(), //分
            "s+": date.getSeconds(), //秒
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度
            "S+": date.getMilliseconds() //毫秒
        };
        if (/(Y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    },

    formatNum(num) {
        if (!num) return 0;
        return num.toString().replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
    },

    formatPhone(phone) {
        let phoneStr = phone.toString();
        if (phoneStr.length === 11) {
            return phoneStr.substr(0, 3) + '*****' + phoneStr.substr(8, 3);
        } else {
            return phone;
        }
    },

    downloadFile(fileName, content) {
        var aLink = document.createElement('a');
        var blob = new Blob(['\uFEFF' + content], {type: "text/csv/pdf;charset=utf-8"});
        var evt = document.createEvent("MouseEvents");
        evt.initEvent("click", true, true);
        if (fileName) {
            aLink.download = fileName;
        }
        aLink.target = "_blank";
        aLink.href = URL.createObjectURL(blob);
        aLink.dispatchEvent(evt);
    },

    downloadPdfFile(fileUrl) {
        let elem = document.createElement('iframe');
        elem.src = fileUrl;
        elem.style.display = 'none';
        document.body.appendChild(elem);
    },

    commafy(num, index, separator, rententionNum){ //num->数值(必传),index->分隔位数,separator->分隔符号,rententionNum->小数位数
        //千分位格式化
        if(!num) {num = 0};
        if (!index) {index = 3;}
        if (!separator) {separator = ',';}
        if (!rententionNum) {rententionNum = 2;}
        num = num && Number(num).toFixed(rententionNum);
        let reg = new RegExp('(-?[0-9]+)([0-9]{' + index + '})');
        if (/^.*\..*$/.test(num)) {
            let pointIndex = num.lastIndexOf('.');
            let intPart = num.substring(0, pointIndex);
            let pointPart = num.substring(pointIndex + 1, num.length);
            let pointLen = pointPart.length;
            if (pointLen >= 1) {pointPart = pointPart + this.getAddStr("0", rententionNum - pointLen);}
            intPart = intPart + '';
            while(reg.test(intPart)) {
                intPart = intPart.replace(reg, '$1' + separator + '$2');
            }
            num = intPart + '.' + pointPart;
        } else {
            while (reg.test(num)) {
            num = num.replace(reg, '$1' + separator + '$2');
            }
            num = num + '.' + this.getAddStr("0", rententionNum);
        }
        if(rententionNum=='0'){
            num = num.split('.')[0];
        }
        return num;
    },
    
    getAddStr(str,num){
        let tmp='';
        for(let i=0;i<num;i++){
            tmp+=str;
        }
        return tmp;
    },
    
    fullScreen(fullscreen, element) {
        element = element || document.documentElement;
        // 如果是全屏，退出
        if (fullscreen) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        } else {    // 否则，进入全屏
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.webkitRequestFullScreen) {
                element.webkitRequestFullScreen();
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if (element.msRequestFullscreen) {
                // IE11
                element.msRequestFullscreen();
            }
        }
    },

    ifFullScreen() {
        return !!(document.fullscreenElement || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement);
    },

    formatDot(num, dot) {
        //格式化小数点位数，num为原始数据，dot为需要保留的小数点位数，如果不足dot位数自动补0，超过的截断
        try {
            let oriDot = num.toString().split(".")[1] ? num.toString().split(".")[1].length : 0;
            if(oriDot == 0) {
                //无小数
                return `${num}.${"".padEnd(dot, "0")}`;
            } else {
                if(oriDot > dot) {
                    return `${num.toString().split(".")[0]}.${num.toString().split(".")[1].slice(0, dot)}`;
                } else {
                    return `${num.toString().split(".")[0]}.${num.toString().split(".")[1].padEnd(dot, "0")}`;
                }
            }
        } catch(e) {
            console.log('errFormatDot', num);
            return num;
        }
    },
    getCookie(name) {
        var strcookie = document.cookie; // 获取cookie字符串
        var arrcookie = strcookie.split("; "); // 分割
        //遍历匹配
        for ( var i = 0; i < arrcookie.length; i++) {
            var arr = arrcookie[i].split("=");
            if (arr[0] == name){
                return arr[1];
            }
        }
        return "";
    },
    getBrowser() {
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
        var isIE = userAgent.indexOf("compatible") > -1
                && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
        var isEdge = userAgent.indexOf("Edge") > -1; //判断是否IE的Edge浏览器
        var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
        var isSafari = userAgent.indexOf("Safari") > -1
                && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器
        var isChrome = userAgent.indexOf("Chrome") > -1
                && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器
    
        if (isIE) {
            var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
            reIE.test(userAgent);
            var fIEVersion = parseFloat(RegExp["$1"]);
            if (fIEVersion == 7) {
                return "IE7";
            } else if (fIEVersion == 8) {
                return "IE8";
            } else if (fIEVersion == 9) {
                return "IE9";
            } else if (fIEVersion == 10) {
                return "IE10";
            } else if (fIEVersion == 11) {
                return "IE11";
            } else {
                return "0";
            }//IE版本过低
            return "IE";
        }
        if (isOpera) {
            return "Opera";
        }
        if (isEdge) {
            return "Edge";
        }
        if (isFF) {
            return "FF";
        }
        if (isSafari) {
            return "Safari";
        }
        if (isChrome) {
            return "Chrome";
        }
    },
    copyToClipboard(value){
        let textArea = document.createElement('textarea');
        textArea.style.position = 'fixed';
        textArea.style.top = '0';
        textArea.style.left = '0';
        textArea.style.width = '2em';
        textArea.style.height = '2em';
        textArea.style.padding = '0';
        textArea.style.border = 'none';
        textArea.style.outline = 'none';
        textArea.style.boxShadow = 'none';
        textArea.style.background = 'transparent';
        textArea.value = value;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        if(value) message.success(intl.get('common.copied'));
    },
    getImage(value){
        let key = value && value.split(',') && value.split(',')[0];
        let url = `/api/operation/api/file/view/${key}`;
        return url;
    }
};

export default common;