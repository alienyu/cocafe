import styled from 'styled-components';
const bg = require("@mobileCocafeImgs/mainBG.png");
const btnOri = require("@mobileCocafeImgs/btnOri.png");
const btnClick = require("@mobileCocafeImgs/btnClick.png");
const logo = require("@mobileCocafeImgs/Logo.png");
const mcLogo = require("@mobileCocafeImgs/mcLogo.png");
const check = require("@mobileCocafeImgs/check.png");

const WrappedCmp = styled.div`
    @keyframes flash {
        0% {opacity: 0;}
        100% {opacity: 1;}
    }
    background: url(${bg}) no-repeat;
    background-size:100% 100%;
    min-height: 100vh;
    .mcLogo {
        position: absolute;
        top: ${window.screen.height/667*115}px;
        left: 0.68rem;
        width: 0.94rem;
        height: ${window.screen.height/667*41}px;
        background: url(${mcLogo}) no-repeat;
        background-size: 100% 100%;

    }
    .logo {
        position: absolute;
        top: ${window.screen.height/667*115}px;
        left: 1.88rem;
        width: 0.88rem;
        height: ${window.screen.height/667*65}px;;
        background: url(${logo}) no-repeat;
        background-size: 100% 100%;

    }
    .title1 {
        position: absolute;
        background: rgba(0, 0, 0, 0.57);
        width: 3.36rem;
        top: ${window.screen.height/667*380}px;
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
        top: ${window.screen.height/667*427}px;
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
        top: ${window.screen.height/667*460}px;
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
        left: 1.36rem;
        top: ${window.screen.height/667*525}px;
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
        top: ${window.screen.height/667*601}px;
        left: 1.16rem;
        font-size: 0.20rem;
        font-weight: 400;
        line-height: 0.28rem;
        color: #fff;
        i {
            float: left;
            display: inline-block;
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

export {
    WrappedCmp
}