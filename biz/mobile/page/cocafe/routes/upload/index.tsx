import * as React from "react";
import axios from 'axios';
import { Flex, ImagePicker } from 'antd-mobile';
import { WrappedCmp } from './styled';

export default class Upload extends React.Component<{ history: any }, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            uploadBtnClass: "uploadHack",
            files: [],
            promptClass: "prompt",
            promptText: ""
        }
    }

    next = () => {
        if(this.state.files.length < 1) {
            this.setState({ 
                promptClass: "prompt show",
                promptText: "请上传照片"
            });
        } else {
            this.props.history.replace("/story");
        }
    }

    onChange = (files, type, index) => {
        let that = this;
        console.log(files, type, index);
        if (files.length > 0) {
            this.setState({
                uploadBtnClass: "uploadHack hide",
                files,
                promptClass: "prompt",
                promptText: ""
            });
            let formData = new FormData();
            let file = files[0].file;
            formData.append('files', file);
            formData.append('token', localStorage.getItem("token"));
            var url = `${mobileCocafeConstants.ajax.host}/upload/images`;
            axios.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((json) => {
                console.log(json);
                var text = "";
                if(json.data.code == 0) {
                    text = "上传成功";
                } else {
                    text = json.data.msg;
                }
                that.setState({
                    promptClass: "prompt show",
                    promptText: text
                });
            }).catch((e) => {
                that.setState({
                    promptClass: "prompt show",
                    promptText: "上传失败，请重新上传"
                });
            });
        } else {
            this.setState({
                uploadBtnClass: "uploadHack",
                files,
            });
        }
    }

    back = () => {
        this.props.history.replace("/login");
    }

    render() {
        const { files } = this.state;

        return (
            <WrappedCmp>
                <div className="frame">
                    <div className="back" onClick={this.back}>返回</div>
                    <div className="isolate"></div>
                    <Flex className="stepFrame" justify="between">
                        <div className="stepText">第&nbsp;2&nbsp;步</div>
                        <div className="stepIcon">
                            <div className="block"></div>
                            <div className="block active"></div>
                            <div className="block"></div>
                        </div>
                    </Flex>
                    <div className="title">上传照片</div>
                    <ImagePicker
                        files={files}
                        onChange={this.onChange}
                        onImageClick={(index, fs) => console.log(index, fs)}
                        selectable={files.length < 1}
                        length={1}
                        multiple={this.state.multiple}
                    />
                    <div className={this.state.uploadBtnClass}>点此上传照片</div>
                    <div className={this.state.promptClass}>{this.state.promptText}</div>
                    <button className="nextBtn" onClick={this.next}>下一步</button>
                </div>
            </WrappedCmp>
        )
    }
}