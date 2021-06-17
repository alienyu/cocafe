import styled from 'styled-components';

const bg = require("@mobileCocafeImgs/bg.png");
const backIcon = require("@mobileCocafeImgs/back.png");
const btnOri = require("@mobileCocafeImgs/btnOri.png");
const btnClick = require("@mobileCocafeImgs/btnClick.png");

const WrappedCmp = styled.div`
    position: relative;
    min-height: 100vh;  
    background: url(${bg}) no-repeat;
    background-size: 100% 100%;
    .frame {
        height: 100%;
        padding: 0.4rem 0.8rem;
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
        .nameFrame, .idFrame, .mobileFrame, .emailFrame {
            margin-top: 0.4rem;
            .input {
                width: 5.46rem;
                height: 0.8rem;
                line-height: 0.8rem;
                font-size: 0.26rem;
                padding-left: 0.32rem;
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
            .errorLine {
                font-size: 0.22rem;
                color: #e62474;
                margin-top: 0.16rem;
                height: 0.3rem;
                line-height: 0.3rem;
                &.hide {
                    visibility: hidden;
                }
            }
        }
        .nameFrame, .idFrame {
            margin-top: 0.64rem;
            .input {
                width: 2.34rem;
            }
        }
        .loginBtn {
            width: 4.6rem;
            height: 1.1rem;
            line-height: 1.1rem;
            margin-top: 1.53rem;
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
    .errToast {
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -2.05rem;
        margin-top: -2rem;
        width: 4.1rem;
        height: 4.05rem;
        text-align: center;
        .content {
            width: 4.1rem;
            height: 3.33rem;
            background: #E62474;
            img {
                width: 1.28rem;
                height: 1.1rem;
                margin: 0.4rem 0;
            }
            .text {
                font-weight: 500;
                font-size: 0.32rem;
                color: #fff;
                line-height: 0.4rem;
            }
        }
        .confirmBtn {
            width: 4.1rem;
            height: 0.72rem;
            line-height: 0.72rem;
            background: #fff;
            color: #E62474
            font-weight: 500;
            font-size: 0.32rem;
        }
    } 
`;

export {
    WrappedCmp
}