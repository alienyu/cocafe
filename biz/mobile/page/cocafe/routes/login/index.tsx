import * as React from "react";
import axios from 'axios';
import { Flex, Toast } from 'antd-mobile';
import { WrappedCmp } from './styled';

const toastIcon = require("@mobileCocafeImgs/toast.png");

export default class Login extends React.Component<{ history: any }, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            nameInputText: "",
            nameInputClass: "input",
            nameErrClass: "errorLine",
            nameInputErrText: "",
            idInputText: "",
            idInputClass: "input",
            idErrClass: "errorLine",
            idInputErrText: "",
            mobileInputText: "",
            mobileInputClass: "input",
            mobileErrClass: "errorLine",
            mobileInputErrText: "",
            emailInputText: "",
            emailInputClass: "input",
            emailErrClass: "errorLine",
            emailInputErrText: "",
            toastStatus: false
        }
    }

    nameChange = e => {
        let text = e.target.value;
        this.validName(text);
    }

    validName = text => {
        let errText;
        if (!text) {
            errText = "！请输入姓名";
            this.setState({
                nameInputClass: "input error",
                nameErrClass: "errorLine",
                nameInputErrText: errText,
                nameInputText: text
            })
            return false;
        } else {
            this.setState({
                nameInputClass: "input",
                nameErrClass: "errorLine hide",
                nameInputText: text
            });
            return true;
        }
    }

    idChange = e => {
        let text = e.target.value;
        this.validId(text);
    }

    validId = text => {
        let errText;
        if (!text) {
            errText = "！请输入工号";
            this.setState({
                idInputClass: "input error",
                idErrClass: "errorLine",
                idInputErrText: errText,
                idInputText: text
            });
            return false;
        } else {
            this.setState({
                idInputClass: "input",
                idErrClass: "errorLine hide",
                idInputText: text
            });
            return true;
        }
    }

    mobileChange = e => {
        let text = e.target.value;
        this.vaildMobile(text);
    }

    vaildMobile = text => {
        let errText;
        if (!text) {
            errText = "！请输入手机号";
            this.setState({
                mobileInputClass: "input error",
                mobileErrClass: "errorLine",
                mobileInputErrText: errText,
                mobileInputText: text
            });
            return false;
        } else if (!text.match(/^[1][3,4,5,7,8][0-9]{9}$/)) {
            errText = "！手机号格式有误";
            this.setState({
                mobileInputClass: "input error",
                mobileErrClass: "errorLine",
                mobileInputErrText: errText,
                mobileInputText: text
            });
            return false;
        } else {
            this.setState({
                mobileInputClass: "input",
                mobileErrClass: "errorLine hide",
                mobileInputText: text
            });
            return true;
        }
    }

    emailChange = e => {
        let text = e.target.value;
        this.validEmail(text);
    }

    validEmail = text => {
        let errText;
        if (!text) {
            errText = "！请输入邮箱";
            this.setState({
                emailInputClass: "input error",
                emailErrClass: "errorLine",
                emailInputErrText: errText,
                emailInputText: text
            });
            return false;
        } else if (!text.match(/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{1,14}$/)) {
            errText = "！邮箱格式有误";
            this.setState({
                emailInputClass: "input error",
                emailErrClass: "errorLine",
                emailInputErrText: errText,
                emailInputText: text
            });
            return false;
        } else {
            this.setState({
                emailInputClass: "input",
                emailErrClass: "errorLine hide",
                emailInputText: text
            });
            return true;
        }
    }

    login = () => {
        let that = this;
        if (this.validName(this.state.nameInputText) &&
            this.validId(this.state.idInputText) &&
            this.validEmail(this.state.emailInputText)) {
            let formData = new FormData();
            formData.append('username', this.state.nameInputText);
            formData.append('staff', this.state.idInputText);
            // formData.append('phone', this.state.mobileInputText);
            formData.append('email', this.state.emailInputText);
            var url = `${mobileCocafeConstants.ajax.host}/auth`;
            Toast.loading("Loading...");
            axios.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((json) => {
                console.log(json);
                Toast.hide();
                if (json.data.code == 0) {
                    localStorage.setItem("token", json.data.data.token);
                    that.props.history.replace("/upload");
                } else {
                    that.openToast();
                }
            }).catch((e) => {
                Toast.hide();
                that.openToast();
            });
        };
    }

    back = () => {
        this.props.history.replace("/");
    }

    next = () => {
        this.props.history.replace("/upload");
    }

    openToast = () => {
        this.setState({ toastStatus: true });
    }

    closeToast = () => {
        this.setState({ toastStatus: false });
    }

    render() {
        return (
            <WrappedCmp>
                <div className="frame">
                    <div className="back" onClick={this.back}>返回</div>
                    <div className="isolate"></div>
                    <Flex className="stepFrame" justify="between">
                        <div className="stepText">第&nbsp;1&nbsp;步</div>
                        <div className="stepIcon">
                            <div className="block active"></div>
                            <div className="block"></div>
                            <div className="block"></div>
                        </div>
                    </Flex>
                    <div className="title">输入个人信息</div>
                    <Flex direction="row" justify="between">
                        <div className="nameFrame">
                            <input
                                type="text" className={this.state.nameInputClass}
                                placeholder="姓名"
                                onChange={this.nameChange}
                            />
                            <div className={this.state.nameErrClass}>{this.state.nameInputErrText}</div>
                        </div>
                        <div className="idFrame">
                            <input
                                type="text" className={this.state.idInputClass}
                                placeholder="工号"
                                onChange={this.idChange}
                            />
                            <div className={this.state.idErrClass}>{this.state.idInputErrText}</div>
                        </div>
                    </Flex>
                    {/* <div className="mobileFrame">
                        <input
                            type="text" className={this.state.mobileInputClass}
                            placeholder="手机"
                            onChange={this.mobileChange}
                        />
                        <div className={this.state.mobileErrClass}>{this.state.mobileInputErrText}</div>
                    </div> */}
                    <div className="emailFrame">
                        <input
                            type="text" className={this.state.emailInputClass}
                            placeholder="邮箱"
                            onChange={this.emailChange}
                        />
                        <div className={this.state.emailErrClass}>{this.state.emailInputErrText}</div>
                    </div>
                    <button className="loginBtn" onClick={this.login}>下一步</button>
                </div>
                {this.state.toastStatus ?
                    <div className="errToast">
                        <div className="content">
                            <img src={toastIcon} />
                            <div className="text">请查看填写的信息</div>
                            <div className="text">是否正确</div>
                        </div>
                        <div className="confirmBtn" onClick={this.closeToast}>确定</div>
                    </div>
                    : null
                }
            </WrappedCmp>
        )
    }
}