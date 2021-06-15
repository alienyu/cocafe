import styled from 'styled-components';
const bg = require("@mobileCocafeImgs/mainBG.png");
const btnOri = require("@mobileCocafeImgs/btnOri.png");
const btnClick = require("@mobileCocafeImgs/btnClick.png");
const logo = require("@mobileCocafeImgs/Logo.png");
const check = require("@mobileCocafeImgs/check.png");

const WrappedCmp = styled.div`
    background: url(${bg}) no-repeat;
    background-size:100% 100%;
    min-height: 100vh;
    .logo {
        position: absolute;
        top: 2.64rem;
        left: 0.68rem;
        width: 1.5rem;
        height: 2.46rem;
        background: url(${logo}) no-repeat;
        background-size: 100% 100%;

    }
    .title1 {
        position: absolute;
        background: rgba(0, 0, 0, 0.57);
        width: 3.66rem;
        top: 9.14rem;
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
        top: 10.24rem;
        padding: 0.3rem;
        left: 2.34rem;
        border: 1px solid #E62474;
        font-size: 0.22rem;
        font-weight: 400;
        color: #E62473;
    }
    .btn {
        position: absolute;
        width: 4.6rem;
        height: 1.1rem;
        left: 1.36rem;
        top: 13rem;
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
        top: 14.5rem;
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