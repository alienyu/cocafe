import styled from 'styled-components';

const WrappedCmp = styled.div`
    min-height: 100vh;
    background: #ffcc00;
    .frame {
        width: 6rem;
        min-height: 100vh;
        .stepFrame {
            width: 100%;
            height: 0.22rem;
            margin-top: 2.36rem;
            .block {
                width: 1.9rem;
                height: 100%;
                background: #db0007;
                opacity: 0.2;;
                &.active {
                    opacity: 1;
                }
            }
        }
        .stepText {
            margin-top: 0.33rem;
            font-weight: 600;
            font-size: 0.4rem;
            color: #705000;
        }
        .title {
            margin-top: 0.33rem;
            font-weight: 600;
            font-size: 0.88rem;
            color: #705000;
        }
        .descFrame {
            margin-top: 1rem;
            .input {
                resize: none;
                width: 5.58rem;
                height: 5.96rem;
                line-height: 0.5rem;
                font-size: 0.4rem;
                padding-left: 0.3rem;
                border: 2px solid #ffcc00;
                &:focus {
                    border: 2px solid #f8a301;
                }
            }
        }
        .submitBtn {
            width: 6rem;
            height: 1.28rem;
            line-height: 1.28rem;
            color: #fff;
            background: #db0007;
            font-size: 0.48rem;
            font-weight: 400;
            border-radius: 190px;
            margin-top: 0.7rem;
        }
    }
}`;

export {
    WrappedCmp
}