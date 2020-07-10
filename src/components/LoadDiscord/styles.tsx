import styled from 'styled-components';

export const Container = styled.div`

`;

export const Modal = styled.div`
    position: fixed;
    z-index: 1; 
    
    padding-top: 100px;
    left: 0;
    top: 0;
    
    width: 100%; 
    height: 100%;
    overflow: auto;

    background-color: rgb( 0, 0, 0);
    background-color: rgba( 0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
    position: relative;

    background-color: var(--primary);
    margin: auto;
    padding: 0;
    border: 1px solid var(--primary);
    width: 35%;

    box-shadow: 2px 2px 2px 2px rgba( 0, 0, 0, 0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    
    -webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.4s;
    animation-name: animatetop;
    animation-duration: 0.4s

    @-webkit-keyframes animatetop {
        from {top:-300px; opacity:0} 
        to {top:0; opacity:1}
    }
    
    @keyframes animatetop {
        from {top:-300px; opacity:0}
        to {top:0; opacity:1}
    }
`;

export const ModalBody = styled.div`
    padding: 60px 16px;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    > img {
        width: 200px; 
        height: 200px;
    }
`;

export const Title = styled.div`
    margin-top: 15px;
    font-size: 16px;
    font-style: italic;
    font-weight: bold;
    color: var(--white);
`;

export const Discribe = styled.div`
    display: flex;
    margin-top: 5px;

    font-size: 16px;
    font-weight: bold;
    color: var(--gray);
`;
