import * as React from "react";
import { Flex, Button } from 'antd-mobile';
import { WrappedCmp } from './styled';

export default class Desc extends React.Component<{history: any}, {}> {
    next = () => {
        this.props.history.push("/login");
    } 

    render() {
        return (
            <WrappedCmp>
                <Flex direction="column" justify="center" align="center" className="frame">
                    <div className="text">一起创造一段</div>
                    <div className="text">特殊意义的共同回忆，</div>
                    <div className="text">期待铸造成功的那一刻，</div>
                    <div className="text">请上传您与乔迁新址之际，</div>
                    <div className="text">员工断舍离。</div><br />
                    <div className="text"> cocafe设计创意工作室将提供人机协同创作的平台，通过艺术家和AI算法进行共同创作，把这些照片形成NFT数字艺术作品。 </div><br />
                    <div className="text">麦当劳时刻记忆NFT数字艺术作品将限量发行500-600份，赠予员工。</div>
                    <Button className="nextBtn" onClick={this.next}>继续</Button>
                </Flex>
            </WrappedCmp>
        )
    }
}