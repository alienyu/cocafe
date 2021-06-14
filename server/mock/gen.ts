var { filter, includes, floor } = require('lodash');
/*
    @Object dynamicLogic
    @key 字段名称(name)
    @values 
        type: 类型(number, boolean, enum, string)
        precision: 如果是数值型，需要精确到动态改变的数据精度，eg(1, 10, 100, 0.1, 0.01...),
        enum: ["a", "b"] 如果是枚举类型，需要列出所有可选状态值
        selfLogic: 传入一个方法用于自定义改变数据
        floor: 数值型计算保留小数点后的位数，默认3位
    @Tips 如果使用setInterval来循环获取动态mock数据时，当修改过mockGen函数中的配置项后必须强刷页面以保证正常工作！！
*/
const dealWithMockData = (conf) => {
    let config = Object.assign({
        type: "static",
        data: null,
        dynamicLogic: null
    }, conf);

    if(config.type == "static") {
        return config.data;
    } else {
        return applyDynamicData(config);
    }
}

const applyDynamicData = ({
    type, 
    data,
    dynamicLogic
}) => {
    //数组
    if(Object.prototype.toString.call(data) == "[object Array]") {
        var newData = data.map(item => {
            return changeKeyValue(item, dynamicLogic);
        });
        return newData;
    } else {
        return changeKeyValue(data, dynamicLogic);
    }
}

const changeKeyValue = (item, dynamicLogic) => {
    Object.keys(item).map(key => {
        //遍历原始数据对象中每个key
        if(includes(Object.keys(dynamicLogic), key)) {
            //当前key在需要动态变化的数据列表中
            item[key] = dealWithData(item[key], dynamicLogic[key]);
        }
    })
    return item;
}

const dealWithData = (data, logic) => {
    //如果有自定义逻辑即执行
    if(logic.selfLogic) {
        return logic.selfLogic.call(this, data)
    } else {
        const dataType = logic.type;
        //根据不同的数据类型处理数据
        switch(dataType) {
            case "number":
                return dealNumberData(data, logic);
            case "enum": 
                return dealEnumData(logic);
        }
    }
}

//处理数值型动态数据
const dealNumberData = (numData, logic) => {
    let increment = getNumIncreament(logic.precision);
    return floor(numData + increment, logic.floor || 3);
}

//获取数值型数据增减值
const getNumIncreament = precision => {
    let abs = Math.random() > 0.5 ? 1 : -1; //增减随机
    let OneToTen = Math.floor(Math.random() * (-9) + 9);
    return OneToTen * precision * abs;
}

//处理枚举值逻辑
const dealEnumData = (logic) => {
    let enumList = logic.enum;
    let enumLen = enumList.length;
    let randomItemNum = Math.round(Math.random() * (1 - enumLen) + enumLen); //随机项编号（实际对应数组编号需要减1）
    return enumList[randomItemNum - 1];
}

module.exports = dealWithMockData;