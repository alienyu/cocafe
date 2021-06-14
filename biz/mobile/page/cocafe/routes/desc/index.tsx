import * as React from "react";
import { Flex, Button } from 'antd-mobile';
import { WrappedCmp } from './styled';

export default class Desc extends React.Component<{history: any}, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            effectClass: ["text", "text", "text", "text", "text", "text", "text", "text", "text", "text", "text", "text", "text"]
        }
    }

    componentDidMount() {
        let count = 0;
        let effectFuc = setInterval(() => {
            if(count > 12) {
                clearInterval(effectFuc);
            }
            this.state.effectClass[count] = "text effect";
            count ++;
            this.setState({effectClass: this.state.effectClass});
        }, 1000);
    }

    next = () => {
        this.props.history.push("/login");
    } 

    render() {
        return (
            <WrappedCmp>
                <Flex direction="column" justify="center" align="center" className="frame">
                    <div className={this.state.effectClass[0]}>一起创造一段</div>
                    <div className={this.state.effectClass[1]}>特殊意义的共同回忆，</div>
                    <div className={this.state.effectClass[2]}>期待铸造成功的那一刻，</div>
                    <div className={this.state.effectClass[3]}>请上传您与乔迁新址之际，</div>
                    <div className={this.state.effectClass[4]}>员工断舍离。</div><br />
                    <div className={this.state.effectClass[5]}>cocafe设计创意工作室将提供 </div>
                    <div className={this.state.effectClass[6]}>人机协同创作的平台，通过艺</div>
                    <div className={this.state.effectClass[7]}>术家和AI算法进行共同创作，</div>
                    <div className={this.state.effectClass[8]}>把这些照片形成NFT数字艺术</div>
                    <div className={this.state.effectClass[9]}>作品。</div><br />
                    <div className={this.state.effectClass[10]}>麦当劳时刻记忆NFT数字艺术</div>
                    <div className={this.state.effectClass[11]}>作品将限量发行500-600份，</div>
                    <div className={this.state.effectClass[12]}>赠予员工。</div>
                    <Button className="nextBtn" onClick={this.next}>跳过</Button>
                </Flex>
            </WrappedCmp>
        )
    }
}