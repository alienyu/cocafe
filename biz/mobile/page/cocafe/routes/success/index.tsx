import * as React from "react";
import { Flex } from 'antd-mobile';
import { WrappedCmp } from './styled';
const successImg = require("@mobileCocafeImgs/success.jpg");

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
                    <div className="text"> 感谢你的参与，我们将在铸造完成后通知你</div>
                </Flex>
            </WrappedCmp>
        )
    }
}
