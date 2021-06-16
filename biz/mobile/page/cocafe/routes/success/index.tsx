import * as React from "react";
import { Flex } from 'antd-mobile';
import { WrappedCmp } from './styled';

const successImg = require("@mobileCocafeImgs/success.png");
const mcLogo = require("@mobileCocafeImgs/mcLogo.png");
const logo = require("@mobileCocafeImgs/Logo.png");

export default class Story extends React.Component<{ history: any }, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <WrappedCmp>
                <Flex
                    direction="column" 
                    justify="center" align="center" className="frame">
                    <img src={successImg} className="successImg" />
                    <div className="text">已成功提交！</div>
                    <div className="text"> 感谢你的参与，我们将在</div>
                    <div className="text">铸造完成后通知你</div>
                    <div className="adv">共铸焕动回忆</div>
                    <div className="iconFrame">
                        <img src={mcLogo} className="mcLogo" />
                        <img src={logo} className="logo" />
                    </div>
                </Flex>
            </WrappedCmp>
        )
    }
}
