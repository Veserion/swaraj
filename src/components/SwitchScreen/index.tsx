import React from 'react';
import styled from '@emotion/styled'


export default class SwitchScreen extends React.Component {
    handleSwitch = () => {

    }
    render() {
        return <Root>
            <Drops>Drops Base</Drops>
            <PushDrop>Push Drop</PushDrop>
        </Root>
    }
}

const Root = styled.div`
position: absolute;
display: flex;
transition: all 0.3s;
.isOpen{
    background: #1890FF;
}
`

const Drops = styled.div`
padding: 10px 15px;
`
const PushDrop = styled.div`
padding: 10px 15px;
`