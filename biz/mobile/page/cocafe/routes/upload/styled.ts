import styled from 'styled-components';

const WrappedCmp = styled.div`
    height: 100%;
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
        .am-image-picker {
            width: 3.43rem;
            margin-left: 1.28rem;
            margin-top: 1.48rem;
            .am-image-picker-list {
                padding: 0;
                .am-image-picker-upload-btn:before, .am-image-picker-upload-btn:after {
                    background: #fff;
                }
                .am-image-picker-upload-btn {
                    z-index: 100;
                    opacity: 0.7;
                }
            }
        }
        .uploadHack {
            position: absolute;
            top: 7.7rem;
            left: 3rem;
            z-index: 99;
            &.hide {
                display:none;
            }
        }
        .nextBtn {
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