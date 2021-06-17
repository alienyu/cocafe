import * as React from "react";
import { Modal } from 'antd-mobile';
import { WrappedCmp, GlobalStyle } from './styled';

export default class Index extends React.Component<{ history: any }, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            check: false,
            checkClass: "",
            toastClass: "toast",
            activeModal: false,
            instructionModal: false
        }
    }

    next = () => {
        if (this.state.check) {
            this.props.history.replace("/login");
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

    activeModalOpen = () => {
        this.setState({ activeModal: true });
    }

    activeModalClose = () => {
        this.setState({ activeModal: false });
    }

    instructionModalOpen = () => {
        this.setState({ instructionModal: true });
    }

    instructionModalClose = () => {
        this.setState({ instructionModal: false });
    }
    render() {
        return (
            <WrappedCmp>
                <GlobalStyle></GlobalStyle>
                <div className="mcLogo"></div>
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
                    <a onClick={this.activeModalOpen}>“活动说明及肖像授权”</a>&nbsp;
                    <a onClick={this.instructionModalOpen}>“和个人信息使用说明”</a>
                </div>
                <Modal
                    visible={this.state.activeModal}
                    transparent
                    maskClosable={false}
                    onClose={this.activeModalClose}
                    title="共铸焕动回忆”活动规则"
                    footer={[{ text: '已知晓', onPress: () => { this.activeModalClose(); } }]}
                >
                    <div style={{ height: 500, textAlign: 'left' }}>
                        1.本活动仅限金拱门（中国）有限公司的在职员工参加。<br />
                        2.参与者需根据活动页面的提示，填写您本人的相关信息和上传您本人的肖像照片。一经上传后，您的肖像照片将会通过艺术处理，并生成限量NFT作品放置于区块链公链与IPFS存储上。该NFT作品可通过电子钱包（需另行下载）获得。<br />
                        3.参加本活动前，请务必详细阅读随附本活动的个人信息使用说明。<br />
                        4.您通过参加本活动获取的NFT作品仅限供您本人收藏和观赏。<br />
                        5.您一旦成功上传您的肖像照片，即代表您同意并授权金拱门（中国）有限公司有权为本活动及公司新址的宣传推广目的，在活动最终成品及相关宣传及推广资料中以任何形式使用、出版、编辑和显示具有本人形象的或带有本人形象元素的资料，且该等成品和资料均归麦当劳所有及保管并交由麦当劳处置。
                    </div>
                </Modal>
                <Modal
                    visible={this.state.instructionModal}
                    transparent
                    maskClosable={false}
                    onClose={this.instructionModalClose}
                    title="个人信息使用说明"
                    wrapClassName="instructionModal"
                    footer={[{ text: '已知晓', onPress: () => { this.instructionModalClose(); } }]}
                >
                    <div style={{ height: 600, width: 350, overflow: 'scroll' }}>
                        <iframe src="https://memories.cocafe.co/upload" width="300" height=" 600"></iframe>
                    </div>
                </Modal>
            </WrappedCmp >
        );
    }
}