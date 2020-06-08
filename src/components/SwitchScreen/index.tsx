/**jsx*/
import React from 'react';
import styled from '@emotion/styled'
import { inject, observer } from 'mobx-react'
import { css, jsx } from '@emotion/core'
import { SwitchScreenStore } from '../../stores'

interface IProps {
    switchScreenStore?: SwitchScreenStore
}

@inject('switchScreenStore')
@observer
export default class SwitchScreen extends React.Component<IProps> {
    handleSwitch = (typeOfScreen: string) => {
        this.props.switchScreenStore!.setScreen(typeOfScreen)
    }
    render() {
        let classSwitch = ''
        if (this.props.switchScreenStore!.openScreen === 'Drops') { classSwitch = 'drops' }
        else { classSwitch = 'currentDrop' }

        return <Root>
            <Wrapper className={classSwitch}>
                <Drops onClick={() => this.handleSwitch('Drops')}>Drops Base</Drops>
                <PushDrop onClick={() => this.handleSwitch('CurrentDrop')}>Current Drop</PushDrop>
            </Wrapper>
        </Root>
    }
}

const Root = styled.div`
position: absolute;
top: 20px;
left: 50px;
display: flex;
.drops{
    >div:first-child{
        background: #1890FF;
        border: none;
        color: white;
    }
}
.currentDrop{
    >div:last-child{
        background: #1890FF;
        border: none;
        color: white;
    }
}
`
const Wrapper = styled.div`
display: flex;
`
const Drops = styled.div`
padding: 7px 15px;
border: 1px solid #807F80;
box-sizing: border-box;
border-radius: 2px;
cursor: pointer;
transition: all 0.3s;
`
const PushDrop = styled.div`
margin-left: 20px;
padding: 7px 15px;
border: 1px solid #807F80;
box-sizing: border-box;
border-radius: 2px;
cursor: pointer;
transition: all 0.3s;
`