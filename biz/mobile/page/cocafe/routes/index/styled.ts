import styled from 'styled-components';

const WrappedCmp = styled.div`
    background: #DB0007;
    min-height: 100vh;
    padding: 0 0.6rem;
    .logo {
        margin-top: 2.16rem;
        width: 3.4rem;
        height: 2.96rem;
        img {
            width: 100%;
        }
    }
    .title {
        margin-top: 1.14rem;
        font-size: 0.79rem;
        color: #fff;
        font-weight: 600;
    }
    .title2 {
        margin-top: 0.36rem;
        font-size:.0.35rem;
        color: #fff;
        font-weight: 600;
    }
    .startBtn {
        background: #ffcc00;
        margin-top: 3.62rem;
        width: 100%;
        height: 1.34rem;
        line-height: 1.34rem;
        color: #000;
        font-size: 0.5rem;
        font-weight: 400;
        border-radius:200px;
    }
    .prompt {
        margin-top: 0.4rem;
        font-size: 0.25rem;
        font-weight: 400;
        color: #fff;

    }
`;

export {
    WrappedCmp
}