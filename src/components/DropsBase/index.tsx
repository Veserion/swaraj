/**jsx*/
import React from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import { inject, observer } from 'mobx-react';
import { SwitchScreenStore } from '../../stores'

interface IProps {
    switchScreenStore?: SwitchScreenStore
}

@inject('switchScreenStore')
@observer
export default class DropsBase extends React.Component<IProps> {
    render() {

        let classHidden = ''
        if (this.props.switchScreenStore!.openScreen !== 'Drops') {
            classHidden = 'hidden'
        }
        return <Root>
            <Wrapper className={classHidden}>
                
            </Wrapper>
        </Root>
    }
}

const Root = styled.div`
width: 100%;
margin-top: 120px;
margin-left: 100px;
.hidden {
    display: none;
}
`

const Wrapper = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
`