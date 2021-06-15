import * as React from "react";
import { Flex, ImagePicker, Button } from 'antd-mobile';
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
        this.props.history.push("/story");
    }

    onChange = (files, type, index) => {
        console.log(files, type, index);
        if (files.length > 0) {
            this.setState({
                uploadBtnClass: "uploadHack hide",
                files,
            });
        } else {
            this.setState({
                uploadBtnClass: "uploadHack",
                files,
            });
        }
    }

    render() {
        const { files } = this.state;

        return (
            <WrappedCmp>
                <Flex justify="center" direction="column">
                    <div className="frame">
                        <Flex className="stepFrame" justify="around">
                            <div className="block"></div>
                            <div className="block active"></div>
                            <div className="block"></div>
                        </Flex>
                        <div className="stepText">第2步</div>
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
                    <Button className="nextBtn" onClick={this.next}>下一步</Button>
                    </div>
                </Flex>
            </WrappedCmp>
        )
    }
}