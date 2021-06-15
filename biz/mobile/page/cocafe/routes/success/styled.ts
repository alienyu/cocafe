import styled from 'styled-components';

const WrappedCmp = styled.div`
    min-height: 100vh;
    background: #ffcc00;
    .frame {
        width: 100%;
        min-height: 100vh;
        .successImg {
            width: 4.07rem;
            height: 4.07rem;
            margin-bottom: 0.4rem
        }
        .text {
            width: 6.16rem;
            line-height: 0.78rem;
            font-weight: 400;
            font-size: 0.56rem;
            color: #000;
            text-align: center;
        }
    }
`;

export {
    WrappedCmp
}