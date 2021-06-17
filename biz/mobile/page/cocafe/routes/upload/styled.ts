import styled from 'styled-components';

const bg = require("@mobileCocafeImgs/bg.png");
const backIcon = require("@mobileCocafeImgs/back.png");
const btnOri = require("@mobileCocafeImgs/btnOri.png");
const btnClick = require("@mobileCocafeImgs/btnClick.png");

const WrappedCmp = styled.div`
    min-height: 100vh;
    background: url(${bg}) no-repeat;
    background-size: 100% 100%;
    .frame {
        height: 100%;
        padding: 0.4rem 0.83rem;
        .back {
            background: url(${backIcon}) no-repeat;
            background-size: 0.44rem 0.28rem;
            font-weight: 500;
            font-size: 0.24rem;
            color: #e62474;
            padding-left: 0.6rem;
        }
        .isolate {
            width: 6rem;
            height: 1px;
            margin-top: 0.4rem
            background: #E62474;
        }
        .stepFrame {
            width: 100%;
            height: 0.4rem;
            margin-top: 0.4rem;
            .stepText {
                font-weight: 500;
                font-size: 0.32rem;
                color: #e62474;
            }
            .stepIcon {
                width: 0.8rem;
                height: 0.4rem;
                .block {
                    display: inline-block;
                    margin-left: 0.1rem;
                    width: 0.16rem;
                    height: 0.16rem;
                    background: #e62474;
                    opacity: 0.3;
                    &.active {
                        opacity: 1;
                    }
                }
            }
        }
        .title {
            margin-top: 0.24rem;
            font-weight: 700;
            font-size: 0.48rem;
            color: #fff;
        }
        .am-image-picker {
            width: 5.53rem;
            height: 5.5rem;
            margin-top: 0.34rem;
            margin-left: 0.18rem;
            .am-image-picker-list {
                padding: 0;
                .am-image-picker-upload-btn:before {
                    background: #e62474;
                    width: 1PX;
                    height: 1.5rem;
                }
                .am-image-picker-upload-btn:after {
                    background: #e62474;
                    width: 1.5rem;
                    height: 1PX;
                }
                .am-image-picker-item {
                    background: rgba(0, 0, 0, 0.57);
                    border: 1px solid #E62474;
                    width: 5.5rem;
                    height: 5.4rem;
                    z-index: 100;
                    .am-image-picker-item-content {
                        background-size: 100% 100%;
                    }
                    .am-image-picker-item-remove {
                        background-repeat: no-repeat;
                        background-size: 100%;
                    }
                }
            }
        }
        .warn {
            margin-top: 0.2rem;
            color: #fff;
            font-size: 12px;
        }
        .uploadHack {
            position: absolute;
            top: 7rem;
            left: 50%;
            width: 2.56rem;
            margin-left: -1.28rem;
            height: 0.32rem;
            z-index: 99;
            color: #fff;
            opacity: 0.5;
            font-size: 0.26rem;
            text-align: center;
            &.hide {
                display:none;
            }
        }
        .prompt {
            visibility: hidden;
            width: 100%;
            height: 0.3rem;
            text-align: center;
            color: #e62474;
            font-size: 0.24rem;
            margin-top: 0.3rem;
            &.show { visibility: visible;}
        }
        .nextBtn {
            width: 4.6rem;
            height: 1.1rem;
            line-height: 1.1rem;
            margin-top: 0.3rem;
            margin-left: 0.73rem;
            text-align: center;
            font-weight: 500;
            font-size: 0.32rem;
            color: #fff;
            background: url(${btnOri}) no-repeat;
            background-size: 100% 100%;
            border: 0px;
            &:active {        
                background: url(${btnClick}) no-repeat;
                background-size: 100% 100%;
                ling-height: 0.88rem;
            }
        }  
    }
`;

export {
    WrappedCmp
}