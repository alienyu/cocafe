import styled from 'styled-components';

const WrappedCmp = styled.div`
    background: #ffcc00;
    min-height: 100vh;
    .frame {
        min-height: 100vh;
        .text {
            width: 4.25rem;
            font-weight: 400;
            font-size: 0.32rem;
            color: #705000;
            line-height: 0.44rem;
            opacity: 0;
            &.effect {
                -webkit-animation: show 1s ease;
                -moz-animation: show 1s ease;
                animation:show 1s ease;
                opacity: 1;
            }
        }
        @-webkit-keyframes show {
            0% {opacity: 0;}
            100% {opacity: 1;}
        }
           
        @keyframes show {
            0% {opacity: 0;}
            100% {opacity: 1;}
        }
    }
`;

export {
    WrappedCmp
}