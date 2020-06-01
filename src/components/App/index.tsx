import React from 'react';
import styled from '@emotion/styled'
import {Button, List, Modal} from "antd";
import AddForm from "../AddForm";

interface IProps {

}

interface IState {
    visible: boolean
}

class App extends React.Component<IProps, IState> {
    state = {visible: false};

    render() {
        return <Root>
            <List/>
            <AddForm/>
        </Root>
    }

}


const Root = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 100vh;
width: 100vw;
`

export default App;
