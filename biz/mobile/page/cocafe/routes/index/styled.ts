import styled, { createGlobalStyle } from 'styled-components';
const bg = require("@mobileCocafeImgs/mainBG.png");
const btnOri = require("@mobileCocafeImgs/btnOri.png");
const btnClick = require("@mobileCocafeImgs/btnClick.png");
const logo = require("@mobileCocafeImgs/Logo.png");
const mcLogo = require("@mobileCocafeImgs/mcLogo.png");
const check = require("@mobileCocafeImgs/check.png");

const WrappedCmp = styled.div`
    @keyframes flash {
        0% {opacity: 0;}
        10% {opacity: 1;}
    }
    background: url(${bg}) no-repeat #030303;
    background-size:100%;
    min-height: 100vh;
    .mcLogo {
        position: absolute;
        top: 0.54rem;
        left: 0.68rem;
        width: 0.94rem;
        height: 0.82rem;
        background: url(${mcLogo}) no-repeat;
        background-size: 100% 100%;

    }
    .logo {
        position: absolute;
        top: 0.54rem;
        left: 1.88rem;
        width: 0.88rem;
        height: 1.3rem;
        background: url(${logo}) no-repeat;
        background-size: 100% 100%;

    }
    .title1 {
        position: absolute;
        background: rgba(0, 0, 0, 0.57);
        width: 3.36rem;
        top: 5.78rem
        padding: 0.3rem;
        left: 0.6rem;
        border: 1px solid #E62474;
        font-size: 0.22rem;
        font-weight: 400;
        color: #E62473;
    }
    .title2 {
        position: absolute;
        background: rgba(0, 0, 0, 0.57);
        width: 4.1rem;
        top: 6.78rem;
        padding: 0.3rem 0.2rem;
        left: 2.34rem;
        border: 1px solid #E62474;
        font-size: 0.22rem;
        font-weight: 400;
        color: #E62473;
    }
    .toast {
        position: absolute;
        width: 3.65rem;
        height: 0.81rem;
        left: 2.01rem;
        top: 8.42rem;
        line-height: 0.81rem;
        text-align: center;
        background: #E62474;
        color: #fff;
        font-weight: 400;
        font-size: 0.24rem;
        opacity: 0;
        &.show {
            animation: flash 3s;
        }
    }
    .btn {
        position: absolute;
        width: 4.6rem;
        height: 1.1rem;
        left: 1.45rem;
        bottom: 1.83rem;
        line-height: 1.1rem;
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
    .prompt {
        position: absolute;
        bottom: 1rem;
        left: 50%;
        font-size: 12px;
        font-weight: 400;
        line-height: 0.28rem;
        color: #fff;
        width: 350px;
        margin-left: -175px;
        i {
            float: left;
            width: 0.24rem;
            height: 0.24rem;
            border: 1px solid #fff;
            margin-right: 5px;
            &.check {
                background: url(${check}) no-repeat;
                background-size: 100% 100%;
            }
        }
        a { text-decoration: underline; }
    }

`;

const GlobalStyle = createGlobalStyle`
    .instructionModal {
        .am-modal-transparent { width: 90%; }
    }
`;

export {
    WrappedCmp,
    GlobalStyle
}