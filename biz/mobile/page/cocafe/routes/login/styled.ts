import styled from 'styled-components';

const WrappedCmp = styled.div`
    min-height: 100vh;  
    background: #ffcc00;
    .frame {
        width: 6rem;
        height: 100%;
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
        .nameFrame, .idFrame, .mobileFrame, .emailFrame {
            .input {
                width: 5.58rem;
                height: 0.96rem;
                line-height: 0.96rem;
                font-size: 0.4rem;
                padding-left: 0.3rem;
                border: 2px solid #ffcc00;
                &:focus {
                    border: 2px solid #f8a301 !important;
                }
                &.error {
                    border: 3px solid #db0007;
                }
            }
            .errorLine {
                font-size: 0.36rem;
                color: red;
                height: 0.6rem;
                line-height: 0.6rem;
                &.hide {
                    visibility: hidden;
                }
            }
        }
        .nameFrame {margin-top: 1.12rem;} 
        .loginBtn {
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
`;

export {
    WrappedCmp
}