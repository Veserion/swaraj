/**jsx*/
import React from 'react';
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import FormBody from "./FormBody";
import TableCurrentDrop from "./TableCurrentDrop"
import { inject, observer } from 'mobx-react';
import { SwitchScreenStore } from '../../stores'
import { FormInstance } from 'antd/lib/form';

interface IProps {
    switchScreenStore?: SwitchScreenStore
}

@inject('switchScreenStore')
@observer
export default class CurrentDrop extends React.Component<IProps> {
    formRef = React.createRef<FormInstance>();

    
    handleSubmit = (values: any) => {
        console.log(values);
    }

    render() {
        let classHidden = ''
        if (this.props.switchScreenStore!.openScreen !== 'CurrentDrop') {
            classHidden = 'hidden'
        }

        return <Root>
            <Wrapper className={classHidden}>
                {console.log(this.props.switchScreenStore!.openScreen)}
                <TableCurrentDrop formRef={this.formRef} css={css`flex: 1;`} />
                <FormBody formRef={this.formRef} css={css`flex: 1;`} />
            </Wrapper>
        </Root>
    }

}


const Root = styled.div`
width: 100%;
margin-top: 80px;
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
