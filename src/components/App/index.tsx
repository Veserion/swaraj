import React from 'react';
import styled from '@emotion/styled'
import {Button, List, Modal} from "antd";
import CurrentDrop from "../CurrentDrop";
import DropsBase from "../DropsBase";
import SizedBox from "../SizedBox";
import SwitchScreen from '../SwitchScreen'

interface IProps {

}

interface IState {
    visible: boolean
}

class App extends React.Component<IProps, IState> {
    state = {visible: false};

    render() {
        return <Root>
            <SwitchScreen/>
            <CurrentDrop/>
            <DropsBase/>
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
