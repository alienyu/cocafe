import * as React from "react";
import { Flex, Button } from 'antd-mobile';
import { WrappedCmp } from './styled';


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
            emailInputErrText: ""
        }
    }

    nameChange = e => {
        let text = e.target.value;
        this.validName(text);
    }

    validName = text => {
        let errText;
        if(!text) {
            errText = "请输入姓名";
            this.setState({
                nameInputClass: "input error",
                nameErrClass: "errorLine",
                nameInputErrText: errText
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
        if(!text) {
            errText = "请输入工号";
            this.setState({
                idInputClass: "input error",
                idErrClass: "errorLine",
                idInputErrText: errText
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
        if(!text) {
            errText = "请输入手机";
            this.setState({
                mobileInputClass: "input error",
                mobileErrClass: "errorLine",
                mobileInputErrText: errText
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
        if(!text) {
            errText = "请输入姓名";
            this.setState({
                emailInputClass: "input error",
                emailErrClass: "errorLine",
                emailInputErrText: errText
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
        if(this.validName(this.state.nameInputText) &&
        this.validId(this.state.idInputText) &&
        this.vaildMobile(this.state.mobileInputText) &&
        this.validEmail(this.state.emailInputText)) {
            this.props.history.push("/upload");
        };
    }

    next = () => {
        this.props.history.push("/upload");
    }

    render() {
        return (
            <WrappedCmp>
                <Flex justify="center" direction="column">
                    <div className="frame">
                        <Flex className="stepFrame" justify="around">
                            <div className="block active"></div>
                            <div className="block"></div>
                            <div className="block"></div>
                        </Flex>
                        <div className="stepText">第1步</div>
                        <div className="title">输入个人信息</div>
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
                        <div className="mobileFrame">
                            <input
                                type="text" className={this.state.mobileInputClass}
                                placeholder="手机"
                                onChange={this.mobileChange}
                            />
                            <div className={this.state.mobileErrClass}>{this.state.mobileInputErrText}</div>
                        </div>
                        <div className="emailFrame">
                            <input
                                type="text" className={this.state.emailInputClass}
                                placeholder="邮箱"
                                onChange={this.emailChange}
                            />
                            <div className={this.state.emailErrClass}>{this.state.emailInputErrText}</div>
                        </div>
                        <Button className="loginBtn" onClick={this.login}>登录</Button>
                    </div>
                </Flex>
            </WrappedCmp>
        )
    }
}