import * as React from "react";
import { Flex, Button } from 'antd-mobile';
import { WrappedCmp } from './styled';

export default class Story extends React.Component<{ history: any }, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            descText: ""
        }
    }

    change = e => {
        this.setState({ descText: e.target.value});
    }

    submit = () => {
        console.log(this.state.descText);
        mobileCocafeAjax({
            method: "post",
            url: "story",
            data: {
                token: localStorage.getItem("token"),
                story: this.state.descText
            },
            callback(data) {
                console.log('data', data);
                // this.props.history.push("/success");
            }
        })
    }

    render() {
        return (
            <WrappedCmp>
                <Flex justify="center" direction="column">
                    <div className="frame">
                        <Flex className="stepFrame" justify="around">
                            <div className="block"></div>
                            <div className="block"></div>
                            <div className="block active"></div>
                        </Flex>
                        <div className="stepText">第3步</div>
                        <div className="title">描述故事</div>
                        <div className="descFrame">
                            <textarea
                                className="input"
                                placeholder="请简述照片的故事"
                                onChange={this.change}
                            />
                        </div>
                        <Button className="submitBtn" onClick={this.submit}>提交</Button>
                    </div>
                </Flex>
            </WrappedCmp>
        )
    }
}