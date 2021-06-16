import styled from 'styled-components';

const bg = require("@mobileCocafeImgs/bg.png");

const WrappedCmp = styled.div`
    min-height: 100vh;
    background: url(${bg}) no-repeat;
    background-size: 100% 100%;
    .frame {
        width: 100%;
        min-height: 100vh;
        .successImg {
            width: 2rem;
            height: 2rem;
            margin-bottom: 0.48rem;
        }
        .text {
            width: 6.16rem;
            line-height: 0.62rem;
            font-weight: 500;
            font-size: 0.32rem;
            color: #e62474;
            text-align: center;
        }
        .adv {
            width: 105%;
            height: 1.5rem;
            background: #e62474;
            color: #fff;
            font-weight: 400;
            font-size: 0.98rem;
            text-align: center;
            line-height: 1.5rem;
            margin-top: 0.8rem;
            transform: rotate(-10deg);
        }
        .iconFrame {
            width: 100%;
            margin-top: 0.75rem;
            text-align: center;
            .mcLogo {
                display: inline-block;
                width: 1.25rem;
                height: 1.09rem;
                margin-right: 0.65rem;
                margin-bottom: 0.15rem;
            }
            .logo {
                display: inline-block;
                width: 0.87rem;
                height: 1.4rem;
                margin-right: 0.65rem;
            }
        }
    }
`;

export {
    WrappedCmp
}