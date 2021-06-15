import * as React from "react";
import { Flex, Button } from 'antd-mobile';
import { WrappedCmp } from './styled';

export default class Index extends React.Component<{history: any}, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            check: false,
            checkClass: ""
        }
    }

    next = () => {
        this.props.history.push("/desc");
    }

    check = () => {
        this.setState({
            check: !this.state.check,
            checkClass: this.state.check ? "check" : ""
        });
    }
    componentWillMount() {
    }

    render() {
        return (
            <WrappedCmp>
                <div className="logo"></div>
                <div className="title1">
                    上传你在在凯科大厦的回忆<br />
                    用NFT铸造属于大家的艺术品！
                </div>
                <div className="title2">
                    数字艺术作品将在全新“焕动空间”揭晓<br />
                    你也将获得独一无二的数字收藏
                </div>
                <button className="btn">开始上传</button>
                <div className="prompt">
                    <i onClick={this.check} className={this.state.checkClass}></i>我已阅读并同意
                    <a>“活动规则及个人信息使用说明”</a>
                </div>
            </WrappedCmp>
        );
    }
}