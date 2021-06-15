import * as React from "react";
import { Modal } from 'antd-mobile';
import { WrappedCmp } from './styled';

export default class Index extends React.Component<{ history: any }, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            check: false,
            checkClass: "",
            toastClass: "toast",
            modal: false
        }
    }

    next = () => {
        if (this.state.check) {
            this.props.history.push("/login");
        } else {
            this.setState({ toastClass: "toast show" });
            setTimeout(() => {
                this.setState({ toastClass: "toast" });
            }, 2000);
        }
    }

    check = () => {
        this.setState({
            check: !this.state.check,
            checkClass: !this.state.check ? "check" : ""
        });
    }
    
    modalOpen = () => {
        this.setState({ modal: true });
    }

    modalClose = () => {
        this.setState({ modal: false });
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
                <div className={this.state.toastClass}>请阅读并同意条款</div>
                <button className="btn" onClick={this.next}>开始上传</button>
                <div className="prompt">
                    <i onClick={this.check} className={this.state.checkClass}></i>我已阅读并同意
                    <a onClick={this.modalOpen}>“活动规则及个人信息使用说明”</a>
                </div>
                <Modal
                    visible={this.state.modal}
                    transparent
                    maskClosable={false}
                    onClose={this.modalClose}
                    title="活动规则及个人信息使用说明"
                    footer={[{ text: '已知晓', onPress: () => {this.modalClose(); } }]}
                >
                    <div style={{ height: 100, overflow: 'scroll' }}>
                        scoll content...<br />
                        scoll content...<br />
                        scoll content...<br />
                        scoll content...<br />
                        scoll content...<br />
                        scoll content...<br />
                    </div>
                </Modal>
            </WrappedCmp >
        );
    }
}