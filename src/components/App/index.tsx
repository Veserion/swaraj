import React from 'react';
import styled from '@emotion/styled'
import {Button, List, Modal} from "antd";
import AddForm from "../AddForm";
import SizedBox from "../SizedBox";

interface IProps {

}

interface IState {
    visible: boolean
}

class App extends React.Component<IProps, IState> {
    state = {visible: false};

    render() {
        return <Root>
            <SizedBox height={64}/>
            <AddForm/>
            <SizedBox height={32}/>
            <List/>
            <SizedBox height={64}/>
        </Root>
    }

}


const Root = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 100vh;
width: 100vw;
`


export default App;
