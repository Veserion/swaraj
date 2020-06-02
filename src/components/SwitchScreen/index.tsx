/**jsx*/
import React from 'react';
import styled from '@emotion/styled'
import { inject, observer } from 'mobx-react'
import { css, jsx } from '@emotion/core'
import { SwitchScreenStore} from '../../stores'

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
        return <Root
            css={this.props.switchScreenStore!.openScreen === 'Drops'
            ? css` 
                >div:nth-child(0){
                    background: #1890FF;
                }`
                : css`
                >div:nth-child(1){
                    background: #1890FF;
                }`
            }>
            <Drops onClick={() => this.handleSwitch('Drops')}>Drops Base</Drops>
            <PushDrop onClick={() => this.handleSwitch('CurrentDrop')}>Push Drop</PushDrop>
        </Root>
    }
}

const Root = styled.div`
position: absolute;
top: 50px;
left: 50px;
display: flex;
transition: all 0.3s;
`

const Drops = styled.div`
padding: 7px 15px;
border: 1px solid #807F80;
border-radius: 2px;
`
const PushDrop = styled.div`
margin-left: 20px;
padding: 7px 15px;
border: 1px solid #807F80;
border-radius: 2px;
`