import * as React from "react";
import { Flex, Button } from 'antd-mobile';
import { WrappedCmp } from './styled';

const logoImg = require("@mobileCocafeImgs/logo.jpg");

export default class Index extends React.Component<{history: any}, {}> {
    constructor(props: any) {
        super(props);
    }

    next = () => {
        this.props.history.push("/desc");
    }

    componentWillMount() {
    }

    render() {
        return (
            <WrappedCmp>
                <Flex justify="center">
                    <div className="logo">
                        <img src={logoImg} />
                    </div>
                </Flex>
                <div className="title">NFT焕动空间铸造</div>
                <div className="title2">是时候收集我们的回忆， </div>
                <div className="title2">共筑一座AI记忆之城。</div>
                <Button className="startBtn" onClick={this.next}>开始</Button>
                <Flex justify="center" className="prompt">点击“开始”即默认同意《麦当劳NFT铸造》隐私条款</Flex>
            </WrappedCmp>
        );
    }
}