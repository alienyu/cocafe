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
        width: 6rem;
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
        .descFrame {
            margin-top: 1rem;
            .input {
                resize: none;
                width: 5.35rem;
                height: 3.2rem;
                line-height: 0.32rem;
                font-weight: 400;
                font-size: 0.26rem;
                padding: 0.24rem 0.32rem;
                background: rgba(0, 0, 0, 0.57);
                border: 1px solid #E62474;
                color: #fff;
                &:focus {
                    border: 3px solid #FFFFFF !important;
                }
                &.error {
                    border: 3px solid #E62474;
                }
            }
        }
        .prompt {
            visibility: hidden;
            width: 100%;
            height: 0.3rem;
            text-align: center;
            color: #e62474;
            font-size: 0.24rem;
            margin-top: 1.39rem;
            &.show { visibility: visible;}
        }
        .submitBtn {
            width: 4.6rem;
            height: 1.1rem;
            line-height: 1.1rem;
            margin-top: 0.48rem;
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
}`;

export {
    WrappedCmp
}