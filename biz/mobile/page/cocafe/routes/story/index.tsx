import * as React from "react";
import axios from 'axios';
import { Flex } from 'antd-mobile';
import { WrappedCmp } from './styled';

export default class Story extends React.Component<{ history: any }, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            descText: "",
            promptText: "",
            promptClass: "prompt",
            inputClass: "input"
        }
    }

    change = e => {
        var descText = e.target.value ;
        if(descText) {
            this.setState({ 
                descText, 
                promptText: "",
                promptClass: "prompt",
                inputClass: "input"
            });
        } else {
            this.setState({ 
                descText, 
                promptText: "请简述照片的故事",
                promptClass: "prompt show",
                inputClass: "input error"
            });
        }
    }

    submit = () => {
        console.log(this.state.descText);
        let that = this;
        if(!this.state.descText) {
            this.setState({ 
                promptText: "请简述照片的故事",
                promptClass: "prompt show",
                inputClass: "input error"
            });
        } else {
            let formData = new FormData();
            formData.append('token', localStorage.getItem("token"));
            formData.append('memory', this.state.descText)
            var url = `${mobileCocafeConstants.ajax.host}/upload/story`;
            axios.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((json) => {
                console.log(json);
                if (json.data.code == 0) {
                    that.props.history.replace("/success");
                } else {
                    that.setState({ 
                        promptText: json.data.msg,
                        promptClass: "prompt show"
                    });
                }
            }).catch((e) => {
                that.setState({ 
                    promptText: "格式错误",
                    promptClass: "prompt show",
                    inputClass: "input error"
                });
            });
        }
    }

    back = () => {
        this.props.history.replace("/upload");
    }

    render() {
        return (
            <WrappedCmp>
                <Flex justify="center" direction="column">
                    <div className="frame">
                        <div className="back" onClick={this.back}>返回</div>
                        <div className="isolate"></div>
                        <Flex className="stepFrame" justify="between">
                            <div className="stepText">第&nbsp;3&nbsp;步</div>
                            <div className="stepIcon">
                                <div className="block"></div>
                                <div className="block"></div>
                                <div className="block active"></div>
                            </div>
                        </Flex>
                        <div className="title">描述故事</div>
                        <div className="descFrame">
                            <textarea
                                className={this.state.inputClass}
                                placeholder="请简述照片的故事"
                                onChange={this.change}
                            />
                        </div>
                        <div className={this.state.promptClass}>{this.state.promptText}</div>
                        <button className="submitBtn" onClick={this.submit}>提交</button>
                    </div>
                </Flex>
            </WrappedCmp>
        )
    }
}